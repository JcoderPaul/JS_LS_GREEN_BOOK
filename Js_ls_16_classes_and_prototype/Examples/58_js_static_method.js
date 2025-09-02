/* Пример с документирующими комментариями */

/**
 * Utility class for geometric calculations only static element 
 */
class Geometry {
        /**
         * Calculates the area of a circle
         * @param {number} radius - The radius of the circle
         * @returns {number} The area
         */
        static circleArea(radius) {
                if (typeof radius !== "number" || radius < 0) {
                        throw new Error("Radius must be a non-negative number");
                }
                return this.PI * radius ** 2;
        }

        /**
         * Constant for PI
         * @type {number}
         */
        static PI = 3.14159;

        /**
         * Creates a circle object
         * @param {number} radius - The radius of the circle
         * @returns {Object} Circle object
         */
        static createCircle(radius) {
                return {
                        radius,
                        getArea: () => Geometry.circleArea(radius)
                };
        }
}

/* 
Обращаемся к статическим методам через название класса, а не через экземпляр объекта.
Код потенциально "ошибка генерабельный", но мы не будем его обрамлять try-catch-final,
сделаем это ниже и умышленно вызовем ошибку.
*/

console.log(Geometry.circleArea(5)); // 78.53975
console.log(Geometry.PI); // 3.14159
const circle = Geometry.createCircle(10);
console.log(circle.getArea()); // 314.159

/* Вводим ошибочные данные */
try {
        console.log(Geometry.circleArea(-5)); // Error
} catch (error) { // Ловим
        console.error(error.message);  // Отображаем - Radius must be a non-negative number
}