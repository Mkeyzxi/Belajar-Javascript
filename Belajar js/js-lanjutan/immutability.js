// versi saya benar dan sudah dijadikan latihan

// const numbers = [10, 23, 24, 7, 42, 18];
// // merubah nilai array
// function maxMerubah(arrayNumber){
//     return arrayNumber.sort((a, b) => a-b).pop();
// }

// // tidak merubah nilai array
// function maxTidakMerubah(arrayNumber){
//     return [...arrayNumber].sort((a, b) => a-b).pop();
//     // console.log(...arrayNumber)
// }

// // console.log(maxMerubah(numbers))
// // console.log(maxTidakMerubah(numbers))
// // console.log(numbers)

// const objek = {
//     nama: 'Muhammad Makbul N',
//     jenis_kelamin: 'Pria',
// }
// function objekImmutability(obj){
//     return {...obj,email: 'mbulganteng@gmail.com'}
// }




// function objekMerubahNilai(obj){
//     return Object.assign(obj, {email: 'mbulganteng@gmail.com'});
// }

// console.log(objek)
// console.log(objekImmutability(objek));
// console.log(objek)
// console.log(objekMerubahNilai(objek));
// console.log(objek)


// dicoding punya
function max(arrayOfNumber) {
    // menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
    return [...arrayOfNumber]
      .sort((a, b) => a - b)
      .pop();
  }
  
  function registerEmail(person, email) {
    // menggunakan spread operator untuk menduplikasi nilai person
    return { ...person, email };
  }
  
  const numbers = [10, 23, 24, 7, 42, 18];
  const largest = max(numbers);
  
  console.log(largest); // Output: 42
  console.log(numbers); // Output: [ 10, 23, 24, 7, 42, 18 ]
  
  const person = {
    name: 'John',
    username: 'johndoe',
  };
  
  const personWithEmail = registerEmail(person, 'john@dicoding.com');
  
  console.log(person); // Output: { name: 'John', username: 'johndoe' }
  console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }

// fungsi-fungsi js
const newArray = ['mbul', 'kia', 'lia', 'nia'].map(e => e)
console.log(newArray)

const truthyArray = [1, '', 'Halo', 0, null, 'Harry', 14]
    .filter((item) => Boolean(item));

console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]


const students = [
    {
    name: 'Harry',
    score: 60,
    },
    {
    name: 'James',
    score: 88,
    },
    {
    name: 'Ron',
    score: 90,
    },
    {
    name: 'Bethy',
    score: 75,
    }
  ];

// filter
    const eligibleForScholarshipStudents = students.filter((student) => student.score > 85)
    // const eligibleForScholarshipStudents = students.filter((student) => student.score > 85).map(student => student.name);
    // const eligibleForScholarshipStudents = students.filter((student) => student.score > 85).map(student => student);
    // const eligibleForScholarshipStudents = students.filter((student) => student.score > 85).map(student => ({...student}));
  
  console.log(eligibleForScholarshipStudents);

// reduce
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore); // Output: 313