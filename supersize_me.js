/*
Write a function that rearranges an integer into its largest possible value.

superSize(123456) //654321
superSize(105) // 510
superSize(12) // 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.
*/

const superSize = (num) => {
  const numStr = num.toString();
  let numArr = [];
  let newStr = '';

  for(let i = 0; i < numStr.length; i++) {
    numArr.push(numStr[i]);
  }
  numArr = numArr.sort(function(a, b){return b-a});
  
  for(let j = 0; j < numArr.length; j++) {
    newStr += numArr[j];
  }

  return (parseInt(newStr));
}