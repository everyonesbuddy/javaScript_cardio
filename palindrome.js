// check whether the word or phrase is the same forwards and backword

//my Solution 
// function isPalindrome(str){
//     //create a new array to hold the string after its been split
//     let arr = str.split('');
//     //reverse the array
//     arr.reverse();
//     // join it back together and store in a string
//     let newStr = arr.join('');
//     //check if new string and old string are the same, if so return true
//     if(str === newStr){
//         return true
//     } else{
//         return false
//     }
// }

//Brad solution 1
// function isPalindrome(str){
//     const revString = str.split('').reverse().join('');

//     return revString === str;
// }




console.log(isPalindrome('racecar'));

