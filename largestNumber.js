const largestNumber = (number) => {
    // console.log(Math.max(...number));
    let largest = 0;
    for(let i = 0; i < number.length; i++){
        if(number[i] > largest) {
            largest = number[i];
        }
    }
    console.log(largest)
}
largestNumber([10, 12, 124, 1, 2, 4, 1000]);