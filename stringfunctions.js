var myFirstString="This is a string for Javascript functions,Javascript"
// gives the length of the string
console.log(myFirstString.length)
// gives the index number of starting element of the word
console.log(myFirstString.indexOf('Javascript'))
// gives the index number of element of a string which is at last
console.log(myFirstString.lastIndexOf('Javascript'))
console.log(myFirstString.lastIndexOf('this'))
// get the part of our string whose index start from 0 and goes till last
// slice accept -ve index as well
console.log(myFirstString.slice(0,4))
console.log(myFirstString.slice(21,31))
console.log(myFirstString.slice(-10))
console.log(myFirstString.slice(-20,-11))
// agar hum peeche se start kre counting karna to peeche se -ve element count honge
console.log(myFirstString.slice(-1))
// in below agar humne slice me sirf ek hi index element diya hota haa to woh index se start hokar end tak string likhi jati haa
console.log(myFirstString.slice(4))
console.log(myFirstString.substring(21,10))
console.log(myFirstString.slice(21,10))
// the major difference between slice and substring is that if the 1st argument is greater than 2nd argument,substring() will swap them.
// slice()returns an empty string if the 1st argument is greater than 2nd argument
console.log(myFirstString.substring(0,4))