export class TempConverter {
  static convertFtoC(temp:number | string) {
    //console.log(`convertFtoC - got "${temp}" of type ${typeof  temp}`);

    //console.log("toPrecision=" + (temp as number).toPrecision) ;
    //console.log("indexOf=" + (temp as string).indexOf) ;

      let lTemp:number =  typeof(temp) === "number" ? temp : parseFloat(temp);
    return ((parseFloat(lTemp.toPrecision(2)) - 32) / 1.8).toFixed(1);
  }
}
