//Return a sum of of all parameters entered regardless of the amount of numbers

//Brad solution 1
// function addAll(){
//     var args = Array.prototype.slice.call(arguments);
//     var total = 0;
//     for(i = 0; i  < args.length; i++){
//         total += args[i];
//     }
//     return total
// }

//Brad solution 2
function addAll(...numbers){
    
    return  numbers.reduce((acc, cur) => acc + cur)

    
}

console.log(addAll(2,5,6,7));