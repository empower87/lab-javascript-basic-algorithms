// Iteration 1
let hacker1 = "Max"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Power"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2
function longestName (hacker1, hacker2) {
  if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
}
longestName(hacker1, hacker2)

// Iteration 3.1
let capHacker1 = hacker1.toUpperCase()
let newHacker1 = []
for (let i = 0; i < capHacker1.length; i++) {
  newHacker1.push(capHacker1[i])
}
console.log((newHacker1.join(' ')).toString())

// Iteration 3.2
let reverseHacker1 = []
for (let i = hacker1.length; i >= 0; i--) {
  reverseHacker1.push(hacker1[i])
}
console.log((reverseHacker1.join('')).toString())

// Iteration 3.3
if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
}