document.getElementById('btnTaoButton').onclick = function(){
    //tạo ra 1 thẻ = js
    /* document.createElement('ten_the');
        khi tạo ra 1 thẻ chứa vào 1 biến thì biến đó giống hệt biến mà chúng ta thực hiện DOM */
    var buttonCybersoft = document.createElement('button');
    //tạo class cho button
    buttonCybersoft.className = 'btn btn-danger';
    //tạo nội dung cho button
    buttonCybersoft.innerHTML = 'button cybersoft'
    /**đưa thẻ được tạo lên giao diện html
        + chọn 1 thẻ trên giao diện 
        + appendChild(the_tao) => Đưa lên giao diện
     */
    // DOM đến 1 thẻ có sẵn trên giao diện
    document.getElementById('content').appendChild(buttonCybersoft);
}

document.getElementById('btnDangBai').onclick = function(){
    //b1: lấy thông tin từ người dùng 
    var noiDungBaiViet = document.getElementById('noiDungBaiViet').value;
    //b2 tạo ra thẻ p
    var tagPNoiDung = document.createElement('p');
    tagPNoiDung.className = 'font-weight-bold mt-1'
    tagPNoiDung.innerHTML = noiDungBaiViet;

    //b3 hiển thị thông tinn cho người dùng
    document.getElementById('hienThiBaiViet').appendChild(tagPNoiDung)
}