'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.insert = function(value){
   if(value < this.value){
      
      if(this.left){
         this.left.insert(value);
      }
      else{
         this.left = new BinarySearchTree(value);
      }
   }
   else{
      if(this.right){
         this.right.insert(value);
      }
      else{
         this.right = new BinarySearchTree(value);
         return value;
      }
   }
}

BinarySearchTree.prototype.contains = function(value){
   if(value === this.value){
      return true;
   }
   if(value < this.value){
      if(this.left === null){
         return false;
      }
      else{
         return this.left.contains(value);
      }
   }
   else{
      if(this.right === null){
         return false;
      }
      else{
         return this.right.contains(value);
      }
   }

}
BinarySearchTree.prototype.size = function(){
   let cont = 1;

   if(this.left){
      cont = cont + this.left.size(); 
   }
   else if (this.right){
      cont = cont + this.right.size();
   }
   return cont;
   
}
BinarySearchTree.prototype.depthFirstForEach = function(cb,orden){
   if(orden === "in-order" || orden === undefined){
      if(this.left && this.left.depthFirstForEach(cb,orden));
      cb(this.value);
      if(this.right && this.right.depthFirstForEach(cb,orden));
   }
   if(orden === "pre-order"){ 
      cb(this.value);
      if(this.left && this.left.depthFirstForEach(cb,orden));
      if(this.right && this.right.depthFirstForEach(cb,orden));

   } 
   if(orden === "post-order"){
      if(this.left && this.left.depthFirstForEach(cb,orden));
      if(this.right && this.right.depthFirstForEach(cb,orden));
      cb(this.value);
   }     
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
   if(this.left !== null){
      array.push(this.left);
   }
   if(this.right !== null){
      array.push(this.right);
   }
   cb(this.value)
   
   if(array.length > 0){
      array.shift().breadthFirstForEach(cb,array)
   }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
