const forMappingArray = [2, 4, 6, 8, 10];
let afterMappingArray;

console.log("Original array: " + forMappingArray);
console.log("-----------------------------------------");

/* Запускаем функцию map */
let divider = 2; // Делитель
afterMappingArray = forMappingArray.map(element => element/2);  // Map возвращает результат

console.log("Original array after mapping: " + forMappingArray);
console.log("New array: " + afterMappingArray);

