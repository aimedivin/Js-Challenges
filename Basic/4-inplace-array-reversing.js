const arrayReverse = (arr) => {
    let i = 0, j = arr.length - 1;
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    return arr;
}
console.log(arrayReverse([1, 3, 2, 4, 4, 3]));