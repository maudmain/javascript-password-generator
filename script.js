// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Declare variables needed
let pwLength = 0;
let promptLowerCase;
let promptUpperCase;
let promptSpecialCharacter;
let promptNumericCharacter;
let password = "";


// Function to prompt user for password options and validate if parameter not chosen
/*-length >10, <64
  -promptLowerCase
  -promptUpperCase
  -special character
  -numeric
*/

function getPasswordOptions() {

  //do.. while loop for the prompts (this will help execute the statemnet until the condition is met)
  // make sure user input is a number to meet validation criteria === parseInt function

  do {
    pwLength = (Number.parseInt(prompt("Please choose a password length between 10 and 64 characters.")));
  }

  while (!Number.isInteger(pwLength) || !(pwLength >= 10 && pwLength <= 64)) {

    promptLowerCase = confirm("Confirm if you would like to include lower cases?");
    promptUpperCase = confirm("Confirm if you would like to include upper cases?");
    promptSpecialCharacter = confirm("Confirm if you would like to include special characters?");
    promptNumericCharacter = confirm("Confirm if you would like to include numeric characters?");

    if (promptLowerCase === false && promptUpperCase === false && promptSpecialCharacter === false && promptNumericCharacter === false) {
      alert("One or more parameters need to be chosen. Start again");
      getPasswordOptions();
    }
  }

}


// Choose a random element from an array
function getRandom(arr) {
  let random = (Math.floor(Math.random() * arr.length));
  return arr[random];
}


// Function to generate password with user input
// 1. we will need to link the getPasswordOptions funtion to this to be able to execute
/* 2. we will need to create a loop that adds character until the password length is filled
= this will be done when we run the getRandom function on the variables for the character prompts for/if */
function generatePassword() {
  getPasswordOptions();
  let characterClassArray = [];
  //create a new array that will hold the characters arrays requested
  if (promptLowerCase) {
    characterClassArray.push(lowerCasedCharacters);
  }
  if (promptUpperCase) {
    characterClassArray.push(upperCasedCharacters);
  }
  if (promptSpecialCharacter) {
    characterClassArray.push(specialCharacters);
  }
  if (promptNumericCharacter) {
    characterClassArray.push(numericCharacters);
  }

  let password = "";
  for (let i = 0; i < pwLength; i++) {
    // choose at least from each character class in the array
    if (i < characterClassArray.length) {
      password += getRandom(characterClassArray[i]);
    }
    else {
      password += getRandom(getRandom(characterClassArray));
    }
  }
  return password;
}


// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

