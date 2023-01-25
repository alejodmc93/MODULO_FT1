'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if(n === 1|| n === 0){
      return 1;
  }
  else if(n < 0){
      return 0;
  }
  return n * nFactorial(n-1);

}

// EJERCICIO 2
function nFibonacci(n) {
   if(n < 2){
      return n;
  }
  return nFibonacci(n-1) + nFibonacci(n-2);
}

// EJERCICIO 3
function Queue() {
   this.array = [];
    }
  
  Queue.prototype.enqueue = function(num){
        this.array.push(num);
    }
  Queue.prototype.dequeue = function(){
        return this.array.shift();
  
    }
   Queue.prototype.size = function(){
        return this.array.length;
    }

    let newQueue = new Queue();

    newQueue.enqueue(5);
    console.log(newQueue);
    newQueue.enqueue(6);
    console.log(newQueue);
    newQueue.enqueue(7);
    console.log(newQueue);
    newQueue.enqueue(9);
    console.log(newQueue);
    newQueue.dequeue();
    console.log(newQueue);
    newQueue.dequeue();
    console.log(newQueue);
    newQueue.size();
    console.log(newQueue)


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
