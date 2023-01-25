'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length < 2){
    return array
  }

  let left = [];
  let right = [];
  let igual = [];

  let pivot = array[Math.floor(Math.random()*array.length)];
  console.log(pivot)

  for(let i = 0 ; i < array.length ; i++){
    if(array[i] < pivot){
      left.push(array[i]);
    }
    else if(array[i] > pivot){
      right.push(array[i]);
    }
    else{
      igual.push(array[i]);
    }
  }
  return quickSort(left).concat(igual).concat(quickSort(right));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if(array.length < 2){
    return array
  } 

  let mitad = Math.floor(array.length/2);
  let right = array.slice(mitad);
  let left = array.slice(0,mitad);

  let rightArray = mergeSort(right);
  let leftArray = mergeSort(left); 

  let resultado = [];

  while(left.length && right.length){
    
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
