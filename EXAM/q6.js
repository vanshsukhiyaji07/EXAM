function reverseString(str) {
    let stack = [];
  
    for (let char of str) {
      stack.push(char);
    }
  
    let reverser = "";
    while (stack.length > 0) {
      reverser += stack.pop();
    }
    return reverser;
  }
  console.log(reverseString("sdsjdcjscbsbckqb"));