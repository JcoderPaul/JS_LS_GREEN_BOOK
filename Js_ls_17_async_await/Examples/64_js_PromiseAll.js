const exp = 23;

/* ----- Пример возвращает результат ----- */
function task1() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(exp + 10);
        }, 2000);
    });
}

function task2() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(exp * 3);
        }, 1000);
    });
}

function task3() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(exp / 2);
        }, 500);
    });
}

async function runTasks() {
    try {
        var results = await Promise.all([task1(), task2(), task3()]);
        console.log("Все результаты:", results);
        console.log("--------------------------------------------------------------")
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

runTasks();

/* ----- Пример возвращает ошибку ----- */
const task4 = async () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        reject(new Error("Ошибка выполнения!"));
                }, 5000);
        });
}
console.log(task4);

async function runAnotherTasks() {
        try {
                var results = await Promise.all([task1(), task3(), task4(), task2()]);
                console.log("Все результаты:", results);
        } catch (error) {
                console.error("Ошибка:", error);
        }
}

runAnotherTasks();