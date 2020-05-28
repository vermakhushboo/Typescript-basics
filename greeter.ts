function greeter(person : string){
    return "Hello, " + person;
}

let user2 = "Khushboo Verma";
// let user = [1,2,3]; //generates error because type not compatible

document.body.textContent = greeter(user2);