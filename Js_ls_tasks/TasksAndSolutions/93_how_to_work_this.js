/**
 * Задача 93 - дополнить предложенный объект функциями (методами) для получения имени:
 * - компании;
 * - ceo;
 * - сотрудника;
 */

const company = {
        name: 'OOO AgroProm',
        getCompanyName: function (){
                return this.name;
        },
        employees: [
                {
                        name: 'Svetik',
                        getEmployName: function(){
                               return this.name;
                        }
                }
        ],
        ceo: {
                name: 'Basyia',
                getCeoName: function(){
                        return this.name;
                }
        }
}

/* Тест */
console.log(company.getCompanyName()); // OOO AgroProm
console.log(company.ceo.getCeoName()); // Basyia
console.log(company.employees[0].getEmployName()); // Svetik