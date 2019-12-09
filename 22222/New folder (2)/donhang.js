function displayBill() {
    let listCustomer = JSON.parse(localStorage.getItem("listCustomerLocalStorage"));
    let listBill = JSON.parse(localStorage.getItem("hoaDonLocalStorage"));
    let coupon = JSON.parse(localStorage.getItem("coCoupon"));
    let customer = "";
    let bill = "";
    const element = listCustomer[0];
    customer += `<tr>
    <th scope="row">Họ và Tên</th>
    <td>${element.nameCustomer}</td>
</tr>
<tr>
    <th scope="row">Số điện thoại</th>
    <td>${element.phoneNumberCustomer}</td>
</tr>
<tr>
    <th scope="row">Địa chỉ</th>
    <td>${element.addressCustomer}</td>
</tr>
<tr>
    <th scope="row">Ghi chú</th>
    <td>${element.noteCustomer}</td>
</tr>`
    document.getElementById("customer").innerHTML = customer;
    for (let i = 0; i < listBill.length; i++) {
        const element = listBill[i];
        bill += `<tr>
        <td>${i+1}</td>
        <td>${element.name}</td>
        <td>${element.soLuongCuaSanPham}</td>
        <td>${numberWithCommas(element.price)}</td>
        <td>${numberWithCommas(element.price * element.soLuongCuaSanPham)}</td>
        </tr>
        `
    }
    let total = 0
    for (let i = 0; i < listBill.length; i++) {
        total += (listBill[i].price * listBill[i].soLuongCuaSanPham - coupon.giaTri) 
    }
    bill += `
    <tr>
    <td>khuyễn mại:</td>
    <td></td>
    <td></td>
    <td></td>
    <td>${numberWithCommas(coupon.giaTri)}</td>
    </tr><tr>
    <td>Thành tiền:</td>
    <td></td>
    <td></td>
    <td></td>
    <td>${numberWithCommas(total)}</td>
    </tr>`
    document.getElementById("bill").innerHTML = bill;
}
displayBill()

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
