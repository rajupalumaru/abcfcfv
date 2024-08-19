const person = {
    firstName: "ABC",
    lastName: "XYZ",
   age: 25,
   city: "ExampleCity"
};
person.email = 'info@example.com';
person.age = 26;
delete person.city;
console.log(person)
