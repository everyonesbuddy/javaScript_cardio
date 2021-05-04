// take an array of arrays and flatten it into a single array


//Brad solution 1
// function flattenArray(arrays){

//     return arrays.reduce(function(a, b){
//         return a.concat(b)
//     });
// }

//Brad solution 2
// function flattenArray(arrays){

//     return [].concat.apply([], arrays);
// }

//Brad solution 3
function flattenArray(arrays){
    return [].concat(...arrays);
}

console.log(flattenArray([[1,2], [3,4], [5,6], [7]]));