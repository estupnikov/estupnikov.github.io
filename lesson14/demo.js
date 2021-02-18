console.log("Объекты");
let object1 = new Object();
let object2 = {};

let user = {
    name: "John",
    age: 30
};

console.log(user.name);
console.log(user.age);

user.isAdmin = true;

console.log(user);

user.permissions = ["create", "edit", "delete"];

console.log("Кто тут администратор?", user);

let permissions = user.permissions;

console.log(user.permissions[1]);

delete user.permissions;

console.log(user);

let newUser = {
    name: "Mike",
    age: 15,
    "like birds": true
}

console.log("Любишь птиц?", newUser["like birds"]);

let key = "like birds";

newUser[key] = false;

console.log("Все еще любишь птиц?", newUser[key]);

let obj = {
    for: 1,
    let: 2,
    return: 3
}

console.log(obj.for + obj.let + obj.return);

console.log(user.noSuchProperty);

console.log("name" in user);
console.log("blahblah" in user);

console.log(user);

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

for (let key in menu) {
    if (typeof menu[key] == 'number') {
        menu[key] *= 2; // menu[key] = menu[key]*2;
    }
}

console.log("Функции");

let storeProducts = [
    {name: "Samsung Galaxy A10", price: 3310},
    {name: "Nokia 5310", price: 1400},
    {name: "Apple iPhone 12 Pro Max", price: 41000},
    {name: "Xiaomi Poco X3", price: 6200},
    {name: "iPhone case", price: 500}
];

let totalCost = 0;
for (let product of storeProducts) {
    totalCost += product.price;
}
console.log("Total amount in store: ", totalCost);

let orderProducts = [
    {name: "Apple iPhone 12 Pro Max", price: 41000},
    {name: "iPhone case", price: 500}
]

totalCost = 0;
for (let product of orderProducts) {
    totalCost += product.price;
}
console.log("Total amount in order: ", totalCost);

function getTotalCost (products) {
    let result = 0;
    for (let product of products) {
        result += product.price;
    }
    return result;
}

totalCost = getTotalCost(storeProducts); // getTotalCost("test variable")

console.log("(func) Total amount in store: ", totalCost);
console.log("(func) Total amount in order: ", getTotalCost(orderProducts));

//***

console.log(10 + sum(2,3,4) + sum(1,1,1));

hello("королева Виктория");

universlaAnswer();

// ***

function sum (x, y, z) {
    return x+y+z;
}

function hello (name) {
    console.log("Привет, " + name + "!");
}

function universlaAnswer () {
    console.log(42);
}

console.log("Методы");

let person = {
    name: "",
    lastName: "",
    sayHello: function (otherName) {
        console.log("Привет, " + otherName + "! Меня зовут " + this.name + ".");
    },
    getFullName: function() {
        return this.name + " " + this.lastName;
    }
}

person.name = "Нимуэ";
person.sayHello("Король Артур");

person.name = "Брюс";
person.sayHello("Диана");

person.name = "Хан";
person.lastName = "Соло";
person.getFullName();
console.log(person.getFullName());












console.log("DOM");