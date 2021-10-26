function birthdayCakeCandles(candles) {
    let maxCandles = (Math.max(...candles));
    let maxCount = 0;
    for(let i = 0; i < candles.length; i++) {
        if(candles[i] == maxCandles) { 
            maxCount++;
        }
    }
    console.log(maxCandles, '=', maxCount);
}

birthdayCakeCandles([1, 2, 10, 10, 10, 3, 11, 11, 100, 100, 100]);