// 1  What are promises and why do we need them?

/*   The promises are objects and it take the call back function 
   it have 3 stages;
   i . Pending stage.
   ii . fulfilled stage.
   iii . reject stage.

   when the data transforms to the servers to get a data then it is in Pending stage. 
   if we get a data successfully then it fulfilled its promise then we call with the using of .then method.
   if any error occurs happend to return the errors by using the .catch method. 

   Example : */

const Example = true;

let countValue = new Promise(function (resolve, reject) {
    if (Example) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);

//  2 . What is the purpose of async/await keywords?    

/*    async/await they are return the Promises 
    this async/await are used to done the work without using 
    the .then and .catch methods in Promises
    await stop the the all next functions until the await function will executed.
    when it executed the all function which located after the await function.

    Example : */

    async function func() {
        x = await 5 + 5;
        return (x);
    }
    let result = func();

    result.then(function (data) {
        console.log(data)
    })

    
//  3 . What is hoisting?

/*    whenEver a context is created (global function) 
    all the variables which are declared with Var key word will be initialised
    with "undefined" value this is a phase call as the creation phase
    and the let keywords will be show error
    variables which are declared with function keywords are hoisted
    variables which are declared without function keywords are not hoisted 

    Example : */
    
    function test () {
        x = 10;
       let y = 10;
    }
    test ();
    console.log(x);
    console.log(y);

/* 4 . What is the DOM?    

    DOM : Documet Object Model
    By using the HTML & DOM Javascript  can access change and modify or remove the elements 
    of the HTML Document and also can create the new elements at any position;
    When a web page loaded, browser create DOM of webpage.


   5 .  Difference between undefined vs not defined vs NaN ?

    if declared the variable (let x) and  then dont assain any value (let x = ;)
    then the result is undefined
    
    NAN stands for Not A Number
    NAN is a bullon attribute it gives the only true or false values
    if the given date is a number (let x = 10) then it is false
    if the given date is a alphabet (let x = "prasanna") then it is true
    bcause its not a number 

    6 . How many operators do we have in JS ?

    they are 6 types of operators

    --> Arthamatic Operators
    --> Comparison Operators
    --> Logical Operators
    --> Assignment Operators
    --> Btwise operators
  
    7 . What are pure functions?
    
    A function  that always returns the same result if the same arguments are passed
    it is a pure function
    It does not depend on any state or data change during a program's execution

 
    8 . What is callback hell? 

    The call back hell is looking like pyramid shape 
    when read the written code its very difficult to understand 
    inside the function they are many callback functions its call back hell
    Every function depents on the settimeout function.

    9 .  What is promise chaining ?

    Promise chaining occurs when the callback function returns a promise.
    by the help of .then and .catch functions if promise fulfilled .then will return
    if error will occurs .catch will be occurs

    10 . What are arrow functions?
    
    Arrow functions are introduced in the year of 2015 ES86 Version 
    it is the simplest and best way to create a function to compare
    with the regular funcions


    Example : */

    const ArrowFunction = () => {
        
    }
/*  11 . give an example of async/await in javascript

    Example : */

    async function func() {
        x = await 5 + 5;
        return (x);
    }
    let result = func();

    result.then(function (data) {
        console.log(data)
    })


