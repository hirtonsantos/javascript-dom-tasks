

// To test a synchronous system, write this code in JavaScript:
// This is a example of the synchronous code, look:

console.log(" I ");

console.log(" eat ");

console.log(" Ice Cream ");


// Now, let's test out an asynchronous system. Write the below code in JavaScript.
// this is Asynchronous code example:

console.log("I"); // =>>>>>> first

// This will be shown after 2 seconds

setTimeout(()=>{
  console.log("eat");
},2000) // =>>>>>>> third

console.log("Ice Cream") // =>>>>>> seconde


