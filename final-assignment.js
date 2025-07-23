/** @format */

// ResonaTED - Unit 0 Skill Demo Code
// This file contains example logic for a TED Talk recommendation app, using skills from Unit 0 of the course.

// ********* Values, Data Types, and Operations *********

// Pseudocode: Install the readline-sync and import it.  Collect from user strings (name and email) and numbers (age).  Collect Boolean values such as true/false answers to questions such as: Are you interested in mindfulness?  Time management? Increasing prductivity? Collect and store this information in a User profile (dataType Object).

const input = require("readline-sync"); // This was learned to use with Node JS to collect user input and make the code interactive.  Prior to doing this, it is necessary to install the function in the file that I'm workin on through the Terminal.  The command line to install is: npm install readline-sync

let userNameInput = input.question("Hello, Please enter your name:"); // intializing a variable to be the value of the answer(input) to the specific question sent to the user.  Answers will default to a string datatype unless otherwise converted.

let userName =
  userNameInput[0].toUpperCase() + userNameInput.slice(1).toLowerCase(); // This was to use new methods.  I wanted to practice with bracket identification and toUpperCase/toLowerCase methods and string contatenation.  In practice, if the user types their name in with all capitals or lowercase, this will correct it to title case.

let userAge = Number(input.question("What is your age?")); // using explicit conversion so the input behaves properly later.  Otherwise, it defaults to a string.

let interMotivation =
  input
    .question(
      "Are you interested in TED talks about how to be motivated? (yes/no)"
    )
    .toLowerCase() === "yes"; // There is a lot happening here.  The variable interMotivation is being collected from the user.  The user is instructed to give a yes/no answer.  That answer is being converted by the method "toLowerCase" to so that it can be matched by the strict equality operator to the word yes.  This forces the variable datatype to a Boolean value.

let interInspiration =
  input
    .question("Are you interested in TED talks that are inspiring? (yes/no)")
    .toLowerCase() === "yes";
let interMindfulness =
  input
    .question("Are you interested in learning about mindfulness? (yes/no)")
    .toLowerCase() === "yes";
let availTime = Number(
  input.question(
    "How much time do you have available today to watch a TED talk?"
  )
);

let userProfile = {
  name: userName,
  age: userAge,
  interestMotivation: interMotivation,
  interestInspiration: interInspiration,
  interestMindfulness: interMindfulness,
  availableTime: availTime,
};

// This was not so much covered in depth, but it suits me to use it here.  We have not spent time manipulating Objects, but we did cover the concept of key/value pairs.  Additionally, the values can be different datatypes (one of the values can be an array).

console.log(
  `Welcome, ${userName}.  We will find a suitable TED talk for you today.`
); // Example of combining variables with strings through the use of object literals.

console.log(userProfile); // checking my work through console.log

// ********* Stringing Characters Together *********

// Pseudocode: Create a personalized message with the user's name and a TED Talk title

let talkTitle = "The Power of Vulnerability"; // declaring and intializing a string.

let suggestedTalk =
  "Hi " + userName + "! Today's recommended TED Talk is: " + talkTitle + "."; // concatonating a message with "+" and variables.

console.log(suggestedTalk); // Output: Hi Kim! Today’s recommended TED Talk is: The Power of Vulnerability.

// ********* Control Structures and Logic *********

// Pseudocode: Recommend a short talk if the user has less than 15 minutes.  What I would need here is also to be able to manipulate data from objects.  I can't yet do that, so I will put the if... else statement here with the information hardcoded.
availTime = 15;

if (availTime <= 15) {
  console.log(
    "Here is a 12-minute talk to fit into your day: 'Inside the Mind of a Master Procrastinator'."
  );
} else {
  console.log(
    "Check out this deep 20-minute talk: 'The Power of Vulnerability'."
  );
} // use of an if... else statement

// ********* Working with Loops ********* and ********* Building Arrays *********

// Pseudocode: Loop through a list of talks and search for a keyword to find the title of the talk you would like to see
let talkList = [
  "Your Body Language May Shape Who You Are",
  "Do Schools Kill Creativity?",
  "How to Make Stress Your Friend",
  "How to stay calm when you know you'll be stressed",
  "The Gift and Power of Emotional Courage",
  "The Power of Vulnerability",
];

let keyword = input.question(
  'Please enter a keyword of a title you would like to watch (for example, type the word "Stress" or "school" to find TED titles with that work in the title).'
); // collects the keyword from the user to use it later
let lowerCaseKeyword = keyword.toLowerCase(); // converts the keyword to all lowercase

console.log(lowerCaseKeyword); // checking my work

let matchingTalks = []; // creates an empty array to populate later

talkList.forEach((talk) => {
  if (talk.toLowerCase().includes(lowerCaseKeyword)) {
    matchingTalks.push(talk);
  }
}); // use forEach() method as a loop to look through the titles in the array.  When a title matches, a new array is created to cue up a list of suggested TED talks. This is actually not a loop, it is an iteration method.  I am including a loop here as another way to accomplish the same task.

console.log(
  "Here is a list of TED talks that contain a match with the " + keyword + ": ",
  matchingTalks
);

// Accomplished with a loop and reassigning the variable for the keyword so I have a different result logged.

keyword = "power";
lowerCaseKeyword = keyword.toLowerCase();
matchingTalks = []; // this just has to be reset here because I want to run the code with a for loop as well.

for (i = 0; i < talkList.length; i++) {
  if (talkList[i].toLowerCase().includes(lowerCaseKeyword)) {
    matchingTalks.push(talkList[i]);
  }
}

console.log("******* this is to practice using a for loop **********");

console.log(
  `Here a list of Ted talks that match with the keyword ${keyword}: ${matchingTalks}`
);

// // ********* Using Arrays *********
// // Pseudocode: Add a new talk to the list and show total number
// mentalHealthTalks.push("The Gift and Power of Emotional Courage"); // using push()
// console.log("Updated Talks List:", mentalHealthTalks);
// console.log("Total talks in category:", mentalHealthTalks.length); // using .length

console.log(`You have ${matchingTalks.length} talk(s) in your watch list.`);

let filterReply =
  input
    .question("Would you like to remove any talks from your list?")
    .toLowerCase() === "yes"; //
let formatTalkList = []; // this is setting up an empty array to be accessed for the conditional statement if the user replies yes

// this for loop creates a new string with the titles appearing in the array as before, but with a number that preceeds it so the user can input that number to identify their chosen title.
for (i = 0; i < talkList.length; i++) {
  let orderedNum = i + 1;
  let newTalkString = `${orderedNum}. ${talkList[i]}`;
  formatTalkList.push(newTalkString);
}

// this conditional statement takes the Boolean input from the question and will run if the user had indicated that they wanted to remove a title from the list.

if (filterReply) {
  let ordinalNumTalkToRemove = Number(
    input.question(
      `Please indicate the number of the Talk you would like to remove: from the list here: ${formatTalkList}`
    )
  );
  let indexNumTalkToRemove = ordinalNumTalkToRemove - 1; // This adjusts the math so the number appearing on the list will now be recalibrated to match the actual index number of the title in the array.
  formatTalkList.splice(indexNumTalkToRemove, 1); // This removes the indexed element and only that element from the formatted list.
  console.log(`Here is your updated list: ${formatTalkList}.`);
} else {
  console.log("Okay, your list remains as-is without change.  Enjoy.");
} // If the user did not want to remove any titles, this part of the code will be executed.
