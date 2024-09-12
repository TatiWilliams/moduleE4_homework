function printOwnProperties(obj) {
    
    const keys = Object.keys(obj);

    
    for (const key of keys) {
        console.log(`${key}: ${obj[key]}`);
    }
}


const newCar = {
    type: 'Nissan',
    year: 2015,
    colour: 'Black'
};
printOwnProperties(newCar);