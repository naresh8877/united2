/**
 * Created by Best Collateral on 2/12/2017.
 */

//closure are functions that refer to independent variables
// lexical scoping
function init(){
    var name = 'mozilla';// name is a local variable created by init
    function displayName(){ // displayName() is the inner function, a closure
        alert(name);// use variable declared in the parent function
    }
    displayName();
}
init();
//  init() create a local variable called name and a function called displayName().The displayName() function is an inner function
//that is defined inside init() and is only available within the body of the init() function.The dispalyName() function has no
// local variables of its own. Howerver,because inner function have access to the variables of outer function , displayName() can access
//the variable name declared in the parent function , init()
// In this alert() statement within the displayName() function successfully displays the value of the name variable which is declared in its parent
// function.
// This is an example of lexical scoping which describe how parser resolve variable name when function are nested.The wied "lexical"
//refer to the fact that lexical scoping uses the location where a variable is declared within the source to determine where that variable
//is available.Nested function have access to variables declared in their outer scope.
//*Closure
function myFunc(){
    var name = naresh;
    function displayName(){
        alert(name);
    }
        return displayName;
}
var myFunc = makeFunc();
myFunc();// this is different from the above function in this  the displayName() inner function is returned from the outer function before executed
// In javascript functions form  closures. A closure is the combination of a function and the lexical environment within that function was declared.
//This environment consists of any local variable that were in-scope at the time that the closure was created.In this case myFunc is a
//reference to the instance of the function displayName created when makeFunc is run.The instance of displayName maintains a reference to  its
// lexical environment within which the variable ame exists

//* makeAdder function
function makeAdder(x) {
    return function(y){
        return   x + y;
    };
}
var add5 = makeAdder(5);
    var add7 = makeAdder(7);

console.log(add5(8));
console.log(add7(8));// we have defined a function makeAdder(x), which takes a single arguments.x,and returns a new function.The function it returns takes a single
// arguments,y,and returns the sum of x and y.In essence makerAdder is a function factory - it creates function which can add a specific value to their argument.
// In the above example we use our function factory to create two new function- one that adds5 to its arguments and one that adds 10.
//add5 and add10 are both closure.They share the same function body definition, but store different lexical environment.In add5's while in the lexical environment
// for add10,x is 10


// ** Emulating private methods with closures
// Language such as a java provide the ability to declare methods private, meaning that they can only be called by others methods in the same class.
// javaScript dose not provide a native way of doing this, but it is possible to emulate private methods using closure.Private methods area't just useful for restricting
// access to code L the also provide a powerful way of managing your global namespace, keeping non-essential methods from cluttering up the public interface to your code.
//** module pattern
