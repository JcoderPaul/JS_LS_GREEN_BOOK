function waitForKeyPress() {
    return new Promise((resolve) => {
        function handleKeyPress(event) {
            document.removeEventListener('keydown', handleKeyPress);
            resolve(event);
        }
        
        document.addEventListener('keydown', handleKeyPress);
    });
}

const min = 0;
const max = 9;

function rndGen(){
        return Math.floor(Math.random() * (max - min + 1)) + min;
}


async function main() {
    const wishNumber = rndGen();
 
    console.log('Угадайте задуманное компьютером число (0-9) и введите его:');
    const keyEvent = await waitForKeyPress();
    const answer = Number(keyEvent.key);
    console.log(`Вы ввели: ${answer} и ${answer === wishNumber ? "угадали!" : "не угадали!"}`);

    console.log(`Компьютер задумал: ` + wishNumber);
}

main();

