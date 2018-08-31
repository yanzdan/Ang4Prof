"use strict";
var TempConverter = (function () {
    function TempConverter() {
    }
    TempConverter.convertFtoC = function (temp) {
        //console.log(`convertFtoC - got "${temp}" of type ${typeof  temp}`);
        //console.log("toPrecision=" + (temp as number).toPrecision) ;
        //console.log("indexOf=" + (temp as string).indexOf) ;
        var lTemp = typeof (temp) === "number" ? temp : parseFloat(temp);
        return ((parseFloat(lTemp.toPrecision(2)) - 32) / 1.8).toFixed(1);
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;
