const reverse = (array) => {
    let tmp = [];
    for(let i = array.length-1; i >= 0; i--) {
        tmp.push(array[i]);
    }
    console.log('Elemen setelah dibalik = ', tmp.join(' '));
}

const array = [1, 2, 5, 3, 8, 7, 4];
reverse(array);

