//split array into chunked arrays of a specific length -- basically sliding window pattern


//Brad solution 1
// function chunkArray(arr, len){
//     //initialize a chunked arr
//     const chunkedArr = [];
//     //set index
//     let i = 0;
//     //loop while index is less than the array length
//     while(i < arr.length) {
//         //slice out from the index to the index + the chunk length and push on to chunked array
//         chunkedArr.push(arr.slice(i, i + len));
//         // increment by the chunk length
//         i += len;
//     }
//     return chunkedArr;
// }


//Brad solution 2
function chunkArray(arr, len){
    //Init chunked arr
    const chunkedArr = []
    //loop through arr
    arr.forEach(function(val){
        //get last element
        const last = chunkedArr[chunkedArr.length - 1];

        //Check if last and if last length is equal to the chunk len
        if(!last || last.length === len){
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    })
    return chunkedArr
}

console.log(chunkArray([2,3,4,5,5,6,6,77], 2));