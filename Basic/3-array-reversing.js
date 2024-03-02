const arrayReverse = (arr) => {
    let result = []
    arr.forEach(element => {
        result.unshift(element);
    });
    return result;
}
console.log(arrayReverse([3,2,4,23,4,2]));