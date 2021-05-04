//Take in an array and return an array of the sums of even and odd numbers

// my solution
// function evenOddSum(arr){
//     //initialize two variables to hold the sum of even and odd;
//     let evenSums = 0;
//     let oddSums = 0;
//     let newArr = [];
//     //loop through array
//     for(let i = 0; i < arr.length; i++){
//         //check if number in arr is even if it is addd to even sum else if it not add to odd sums
//         if(arr[i] % 2 === 0){
//             evenSums += arr[i];
//         } else {
//             oddSums += arr[i];
//         }
//     }
//     newArr.push(evenSums);
//     newArr.push(oddSums);
//     return newArr
// }

function evenOddSum(arr){
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)))
    
    return [evenSum, oddSum]
}
console.log(evenOddSum([50,60,60,45,71]))