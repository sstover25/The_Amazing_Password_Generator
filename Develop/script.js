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
  
  //window.prompts code

var lowercaseLetters = true;
var uppercaseLetters = true;
var numericCharacters = true;
var specialCharacters = true;

var characterChoices = {
  lowercaseLettersChoice: function() {
    //window.confirm("Would you like to include lowercase letters in your password?");
    if(confirm("Would you like to include lowercase letters in your password?")) {
      lowercaseLetters = false;
    }
  },

  uppercaseLettersChoice: function() {
    window.confirm("Would you like to include uppercase letters in your password?");
    if(confirm) {
      uppercaseLetters = false;
    }
  },

  numericCharactersChoice: function() {
    window.confirm("Would you like to include numbers in your password?");
    if(confirm) {
      numericCharacters = false;
    }
  },

  specialCharactersChoice: function() {
    window.confirm("Would you like to include special characters in your password?");
    if(confirm) {
      specialCharacters = false;
    }
  }
}

  // This is the prompt for the password length. Users must input this before receiving their password.
  var passLength = "";

  var getPasswordLength = function() {
  passLength = Number(window.prompt("Please select the desired length of your password. The length must be between 8 to 128 characters."));

  if (passLength >= 8 && passLength <= 128) {
    console.log("Your password length will be " + passLength + ".");
    JSON.stringify(passLength);
    return passLength;
  } else {
    window.alert("You must select a number betwee 8 and 128!");
    getPasswordLength();
  }
}

function generatePassword() {
  characterChoices.lowercaseLettersChoice();
  characterChoices.uppercaseLettersChoice();
  characterChoices.numericCharactersChoice();
  characterChoices.specialCharactersChoice();

  if(lowercaseLetters === false && uppercaseLetters === false && numericCharacters === false && specialCharacters === false) {
    window.alert("You must select 'OK' on at least one of the following options: Lowercase letters, Uppercase letters, Numbers, and Special characters.");
    generatePassword();
  } else {
    getPasswordLength();
    console.log(lowercaseLetters, uppercaseLetters, numericCharacters, specialCharacters, passLength);
  }
}

generatePassword();

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword());