
function listProduct() {
    let data = JSON.parse(localStorage.getItem("listSanPhamLocalStorage"));
    let s = "";
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        s += `<tr>
        <th scope="row">${i + 1}</th>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td>${element.type}</td>
        <td>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#Edit" onclick="getID(${i})">
                Edit
            </button>
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#Delete" onclick="getID(${i})">
                Delete
            </button>
        </td>
    </tr>
        `
    }
    document.getElementById("list-product").innerHTML = s;
}
listProduct()
function getID(i) {
    localStorage.setItem("ID", i);
}
function addProduct() {
    let listSanPham = JSON.parse(localStorage.getItem("listSanPhamLocalStorage"));

    listSanPham.push({
        img: document.getElementById("addImg").value,
        name: document.getElementById("addName").value,
        price: document.getElementById("addCost").value,
        type: document.getElementById("addType").value,
    })
    localStorage.setItem("listSanPhamLocalStorage", JSON.stringify(listSanPham))
    alert('Add success');
    $('#Add_new').modal('hide');
    listProduct();
}
function editProduct() {
    listSanPham = JSON.parse(localStorage.getItem("listSanPhamLocalStorage"));
    let objTam = {
        img: document.getElementById("editImg").value,
        name: document.getElementById("editName").value,
        price: document.getElementById("editCost").value,
        type: document.getElementById("editType").value,
    }
    let id = localStorage.getItem("ID");
    for (let i = 0; i < listSanPham.length; i++) {
        if (id == i) {
            listSanPham[i] = objTam;
        }
    }
    localStorage.setItem("listSanPhamLocalStorage", JSON.stringify(listSanPham))
    alert('Update success, please go back and reload the web to see the update');
    $('#Edit').modal('hide');
    listProduct();
}
function delProduct() {
    let listSanPham = JSON.parse(localStorage.getItem("listSanPhamLocalStorage"));
    let id = localStorage.getItem("ID");
    listSanPham.splice(id, 1);
    localStorage.setItem("listSanPhamLocalStorage", JSON.stringify(listSanPham))
    alert('Del success');
    $('#Delete').modal('hide');
    listProduct();
}
//--------------------------validate--------------------------------------
let validateImage = false;
let validateName = false;
let validateCost = false;

let validateImage1 = false;
let validateName1 = false;
let validateCost1 = false;

function checkAdd (){
    if(validateImage == true &&
        validateName == true &&
        validateCost == true ){
            addProduct()
        }
    else{
        alert('cần điền đầy đủ thông tin')
    }
} 
function checkEdit (){
    if(validateImage1 == true &&
        validateName1 == true &&
        validateCost1 == true ){
            editProduct()
        }
    else{
        alert('cần điền đầy đủ thông tin')
    }
} 
function validateAll1() {
    if (document.getElementById('addImg').value == '') {
        document.getElementById('image-error').innerHTML = '<i style="color: red">Bạn chưa điền </i>';
    }
    else {
        document.getElementById('image-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validateImage = true;
    }
}
function validateAll2() {
    if (document.getElementById('addName').value == '') {
        document.getElementById('name-error').innerHTML = '<i style="color: red">Bạn chưa điền </i>';
    }
    else {
        document.getElementById('name-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validateName = true;
    }
}
function validateAll3() {
    if (document.getElementById('addCost').value == '') {
        document.getElementById('cost-error').innerHTML = '<i style="color: red">Bạn chưa điền </i>';
    }
    else if(document.getElementById('addCost').value < 1000){
        document.getElementById('cost-error').innerHTML = '<i style="color: red">Giá không nhỏ hơn 1000</i>';
    }
    else {
        document.getElementById('cost-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validateCost = true;
    }
}
function validateAll5() {
    if (document.getElementById('editImg').value == '') {
        document.getElementById('image1-error').innerHTML = '<i style="color: red">Bạn chưa điền </i>';
    }
    else {
        document.getElementById('image1-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validateImage1 = true;
    }
}
function validateAll6() {
    if (document.getElementById('editName').value == '') {
        document.getElementById('name1-error').innerHTML = '<i style="color: red">Bạn chưa điền </i>';
    }
    else {
        document.getElementById('name1-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validateName1 = true;
    }
}
function validateAll7() {
    if (document.getElementById('editCost').value == '') {
        document.getElementById('cost1-error').innerHTML = '<i style="color: red">Bạn chưa điền </i>';
    }
    else if(document.getElementById('editCost').value < 1000){
        document.getElementById('cost1-error').innerHTML = '<i style="color: red">Giá không nhỏ hơn 1000</i>';
    }
    else {
        document.getElementById('cost1-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validateCost1 = true;
    }
}
