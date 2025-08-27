const cities = {
        msk:{
                temp:{
                        celcius: 25
                }
        },
        spb:{

        }
}

const city = 'msk';
if (cities[city] !== undefined && cities[city].temp !== undefined){
        console.log(cities[city].temp.celcius);
} // 25

console.log(cities[city]?.temp?.celcius); //25

const city2 = 'ekt';
if (cities[city2] !== undefined && cities[city2].temp !== undefined){
        console.log(cities[city2].temp.celcius);
} else {
        console.log(undefined);
} // принудительный вывода в консоль - undefined

console.log(cities[city2]?.temp?.celcius); // undefined, а не бросает ошибку