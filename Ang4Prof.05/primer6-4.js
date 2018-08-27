//let myData = new Object();
var MyClass = (function () {
    function MyClass(name, weather) {
        this.name = name;
        this.weather = weather;
    }
    MyClass.prototype.printMessages = function (newname) {
        if (newname === void 0) { newname = ""; }
        console.log("Hello3 " + ((newname == "") ? this.name : newname) + ".");
        console.log("Today is " + this.weather + ".");
    };
    return MyClass;
}());
var AdamData = new MyClass("Adam", "sunny");
var EvaData = new MyClass("Eva", "rain");
console.log("--------- call A");
AdamData.printMessages();
console.log("--------- call E");
EvaData.printMessages();
var OldStyleClassVar = function OldStyleonstructor(aName, aWeather) {
    this.lsName = aName;
    this.lsWeather = aWeather;
};
OldStyleClassVar.prototype.printOldMsg = function () {
    console.log("Hello4 " + this.lsName);
    console.log("Today is " + this.lsWeather + ".");
};
var XData = new OldStyleClassVar("NNNN", "WWWW");
console.log("--------- call X");
XData.printOldMsg();
