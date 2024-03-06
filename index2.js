// Declaring the two objects
let myObj = {title:'Post 1', body:'This is post 1'};
let myObj2 = { title: 'Post 2', body: 'This is post 2' };
let myObj3 = { title: 'Post 3', body: 'This is post 3' };

// Make an array of the objects
let myArray = [myObj, myObj2, myObj3];

// Iterate through each object in the array
window.addEventListener('load', () => {
    for(let i = 0; i < myArray.length; i++) {
        //console.log(myArray[i]);
        document.getElementById('container').innerHTML += '<h1>' + myArray[i] + '</h1>'
    }
});

// Print the objects out in the browser
console.log(myArray);