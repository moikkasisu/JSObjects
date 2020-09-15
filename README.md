# JSObjects
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
    
