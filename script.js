// Assignment Code
var generateBtn = document.querySelector("#generate");
//lowercase letter
lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//uppercase letter
upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//numbers
num = [0,1,2,3,4,5,6,7,8,9];
//special characters
specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var options;




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Please enter a length for your password. (Must be at least 8 characters and no more than 128 characters long)");

  //checks if user entered a number and makes sure the number is between 8 and 128
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Length must be between 8 and 128!");
    passwordLength = prompt("Please choose a number between 8 and 128.");
  }

  //if password is between 8 and 128 it continues with the other prompts
  if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerCase = confirm("Would you like lowercase letters in your password?");
    var upperCase = confirm("Would you like uppercase letters in your password?");
    var numeric = confirm("Would you like numerical values in your password?");
    var specialChar = confirm("Would you like special characters in your password?");
  }

  //if all 4 criteria choices are false, it will alert the user
  if(!lowerCase && !upperCase && !numeric && !specialChar){
    options = alert("You have to choose a criteria!")
  }

  //else if for 4 true criteria options
  else if(lowerCase && upperCase && numeric && specialChar){
    options = lower.concat(upper, num, specChar);
  }

  //else if for 3 true criteria options
  else if(lowerCase && upperCase && numeric){
    options = lower.concat(upper, num);
  }

  else if(lowerCase && upperCase && specialChar){
    options = lower.concat(upper, specChar);
  }

  else if(lowerCase && numeric && specialChar){
    options = lower.concat(num, specChar);
  }

  else if(upperCase && numeric && specialChar){
    options = upper.concat(num, specChar);
  }

  //else if for 2 true criteria options
  else if(lowerCase && upperCase){
    options = lower.concat(upper);
  }

  else if(lowerCase && specialChar){
    options = lower.concat(specChar);
  }

  else if(lowerCase && numeric){
    options = lower.concat(num);
  }

  else if(upperCase && numeric){
    options = upper.concat(num);
  }

  else if(upperCase && specialChar){
    options = upper.concat(specChar);
  }

  else if(numeric && specialChar){
    options = num.concat(specChar);
  }

  //else if for 1 true criteria option
  else if(lowerCase){
    options = lower;
  }

  else if(upperCase){
    options = upper;
  }

  else if(numeric){
    options =  num;
  }

  else if(specialChar){
    options = specChar;
  }

  //pass variable is an array that will holder the generated password
  var pass = [];

  //Run a for loop for the length of the user choose
  //Randomly selects varibles based off of the criteria options choosen
  for (var i = 0; i < passwordLength; i++){
    var passOptions = options[Math.floor(Math.random() * options.length)];
    pass.push(passOptions);
  }

  //The join helps convert the pass array into a string
  var newPass = pass.join("");

  return newPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
