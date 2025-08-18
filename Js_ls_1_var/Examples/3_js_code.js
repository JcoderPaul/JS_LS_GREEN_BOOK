// Объект, якобы "константа"
const objectA = {
    a: 10,
    b: true
}

// Делаем копию
const copy_Of_A = objectA 

// Смотрим что внутри объекта
console.dir(objectA)

// Меняем содержимое
objectA.a = 45

// Смотрим, что внутри - странная константа, еще более странное поведение...
console.dir(objectA)

// Создаем еще одно поле или свойство в объекте, считай налету
objectA.c = "Paul"

// Смотрим результат, да, JS - это вам не Java
console.dir(copy_Of_A)