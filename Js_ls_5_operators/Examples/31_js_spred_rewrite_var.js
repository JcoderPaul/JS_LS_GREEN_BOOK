const buyButton = {
        width: 200,
        text: "Buy",
        color: "Green"
}

const redButton = {
        color: "Red",
        shape: "Oval"
}

/* Перекрасим кнопку BUY в красный цвет */
const newRedBuyButton = {
        ...buyButton,   // Первым идет тот кого будут "переопределять существующим наполнением" объекта
        ...redButton    // То что будет переназначать уже (и если) существующее в объекте "над ним"
}

console.table(newRedBuyButton)
/*
B мы видим:
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ width   │ 200    │
│ text    │ 'Buy'  │
│ color   │ 'Red'  │ // Перезапись цвета
│ shape   │ 'Oval' │ // Добавление формы
└─────────┴────────┘
но если сделать так:
*/
console.log("_________________________________________________________")

const newGreenBuyButton = {
        ...redButton,
        ...buyButton
}

console.table(newGreenBuyButton)
/*
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│ color   │ 'Green' │ // Цвет остался первоначальным
│ shape   │ 'Oval'  │ // "Прилетела" форма, как и ранее
│ width   │ 200     │
│ text    │ 'Buy'   │
└─────────┴─────────┘

Порядок следования Spred-ов влияет на последовательность назначения свойств нового (или старого) объекта.
*/