//change every letter of the string to the one that follows it and capitalize the vowels

//Brad solution 1
function letterChanges(str){
    let newStr = str.toLowerCase().replace(/[a-z]/gi, function (char){
        if(char === 'z' || char === 'Z'){
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    })
     newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
         return vowel.toUpperCase();
     })

    return newStr;
}


console.log(letterChanges('Hello There'));