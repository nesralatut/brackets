module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = new Set();
  const closeBrackets = new Map();

  for (const [open, close] of bracketsConfig) {
    openBrackets.add(open);
    closeBrackets.set(close, open);
  }

  for (const char of str) {
    if (openBrackets.has(char)) {
      if (
        closeBrackets.get(char) === char &&
        stack[stack.length - 1] === char
      ) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (closeBrackets.has(char)) {
      if (stack.length === 0 || stack.pop() !== closeBrackets.get(char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
