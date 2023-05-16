// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function popupInfo() {
  var specialCharacters = confirm("Do you want special characters?");
  var passwordLength = parseInt (prompt ("Choose between 8 and 128 characters in length."), 10)
    // console.log(passwordLength); 
    // console.log(typeof passwordLength); 
    var passwordChoices = {
      length: passwordLength, 
      specialCharacters: specialCharacters, 


    }; 
    return passwordChoices

}


    // console.log(popupInfo()); 

  


// global
//   var numbers [array]; 
//   var uppcase [array]; 
//   var lowercase [array]; 


//   concat (arrays + arrays)
//   print array as string

// *ask # of characters, first


  // var popup = {
  //   chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  //   passwordLength = ; 
  //   .toUppercase; 
  // }

  //   console.log(popup); 

// if


    // const input = prompt(); 
    // alert(input); 

    // if(confirm("How many characters would you like your password to contain?"))
    //   console.log('ok'); 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// var password=document.getElementById("password");

//  function genPassword() {
//     var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var passwordLength = 12;
//     var password = "";
//  for (var i = 0; i <= passwordLength; i++) {
//    var randomNumber = Math.floor(Math.random() * chars.length);
//    password += chars.substring(randomNumber, randomNumber +1);
//   }
//         document.getElementById("password").value = password;
//  }

// function copyPassword() {
//   var copyText = document.getElementById("password");
//   copyText.select();
//   document.execCommand("copy"); 
// }; 