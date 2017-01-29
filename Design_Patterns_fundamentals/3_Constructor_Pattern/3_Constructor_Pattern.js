function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    
    this.sayName = function() {
        return "My name is " + this.firstName + " " + this.lastName; 
    };
}

var smithDoe = new Person("Smith","Doe");
var AneDoe = new Person("Ane", "Doe");

var isPerson = smithDoe instanceof Person; // true
var isSayName = smithDoe.sayName === AneDoe.sayName; //false

//---------------------------------------------------------

function Person1(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person1.prototype.sayName = function() {
    return "My name is " + this.firstName + " " + this.lastName; 
};

var SmithDoe1 = new Person1("Smith","Doe");
var AneDoe1 = new Person1("Ane", "Doe");

var isPerson1 = SmithDoe1 instanceof Person1; // true
var isSayName1 = SmithDoe1.sayName === AneDoe.sayName; //true