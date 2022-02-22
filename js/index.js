/*
 cú pháp truy xuất đén các thẻ trên giao diện 
 1 thẻ trên giao diện trong js được gọi là 1 DOM: doccumen Object Model
*/
//thay đổi nội dung thẻ input#username
var tagUserName = document.getElementById('username')

tagUserName.value = 'cybersoft123';

//Thay đổi nội dung thẻ passworf
var tagPassword = document.getElementById('password')
tagPassword.value = '1213124325';
// thay đổi hình của thẻ img/hinhAnh
var tagImg = document.getElementById('hinhAnh');
tagImg.src = './img/hinh2.jpg';

//thay đổi nội dung văn bản của thẻ div#noiDung
//dựa vào thuộc tính innerHTML
// var tagdiv = document.getElementById('noiDung');
// tagdiv.innerHTML = 'ahihi';


/* khai báo hàm trong js
    cú pháp khai báo hàm
    function [ten_ham]() {
        liệt kê các đoạn code cần thực hiện
    }
    lệnh gọi hàm
    [ten_ham](); 
*/
function thayDoiNoiDung() {
    var tagdiv = document.getElementById('noiDung');
    tagdiv.innerHTML = 'ahihi';
}
// gọi hàm 
// thayDoiNoiDung()

function handleLogin() {
    //b1: lấy thông tin người dùng nhập vào
    var tagUserName = document.getElementById('username');
    var tagPassword = document.getElementById('password');
    //b2: hiển thị trên console.log
    console.log('username:', tagUserName.value);
    console.log('password:', tagPassword.value);
    //b3: gắn tên hàm vào nút login tại event onclick
}


// bài tập 2
/* Xây dựng hàm xử lý chức năng khi người dùng bấm vào nút button#btnNhanEmDi thì nội dung thẻ p#txt sẽ thay đổi thành 'đã thay đổi rồi nhé' */

function nhanDeThayDoi() {
    var tagtxt = document.getElementById('txt')
    tagtxt.innerHTML = 'Đã Thay Đổi Rồi Nhe'
}
/* thay đổi style (css) của thẻ HTML */
// Đôi với các thuộc tính css có 2 từ trở lên background-color -> style.backgroundColor


// Bài Tập 4:
// xây dựng tính năng cho 2 nút button bật đèn và tắt đèn
function batDen() {
    var tagImg = document.getElementById('imgDen');
    tagImg.src = './img/pic_bulbon.gif';
}
function tatDen() {
    var tagImg = document.getElementById('imgDen');
    tagImg.src = './img/pic_bulboff.gif';
}