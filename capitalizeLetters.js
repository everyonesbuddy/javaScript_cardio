//return a string with the first letter of each word capitalized.

//my Solution 
// function capitalizeLetters(str){
//     //split out string into new array and assign to new variable
//     let arr = str.split('');
//     //access the first index of the array and capitalize it
//     let i = arr[0].toUpperCase();
//     //shift the smaller letter from the array and unshift the new back to it
//     arr.shift()
//     arr.unshift(i);
//     //join the array and change it back to a string
//     arr.join('');
    
// }



//Brad solution 1
// function capitalizedLetters(str){
//     const strArr = str.toLowerCase().split(' ');

//     for(let i = 0; i < strArr.length; i++){
//         strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//     }
//     return strArr.join(' ')
// }


//Brad solution 2
// function capitalizedLetters(str){
//     return str
//         .toLowerCase()
//         .split(' ')
//         .map(function(word) {
//             return word[0].toUpperCase() + word.substr(1);
//         })
//         .join(' ');
// }

//Brad solution 3(regex)
function capitalizedLetters(str){
    return str.replace(/\b[a-z]/gi, function(char) {
        return char.toUpperCase();
    });
}


console.log(capitalizedLetters('I love bacon'));