const name = "musavir"
const repoCount = 5


// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Musavir-Rehman')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(0,4)
// const anotherString1 = gameName.slice(-13,4)
// console.log(anotherString1);

const newString1 = "   musa   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://musa.com/musa%20rehman"

console.log(url.replace('%20','-'))

console.log(url.includes('musa'))

console.log(gameName.split('-'))