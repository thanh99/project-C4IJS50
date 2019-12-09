
// var hangDat = JSON.parse(localStorage.getItem('HangDatLocalStorage'));
// var count = hangDat.length;
// if (count == 0) {
//     let chuaCoSanPham = `<div class="shopping-card-frame text-center" style="height: 25rem; margin-top: 3rem; padding-top: 2rem;">
//     <span style="color: #ffc107"><i class="fas fa-shopping-basket fa-10x"></i></span>
//     <h5 style="color: tomato;">không có sản phẩm nào trong giỏ hàng của bạn.</h5>
//     <a href="thuc_don.html"><button type='button' class="btn btn-warning">Tiếp tục mua sắm</button>
//     </div>`
//     document.getElementById("displaySanPhamDaChonMua").innerHTML = chuaCoSanPham;
// }
// tạo list hang dat khong trung, kem voi so luong, luu trong listHangDat
// else {
//     var listHangDat = [];
//     var listSanPham = JSON.parse(localStorage.getItem("listSanPhamLocalStorage"));
//     hangDat = JSON.parse(localStorage.getItem("HangDatLocalStorage"));
//     var tenSanPhamDaDat = hangDat.slice();
//     for (let i = 0; i < tenSanPhamDaDat.length; i++) {
//         const tenSanPham = tenSanPhamDaDat[i];
//         var soLuongCuaSanPham = 1;
//         for (let j = i + 1; j < tenSanPhamDaDat.length; j++) {
//             if (tenSanPham == tenSanPhamDaDat[j]) {
//                 tenSanPhamDaDat.splice(j, 1);
//                 soLuongCuaSanPham ++;
//             }
//         }
//         listHangDat.push({ "tenSanPhamDaDat": tenSanPham, "soLuongCuaSanPham": soLuongCuaSanPham })
//     }
//     localStorage.setItem("listHangDatLocalStorage", JSON.stringify(listHangDat));
//     listHangDat = JSON.parse(localStorage.getItem("listHangDatLocalStorage"));
//     listSanPham = JSON.parse(localStorage.getItem("listSanPhamLocalStorage"));
//     var hoaDon = [];
//     for (let i = 0; i < listHangDat.length; i++) {
//         var elementOfListHangDat = listHangDat[i];
//         for (let j = 0; j < listSanPham.length; j++) {
//             var elementOfListSanPham = listSanPham[j];
//             if (elementOfListHangDat.tenSanPhamDaDat == elementOfListSanPham.name) {
//                 hoaDon.push(elementOfListSanPham);
//                 hoaDon[i].soLuongCuaSanPham = listHangDat[i].soLuongCuaSanPham;
//             }
//         }
//     }
// }
// localStorage.setItem("hoaDonLocalStorage", JSON.stringify(hoaDon));


//-----------------------------check--------------------------------
function checkDisplay() {
    let hoaDon = JSON.parse(localStorage.getItem('hoaDonLocalStorage'));
    if (hoaDon.length === 0) {
        //     let chuaCoSanPham = `<div class="shopping-card-frame text-center" style="height: 25rem; margin-top: 3rem; padding-top: 2rem;">
        // <span style="color: #ffc107"><i class="fas fa-shopping-basket fa-10x"></i></span>
        // <h5 style="color: tomato;">không có sản phẩm nào trong giỏ hàng của bạn.</h5>
        // <a href="thuc_don.html"><button type='button' class="btn btn-warning">Tiếp tục mua sắm</button>
        // </div>`
        document.getElementById("displaySanPhamDaChonMua").innerHTML = `<div class="shopping-card-frame text-center" style="height: 25rem; margin-top: 3rem; padding-top: 2rem;">
    <span style="color: #ffc107"><i class="fas fa-shopping-basket fa-10x"></i></span>
    <h5 style="color: tomato;">không có sản phẩm nào trong giỏ hàng của bạn.</h5>
    <a href="thuc_don.html"><button type='button' class="btn btn-warning">Tiếp tục mua sắm</button>
    </div>`
    }
}
//------------------------ hien san pham trong muc gio hang--------------------------
function displayGioHang() {
    hoaDon = JSON.parse(localStorage.getItem("hoaDonLocalStorage"));
    var soLuong = 0;
    for (let i = 0; i < hoaDon.length; i++) {
        soLuong += hoaDon[i].soLuongCuaSanPham;
    }
    document.getElementById("amount").innerHTML = soLuong;
    var sanPham = `<h1>giỏ hàng (${soLuong} sản phẩm)</h1>
    <div class="row">
        <div class="col-md-9" style="padding-bottom: 300px">`;
    for (let i = 0; i < hoaDon.length; i++) {
        const element = hoaDon[i];
        sanPham += `<div class="shopping-card-frame">
        <div class="shopping-card-content">
            <div class="row">
                <div class="col-sm-3 text-center">
                    <img src="${element.img}" alt="${element.name}" class="img-responsive img-fuild"
                        style="height: 100px" />
                </div>
                <div class="col-sm-3 text-center">
                    <p>${element.name}</p>
                    <p>${element.type}</p>
                    <a style="padding-top: 2rem;"><button type="button" data-itemId="${element.name}" onclick="del(event)">xóa</button></a>
                </div>
                <div class="col-sm-3 text-center">
                    <p>${numberWithCommas(element.price)}đ</p>
                </div>
                <div class="col-sm-3 text-center">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-warning" data-itemId="${element.name}" onclick = "sub(event)">-</button>
                        <button type="button" class="btn btn-outline-warning" id="soluong_${element.name}">${element.soLuongCuaSanPham}</button>
                        <button type="button" class="btn btn-outline-warning" data-itemId="${element.name}" onclick = "add(event)">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    var thanhTien = 0;
    for (let i = 0; i < hoaDon.length; i++) {
        const element = hoaDon[i];
        thanhTien += element.price * element.soLuongCuaSanPham;
    }
    sanPham += `</div>
    <div class="col-md-3">
        <div class="shopping-card-frame">
            <div style="border-bottom: #ddd solid 1px; padding: 10px">
                <div class="row">
                    <div class="col-sm-6">
                        <p><strong>Tạm tính:</strong></p>
                    </div>
                    <div class="col-sm-6" style="color: red ; ">
    <p style="font-size: 1.5rem">${numberWithCommas(thanhTien)}đ</p>
                    </div>
                </div>
            </div>
            <div class="text-center" style="padding: 10px">
                <a href="tien_hanh_thanh_toan.html">
                    <button" class="btn btn-warning">Tiến hành thanh toán</button>
                </a>
            </div>
        </div>
        <div class="shopping-card-frame " style="margin-top: 1rem; padding: 20px">
        <div class="form-row">
        <div class="form-group">
        <label><strong>Mã giảm giá / coupon</strong></label>
        <input type="text" class="form-control" id="coupon"
            placeholder="mã giảm giá">
        <span class="error" id="coupon-error"></span>
    </div>
    <div class="text-center">
    <button type="button" class="btn btn-warning" onclick="checkCoupon()">Áp dụng</button>
    </div>
    </div>
    </div>
    </div>
    </div>
</div>`

    document.getElementById("displaySanPhamDaChonMua").innerHTML = sanPham;
    checkDisplay()
}
displayGioHang();
// --------------------giam 1 san pham-------------------------
function sub(e) {
    let hoaDon = JSON.parse(localStorage.getItem("hoaDonLocalStorage"));
    let bienTam = e.target.dataset.itemid;
    for (let i = 0; i < hoaDon.length; i++) {
        if (hoaDon[i].name == bienTam) {
            if (hoaDon[i].soLuongCuaSanPham <= 1) {
                alert("số lương không nhỏ hơn 1!");
            }
            else {
                hoaDon[i].soLuongCuaSanPham--;
                console.log(hoaDon[i].soLuongCuaSanPham);
                document.getElementById(`soluong_${hoaDon[i].name}`).innerHTML = hoaDon[i].soLuongCuaSanPham;
            }
        }
    }
    localStorage.setItem("hoaDonLocalStorage", JSON.stringify(hoaDon));
    displayGioHang();
}
//--------------------tang 1 san pham-------------------------
function add(e) {
    var hoaDon = JSON.parse(localStorage.getItem("hoaDonLocalStorage"));
    var bienTam = e.target.dataset.itemid;
    for (let i = 0; i < hoaDon.length; i++) {
        if (hoaDon[i].name == bienTam) {
            hoaDon[i].soLuongCuaSanPham++;
            document.getElementById(`soluong_${bienTam}`).innerHTML = hoaDon[i].soLuongCuaSanPham
        }
    }
    localStorage.setItem("hoaDonLocalStorage", JSON.stringify(hoaDon));
    displayGioHang();
}
//--------------------giam 1 san pham-------------------------
function del(e) {
    var hoaDon = JSON.parse(localStorage.getItem("hoaDonLocalStorage"));
    var bienTam = e.target.dataset.itemid;
    for (let i = 0; i < hoaDon.length; i++) {
        if (hoaDon[i].name == bienTam) {
            hoaDon.splice(i, 1)
        }
    }
    localStorage.setItem("hoaDonLocalStorage", JSON.stringify(hoaDon));
    displayGioHang();
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
//-------------------check coupon----------------------
function checkCoupon() {
    let listCoupon = JSON.parse(localStorage.getItem('listCouponLocalStorage'));
    let getCoupon = document.getElementById("coupon").value;
    


    
    for (let i = 0; i < listCoupon.length; i++) {
        if(getCoupon == listCoupon[i].noiDungCoupon ){
            document.getElementById("coupon-error").innerHTML = `<i class="fa fa-check" style="color:green;">Áp dụng thành công</i>`;
            localStorage.setItem('coCoupon',JSON.stringify(listCoupon[i]))
            break;
        }
        else{
            document.getElementById("coupon-error").innerHTML = '<i class="fas fa-times" style="color:red;"> mã không chính xác</i>';
        }
    }
}


