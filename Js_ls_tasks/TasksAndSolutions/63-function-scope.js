/** ЗАДАЧА 63 - Зона видимости функции
 *
 * Что будет выведено в консоль?
 * Ответьте на вопрос без запуска кода.
 */

const b = 2
let d = 15

function myFn1(a) { // <-- a - не определена - undefined
  let b
  let d = 10 // <-- остается в области видимости данной функции
  myFn2(b)
}

function myFn2(a) { // <-- a - не определена до сих пор - undefined
  let c = 5 // Улетает в консоль
  console.log(a, b, c, d) // <-- b и d получаются из глобального окружения см. начало.
}

/* См. подробное объяснение: ..\JS_LS\Js_ls_tasks\DOC\63_Task_Explanations\63_Task_ExplainLogicHappening.md */
myFn1() // undefined 2 5 15
