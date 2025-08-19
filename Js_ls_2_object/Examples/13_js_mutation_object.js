const myCity = {
       city: "Ufa",
       info: {
        state: "RB", // Не забываем разделять запятыми
        status: "state capital",
        square: 708
       }
}

let hisCity = myCity

console.log(myCity)
console.log(hisCity) // Пока все нормально, мы ничего не меняли ссылки обеих переменных указывают на тот же объект
console.log("-------------------------------------------------------------")

/* Вносим изменения во "вторую" ссылку */
hisCity.city = "Gairam"
hisCity.info.square = 1342

console.log(myCity) // Меняется первоначальный объект, что предсказуемо
