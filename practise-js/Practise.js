const familyApi = (fam) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
        if (fam.length) {
            fam.forEach(el => {
                el['totalNumberofFamilyMembers '] = 2 + el.childrenNumber;
                if (el.fatherName.toLowerCase() == 'yves') {
                    reject('Yves is not an allowed dad in 2022.');
                }
            }); 
            resolve;
        }
        else {
            reject('Error');
        }
    });
}

const familyExample = [
    { fatherName: 'paul', motherName: 'angel', childrenNumber: 3 }, 
    { fatherName: 'yves', motherName: 'Mary', childrenNumber: 10 }];


async function apiTest() {
    try {
        await familyApi(familyExample);
        console.log(familyExample);

    } catch (error) {
        console.error(error);
    }
}

apiTest()