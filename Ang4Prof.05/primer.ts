//MyFunc();



let MyFunc = function( name, weather){
  console.log(`Hello, ${name} !`);
  console.log("It is " + weather + " today");

};

let Func4Array = function (value, index, xarr) { console.log("IFunc " + index + ": " + value + " of (" +this+")")};


function SecondFunc (value, index, xarr) { console.log("SecondFunc " + index + ": " + value + " of (" +this+")")};

MyFunc("Tom", "rain");


let StringVal = "1.2.3";
let NumVal = Number(StringVal);
console.log(`Number("${StringVal}") = ${Number(StringVal)}`);
console.log(`parseFloat("${StringVal}") = ${parseFloat(StringVal)}`);
console.log(`parseInt("${StringVal}") = ${parseInt(StringVal)}`);


let myArray = [100, "Adam", true];
for (let i = 0; i < myArray.length; i++) {
  console.log("myArray(" + i + ")=<<" + myArray[i] + ">>");
}
console.log("---");
//myArray.forEach((value, index, xarr) => console.log("Index " + index + ": " + value + " of (" +this+")"));
myArray.forEach(SecondFunc);


