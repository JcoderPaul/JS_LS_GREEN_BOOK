const userName = "Sanara Questa";

console.log(userName); // Sanara Questa

console.log(userName.includes('Q')); // true
console.log(userName.startsWith('S')); // true
console.log(userName.endsWith('a')); // true

console.log(userName.includes('p')); // false
console.log(userName.startsWith('P')); // false
console.log(userName.endsWith('l')); // false

/* Строка 'под капотом' - объект */
console.log(new String("Tiymus Rodderik").endsWith('k')); // true