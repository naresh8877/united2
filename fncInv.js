 /**
  * Created by Best Collateral on 2/11/2017.
   */
 function myFunction () {
    alert('hello');
 }
    myFunction()// this is function invocation last they called the function

   // Anonymous function
    function myFunction(){
    alert('hello');
     }
   // you can assign the anonyomus function to be a value
    var myGreeting = function(){
    alert('hi there')
                                                                                                                                                                  }
myGreeting()//this is to call a function which is attached to anonomyus function

// * join function
var myArray = ['I', 'Love','choclate','frogs'];
var madeAString = myArray.join('');
//returns 'I Love chocolate frogs
var madeAString = myArray.join();
// returns 'I, love,choclate,frogs'

// replace a function
var newFunction = 'hi i have a work';
var newString = newFunction.replace('work','class');
console.log(newString);// in this it will replace the work with class

// factorial
function factorial(num){
    var x = num;
    while (x>1){
        num *= x-1;
        x--;
    }
    return num;
}

function createNewPerson(name){
    var obj = {};
    obj.name = name;
    obj.greeting = function() {
        alert('Hi! I\'m' + this.name + '.');
    };
    return obj;
}
var salva = createNewPerson('Salva');
salva.name;
salva.greeting();

function Person(name){
    this.name = name;
    this.greeting = function() {
        alert('Hi! I\'m' + this.name + '.');
    };
}


function Person(first, last, age, gender, interests){
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.intersts = interests;
    this.bio = function(){
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He Likes ' + this.intersted[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function(){
    alert('Hi! I\'m' + this.name.first + '.');
    };
};


var person1 = new Object({
    name: 'Chirs',
    age: 38,
    greeting: function() {
        alert()
    }
})