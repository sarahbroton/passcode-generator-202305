// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// generateBtn.onclick = popupInfo;

function popupInfo() {
  // while (true) {
    var passwordLength = parseInt(prompt("Choose between 8 and 128 characters in length."), 10);
    if (passwordLength < 8 || passwordLength > 129) {
      alert("Invalid password length. Password needs to be greater than 8 and less than 129 characters.");
      popupInfo(); 
    }
  
  var specialCharacters = confirm("Do you want special characters?");

  var numericCharacters = confirm("Do you want numeric characters?");

  var lowercaseCharacters = confirm("Do you want lowercase characters?");

  var uppercaseCharacters = confirm("Do you want uppercase characters?");

  var passwordChoices = {
    passwordLength: passwordLength,
    specialCharacters: specialCharacters,
    numericCharacters: numericCharacters,
    lowercaseCharacters: lowercaseCharacters,
    uppercaseCharacters: uppercaseCharacters,

  };

  return passwordChoices;   

}


function generatePassword(){
  var options = popupInfo();
  var chars ="";
  console.log(options.passwordLength); 
    if (options.specialCharacters){
      chars+="!@#$%^&%*()"
    }
    if (options.numericCharacters) {
      chars+= "1234567890"
    }
    if(options.lowercaseCharacters) {
      chars+= "abcdefghijklmnopqrstuvwxyz"
    }
    if(options.uppercaseCharacters){
      chars+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    // console.log(chars.split("")); 

    var passwordArray = []; 
    var characterBank = chars.split(""); 
    console.log(characterBank, chars); 
    // 

    for (let index = 0; index < options.passwordLength; index++) {
      var randomIndex = Math.floor((Math.random()*characterBank.length)); 
      const element = characterBank[randomIndex];
      passwordArray.push(element); 
    }
 
  return passwordArray.join(""); 
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}



generateBtn.addEventListener("click", writePassword);
