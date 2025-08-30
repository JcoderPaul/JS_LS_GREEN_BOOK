const userName = "Malcolm Stone";

console.log(userName); // Malcolm Stone
console.log(userName[0] + userName[1]); // Ma
console.log(userName.charAt(2)); // l - как и в массивах отсчет от 0

console.log(userName.length); // 13
console.log(userName.indexOf('S')); // 8
console.log(userName.indexOf('co')); // 3
console.log(userName.lastIndexOf('l')); // 5

console.log(userName.includes('lc')); // true
console.log(userName.includes('ta'));// false