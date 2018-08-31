//let myData = new Object();

class MyClass {
  constructor (name, weather) {
    this.name = name;
    this._weather = weather;
  }

  set weather (value) {
    this._weather = value;
  }

  get weather () {
    return this._weather ;
  }

  printMessages (newname:string = "") {
    console.log("Hello3 " + ((newname=="")?this.name:newname) + ".");
    console.log("Today is " + this.weather + ".");
  }
}

class MySubClass extends MyClass{
  constructor(name, weather, city) {
    super(name, weather);
    this.city = city;
  }

  printMessages(){
    super.printMessages();
    console.log(`You are in ${this.city}`);
  }
}

let AdamData = new MyClass("Adam", "sunny");
let EvaData  = new MyClass("Eva", "rain");

console.log("--------- call A");
AdamData.printMessages();
console.log("--------- call E");
EvaData.printMessages();


let JohnData = new MySubClass("John", "cloudly", "London");
console.log("--------- call J");
JohnData.printMessages ();


