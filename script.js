                                    // task 1
// ((5 >= 7) || ("javascript" != "java")) && !(((11 * 3) == 99) && true)
(5 >= 7) || ("javascript" != "java") // false || true = true
((11 * 3) == 99) && true // false && true = false
true && !false 
result = true


                                    // task 2
let age = 0;
age = prompt("Сколько Вам лет?");

if (age >= 18 && age <= 59) {
    alert("Вам еще работать и работать " + age)
} else if (age > 59) {
    alert("Вам пора на пенсию " + age)
} else if (age <= 17) {
    alert("Вам еще рано работать " + age)
}
                                    // task 3
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let n = getRandomInt(0, 1000);
let z = n % 100;

if (z > 10 && z < 15) {
    console.log("на ветке сидело " + n + " Ворон")
} else if (z != 11 && z % 10 == 1) {
    console.log("на ветке сидела " + n + " Ворона")
} else if (z % 10 >= 2 && z % 10 < 5) {
    console.log("на ветке сидели " + n + " Вороны")
}
                                    // task 4
let num1 = Math.round(Math.random() * 200 - 100);
let num2 = Math.round(Math.random() * 200 - 100);
let num3 = Math.round(Math.random() * 200 - 100);

let min = 0;
console.log(num1 + " " + num2 + " " + num3);

if (num1 < num2) {
    min = num1
} else {
    min = num2
}
if (num3 < min) {
    min = num3
}

console.log("Наименьшее число: " + min);

let max = 0;

if (num1 > num2) {
    max = num1
} else {
    max = num2
}
if (num3 > max) {
    max = num3
}

console.log("Наибльшее число: " + max);

                                    // task 5
let apples = Math.round(Math.random() * 10);
let oranges = Math.round(Math.random() * 10);
let applesW = apples * 0.1;
let orangesW = oranges * 0.15;

console.log("Апельсинов: " + oranges);
console.log("Яблок: " + apples);

if (applesW > orangesW) {
    console.log("Бери яблоки!");
} else {
    console.log("Бери апельсины!");
}
