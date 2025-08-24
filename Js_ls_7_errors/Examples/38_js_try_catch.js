/* Ошибки нужно ловить */
const funWithError = () => {
        throw new Error("My second error!")
}

try {
        funWithError()
} catch(error) {
        console.log(error)      // Сама ошибка со стеком
        console.log(error.message)      // Только сообщение: My second error!
}

console.log("Finish program!")