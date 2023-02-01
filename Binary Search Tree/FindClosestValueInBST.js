const findClosestValueInBst = (tree, target) => {
    let closestNum = Infinity
    let node = tree
  
    while(node) {
      if(Math.abs(node.value - target) < Math.abs(closestNum - target)){
        closestNum = node.value
      } else {
        closestNum = closestNum 
      }
      if(target > node.value){
        node = node.right
      } else {
        node = node.left
      }
    }
    return closestNum
  }
  
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }