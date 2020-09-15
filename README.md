#OOP 

##OOJS 1
In this task we provide you with a constructor. We want you to:

Add a new method to the Shape class's prototype, calcPerimeter(), which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
Create a new instance of the Shape class called square. Give it a name of square and a sideLength of 5.
Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser DevTools' console as expected.
Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
Call triangle.calcPerimeter() to check that it works OK.


##OOJS 2
Next up we want you to take the Shape class you saw in Task #1 (including the calcPerimeter() method) and recreate it using ES class syntax instead.

Test that it works by creating the square and triangle object instances as before (using new Shape() for both), and then calling their calcPerimeter() methods.


##OOJS 3
Finally, we'd like you to start with the ES Shape class you created in the last task.

We'd like you to create a Square class that inherits from Shape, and adds a calcArea() method that calculates the square's area. Also set up the constructor so that the name property of Square object instances is automatically set to square, and the sides property is automatically set to 4. When invoking the constructor, you should therefore just need to provide the sideLength property.

Create an instance of the Square class called square with appropriate property values, and call its calcPerimeter() and calcArea() methods to show that it works ok.


#JSON
JSON data about some mother cats and their kittens is available in sample.json. The JSON is loaded into the page as a text string and made available in the catString parameter of the displayCatInfo() function, called when the provided promise chain (which starts by fetching the JSON data) is fulfilled. Your task is to fill in the missing parts of the displayCatInfo() function to store:

The names of the three mother cats, separated by commas, in the motherInfo variable.
The total number of kittens, and how many are male and female, in the kittenInfo variable.
The values of these variables are then printed to the screen inside paragraphs.

*Some hints/questions:

The JSON data is provided as text inside the displayCatInfo() function. You'll need to parse it into JSON before you can get any data out of it.
You'll probably want to use an outer loop to loop through the cats and add their names to the motherInfo variable string, and an inner loop to loop through all the kittens, add up the total of all/male/female kittens, and add those details to the kittenInfo variable string.
The last mother cat name should have an "and" before it, and a full stop after it. How do you make sure this can work, no matter how many cats are in the JSON?
Why are the para1.textContent = motherInfo; and para2.textContent = kittenInfo; lines inside the displayCatInfo() function, and not at the end of the script? This has something to do with async code.

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here



// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    
