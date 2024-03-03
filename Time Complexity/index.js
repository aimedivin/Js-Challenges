const timeComplexity = (arr) => {
    let count = 0;
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        count = 0
        arr.forEach(element => {
            if (arr[i] == element) {
                count++;
            } 
        });
        if(count > (arr.length/2)) return true;
    }
    return false
}
console.log(timeComplexity([33,4,3,2,34,3,345,3,3,3,3,3]));