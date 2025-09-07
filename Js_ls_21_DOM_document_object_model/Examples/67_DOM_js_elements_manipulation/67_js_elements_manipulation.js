'use strict';

const panelText = document.querySelector('.panel').innerText;
/* В консоли браузера видим содержимое <div class="panel">I love this!</div> из нашего index.html */
console.log(panelText); 

const newPanelText = document.querySelector('.panel').innerText = 'I hate you!';
/* Заменяем 'I love this!' раннее содержимое текстовой панели 'налету' на 'I hate you!' */
console.log(newPanelText);

/* Зададим текст в форме input */
document.querySelector('.input').value = 'Input your text';