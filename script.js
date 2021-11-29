// Declaring a variable and setting its value to the element that has the ID of "generate".
var generateBtn = document.querySelector("#generate");

// Each are their own arrays of charCodes for each type of character that are used later on to generate the password.
  const lowercase_char_codes = arrayFromLowToHigh(97,122)
  const uppercase_char_codes = arrayFromLowToHigh(65, 90)
  const number_char_codes = arrayFromLowToHigh(48, 57)
  const symbol_char_codes = arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64)
  ).concat(
    arrayFromLowToHigh(91,96)
  ).concat(
    arrayFromLowToHigh(123, 126)
  )
  console.log(lowercase_char_codes)
  console.log(uppercase_char_codes)
  console.log(number_char_codes)
  console.log(symbol_char_codes)

// This is an array based on the user's choices.
  var charCodes = []

  // This is how the password is generated and where the randomness comes in. 
  function generatePassword (passwordLength) {
  const passwordCharacters = []
  // this stops it from being an infinite loop.
  for (let i = 0; i< passwordLength; i++) {
    // Math.random returns a decimal, we multiply it by math.floor. charCodes.length is how we access the index.
    let character = charCodes[Math.floor(Math.random() * charCodes.length)]
    console.log(character)
    // changes the character into the string that it is correlated with.
    character = String.fromCharCode(character)
    console.log(character) 
    // we're saving each of the characters as we're looping into the array.
    passwordCharacters.push(character) }
    console.log(passwordCharacters)
  return passwordCharacters.join("")
  
  
}

function userPrompts () {
  var passwordLength = prompt ( "length of password")
  if (passwordLength < 8 || passwordLength > 128) {
    alert( "Password must have more than 8 and less than 128 characters")
    return userPrompts()
  }
// we have to redefine charCodes as an empty array in case the user has not refreshed the page.
  charCodes = []
  
var includeNumbers = confirm("Would you like to include numbers in password? Cancel for no.")
  console.log(includeNumbers)
  if(includeNumbers === true) {
    charCodes = charCodes.concat(number_char_codes)
  }

  var includeLowercase = confirm("Would you like to include lowercase in password? Cancel for no.")
  console.log(includeLowercase)
  if(includeLowercase === true) {
    charCodes = charCodes.concat(lowercase_char_codes)
  }

  
  var includeSymbols = confirm( "Would you like to include symbols in password? Cancel for no.")
  console.log(includeSymbols)
  if(includeSymbols === true) {
    charCodes = charCodes.concat(symbol_char_codes)
  }

  
  var includeUppercase = confirm ("Would you like to include uppercase characters? Cancel for no.")
  console.log(includeUppercase)
  if (includeUppercase === true ) { 
    charCodes = charCodes.concat( uppercase_char_codes) 
  }
  if ( includeNumbers === false && includeSymbols === false && includeLowercase === false && includeUppercase === false) {
    alert ( "You must include at least one type of character.")
    return userPrompts()
  }
  return passwordLength
    
}

function writePassword () {
 var passwordLength = userPrompts()
  var password = generatePassword(passwordLength);
  // this is what generatePassword returns
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function arrayFromLowToHigh (low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
