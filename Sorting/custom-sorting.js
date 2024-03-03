const primeNumber = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return true;
    }
    return num < 2 ? true : false;
}

const customSorting = (arr) => {
    let newArray = [...arr.filter(el => primeNumber(el))];

    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[i] > newArray[j] && i < j) {
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
            }
        }
    }
    console.log(newArray);
}

console.log(customSorting([51, 57,107,33, 27, 37, 4334533, 23, 4, 4, 234, 245, 2, 2453, 2, 4, 5, 3, 34, 5, 5]));