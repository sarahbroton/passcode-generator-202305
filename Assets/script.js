// Assignment code here
var passwordLength; 
var chars =""; 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// generateBtn.onclick = popupInfo;

// Write password to the #password input

function popupInfo() {
  // while (true) {
    passwordLength = parseInt(prompt("Choose between 8 and 128 characters in length."), 10);
    if (passwordLength < 8 || passwordLength > 129) {
      alert("Invalid password length. Password needs to be greater than 8 and less than 129 characters.");
      popupInfo(); 
    }
    // console.log("passwordLength", passwordLength);

  //   else {
  //     break
  //   }
  // }
  
    var specialCharacters = confirm("Do you want special characters?");
  // console.log("specialCharacter", specialCharacters)

  var numericCharacters = confirm("Do you want numeric characters?");
  // console.log("numericCharacter", numericCharacters)

  var lowercaseCharacters = confirm("Do you want lowercase characters?");
  // console.log("lowercaseCharacter", lowercaseCharacters)

  var uppercaseCharacters = confirm("Do you want uppercase characters?");
  // console.log("uppercaseCharacter", uppercaseCharacters)

  var passwordChoices = {
    passwordLength: passwordLength,
    specialCharacters: specialCharacters,
    numericCharacters: numericCharacters,
    lowercaseCharacters: lowercaseCharacters,
    uppercaseCharacters: uppercaseCharacters,

  };

  // console.log(passwordChoices);
  return passwordChoices;   

}


function generatePassword(){
  var options = popupInfo()
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

    var characterBank = chars.split(""); 

    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      
    }

  var password = ""
  // wrap in a for loop and run it as many times as passwordLength
  // password += chars.charAt(Math.floor((Math.random()*chars.length)))

  // for (var i = 0; i <=passwordLength; i++) {
  //     var randomNumber = Math.floor(Math.random() * chars.passwordLength); 
  //     password += chars.substring(randomNumber, randomNumber +1); 
  
  // for (generatePassword)
  // split on the word ; "join"
  // options.
  // >129

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


// Add event listener to generate button
  return chars;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}



generateBtn.addEventListener("click", writePassword);
