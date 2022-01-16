// Strings of potential characters for the password
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = " !#$%&()*+-,./:;<>=?@^`~_";

// Variables and functions that check which character types a user wants to include in the password.
var lowercaseLetters = true;
var uppercaseLetters = true;
var numericCharacters = true;
var specialCharacters = true;

var lowercaseLettersChoice = function() {
  var lowercasePrompt = window.confirm("Would you like to include lowercase letters in your password?");
  if(lowercasePrompt) {
    lowercaseLetters = true;
  } else {
    lowercaseLetters = false;
  }
}

var uppercaseLettersChoice = function() {
  var uppercasePrompt = window.confirm("Would you like to include uppercase letters in your password?");
  if(uppercasePrompt) {
    uppercaseLetters = true;
  } else {
    uppercaseLetters = false;
  }
}

var numericCharactersChoice = function() {
  var numericPrompt = window.confirm("Would you like to include numbers in your password?");
  if(numericPrompt) {
    numericCharacters = true;
  } else {
    numericCharacters = false;
  }
}

var specialCharactersChoice = function() {
  var specialCharactersPrompt = window.confirm("Would you like to include special characters in your password?");
  if(specialCharactersPrompt) {
    specialCharacters = true;
  } else {
    specialCharacters = false;
  }
}

var passLength = "";

// This is the prompt for the password length. Users must input this before receiving their password.
var getPasswordLength = function() {
  passLength = Number(window.prompt("Please select the desired length of your password. The length must be between 8 to 128 characters."));
  
  // This statement ensures that the password fits within the number range given.
  if (passLength >= 8 && passLength <= 128) {
    JSON.stringify(passLength);
    return passLength;
  } else {
    window.alert("You must select a number betwee 8 and 128!");
    getPasswordLength();
  }
}

var characterChoices = 0;

// This section adds up to determine how many character types the user selected.
var characterChoicesNumber = function() {
  if(lowercaseLetters === true) {
    characterChoices = characterChoices + 1;
  }
  if(uppercaseLetters === true) {
    characterChoices = characterChoices + 1; 
  }
  if(numericCharacters === true) {
    characterChoices = characterChoices + 1;
  }
  if(specialCharacters === true) {
    characterChoices = characterChoices + 1;
  }
}

let initialPassword = [];

//this is the function that pull together everything above to create the password.
var generatePassword = function() {

  lowercaseLettersChoice();
  uppercaseLettersChoice();
  numericCharactersChoice();
  specialCharactersChoice();

  // This statement ensures that the user has selected at least 1 of the 4 character types for the password.
  if(lowercaseLetters === false && uppercaseLetters === false && numericCharacters === false && specialCharacters === false) {
    window.alert("You must select 'OK' on at least one of the following character type options: lowercase letters, uppercase letters, numbers, and special characters.");
    generatePassword();
  } else {
    getPasswordLength();
  }

  characterChoicesNumber();

  // This section instructs the console to pull random characters from the strings of the character types that the user has selected. 
  for (var i = 0; i < passLength; ++i) {
    if(lowercaseLetters === true) {
      var num = lowercase.charAt(Math.ceil(Math.random() * (lowercase.length - characterChoices)));
      initialPassword.push(num);
    }
    if(uppercaseLetters === true) {
      var num = uppercase.charAt(Math.ceil(Math.random() * (uppercase.length - characterChoices)));
      initialPassword.push(num);
    }
    if(numericCharacters === true) {
      var num = numbers.charAt(Math.ceil(Math.random() * (numbers.length - characterChoices)));
      initialPassword.push(num);
    }
    if(specialCharacters === true) {
      var num = special.charAt(Math.ceil(Math.random() * (special.length - characterChoices)));
      initialPassword.push(num);
    }
  }

  // This check is added in case the number of characters added above exceeds the inputted password length requirement. If it is, then this action removes the last item from the array.
  while (passLength < initialPassword.length) {
    initialPassword.pop();
  }

  // This line randomizes the initialPassword array so that the password will appear in random order to make the password stronger.
  initialPassword.sort(function(){return 0.5 - Math.random()}); //copyright of this code line is to W3schools: https://www.w3schools.com/js/js_array_sort.asp
  
  // This line changes initialPassword from an Array to a String without commas inbetween all characters. It then returns the value to the generatePassword function.
  return initialPassword.join('');

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);