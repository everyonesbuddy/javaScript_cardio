//Return the longest word in a sentence.


// My solution
// function longestWord(sen){
//     //set a longestWord variable to empty string
//     let longWord = ''
//     //split the sentence by space into a new array
//     let arr = sen.split(' ');
//     //loop through the array
//     for(let i = 0; i < arr.length; i ++){
//         //compare each index to longest word variable, if index is longer replace longest word
//         if(arr[i].length > longWord){
//             longWord = arr[i]
//         }
//     }
//     console.log(longWord);
// }

//Brad solution 1
function longestWord(sen){
    // create filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)

    //Sort by Length
    const sorted = wordArr.sort(function(a, b) {
        return b.length - a.length
    })
    
    // if multiple word, put into array
    const longestWordArr = sorted.filter(function(word){
        return word.length === sorted[0].length;
    })
   //check if more than one array val
    if(longestWordArr.length === 1){
        //Return the word
        return longestWordArr[0]
    } else{
        return longestWordArr;
    }
}

longestWord('My name is Oluwaseyi and i am very happy');