
//ham hien thi san pham
function displaySanPham(array, groupName, id) {
    var group = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.type === groupName) {
            group.push(element);
        }
    }
    var s = "";
    let itemCount = Math.ceil(group.length / 3);
    for (let i = 0; i < itemCount; i++) {
        s += `<div class="row">`
        for (let j = i * 3; j < i * 3 + 3; j++)
            if (j < group.length) {
                const element1 = group[j];
                s += `<div class="col-sm-4" style="padding: 10px">
                    <div class="card" style="rem">
                        <img class="card-img-top" id="img_${j}" src="${element1.img}" alt="${element1.name}" style="width:100%; height:15rem">
                        <div class="card-body">
                            <h4  class="card-title" id="name_${j}">${element1.name}</h4>
                            <p class="cost" price_${j}">${numberWithCommas(element1.price)}đ</p>
                            <button type="button" class="btn btn-primary"  data-itemId="${element1.name}" id="${j}" onclick= "amountHandler(event)">mua ngay</button>
                        </div>
                    </div>
                </div>`
            }
        s += "</div>"
    }
    document.getElementById(id).innerHTML = s;
}
let listSanPham = JSON.parse(localStorage.getItem('listSanPhamLocalStorage'));
//hien thi danh sach san pham ra trang thuc don
displaySanPham(listSanPham, 'espresso', "espresso");
displaySanPham(listSanPham, 'cà phê phin', "filter_coffee");
displaySanPham(listSanPham, 'trà', "tra_macchiato");
displaySanPham(listSanPham, 'coldbrew', "coldbrew");
displaySanPham(listSanPham, 'iceDrink', "ice_drink");
displaySanPham(listSanPham, 'coffeeBean', "coffee_bean");

// function amountHandler(e) {
//     hangDat = JSON.parse(localStorage.getItem('HangDatLocalStorage'));
//     let nameHangDat = e.target.dataset.itemid;
//     hangDat.push(nameHangDat);
//     let count = hangDat.length;
//     document.getElementById('amount').innerHTML = count;
//     localStorage.setItem("HangDatLocalStorage", JSON.stringify(hangDat));
//     alert("Thêm sản phẩm thành công")
// }
// function listHangDat() {
//     let listHangDat = [];
//     let hangDat = JSON.parse(localStorage.getItem("HangDatLocalStorage"));
//     let tenSanPhamDaDat = hangDat.slice();
//     for (let i = 0; i < tenSanPhamDaDat.length; i++) {
//         const tenSanPham = tenSanPhamDaDat[i];
//         var soLuongCuaSanPham = 1;
//         for (let j = i + 1; j < tenSanPhamDaDat.length; j++) {
//             if (tenSanPham == tenSanPhamDaDat[j]) {
//                 tenSanPhamDaDat.splice(j, 1);
//                 soLuongCuaSanPham++;
//             }
//         }
//         listHangDat.push({ "tenSanPhamDaDat": tenSanPham, "soLuongCuaSanPham": soLuongCuaSanPham })
//     }
// }

//lam gia
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function amountHandler(e) {
    let hoaDon = JSON.parse(localStorage.getItem('hoaDonLocalStorage'));
    let listSanPham = JSON.parse(localStorage.getItem('listSanPhamLocalStorage'));
    let nameHangDat = e.target.dataset.itemid;
    console.log(nameHangDat);
    
    for (let i = 0; i < listSanPham.length; i++) {
        if(nameHangDat == listSanPham[i].name){
            let count = 0;
            for (let j = 0; j < hoaDon.length; j++) {
                if(nameHangDat == hoaDon[j].name){
                    hoaDon[j].soLuongCuaSanPham ++;
                }
                else(
                    count++ 
                )               
            }
            if(count == hoaDon.length){
                hoaDon.push({
                    img: listSanPham[i].img,
                    issale: listSanPham[i].issale,
                    name: listSanPham[i].name,
                    price: listSanPham[i].price,
                    type: listSanPham[i].type,
                    soLuongCuaSanPham: 1
                });
            }
        }
    }
    localStorage.setItem('hoaDonLocalStorage',JSON.stringify(hoaDon));
    displaySoLuong();
    alert('success')
}
function displaySoLuong () {
    let hoaDon = JSON.parse(localStorage.getItem('hoaDonLocalStorage'));
    let soluong = 0
    for (let i = 0; i < hoaDon.length; i++) {
        soluong += hoaDon[i].soLuongCuaSanPham;
    }
    document.getElementById('amount').innerHTML = soluong;
}
displaySoLuong()    