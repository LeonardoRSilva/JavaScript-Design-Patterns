var obj = {
    firstName: "Smith",
    lastName: "James"
};

var obj2 = new Object();

obj.firstName = "Smith";
obj["lastName"] = "James";

var firstName = obj["firstName"];
var lastName = obj.lastName;

Object.defineProperty(obj, "country", {
    value: "USA"
});

Object.defineProperties(obj, {
    twitter: {
        value: "Jamesk"
    },
    email: {
        value: "jamesk.com"
    }
});