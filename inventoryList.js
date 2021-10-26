function inventoryList() {
    let items = [
        {
            name: 'Shirt'
        },
        {
            name: 'Trouser'
        },
    ]
    const add = (name) => {
        const names = items.filter(item => item.name === name)
        if (names.length === 0) {
            items.push({
                name: name
            })
        }
    }
    const remove = (name) => {
        items = items.filter(item => item.name !== name)
    }
    const getList = () => {
        return items
    }
    console.log(getList())
    return {
        add,
        remove,
        getList
    }
}
inventoryList()