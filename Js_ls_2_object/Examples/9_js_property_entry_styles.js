/* Способы записи свойств объектов */

/* Классический */
const userProfile = {
        name: "OldBoy",
        age: 349,
        hasSignedAgreement: false
}

console.log(userProfile) // Смотрим
console.log("-----------------------------------------------------")

/* Ссылочный */
const userName = "OldBoy"
const userAge = 349

const userData = {
        name: userName,
        age: userAge,
        hasSignedAgreement: false
}

console.log(userData)
console.log("-----------------------------------------------------")

/* Короткий вариант - "Сокращенный вариант" */
const usrName = userName // Поленимся - переназначим ссылку
const usrAge = userAge

const userInfo = {
        usrName,
        usrAge,
        hasSignedAgreement: false
}

console.log(userInfo) // Смотрим рез.
console.log("-----------------------------------------------------")

/* CTRL+ALT+N - изучаем консоль */