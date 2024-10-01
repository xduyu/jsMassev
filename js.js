
// For

// const arrNum = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arrNum.length; i++) {
//     console.log(arrNum[i]);
// }


// For Of

// const arrWord = ["dasda", "asdasd", 1, 2, 3, 4, 5]
// for (let el1 of arrWord) {
//     console.log(el1);
// }

// Задача

// const n = Number(prompt("Введите ваше число", 0));
// const arr = [];


// for (let i = 0; i < n; i++) {
//     let newData = prompt("Введите язык программирования", "пусто");
//     arr.push(newData);
// }

// console.log(arr)

// ForEach

// const fruit = ["Apple", "Orange", "Banana", "Pear"];

// fruit.forEach(fr => {
//     console.log(fr)
// });



// film

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numEven = numbers.filter(el => el % 2 == 0);
// console.log(numEven)

// for (el of numbers) {
//     if (el % 2 == 0) {
//         numEven.push(el);
//     }
// }

// console.log(numEven)

// Map

// const strArr = ["строка 1", "строка 2", "строка 3"]
// const changeArr = strArr.map((el) => el.toUpperCase())
// console.log(changeArr)

// for (let i = 0; i < str.length; i++) {
//     let change = str[i].toUpperCase();
//     changeArr.push(change);
// }

// console.log(changeArr)



// Reduce

// 1

// // let arr = [35, 232];
// let sum = 0;

// for (el of arr) {
//     sum += el
// }

// console.log(sum)

// 2 Reduce


// let sum = arr.reduce((count, el) => count + el, 0)
// console.log(sum)


// Задачи


// const numbers = [-1, -3, 2, 324, -32, 2]

// const nastr = numbers.filter(el => el > 0)
// const astr = numbers.filter(el => el < 5)
// console.log("Кол-во положительных чисел:" + nastr.length)
// console.log("Кол-во отрицательных чисел:" + astr.length)