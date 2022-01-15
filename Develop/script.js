// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  // MY CODE
  //I need a code that triggers window.prompts when the Generate Password button is clicked
  //For each prompt, the user must answer "OK" or "Cancel"
  //the computer must take the answers for the prompts into account when pulling characters for the password
  //there must be a library of characters for the computer to pull in order to make a password
  //For the length prompt, the user must enter a number between 8 and 128 - this is mandatory


// Arrays of potential characters
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var special = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','^','`','_','~'];

// The below variables set up the functions to check which character types a user wants to include in the password.
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

// This is the prompt for the password length. Users must input this before receiving their password.

var passLength = "";

var getPasswordLength = function() {
  passLength = Number(window.prompt("Please select the desired length of your password. The length must be between 8 to 128 characters."));
  
  // This statement ensures that the password fits within the number range given.
  if (passLength >= 8 && passLength <= 128) {
    console.log("Your password length will be " + passLength + ".");
    JSON.stringify(passLength);
    return passLength;
  } else {
    window.alert("You must select a number betwee 8 and 128!");
    getPasswordLength();
  }
}

//this is the function that pull together everything above to create the password.
function generatePassword() {
  lowercaseLettersChoice();
  uppercaseLettersChoice();
  numericCharactersChoice();
  specialCharactersChoice();

  // This statement ensures that the user has selected at least 1 of the 4 character types for the password.
  if(lowercaseLetters === false && uppercaseLetters === false && numericCharacters === false && specialCharacters === false) {
    window.alert("You must select 'OK' on at least one of the following character type options: Lowercase letters, Uppercase letters, Numbers, and Special characters.");
    generatePassword();
  } else {
    getPasswordLength();
    console.log(lowercaseLetters, uppercaseLetters, numericCharacters, specialCharacters, passLength);
  }
}

generatePassword();

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword());