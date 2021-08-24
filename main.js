console.log("Hello world")



// const letters = {
//   "2": ["a", "b", "c"],
//   "3": ["d", "e", "f"],
//   "4": ["g", "h", "i"],
//   "5": ["j", "k", "l"],
//   "6": ["m", "n", "o"],
//   "7": ["p", "q", "r", "s"],
//   "8": ["t", "u", "v"],
//   "9": ["w", "x", "y", "z"]
// };

// function letterCombinations(digits){

//   const a = letters[digits[0]];
//   const b = letters[digits[1]];
//   const c = letters[digits[2]];
//   const result =[];
//   console.log(a);
//   for (let i = 0; i< a.length; i++){
//     for(let j=0; j< b.length; j++){
//       for(let k = 0; k< b.length; k++){
//         result.push(a[i]+b[j]+c[k]);
//       }
//     }
    
//   }
//   return result;
// }
// console.log(letterCombinations("232"))


// const a = {
//   "2": ["a", "b", "c"],
//   "3": ["d", "e", "f"],
//   "4": ["g", "h", "i"],
//   "5": ["j", "k", "l"],
//   "6": ["m", "n", "o"],
//   "7": ["p", "q", "r", "s"],
//   "8": ["t", "u", "v"],
//   "9": ["w", "x", "y", "z"]
// };

// let result = [];

// let letterCombinations = function(digits) {
//   if (digits.length == 0) {
//     return []
//   };

//   let arr = [];
//   dfs(digits.split(''), 0, arr)

//   return result
// };

// function dfs(digits, index, arr) {
//   const currentLetters = a[digits[index]]
  
//   for (let i = 0; i < currentLetters.length; i++) {
//     arr.push(currentLetters[i])

//     if (index == digits.length - 1) {
//       result.push(arr.join(''))
//       arr.pop()
//     } else {
//       dfs(digits, index + 1, arr)
//       arr.pop()
//     }
//   }
// }

// console.log(letterCombinations("121"));


const letters = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
};

function letterCombinations(digits){

  const result =[''];
  
  for(let i=0 ; i< digits.length; i++){
    const digit = digits[i];
    console.log(digit)
    result.push(null)

    let j;
    console.log((j= result.shift()) !== null)
    while((j= result.shift()) !== null){
      
      for (let letter of letters[digit]){
        result.push(j+letter);
      }
    }
  }
  return result;
  
}
console.log(letterCombinations("23"))
