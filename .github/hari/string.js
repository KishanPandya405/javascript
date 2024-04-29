const name = "kishan"
const repocount = 50

//console.log(name + repocount + " value");

console.log(`my name is ${name} my repo count is ${repocount}`);

const gameName = new String("kishan-ap")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring (0, 5)
console.log(newString);

const anotherString = gameName.slice (-7, 5)
console.log(anotherString);

const newStringOne = "   kishan   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kishanpandya.com/kishan%20pandya"

console.log(url.replace("%20", "-"));

console.log(url.includes("kishan"));

console.log(gameName.split('-'));