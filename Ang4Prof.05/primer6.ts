import {Name, WeatherLocation} from "./modules/NameAndWeather";
import { TempConverter } from "./modules/TempConverter";

let name= new Name("Adam", "Freeman");
let loc = new WeatherLocation("raining", "London");

console.clear();

console.log("Getter==" + name.nameMessage);
console.log("Method==" + loc.fnWeatherMessage());

let cities: { [index: string]: [string, string] } = {};
cities["London"] = ["raining", TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", TempConverter.convertFtoC("23")];
for (let key in cities) {
  console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}

//let citearray = new Array();
// let citearray: [[string, string]] = [];
let citearray: Array<[string, string]> = [];

citearray.push(["raining", TempConverter.convertFtoC("38")]);
citearray.push(["sunny", TempConverter.convertFtoC("52")]);
citearray.push(["snowing", TempConverter.convertFtoC("23")]);


for (let key in citearray) {
  console.log(`${key}: ${citearray[key][0]}, ${citearray[key][1]}`);
}
