function createObjectWithoutPrototype() {
    return Object.create(null);
}


const obj = createObjectWithoutPrototype();

console.log(obj);
console.log(Object.getPrototypeOf(obj));
