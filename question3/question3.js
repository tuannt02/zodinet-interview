function s(a, b) {
  var x = 0;
  for (var i = a; i <= b; i++) {
    x = x + i;
  }
  return x;
}

function calc(a, b, c) {
  const res = s(a, b);
  if (c == true) {
    res = res * 2;
  }
  return res;
}

/* 
- Đọc đoạn code có thể thấy rằng logic của 2 function này chưa phức tạp và có thể dùng nạp chồng phương
thức (Overloading) đưa về một function duy nhất.Name convention của function chưa hiểu quả, phải đọc lại 
code một lần nữa mới có thể hiểu được đoạn code. Vậy nên function có thể đặt lại với tên mới là 
sumTwoNumber. 
- Trong function thứ 2 có thêm đối số thứ ba là c và chỉ nhân đôi kết quả khi c = true. Dùng câu lệnh
điều kiện để xác định đối số thứ 3 có được truyền hay không?
- Ngoài ra, ta có thể mô tả đối số truyền vào của mỗi vào và kết quả đầu ra của function để trở nên dễ
bảo trì hơn.
- Đoạn code trên có thể được viết lại như phía bên dưới
*/

/*
  a:Number
  b:Number
  c:Boolean
  
  return `Number`
*/
function sumTwoNumber(a, b, c) {
  var x = 0;
  for (var i = a; i <= b; i++) {
    x = x + i;
  }

  if (c) {
    return x;
  }
  return x * 2;
}
