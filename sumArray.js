function arraySum(numbers) {
    return(numbers.reduce((sum, e) => sum + e, 0));
}
//Sampe test case
let a = arraySum([2, 3, 1, 5, 10, 11]);
console.log('Result:', a);