function getNames(array) {
    let results = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i].hasOwnProperty('name')) {
            results = [...results, array[i].name];
        }
    }
    console.log(results);
    return results;
}
getNames([
    {
        a: 1
    },
    {
        name: "Jane"
    },
    {
        name: "Mark"
    },
    {
        name: "Sophia"
    },
    {
        b: 2
    }
])