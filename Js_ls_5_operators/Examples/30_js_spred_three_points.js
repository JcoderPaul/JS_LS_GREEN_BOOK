/* Spred оператор */

const buttonInfo = {
        text: "Hello!"
}

const buttonStyle = {
        color: "Blue",
        width: 200,
        height: 300
}

/* Используя Spred оператор создадим новый объект объединив свойства */

const realButton = {
        ...buttonInfo,
        ...buttonStyle
}

/* Выведем данные в табличном виде */
console.table(realButton)

/*
Получим таблицу вида:
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ text    │ 'Hello!' │
│ color   │ 'Blue'   │
│ width   │ 200      │
│ height  │ 300      │
└─────────┴──────────┘
*/