
const genderSort = (arr) => {
    const obj = {
        'female': [],
        'male': []
    };
    arr.forEach( el => {
        let info = el.split(', ');
        let firstname = info[0].split(" ")[0];
        if (info[2] == 'female') {
            obj.female.push({[firstname] :{ "second-name": info[0].split(" ")[1], "age": info[1] }});
        } else {
            obj.male.push({[firstname]:{ "second-name": info[0].split(" ")[1], "age": info[1] }
        })
    }
    });
    return obj;
}

genderSort(["Patrick wyne, 30, male", "lil wyne, 32, male","Eric mimi, 21, female","Dodos deck, 21, male","Alian Dwine, 22, male","Patrick wyne, 33, male","Patrick wyne, 10, male0","Patrick wyne, 40, male"])

// console.log(genderSort(["Patrick wyne, 30, male", "lil wyne, 32, male", "Eric mimi, 21, female", "Dodos deck, 21, male", "Alian Dwine, 22, male", "Patrick wyne, 33, male", "Patrick wyne, 10, male0", "Patrick wyne, 40, male"]));


console.log(JSON.stringify(genderSort(["Patrick wyne, 30, male", "lil wyne, 32, male", "Eric mimi, 21, female", "Dodos deck, 21, male", "Alian Dwine, 22, male", "Patrick wyne, 33, male", "Patrick wyne, 10, male0", "Patrick wyne, 40, male"]), null, 2));