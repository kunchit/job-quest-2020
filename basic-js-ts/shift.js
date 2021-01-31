function shift(arr, direction, numberElement) {
    let newArr = [];
    if (direction === "left") {
        const arrMove = arr.slice(numberElement);
        const arrCut = arr.splice(0, numberElement);
        newArr = [...arrMove, ...arrCut];
    } else {
        const arrMove = arr.slice(arr.length - numberElement);
        const arrCut = arr.splice(0, arr.length - numberElement);
        newArr = [...arrMove, ...arrCut];

    }
    return newArr
}

module.exports = {
    shift
}