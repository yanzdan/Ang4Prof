//MyFunc();
var _this = this;
var MyFunc = function (name, weather) {
    console.log("Hello, " + name + " !");
    console.log("It is " + weather + " today");
};
var Func4Array = function (value, index, xarr) { console.log("IFunc " + index + ": " + value + " of (" + this + ")"); };
function SecondFunc(value, index, xarr) { console.log("SecondFunc " + index + ": " + value + " of (" + this + ")"); }
;
MyFunc("Tom", "rain");
var StringVal = "1.2.3";
var NumVal = Number(StringVal);
console.log("Number(\"" + StringVal + "\") = " + Number(StringVal));
console.log("parseFloat(\"" + StringVal + "\") = " + parseFloat(StringVal));
console.log("parseInt(\"" + StringVal + "\") = " + parseInt(StringVal));
var myArray = [100, "Adam", true];
for (var i = 0; i < myArray.length; i++) {
    console.log("myArray(" + i + ")=<<" + myArray[i] + ">>");
}
console.log("--- Calling la ---");
myArray.forEach(function (value, index, xarr) { return console.log("Index " + index + ": " + value + " of (" + _this + ")"); });
console.log("--- Calling SecondFunc ---");
myArray.forEach(SecondFunc);
var products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
console.log("--- Calling Methods  Chain ---");
var totalValue = products
    .filter(function (item) { return item.stock > 0; })
    .reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0);
console.log("Total value: $" + totalValue.toFixed(2));
