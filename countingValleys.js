function countingValleys(steps, path) {
    let sum = 0;
    let count = 0;
    for(let i = 0; i < steps; i++){
        if(path[i] == 'U') {
            if(++sum == 0) {
                count++;
            }
        }
        else {
            sum--;
        }
    }
    return count;
}

countingValleys(8, 'UDDDUDUU');