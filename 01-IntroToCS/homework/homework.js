'use strict';

function BinarioADecimal(num) {
   let num1 = num +"";
   let numArray = num1.split("");

   let nuevoNumero = numArray.reverse();

   let suma = 0 ;

   for(let i = 0 ; i < nuevoNumero.length ; i++){
    suma = Math.pow(2,i)*parseInt(nuevoNumero[i])+suma
   }

   return suma;   
}

function DecimalABinario(num) {
    if(num === 1){
      return 1;
  }
  
 let numeros = [];

 let residuo = ""

 while(num > 1){
  residuo = (num % 2 +"")+residuo;
  num = Math.floor(num/2); 
  
  numeros.push(num);
  
}
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
