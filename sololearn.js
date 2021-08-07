//1
var x = 1;
for (; x < 6; x += 2) {
  x = x * x;
}
console.log("1:" + x);
//2
var time = "1997 EDT Friday";
var endtime = "2017 EDT Tuesday";
var converted = parseInt(time) + parseInt(endtime);
console.log("2:" + converted);
// 3
console.log("3:");
console.log(-"1" + 1 + "2");
// 4
function fib(num) {
  console.log("41:" + num);
  if (num <= 2) return 1;
  console.log("42:" + num);
  return fib(num - 1) + fib(num - 2);
}
console.log(fib(7)); // 8 // не понял как это работает
// 5 David Sebasian Keshvi Illiakis
var a = "1";
var b = "2*2";
console.log("5:" + eval(a + b));
// 6
var w = "hello";
b = "world\0";
console.log(b);
console.log(w.substring(3) + b.length);
