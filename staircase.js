function staircase(n) {
    for(let i = 0; i < n; i++) {
        console.log('*'.repeat(i).padStart(0))
    }
    for(let i = n; i > 0; i--) {
        console.log('*'.repeat(i).padStart(0))
    }
}

staircase(10);