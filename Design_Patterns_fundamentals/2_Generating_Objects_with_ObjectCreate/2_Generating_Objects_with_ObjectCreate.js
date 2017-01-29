var foo = {};

var bar = Object.create(Object.prototype);

var smithDoe = {
    firstName: "Smith",
    lastName: "James",
    sayName: function () {
        return "My name is " + this.firstName + " " + this.lastName;
    }
};

var AneDoe = Object.create(smithDoe, {
    firstName: {value: "Ane"},
    greet: {
        value: function (person) {
        return "Hello, " + person.firstName;
        }
    }
});

var TomasDoe = Object.create(AneDoe, {
    firstName: {value: "Thomas"},
    lastName: {value: "Gates"}
});

alert(smithDoe.sayName());
alert(AneDoe.sayName() + " " + AneDoe.greet(smithDoe));
alert(TomasDoe.sayName() + " " + TomasDoe.greet(AneDoe));

console.log(AneDoe.__proto__ === smithDoe);
console.log(TomasDoe.___proto__ === AneDoe);