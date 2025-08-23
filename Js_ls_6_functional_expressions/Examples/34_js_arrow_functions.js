class Counter {
  constructor() {
    this.count = 0;
  }

  /* Стрелочная функция сохраняет this */
  start() {
        setInterval(() => {
                this.count++;
                console.log(this.count);
        }, 1000);
  }

  stop() {
       process.exit();
  }
}

const counter = new Counter();
counter.start(); // 1 2 3 .... каждую сек.

setTimeout(counter.stop, 4000); // Стоп через 4-и сек.
console.log("---------------------------------------------------------")

/* Возьмем что по проще - наш старый пример */

const creepyMath = (a, b) => {
        let c;
        a += 1;
        c = a + b;
        return c; 
}

console.log(creepyMath(4, 6)); //11
console.log("---------------------------------------------------------")