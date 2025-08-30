const userName = "Granikus Boers Three";

console.log(userName); // Granikus Boers Three

console.log(userName.replace('G', 'D')); // Dranikus Boers Three
console.log(userName.replaceAll('s', 'N')); // GranikuN BoerN Three

/* Регулярное выражение, простое */

console.log(userName.replace(/s/g, 'N')); // GranikuN BoerN Three