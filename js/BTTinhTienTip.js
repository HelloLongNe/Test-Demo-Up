
//alert('noi dung'): Hiển thị ra hộp thoại của browsr
function tinhTienTip(){
    //alert(123);
    //b1:lấy thông tin người dùng nhập từ giao diện
    var tongTien = document.getElementById('tongTien').value; 
    var phanTramTip = document.getElementById('phanTramTip').value;
    var soNguoiTip = document.getElementById('soNguoi').value;
    //b2: lập công thức tính tiền tip
    var tipTrenNguoi = tongTien * phanTramTip / 100 / soNguoiTip;
    //b3 in ra trên giao diện tại vị trí h1#tienTipMoiNguoi
    // var tagH1 = document.getElementById('tienTipMoiNguoi');
    //.toFixed(n): làm tròn sau dấu , n chữ số
    document.getElementById('tienTipMoiNguoi').innerHTML = tipTrenNguoi.toFixed(2) + ' $'
}