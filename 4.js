/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let old_init = init

    function increment(){
        return init = init + 1
    }

    function decrement(){
        return init = init - 1
    }

    function reset(){
        return init = old_init
    }

    return {increment, decrement, reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */