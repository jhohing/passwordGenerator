// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = prompt("Please enter a length for your password. (Must be at least 8 characters and no more than 128 characters long)");
  var lowerCase = confirm("Would you like lowercase letters in your password?");
  var upperCase = confirm("Would you like uppercase letters in your password?");
  var numberic = confirm("Would you like numerical values in your password?");
  var specialChar = confirm("Would you like special characters in your password?");

  var pass = {
    "lowerCaseLetters": "abcdefghijklmnopqrstuvwxyz",
    "upperCaseLetters": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "numbers": "0123456789",
    "specialChars": "!\"#$%&\'()*+\,-/:;<=>?@[\\]^_`{|}~"
  }

  if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("Please choose a number between 8 and 128!!");
  }

  





}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
