// get all elements from the html
// buttons
const getDateButton = document.getElementById("getDateButton");

// output divs
const timeOutput = document.getElementById("timeOutput");

const getRandomButton = document.getElementById("getRandomButton");
const randomOutput = document.getElementById("randomOutput");


// link python functions to the buttons
getDateButton.addEventListener("click", () => {
    timeOutput.innerText = app.getCurrentDateAndTime();
});



getRandomButton.addEventListener("click", () => {
    randomOutput.innerText = app.getRandomNumber();
});