 /**
 * Created by Best Collateral on 2/12/2017.
 */
 //* The Promise
 // The promise Object is used for asynchronous computations.A promise represents a value which maybe available now or in future,or never
 // The promise is a proxy for a value not necessarily known when the promise is created It allow you to associates handler with an asynchronous action
 //eventual success value or failure reason.This lets asynchronous method return value like synchronous methods: instead of immediately returning the
 // final value, the asynchronous method returns a promise to supply the value at some point in the future.
 // **Creating a promise
 // In this the testPromise() method is called each time the <button> is clicked. It create a promise that will be fullfilled, using window.setTimeout().
 // to the promise count (number starting from 1) every 1-3 seconds at random. The Promise() constructor is used to create the promise.
 // using the callback set p1.then().A few logs shown how the synchronous part of the method is decoupled form the asynchronous completion fo the promise
 'use strict';
 var promiseCount = 0;
 function testPromise() {
    var thisPromiseCount = ++promiseCount;

    var log = document.getElementById('log');
    log.insertAdjacementHTML('beforeend', thisPromiseCount + ') Started (<small>Sync code strated</small>)<br/>');
    // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
    var p1 = new Promise(
        // The resolve function is called with the ability to resolve or reject the promise
        function(resolve, reject){
            log.insertAdjacementHTML('beforeend', thisPromiseCount +  ') Promise started (<small>Async code started </small>>)<br/>');
            // This is only an example to create asynchrous
            window.setTimeout(
                function() {
                    // we fullfill the promise
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );
    // we define what to do when the promise is resolve/fulfilled with the then() call,
    // and the catch() method defines what to do if the promise is rejected.
    p1.then(
        // Log the fulfillment value
    function (val) {
        log.insertAdjacementHTML('beforeend', val + ') Promise fulfilled(<small>Async code terminated</small>)<br/>');
    })
        .catch(
            // Log the rejection reason
            function(reason){
                console.log('Handle rejected promise ('+reason+') here.');
            });
 log.insertAjacentHTML('beforeend', thisPromiseCount + ') Promise made (<small>Sync code terminated</small>)<br/>');
 }