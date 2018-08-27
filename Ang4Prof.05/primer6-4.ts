//let myData = new Object();

class MyClass {
  constructor (name, weather) {
    this.name = name;
    this.weather = weather;
  }

  printMessages (newname:string = "") {
    console.log("Hello3 " + ((newname=="")?this.name:newname) + ".");
    console.log("Today is " + this.weather + ".");
  }
}


let AdamData = new MyClass("Adam", "sunny");
let EvaData  = new MyClass("Eva", "rain");

console.log("--------- call A");
AdamData.printMessages();
console.log("--------- call E");
EvaData.printMessages();



var OldStyleClassVar = function OldStyleonstructor(aName, aWeather) {
    this.lsName    = aName;
    this.lsWeather = aWeather;
  }

OldStyleClassVar.prototype.printOldMsg = function () {
    console.log("Hello4 " + this.lsName );
    console.log("Today is " + this.lsWeather + ".");
  };


var XData = new OldStyleClassVar("NNNN", "WWWW");
console.log("--------- call X");
XData.printOldMsg();
