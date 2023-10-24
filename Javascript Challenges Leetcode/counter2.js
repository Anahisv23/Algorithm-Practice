var createCounter = function(init) {
    let initial = init // save orginal copy of init

    function increment(){
        init += 1
        return init
    } 

    function decrement(){
      init -= 1
      return init
    }

    function reset() {
        init = initial // sets init back to initial 
        return init
    }

    return {
        increment, 
        decrement, 
        reset
    }
};