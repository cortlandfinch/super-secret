// Assignment code here
var characterLength = [];
var selectLowercase;
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", ";", ":", "'", "`", "~", "<", ",", ">", ".", "?", "/", "|"];

// Function to select length of charcters for password
function choosePassword() {
  // Prompt to select how many characters to add
  characterLength = prompt("Please choose how many characters you would like your password to be (Note: password length must be between 8 and 128 characters).");
  // If statement for length = null
  if (characterLength === null) {
    passwordText.value = "Your Secure Password";
  // else if statement for character choice must be more than 8 characters
  }
  if (characterLength < 8){
    alert("Your password length must be more than 8 characters!");
  // else if statement for character choice must be less than 128 characters
  }
  if (characterLength > 128){
    alert("Your password length must be less than 128 characters!");
  }
  // Confirm messages to prompt the user to click Ok or Cancel to add password options to their random generated password
  var selectLowercase = confirm("Please choose if you would like to include lowercase characters in your password. (Note: click Ok for Yes or Cancel for No).");
  var selectUppercase = confirm("Please choose if you would like to include uppercase characters in your password. (Note: click Ok for Yes or Cancel for No).");
  var selectNumbers = confirm("Please choose if you would like to include numbers in your password. (Note: click Ok for Yes or Cancel for No).");
  var selectSpecial = confirm("Please choose if you would like to include special characters in your password. (Note: click Ok for Yes or Cancel for No).");
  // Variable to pass length, lowercase, uppercase, numbers and special characters through passwordOptions
  var passwordOptions = {
    characterLength: characterLength,
    selectLowercase: selectLowercase,
    selectUppercase: selectUppercase,
    selectNumbers: selectNumbers,
    selectSpecial: selectSpecial
  }
  // Returns password options once choices are made
  return passwordOptions;
}

// Function to generate  password
function generatePassword() {
  var options = choosePassword();
  var finalPassword =[];
  var charactersUsed = [];
  var possibleCharacters = [];
  if (options.selectLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseChars);
    charactersUsed.push(lowercaseChars);
  }
  if (options.selectUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseChars);
    charactersUsed.push(uppercaseChars);
  }
  if (options.selectNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    charactersUsed.push(numbers);
  }
  if (options.selectSpecial) {
    possibleCharacters = possibleCharacters.concat(specialChars);
    charactersUsed.push(specialChars);
  }
  // For Loop statement to randomize password
    for (let i = 0; i < characterLength; i++) {
      let randomize =[Math.floor(Math.random() * possibleCharacters.length)];
      finalPassword = finalPassword + possibleCharacters[randomize];
    }
  return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page