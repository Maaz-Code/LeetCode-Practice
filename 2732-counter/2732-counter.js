/**
 * @param {number} n
 * @return {Function} counter
 */

// Closures
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    };
    const counter = createCounter();
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */