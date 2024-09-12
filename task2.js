function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}


const person = {
    name: "Max",
    age: 30
};

console.log(hasProperty(person, "name")); 
console.log(hasProperty(person, "age"));  
console.log(hasProperty(person, "email")); 