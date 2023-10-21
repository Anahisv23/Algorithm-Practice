const createCounter = n => {
    return () => {
        let current = n;
           n += 1;
           return current;
    };
};

// the inner function, returned by createCounter, can "remember" the value of n because it forms a closure 
// over the outer function's scope. This means changes to n will be reflected in subsequent calls to the inner function.
// n is global to the counter function
// n is local to the createCounter function