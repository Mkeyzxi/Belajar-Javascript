// cara export

//bagian 1
// export const name = 'John';
// export const email = 'john@gmail.com';
// export const age = 25;

//bagian 2
//const name = 'John';
//const email = 'john@gmail.com';
//const age = 25;

// import { name, email, age } from './bahanExport.mjs';
// console.log(`${name} ${email}, ${age}`)


// import sayHi, { sayGoodBye } from './bahanExport.mjs';

// sayHi(); // Hai, ini default export dari anotherfile.mjs
// sayGoodBye(); // Bye, ini named export dari anotherfile.mjs


import sayHi, { sayGoodBye, sayGood } from './bahanExport.js';

sayHi(); // Hai, ini default export dari anotherfile.mjs
sayGoodBye(); // Bye, ini named export dari anotherfile.mjs
sayGood();