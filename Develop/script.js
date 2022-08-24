//Var use within a functions makes that variable function scope.
//Password prompts for the user.

var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCaseChars = "!#$ % &'()*+,./:;<=>?";
var numberChars = "0123456789";

function generatePassword(){
  var passwordLength = prompt("Please enter a newPassword length between 8 and 128 characters long?");
  
  if(isNaN (passwordLength)|| passwordLength === false)
  {
    alert("Password has to be a number");
    return false;
  }
  // Checking newPassword length is adequate, if not show error message and ask user to try again by restarting generate newPassword.
  if(passwordLength < 8 || passwordLength >128){
    alert ("Try again, newPassword length needs to be between 8-128 characters");
    return generatePassword();
  }
  else {
  // Create Password criteria prompts for user to fill out, which means "Ok" is True and "Cancel" is False.
  var hasLowerCase = confirm ("Would you like your newPassword to be lowercase?");
  var hasUpperCase = confirm ("Would you like your newPassword to be Uppercase?");
  var hasSpecialCaseChars = confirm ("Would you like your newPassword to include Special Characters in it?");
  var hasNumbers = confirm ("Would you like your newPassword to include numbers in it?");
  }
   
  // This tests that the user does not only select "Cancel"on the previous confirms. If True then an alert will appear, the existing function will stop and restart.
  if (!hasLowerCase && !hasUpperCase && !hasSpecialCaseChars && !hasNumbers)
  {
  alert("You must select at least one criteria!");
  return generatePassword();
  }

  // Password criteria choosen by the user.

 
  var charOptions = (hasLowerCase?lowerCaseChars:"") + (hasUpperCase?upperCaseChars:"") + (hasSpecialCaseChars?specialCaseChars:"") + (hasNumbers?numberChars:"");


// Generate newPassword using a for loop.

var newPassword = "";
for (let i=0; i < passwordLength; i++){ 

  // This gets a single character from the charOptions.
  var randomChar = charOptions [Math.floor(Math.random() * charOptions.length)];
  //newPassword = newPassword + randomChar;
  newPassword += randomChar;

}
return newPassword;

}
// Get references to the #generate element.
var generateBtn = document.querySelector("#generate");

// Write newPassword to the #newPassword input.
function writePassword() {
  /*var newPassword = generatePassword();*/
  var passwordTextElement = document.querySelector("#password");
// We run generate password function and we assign the returned value to passwordTextElement attribute called value.
  passwordTextElement.value = generatePassword();

}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);
