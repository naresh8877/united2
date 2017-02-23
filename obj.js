/**
 * Created by Best Collateral on 2/11/2017.
 */
function Person(first, last, age, gender, interests){
};

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

// Object is pass by ref
function foo(speaker){
    speaker.name = 'Paul Irish';
}
var speaker = {name : 'Addy Osmani'};
foo(speaker);
console.log(speaker);// Object {name : "Paul Irish"}

// replace object parameter
function foo(speaker){
    speaker = {name : 'Paul Irish'};
}
var speaker = {name : 'Addy Osmani'};
foo(speaker);
console.log(speaker);