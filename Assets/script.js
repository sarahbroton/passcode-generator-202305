// Assignment code here
var passwordLength; 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//generateBtn.onclick = popupInfo;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function popupInfo() {
  // while (true) {
    passwordLength = parseInt(prompt("Choose between 8 and 128 characters in length."), 10);
    if (passwordLength < 8 || passwordLength > 129) {
      alert("Invalid password length. Password needs to be greater than 8 and less than 129 characters.");
    }
  //   else {
  //     break
  //   }
  // }
  console.log("passwordLength", passwordLength);
  
  var specialCharacters = confirm("Do you want special characters?");
    if (specialCharacters === true) {
      chars+="!@#$%^&%*()"
    }       
  console.log("specialCharacter", specialCharacters)

  var numericCharacters = confirm("Do you want numeric characters?");
    if (numericCharacters === true) {
      chars+= "1234567890"
    }
  console.log("numericCharacter", numericCharacters)

  var lowercaseCharacters = confirm("Do you want lowercase characters?");
    if(lowercaseCharacters === true) {
      chars+- "abcdefghijklmnopqrstuvwxyz"
    }
  console.log("lowercaseCharacter", lowercaseCharacters)

  var uppercaseCharacters = confirm("Do you want uppercase characters?");
    if(uppercaseCharacters === true){
      chars+- "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
  console.log("uppercaseCharacter", uppercaseCharacters)

  var passwordChoices = {
    length: passwordLength,
    specialCharacters: specialCharacters,
    numericCharacters: numericCharacters,
    lowercaseCharacters: lowercaseCharacters,
    uppercaseCharcters: uppercaseCharacters,

  };

  console.log(passwordChoices);
  return passwordChoices // a return with a value must be called from somewhere els. Otherwise it just ends the function.

}

function generatePassword(){
  var chars="";
  // if the user chose lowercase
  chars+="abcdefgh" // lowercase letters
  // if they choose uppercase
  chars+="ABCDEFGH"
  var password = ""
  // wrap in a for loop and run it as many times as passwordLength
  password += chars.charAt(Math.floor((Math.random()*chars.length)))
  

  // var chars = "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// for (index = 0; index < this.passwordLength; index++) {
//   this.password +=
//   this.generatePassword[Math.floor((math.random()* this.passwordLength)*specialCharacters*numericCharacters*lowercaseCharacters*uppercaseCharacters)]
// }

// document.getElementById("password").value=this.passwordChoices

// var passwordChoices=document.getElementByID("password"); 

// function generatePassword(){
// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// for (var i = 0; i <=passwordLength; i++) {
//   var randomNumber = Math.floor(Math.random() * chars.passwordLength); 
//   password += chars.substring(randomNumber, randomNumber +1); 
// }
// }
// document.getElementById("password").value = password; 

// function copyPassword() {
//   var copyText = document.getElementById("password"); 
//   copyText.select(); 
//   document.execCommand("copy"); 

// }image.png

// Add event listener to generate button
  return password;
}
generateBtn.addEventListener("click", writePassword);
