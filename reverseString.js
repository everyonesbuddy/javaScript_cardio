//the function should reverse a string
//my solution


// function reverseString(str){
//     // declare a new variable to hold reversed string
//     let newStr = [],
//     //loop through the original string 
//     for(let i = 0; i < str.length; i++){
//     //push the each character from the last to ne new variable
//         newStr.push(str[str.length - 1]);
//     }
    
//    // return new variable
// }


// Brad solution 1
// function reverseString(str){
//     //split the string into an array
//     const strArr = str.split('');
//     //use the reverse method on an array which reverses the array
//     strArr.reverse();
//    return strArr.join('');
// }

//Brad solution 2
// function reverseString(str){
//     //loop through string 
//     let revString = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         revString = revString + str[i];
//     }
//     return revString;
// }

//Brad solution 3
// function reverseString(str){
//     let revString = '';
//     for(let i = 0; i <= str.length -1; i++){
//         revString = str[i] + revString ;
//     }
//     return revString;
// }

//Brad solution 4
// function reverseString(str){
//     let revString = "";
//     for(let char of str) {
//         revString = char + revString
//     }
//     return revString;
// }

//Brad Solution 5
// function reverseString(str){
//     let revString = '';
//     str.split('').forEach(function(char){
//         revString = char + revString;
//     })
//     return revString;
// }

//Brad solution 6
function reverseString(str){
    return str.split('').reduce(function(revString, char){
        return char + revString
    }, '');
}

reverseString('seyi');
 