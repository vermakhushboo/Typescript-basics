interface Person{
    firstName : string;
    lastName : string;
}

function greeter(person : Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user1 = {firstName: "Khushi", lastName: "Verma"};

document.body.textContent = greeter(user1);

//In typescript, two types are compatible if their internal structure is compatible