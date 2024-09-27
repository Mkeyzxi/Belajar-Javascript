// main.js
// bagian 1
// import Function from './anotherfile.mjs';
// Function();

// bagian 2
// import result from './anotherfile.mjs';
// result();

// bagian3
// import { say } from './anotherfile.mjs';
// say();

// bagian 4
// import { name, email, age } from './anotherfile.mjs';
// console.log(name);
// console.log(email);
// console.log(age);

// bagian 5
// import * as variable from './anotherfile.mjs';
// console.log(variable.name);
// console.log(variable.email);
// console.log(variable.age);

// bagian 6
// import { myFunction as userFunction } from './user.mjs';
// import { myFunction as customerFunction } from './customer.mjs';
// userFunction();
// customerFunction();

//snohterFile.mjs
// bagian 1
// export default function myFunction() {
//     console.log('Ini adalah function export default.');
//   }

// bagian 2
// export function myFunction() {
//     console.log('Ini adalah function export default.');
//   }
// export let a = 'hello world!';

// bagian 3
// export function myFunction() {
//     console.log('Ini adalah contoh named import.');
//   }

// bagian 4
// const email = 'john@gmail.com';
// const name = 'John';
// const age = 25;
// export { name, email, age };

// bagian 5
// const name = 'John';
// const email = 'john@gmail.com';
// const age = 25;
// export { name, email, age };

// bagian 6
// -> user.mjs
    // export function myFunction() {
    //     console.log('Ini dari user.js');
    //   }
// -> customer.mjs
    // export function myFunction() {
    //     console.log('Ini dari customer.js');
    //   }