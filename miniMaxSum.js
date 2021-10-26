function miniMaxSum(arr) {
    let sumSum = arr.reduce((sum, e) => sum + e, 0)
    let min = sumSum - (Math.max(...arr));
    let max = sumSum - (Math.min(...arr));
    console.log(min, max);
}

miniMaxSum([1, 2, 10, 3, 5, 4]);