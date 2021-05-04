//Remove from the array whatever is in the following arguments. Return the leftover values in an array.


//my solution
// function seekAndDestroy(arr, num1){
//     //loop through array 
//     for (let i = 0; i < arr.length; i++){
//          //if index of array equal to any of the two numbers splice it out
//         if(arr[i] === num1){
//             arr.splice(arr[i], 1)
//         }
//     }
//     return arr
// }  

//Brads solution 1
// function seekAndDestroy(arr){
//     const args = Array.from(arguments);

//     function filterArr(arr){
//         //Return tue if Not an array 
//         return args.indexOf(arr) === -1;
//     }

//     return arr.filter(filterArr);
// } 

//Brad solution 2
function seekAndDestroy(arr, ...rest){
    return arr.filter(val => !rest.includes(val));
} 

console.log(seekAndDestroy([2,3,4,5,6,7,8], 2));