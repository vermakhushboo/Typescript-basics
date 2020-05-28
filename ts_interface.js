function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user1 = { firstName: "Khushi", lastName: "Verma" };
document.body.textContent = greeter(user1);
//In typescript, two types are compatible if their internal structure is compatible
