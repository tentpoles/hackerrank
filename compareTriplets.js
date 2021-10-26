function compareTriplets(a, b) {
    let score = [0, 0];
    for (let i = 0; i < a.length; i++)
    {
        if (a[i] > b[i]) {
            score[0]++;
        }
        else if (a[i] < b[i]) {
            score[1]++;
        }
    }
    console.log('a: ', score[0], 'b: ', score[1]);
}

compareTriplets([1, 2, 3], [2, 3, 4]);