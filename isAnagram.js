// return true if anagram and return false if not

// my solution
// function anagram(str1, str2){
//     if(str1.length !== str2.length){
//         return false;
//     }

//     //declare a 2 variables to hold the frequency of each character in both strings
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};

//     //loop to string one and update the frequency counter with the number of strings in it
//     for (let i = 0; i < str1.length; i++){
//         if(frequencyCounter1[str1[i]]){
//             frequencyCounter1[str1[i]] += 1
//         } else {
//             frequencyCounter1[str1[i]] = 1 
//         }
//     }
//     console.log(frequencyCounter1)
//     //loop to string two and update the frequency counter with the number of strings in it
//     for (let j = 0; j < str2.length; j++){
//         if(frequencyCounter2[str2[j]]){
//             frequencyCounter2[str2[j]] += 1
//         } else {
//             frequencyCounter2[str2[j]] = 1 
//         }
//     }
//     console.log(frequencyCounter2)
//     //compare both frequency counters 
//     if(frequencyCounter1 === frequencyCounter2){
//         return true
//     }

// }

//brad solution 1
function anagram(str1, str2){
    return formatStr(str1) === formatStr(str2)

}

// Helper function
function formatStr(str){
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

console.log(anagram('elbow', 'below'));