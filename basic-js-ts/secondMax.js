function secondMax(arr) {
    if (arr.length === 0) {
        return 'Error'
    }

    if (arr.length === 1) {
        return arr[0]
    }
    const arrSort = arr.sort(function (a, b) { return a - b })

    let firstMax = 0;
    let secondMax = 0;

    firstMax = arrSort[0]
    secondMax = arrSort[0]

    let tmp = 0;

    arrSort.forEach(function (i) {

        if (i > firstMax) {
            tmp = firstMax
            firstMax = i
            secondMax = tmp
        }
    })

    return secondMax
}

module.exports = {
    secondMax
}