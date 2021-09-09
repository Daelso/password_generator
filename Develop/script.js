// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var lengthofpw = parseInt(prompt("Enter a password length between (8-128)", 8)) //parseInt to stop any float.
  var possibleChars = "" //on call empties the string

  if (lengthofpw < 8 || lengthofpw > 128 || isNaN(lengthofpw)) {
    return "Please enter an number between 8 and 128!";
  } //makes sure they enter a number between 8 and 128

  var specialChars = confirm("Include special characters?") //If yes, adds chars below.

  if (specialChars == true){
    possibleChars += "!@#$%^&*()-+=[]}{";
  }

  var lowerChars = confirm("Include lower case characters?") //if yes adds lowercase

  if (lowerChars == true){
    possibleChars += "abcdefghijklmnopqrstuvwxyz"
  }

  var upperChars = confirm("Include upper case characters?") //if yes adds uppercase

  if (upperChars == true){
    possibleChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  var numeric = confirm("Include numbers?") //if yes adds numbers

  if (numeric == true){
    possibleChars += "1234567890"
  }

  if (specialChars == false && numeric == false && lowerChars == false && upperChars == false){
    return "You must approve at least one option to generate the password!";
  }

//credit to https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  retVal = "";
  for (var i = 0, n = possibleChars.length; i < lengthofpw; ++i) {
  retVal += possibleChars.charAt(Math.floor(Math.random() * n));
  console.log(possibleChars)
  }
  return retVal;



}
