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

const upperBound = document.getElementById("upperBound");
const lowerBound = document.getElementById("lowerBound");
const getRandomRangeButton = document.getElementById("getRandomRangeButton");
const randomRangeOutput = document.getElementById("randomRangeOutput");


// link python functions to the buttons
getRandomRangeButton.addEventListener("click", () => {
    randomRangeOutput.innerText = app.getRandomNumber2(lowerBound.value,upperBound.value);
});