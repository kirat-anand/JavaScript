console.clear()
var exampleString="This is Javascript Tutorials"
// used to convert string into uppercase element
console.log(exampleString.toUpperCase())
// used to convert string to lowercase element
console.log(exampleString.toLowerCase())
var firstName="Javascript"
var secondName="Tutorial"
// concat is used to combine two or more strings in Javascript
console.log(exampleString.concat(firstName))
// ' ',is used to give space between two strings
console.log(exampleString.concat(' ',secondName))
console.log(exampleString.concat(' ', firstName , ' ', secondName))
// we con also use + to give space between two strings
console.log(' ',firstName +' ',secondName)
var myHobbies="    To Travelling    "
// trim is a  function in javascript which is used to reduced the space between the strings
console.log(myHobbies.trim())
var myDescription="My Name is Kirat I am studying CSE at GNE Ludhiana"
console.log(myDescription.charAt(5))
console.log(myDescription.charAt(15))
// charAt is function in Javascript when we pass an argument in the function give the character at that index number
var mySampleString="This + is my Sample + String"
console.log(mySampleString.split('+'))
var mySecondSampleString="This is my Second Sample String HEHEHEHE"
console.log(mySecondSampleString.split('HEHEHEHE'))