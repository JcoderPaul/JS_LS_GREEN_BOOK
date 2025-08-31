function brLine(){
        console.log("______________________________________");
}
/* Оператор `??` похож на `||`, но проверяет только `null` и `undefined`, игнорируя другие falsy значения */
let userName = '';

console.log(userName || "Admin"); // userName - false, "Admin" - true -> в консоли Admin 
brLine();
console.log(userName ?? "Admin"); // ''

brLine();
let age = 0;

console.log(age || 18); // 18 т.к. 0 - false, но...
console.log(age ?? 18); // 0