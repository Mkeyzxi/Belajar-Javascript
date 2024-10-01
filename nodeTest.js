// import { test } from 'node:test';
import { describe,test } from 'node:test';
import assert from 'node:assert';
// function add yang salah
// function add(nilaiA, nilaiB){
//     return nilaiA + nilaiB;
// }

// function add yang benar
function add(numA, numB) {
    if (typeof numA !== 'number' || typeof numB !== 'number') {
        throw new Error('Expected a number');
    }
    return numA + numB;
}

// nilai add jika penjumlahan diinginkan benar atau salah dari segi hasil
// test('should add correctly', () => {
//   // Arrange
//   const operandA = 1;
//   const operandB = 1;

//   // Action
//   const actualValue = add(operandA, operandB);

//   // Assert
//   const expectedValue = 2;
//   assert.equal(actualValue, expectedValue);
// });


// mengecek apakah add argument bertipe number
// test('should throw an error if string passed on numA parameter', () => {
//     const potentialErrorToBeThrew = () => {
//       // Arrange
//     const operandA = '5';
//     const operandB = 4;
//       // Action
//     add(operandA, operandB);
//     };
//     // Assert
//     assert.throws(potentialErrorToBeThrew, Error);
// });

// pembungkus testing jgn lupa mengimport di test
// describe('Calculator', () => {
//     test('should add correctly', () => {
//       /* ...kode disembunyikan… */
//     });
//     test('should throw an error if string passed on numA parameter', () => {
//       /* ...kode disembunyikan… */
//     });
//     test('should throw an error if string passed on numB parameter', () => {
//       /* ...kode disembunyikan… */
//     });
// });


// kebanyakan orang suka it dari pada test, dan deskribe memiliki kembaran yaitu suite, namun describe dan it merupakan pasangan yang serasi, bukan?
// dokumentasi node js assert : https://nodejs.org/api/assert.html
// dokumentasi node js test runner : https://nodejs.org/api/test.html

// import { describe, it } from 'node:test';
// import assert from 'node:assert';
// import { add } from './calculator.mjs';

// describe('Calculator', () => {
//   it('should add correctly', () => {
//     // Arrange
//     const operandA = 1;
//     const operandB = 1;

//     // Action
//     const actualValue = add(operandA, operandB);

//     // Assert
//     const expectedValue = 2;
//     assert.equal(actualValue, expectedValue);
//   });

//   it('should throw an error if string passed on numA parameter', () => {
//     const potentialErrorToBeThrew = () => {
//       // Arrange
//       const operandA = '5';
//       const operandB = 4;

//       // Action
//       add(operandA, operandB);
//     };

//     // Assert
//     assert.throws(potentialErrorToBeThrew, Error);
//   });

//   it('should throw an error if string passed on numB parameter', () => {
//     const potentialErrorToBeThrew = () => {
//       // Arrange
//       const operandA = 10;
//       const operandB = '8';

//       // Action
//       add(operandA, operandB);
//     };

//     // Assert
//     assert.throws(potentialErrorToBeThrew, Error);
//   });
// });