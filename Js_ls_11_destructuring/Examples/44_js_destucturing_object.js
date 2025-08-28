/* Есть некий объект */
const userProfile = {
        userName: "Duglas Lind",
        age: 19,
        hasStatus: "ksametar"
}

/* 
Есть некий набор переменных (поля объекта, совпадают с названиями переменных) 
и мы хотим объявить их и присвоить значение им "налету" используя содержимое 
объекта. Еще раз, имена совойств объекта и имена будущих переменных одинаковые
и применяется синтаксис с { }
*/

const { userName, age } = userProfile;
const { hasStatus } = userProfile;

console.log(userName); // "Duglas Lind"
console.log(age); // 19
console.log(hasStatus); // "ksametar"
