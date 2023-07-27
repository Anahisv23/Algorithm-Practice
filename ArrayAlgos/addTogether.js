const addTogether = (...args) => {
  if (typeof args[0] === "number" && typeof args[1] === "number") {
    return args[0] + args[1];
  } else if (typeof args[0] === "number" && args.length === 1) {
    return function funcToReturn(num) {
      if (typeof num === "number") {
        return args[0] + num;
      }
    };
  } else if (typeof args[0] == "number" && args[1] == undefined) {
    return undefined;
  }
};

// time complexity o(1)
// space complexity o(1)

// let call = addTogether(5)
// console.log(call(7)) invokes inner func
