const palindrome = (text) => {
    let strRev = text.split('').reverse().join('')
    return strRev === text ? true : false;
}
console.log(palindrome('abcddcba'));