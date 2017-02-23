/**
 * Created by Best Collateral on 2/12/2017.
 */
// Array is an ordered set of values that you refer to with a name and an index.
// Javascript does not have an explicite array data type: However, you can use the predefined Array Object and its method to work with arrays in your application
// The Array Object has methods for manipulating arrays in various ways, such as joining,reversing and  sorting them.It has a property fir determine the array length
// and others properties for use with regular expression
var arr = [42];//Creates an array with only one element the number 42
var arr = Array(42);// Creates an array with no elements and arr.length set to 42; this is equivalent to ;
var arr = [];
arr.length = 42;

// Iteration over anrays
var colors = ['red', 'blue','green'];
for(var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}// it returns red blue and green
// By using forEach() method
var colors = ['red','green','blue'];
colors.forEach(function(color){
    console.log(color);
});// it return red green blue

//Array methods
//** concat() it joins two arrays and return a new array
var myArray = new Array('1','2','3');
myArray = myArray.concat('a','b','c');// my Array is now ["1","2","3","a',"b","c"]

// join all the elements of an array into a string
var myArray = new Array('1', '2');
myArray.psuh('3');//now ["1",'2","3"]


