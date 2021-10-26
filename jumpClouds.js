function jumpingOnClouds(c) {
    let count = 0;
    for(let i = 0; i < c.length-1; i++) {
        if(c[i] == 0) { 
            count++;
        }
    }
    console.log(count);
}
jumpingOnClouds([0, 0, 0, 1, 0, 1, 1, 0]);