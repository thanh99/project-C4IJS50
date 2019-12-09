
let validateName = false;
let validatePhoneNumber = false;
let validateAddress = false;

function validate1() {
    if (document.getElementById('ho_va_ten').value == '') {
        document.getElementById('name-error').innerHTML = '<i style="color: red">Bạn chưa điền tên</i>';
    }
    else {
        document.getElementById('name-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validateName = true;
    }
}

function validate2() {
    var regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var numberPhone = $('#so_dien_thoai').val();
    if (document.getElementById('so_dien_thoai').value == '') {
        document.getElementById('phonenumber-error').innerHTML = '<i style="color: red">Bạn chưa điền số điện thoại</i>';
    }
    else if (regex.test(numberPhone) == false) {
        document.getElementById('phonenumber-error').innerHTML = '<i style="color: red">Số điện thoại không hợp lệ</i>';
    }
    else {
        document.getElementById('phonenumber-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành</i>';
        validatePhoneNumber = true;
    }
}

function validate3() {
    if (document.getElementById('dia_chi_giao_hang').value == '') {
        document.getElementById('address-error').innerHTML = '<br><i class=" style="color: red">Bạn chưa điền địa chỉ</i>';
    }
    else {
        document.getElementById('address-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành</i>';
        validateAddress = true;
    }
}

// let content = document.getElementById('content');


function displayInfor() {
    let contentText = '';
    let name = document.getElementById('ho_va_ten').value;
    let number = document.getElementById('so_dien_thoai').value;
    let address = document.getElementById('dia_chi_giao_hang').value;
    // var note = document.getElementById('ghi_chu').value;
    // var time = new Date();
    if (validateName == true && validatePhoneNumber == true && validateAddress == true) {
        contentText += `
        <h5>${name}</h5>
        <p>${number}</p>
        <p>${address}</p>
        `
    }
    else {
        contentText += `<h5> Không đủ thông tin </h5>
                       <p>Vui hoàn thành thông tin </p>`
    }
    document.getElementById('content').innerHTML = contentText;

}
//-------------------------------hien thi icon------------------------------------------
function displayIcon() {
    let listHoaDon = JSON.parse(localStorage.getItem("hoaDonLocalStorage"));
    let count = 0
    for (let i = 0; i < listHoaDon.length; i++) {
        count += listHoaDon[i].soLuongCuaSanPham;
    }
    document.getElementById("amount").innerHTML = count;
}
displayIcon()
//-------------------------------hien thi hoa don-------------------------------------------
function displayHoaDon() {
    let listHoaDon = JSON.parse(localStorage.getItem("hoaDonLocalStorage"));
    let coupon = JSON.parse(localStorage.getItem('coCoupon'))
    let s = ``;
    let tamTinh = 0;
    for (let i = 0; i < listHoaDon.length; i++) {
        const element = listHoaDon[i];
        s += `<div class="row" style="padding-top: 1rem; border-bottom: #ddd solid 1px;">
                                    <div class="col-sm-8">
                                        <p><strong>${element.soLuongCuaSanPham}x</strong>${element.name}</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <p style="text-align:right;">${numberWithCommas(element.price * element.soLuongCuaSanPham)}đ</p>
                                    </div>
                                </div>`
        tamTinh += element.price * element.soLuongCuaSanPham;
    }

    s += `
    <div style="border-bottom: #ddd solid 1px">
    <div class="row" style="padding-top: 1rem;">
    <div class="col-sm-8">
        <p>Tạm tính:</p>
    </div>
    <div class="col-sm-4">
        <p  style="text-align: right;">${numberWithCommas(tamTinh)}đ</p>
    </div>
</div>
<div class="row">
    <div class="col-sm-8">
        <p>Phí ship:</p>
    </div>
    <div class="col-sm-4">
        <p  style="text-align: right;">${numberWithCommas(29000)}đ</p>
    </div>
</div>`
    if (coupon != undefined) {
        s += `<div class="row">
    <div class="col-sm-8">
        <p>Coupon:</p>
    </div>
    <div class="col-sm-4">
        <p  style="text-align: right;">${numberWithCommas(coupon.giaTri)}đ</p>
    </div>
</div>
</div>
<div class="row" style="padding-top: 1rem;">
    <div class="col-sm-6">
        <h5>Thành tiền:</h5>
    </div>
    <div class="col-sm-6">
        <p style="color:red; font-size: 1.5rem; text-align: right;">${numberWithCommas(tamTinh + 29000 - coupon.giaTri)}đ</p>
    </div>
</div>`
    }
    else {
        s += `</div>
<div class="row" style="padding-top: 1rem;">
    <div class="col-sm-6">
        <h5>Thành tiền:</h5>
    </div>
    <div class="col-sm-6">
        <p style="color:red; font-size: 1.5rem; text-align: right;">${numberWithCommas(tamTinh + 29000)}đ</p>
    </div>
</div>`
    }
    document.getElementById("hoaDon").innerHTML = s;
}
displayHoaDon();

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
//---------------------------------------dat mua-------------------------------------
function datMua() {
    alert('xác nhận đặt mua')
    let layTimeDatHang = new Date()
    let layGioDatHang = layTimeDatHang.getHours();
    let layPhutDatHang = layTimeDatHang.getMinutes();
    let listCustomer = JSON.parse(localStorage.getItem("listCustomerLocalStorage"));
    listCustomer.push({
        nameCustomer: document.getElementById('ho_va_ten').value,
        PhoneNumberCustomer: document.getElementById('so_dien_thoai').value,
        addressCustomer: document.getElementById('dia_chi_giao_hang').value,
        noteCustomer: document.getElementById('ghi_chu').value,
        timeCustomer: `${layGioDatHang}. ${layPhutDatHang}`,
        xacnhan : 0
    })
    localStorage.setItem("listCustomerLocalStorage", JSON.stringify(listCustomer));
}