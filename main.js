// let numbers = [];

// for (let i = 0; i < 5; i++) {
//   let input = prompt("Enter number");
//   numbers.push(Number(input)); 
// }

// let max = Math.max(...numbers);

// console.log("Kiritilgan sonlar:", numbers);
// console.log("Eng katta son:", max);


// const arr_1 = [5, 6, true, null, 8];
// const arr_2 = [0, 2, 5, false, 6];

// const total_1 = arr_1.concat(arr_2);

// const total_2 = total_1.reduce((acc, val) => acc + Number(val), 0);

// console.log("Birlashtirilgan array:", total_1);
// console.log("Elementlar yig'indisi:", total_2);


// const arr = [5, 3, 7, 1, 9, 2]; 

// let min = Math.min(...arr);

// let minIndex = arr.indexOf(min);

// console.log("Array:", arr);
// console.log("Eng kichik son:", min);
// console.log("Indeksi:", minIndex);


// const arr = [5, 2, 9];
// const arr_2 = [3, 8, 1];

// const combined = [...arr, ...arr_2];

// const sorted = combined.sort((a, b) => a - b);
// sorted.map(num => console.log(num));



// let carsArr = [
//     {
//       name: "Lasetti",
//       price: 9000
//     },
//     {
//       name: "Damas",
//       price: 7800
//     },
//     {
//       name: "Cobalt",
//       price: 12500
//     },
//     {
//       name: "Gentra",
//       price: 14000
//     },
//     {
//       name: "Onix",
//       price: 17000
//     }
//   ];

//   let price = carsArr
//     .slice()
//     .sort((a, b) => a.price - b.price)
//     .map(car => `${car.name} - ${car.price} so'm`);
  
//   console.log("Narxi bo‘yicha");
//   console.log(price);
  
//   let name = carsArr
//     .slice()
//     .sort((a, b) => a.name.localeCompare(b.name))
//     .map(car => `${car.name} - ${car.price} so'm`);
  
//   console.log("\nNomi bo‘yicha");
//   console.log(name);

  
// let arr = ["Salom", "Raxmat"];

// arr.splice(1, 0, "Yaxshi", "Zo'r");

// arr.map((item, index) => {
//   console.log(`${index + 1}: ${item}`);
// });


// function reverseInput(input) {

//     let reversed = input.toString().split('').map((char, index, arr) => {
 
//       return arr[arr.length - 1 - index];
//     }).join('');
  
//     return typeof input === "number" ? Number(reversed) : reversed;
//   }
  
//   console.log(reverseInput("Hello Sarvar"));
//   console.log(reverseInput(12345)); 


// function createArr() {
//     let size = +prompt("Nechta obyekt kiritmoqchisiz?");
//     let arr = [];
  
//     for (let i = 0; i < size; i++) {
//       let id = prompt(`ID kiriting (${i + 1})`);
//       let name = prompt(`NAME kiriting (${i + 1})`);
//       arr.push({ id, name });
//     }
  
//     console.log(arr);
//   }
  
//   createArr();
  

// function numbers(arr) {
//     return [...new Set(arr)];
//   }
  
//   let num = numbers([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
//   console.log(num); 
  

// function findArr() {
//     let arr = [88, 75, 342, 21, 45, 67];
//     let num = +prompt("Son kiriting:");
//     let index = arr.indexOf(num);
  
//     if (index !== -1) {
//       console.log(`Son indeksi: ${index}`);
//     } else {
//       console.log("Son topilmadi.");
//     }
//   }
  
//   findArr();
  

// function removeArr() {
//     let arr = [88, 75, 342, 21, 45, 67];
//     let num = +prompt("O‘chirmoqchi bo‘lgan sonni kiriting:");
//     let filtered = arr.filter(el => el !== num);
  
//     console.log(filtered);
//   }
  
//   removeArr();


// function maxNum(arr) {
//     arr.sort((a, b) => b - a);
//     return arr[0] + arr[1];
//   }
  
//   let num = maxNum([1, 2, 3, 4, 5]);
//   console.log(num);
  
// let arr = [55, 3, 2, 11, 3, 4, 6, 7, 12];
// arr.sort((a, b) => a - b);
// console.log(arr);


// let arr_2 = [1, 6, 9, 5, 8, 10, 15];
// function rangeSum(arr, start, end) {
//   return arr.slice(start, end + 1).reduce((sum, val) => sum + val, 0);
// }
// console.log(rangeSum(arr_2, 2, 5));

// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// let unique = [...new Set(arr)];
// console.log(unique);


// function findMinMax(arr) {
//     return {
//       min: Math.min(...arr),
//       max: Math.max(...arr)
//     };
//   }
//   console.log(findMinMax([2, 4, 5, 6, 6, 3, 2, 1]));
  

// function reverseArray(arr) {
//     return arr.slice().reverse();
//   }
//   console.log(reverseArray([1, 2, 3, 4]));
  

// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];
// let num = arr.filter(n => n % 2 !== 0);
// console.log("Toqlar:", num, "Soni:", num.length);



// let arr = [2, 3, 4, 5, 7];
// let num = arr.filter((_, i) => i % 2 !== 0);
// console.log(num);


// function maxArr(arr) {
//     return Math.max(...arr.filter((_, i) => i % 2 !== 0));
//   }
//   console.log(maxArr([2, 3, 4, 5, 7]));
  

// function number(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     return arr.map(n => (n > min && n < max ? 0 : n));
//   }
//   console.log(number([2, 1, 3, 8, 4]));
  

// function number(n) {
//     return Array.from({length: n}, (_, i) => i + 1);
//   }
//   console.log(number(5));
  

// let number = [22, 3, 5, 6, 3, 2, 3];
// let reversed = number.reduce((acc, val) => [val, ...acc], []);
// console.log(reversed);


// let number = [3, 5, 6, 3, 2, 3];
// let unique = [...new Set(number)];
// console.log(unique);


// function minArr(arr) {
//     let num = arr.filter((_, i) => i % 2 === 0);
//     return Math.min(...num);
//   }
//   console.log(minArr([3, 5, 6, 3, 2, 3])); 
  