let validate1 = false;
let validate2 = false;
let validate3 = false;
let validate4 = false;

function validateCodeOfCoupon() {
    if (document.getElementById('codeOfCoupon').value == '') {
        document.getElementById('codeOfCoupon-error').innerHTML = '<i style="color: red">Bạn chưa điền </i>';
    }
    else {
        document.getElementById('codeOfCoupon-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validate1 = true;
    }
}
function validateValueOfCoupon() {
    if (document.getElementById('valueOfCoupon').value == '') {
        document.getElementById('valueOfCoupon-error').innerHTML = '<i style="color: red">Bạn chưa điền </i>';
    }
    else if(document.getElementById('valueOfCoupon').value < 1000){
        document.getElementById('valueOfCoupon-error').innerHTML = '<i style="color: red">Giá không nhỏ hơn 1000</i>';
    }
    else {
        document.getElementById('valueOfCoupon-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validate2 = true;
    }
}

// function validateTimeBOfCoupon() {
//     if (document.getElementById('timeBOfCoupon').value == '') {
//         document.getElementById('timeBOfCoupon-error').innerHTML = '<i style="color: red">Bạn chưa điền </i>';
//     }
//     else {
//         document.getElementById('timeBOfCoupon-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
//         validate3 = true;
//     }
// }
function validateTimeEOfCoupon() {
    if (document.getElementById('timeEOfCoupon').value == '') {
        document.getElementById('timeEOfCoupon-error').innerHTML = '<i style="color: red">Bạn chưa điền </i>';
    }
    else {
        document.getElementById('timeEOfCoupon-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validate4 = true;
    }
}
function checkCoupon(){
    if (validate1 == true && validate2 == true  && validate4 == true ) {
        addCoupon()
    }
    else{
        alert("chưa điền đủ thông tin")
    }
}
//------------------------------display coupon------------------------------------
function displayListCoupon() {
    let listCoupon = JSON.parse(localStorage.getItem("listCouponLocalStorage"));
    let s = "";
    for (let i = 0; i < listCoupon.length; i++) {
        const element = listCoupon[i];
        s += `<tr>
        <th scope="row">${i + 1}</th>
        <td>${element.noiDungCoupon}</td>
        <td>${element.giaTri}</td>
        <td>${element.timeB}</td>
        <td>${element.timeE}</td>
        <td>
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#Delete" onclick="getID(${i})">
                Delete
            </button>
        </td>
    </tr>
        `
    }
    document.getElementById("list-coupon").innerHTML = s;
}
displayListCoupon();
function getID(i) {
    localStorage.setItem("ID", i);
}
// ---------------------------THEM XOA---------------------------------------
function addCoupon() {
    let listCoupon = JSON.parse(localStorage.getItem("listCouponLocalStorage"));
    listCoupon.push({
        noiDungCoupon: document.getElementById("codeOfCoupon").value,
        giaTri: document.getElementById("valueOfCoupon").value,
        timeB: document.getElementById("timeBOfCoupon").value,
        timeE: document.getElementById("timeEOfCoupon").value,
    })
    localStorage.setItem("listCouponLocalStorage", JSON.stringify(listCoupon))
    alert('Add success');
    $('#Add_new').modal('hide');
    displayListCoupon();
}
function delCoupon() {
    let listCoupon = JSON.parse(localStorage.getItem("listCouponLocalStorage"));
    let id = localStorage.getItem("ID");
    listCoupon.splice(id, 1);
    localStorage.setItem("listCouponLocalStorage", JSON.stringify(listCoupon))
    alert('Del success');
    $('#Delete').modal('hide');
    displayListCoupon();
}


// let Nam;
// let Thang;
// let Ngay;
// function loadYear()
// {
// Nam = document.getElementById("ddlNam");
// Nam.length = 0;
// var iNam = 0;
// var today = new Date();
// for(iNam=1950; iNam<=today.getFullYear(); iNam++)
// {
// var optNam = document.createElement("option");
// optNam.text = iNam;
// optNam.value = iNam;
// Nam.options.add(optNam);
// console.log(optNam);

// }
// }
// function loadMonth()
// {
// Thang = document.getElementById("ddlThang");
// Thang.length = 0;
// var iThang=0;
// for(iThang=1; iThang<=12; iThang++)
// {
// var optThang = document.createElement("option");
// optThang.text= iThang;
// optThang.value = iThang;
// Thang.options.add(optThang);
// }
// }
// function loadDay()
// {
// Ngay = document.getElementById("ddlNgay");
// Ngay.length = 0;
// var value = parseInt(Thang.value);
// var SoNgay = 0;
// switch (value)
// {
// case 2:
// var gtNam = Nam.selectedIndex;
// if((gtNam%4==0) && ((gtNam%100!=0)||(gtNam%400==0)))
// {
// SoNgay = 28;
// }
// else
// {
// SoNgay = 29;
// }
// break;
// case 1: case 3: case 5: case 7: case 8: case 10: case 12:
// SoNgay = 31;
// break;
// case 4: case 6: case 9: case 11:
// SoNgay = 30;
// break;
// }
// var iNgay=0;
// for(iNgay=1; iNgay<=SoNgay; iNgay++)
// {
// var optNgay = document.createElement("option");
// optNgay.text = iNgay;
// optNgay.value = iNgay;
// Ngay.options.add(optNgay);
// }
// }


