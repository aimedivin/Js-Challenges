// async code handling using promises
setStudentAgeApi = (student, age) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if (age < 0)
                reject("Bad Age")
            else
                resolve(student)
        },
            500);
    });
}
setStudentAgeApi({ name: 'eric' }, 80)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.error(err)
    });
    
// Supllying a Negative Number
setStudentAgeApi({ name: 'eric' }, -80)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.error(err)
    });

