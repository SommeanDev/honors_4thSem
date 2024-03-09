//Promise then and catch, async and await
const sayhellotoPromise = (name) => {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject('Name is required');
        } else {
            resolve(`Hello ${name}`);
        }
    });
}

// sayhellotoPromise('dave')
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//async await
try {
    const data = await sayhellotoPromise(name_of_person);
    console.log(data);
} catch (error) {
    console.log("Error occured: ", error);
}