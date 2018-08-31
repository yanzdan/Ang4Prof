//let myData = new Object();
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyClass = (function () {
    function MyClass(name, weather) {
        this.name = name;
        this._weather = weather;
    }
    Object.defineProperty(MyClass.prototype, "weather", {
        get: function () {
            return this._weather;
        },
        set: function (value) {
            this._weather = value;
        },
        enumerable: true,
        configurable: true
    });
    MyClass.prototype.printMessages = function (newname) {
        if (newname === void 0) { newname = ""; }
        console.log("Hello3 " + ((newname == "") ? this.name : newname) + ".");
        console.log("Today is " + this.weather + ".");
    };
    return MyClass;
}());
var MySubClass = (function (_super) {
    __extends(MySubClass, _super);
    function MySubClass(name, weather, city) {
        _super.call(this, name, weather);
        this.city = city;
    }
    MySubClass.prototype.printMessages = function () {
        _super.prototype.printMessages.call(this);
        console.log("You are in " + this.city);
    };
    return MySubClass;
}(MyClass));
var AdamData = new MyClass("Adam", "sunny");
var EvaData = new MyClass("Eva", "rain");
console.log("--------- call A");
AdamData.printMessages();
console.log("--------- call E");
EvaData.printMessages();
var JohnData = new MySubClass("John", "cloudly", "London");
console.log("--------- call J");
JohnData.printMessages();
