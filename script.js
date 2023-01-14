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

  //do while loop
  //to ensure user input is a number https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt

  do {
    pwLength = (Number.parseInt(prompt("Please choose a password length between 10 and 64 characters.")));
  }

  while (!Number.isInteger(pwLength) || !(pwLength >= 4 && pwLength <= 64)) {

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

// // Function for getting a random element from an array
// function getRandom(arr) {


// Function to generate password with user input
function generatePassword() {

}


// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    let password = getPasswordOptions();
    let passwordText = document.querySelector('#password');

    passwordText.value = password;
}

//Event listener click
document.querySelector("#generate").addEventListener("click", writePassword);





