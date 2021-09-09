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
  var lengthofpw = parseInt(prompt("Enter a password length between (8-128)", 8))
  var possibleChars = ""

  if (lengthofpw < 8 || lengthofpw > 128) {
    return "Please enter an amount between 8 and 128!";
  }

  var specialChars = confirm("Include special characters?")

  if (specialChars == true){
    possibleChars += "!@#$%^&*()-+=[]}{";
  }

  var lowerChars = confirm("Include lower case characters?")

  if (lowerChars == true){
    possibleChars += "abcdefghijklmnopqrstuvwxyz"
  }

  var upperChars = confirm("Include upper case characters?")

  if (upperChars == true){
    possibleChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  var numeric = confirm("Include numbers?")

  if (numeric == true){
    possibleChars += "1234567890"
  }

//credit to https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  retVal = "";
  for (var i = 0, n = possibleChars.length; i < lengthofpw; ++i) {
  retVal += possibleChars.charAt(Math.floor(Math.random() * n));
  console.log(possibleChars)
  }
  return retVal;



}
