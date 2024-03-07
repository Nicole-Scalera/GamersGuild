// Declaring the two objects
let myObj = {title:'Post 1', body:'This is post 1'};
let myObj2 = { title: 'Post 2', body: 'This is post 2' };
let myObj3 = { title: 'Post 3', body: 'This is post 3' };

// With "let," like there is here, you have the option of
// block scope or global scope. With "var," you only have
// global scope option.

// This has "let" because you want to avoid using "var" as
// much as possible because it's a global variable, whereas
// let is a block-level scope.

myObj.title

// Make an array of the objects
let myArray = [myObj, myObj2, myObj3];

// Iterate through each object in the array
window.addEventListener('load', () => { // <------ This is WAITING for the HTML content to
    console.log(myObj.title)
    for (let i = 0; i < myArray.length; i++) { //  load BEFORE loading JavaScript.
        //console.log(myArray[i]);
        document.getElementById('container').innerHTML += '<h1>' + myArray[i] + '</h1>'
    }
});

// Print the objects out in the browser
console.log(myArray);