//Return the character that is most common in a string

//my Solution 
// function maxCharacter(str){
//     //initialize an object
//     let newObj = {};
//     //loop through the string
//     for(let i = 0; i < str.length; i++){
//         //check if string is in object if it is add 1 if its not ad it to object
//         if(newObj[str[i]]){
//             newObj[str[i]] += 1;
//         }else{
//             newObj[str[i]] = 1;
//         }
//     }
//     //return object
//     return newObj
// }

function maxCharacter(str){
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';


    str.split('').forEach(function(char) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });
    for(let char in charMap) {
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}
console.log(maxCharacter('Javascript'));
