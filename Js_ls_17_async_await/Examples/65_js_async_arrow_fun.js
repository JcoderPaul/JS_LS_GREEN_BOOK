const asyncFun = async() => {
        throw new Error("Error!");
}

asyncFun()
        .then(val => console.log(val))
        .catch(err => console.log(err.message));

/* Расчет времени работы функции */
const timerPromise = () => new Promise((resolve) => setTimeout(() => resolve(), 2000));

const asyncFunction = async() => {
        console.log("Timer start");
        const startTime = performance.now();

        await timerPromise();

        const finishTime = performance.now();
        console.log("Timer stop");
        console.log("Time shift: " + (finishTime - startTime));
}

asyncFunction();

