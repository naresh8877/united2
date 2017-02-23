/**
 * Created by Best Collateral on 2/12/2017.
 */
// module pattern
var counter = (function(){
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement:function (){
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    };
})();
console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
// In this here we create a single lexical environment that is shared by three function: counter.increment,counter.decrement,and counter.value
// The shared lexical environment is created in the body anonymous function, which is executed as soon as it has been defined.The lexical environment contains
// two private items: a variable called privateCounter and function called changeBy . Neither of these private items can be accessed directly from outside the anonymous
// function. Instead, they must be accessed by the three public function that are returned from the anonymous wrapper

// **creating the anonymous function that creates a counter, and then we call it immediately and assign the result to the counter variable.
var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val){
        privateCounter += val;
    }
    return {
         increment: function (){
             changeBy(-1);
         },
        decrement: function() {
             changeBy(-1);
        },
        value: function() {
             return privateCounter;
        }
    }
};
var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value());
counter1.increment();
counter1.increment();
alert(counter1.value());
counter1.decrement();
alert(counter1.value());
alert(counter2.value());
// in this we got two counter counter1 and counter2,maintains its independence from the other.Each closure reference a different version of the privateCounter
// variable throught its own closure.Each time one of the counters is called, its lexical environment changes by chainging the value of this variable, however changes
// to the variable value in one closure do not affect the value in the other closure
