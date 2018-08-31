"use strict";
var NameAndWeather_1 = require("./modules/NameAndWeather");
var TempConverter_1 = require("./modules/TempConverter");
var name = new NameAndWeather_1.Name("Adam", "Freeman");
var loc = new NameAndWeather_1.WeatherLocation("raining", "London");
console.clear();
console.log("Getter==" + name.nameMessage);
console.log("Method==" + loc.fnWeatherMessage());
var cities = {};
cities["London"] = ["raining", TempConverter_1.TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", TempConverter_1.TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", TempConverter_1.TempConverter.convertFtoC("23")];
for (var key in cities) {
    console.log(key + ": " + cities[key][0] + ", " + cities[key][1]);
}
//let citearray = new Array();
// let citearray: [[string, string]] = [];
var citearray = [];
citearray.push(["raining", TempConverter_1.TempConverter.convertFtoC("38")]);
citearray.push(["sunny", TempConverter_1.TempConverter.convertFtoC("52")]);
citearray.push(["snowing", TempConverter_1.TempConverter.convertFtoC("23")]);
for (var key in citearray) {
    console.log(key + ": " + citearray[key][0] + ", " + citearray[key][1]);
}
