// VARIABLE DECLARATIONS
const customName = document.querySelector("#customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

const storyString =
    "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Donald Trump", "Jackie Chan", "Santa Claus"];
const insertY = ["Area 51", "Death Valley", "Aruba"];
const insertZ = ["spontaneously combusted", "rapidly sublimated", "evaporated instantly"];

// FUNCTIONS
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function result() {
    // Create a new variable called newStory and set it to the value of storyString
    var newStory = storyString;

    // Use the randomValueFromArray() function to generate a value for each of three new variables - xItem, yItem, and zItem
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // Replace the three placeholders in the newStory string with the strings stored in xItem, yItem, and zItem
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    newStory = newStory.replace(":insertx:", xItem);

    // If the user has typed a name in the customName field, replace the name 'Bob' in the story with whatever they typed
    if (customName.value !== "") {
        newStory = newStory.replace(/Bob/g, customName.value);
    }

    // If the metric radio button has been checked, convert the temperature and mass numbers in the story
    if (document.getElementById("metric").checked) {
        // Convert weight from lbs to kg
        var weight = Number(300 * 0.453592);
        newStory = newStory.replace("300 pounds", weight.toFixed(2) + " Kgs");

        // Convert temperature from Fahrenheit to Celsius
        var temp = (94 - 32) * (5 / 9);
        newStory = newStory.replace("94 farenheit", temp.toFixed(2) + "°C");
    }

    // Set the textContent property of the story variable (which references the paragraph) to newStory
    story.textContent = newStory;
    // Make the paragraph visible
    story.style.visibility = "visible";
}

// EVENT LISTENERS
randomize.addEventListener("click", result);
