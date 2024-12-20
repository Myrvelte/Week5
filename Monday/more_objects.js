// A single objkect can have many different unrelated properties
const person = { // create an object literal of key-value pairs
    first: "Myrvelte",
    last: "Lusma",
    age: 30,
    phone: "813-555-6879",
    DOB: new Date("9-06-1994")
};

person.hobby = "sleep"; // add one more property and define its value

console.log(person.DOB)
console.log(person.phone)
console.log(person.hobby)

const fruit = [ // create a array literal of ordered individual items
    "apple", 
    "banana", 
    "cherry"
];
console.log(fruit[1]) //access by offset position

fruit.push("pineapple") // add one more item to the end of the list
fruit.push("strawberry") // add one more item to the end of the list
fruit.push("AAA", "ZZZ") //two at once?

console.log(fruit[4]);

empty_array = []
empty_object = {}