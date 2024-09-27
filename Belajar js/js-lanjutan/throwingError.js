
// tokenisasii
// const kalimat = "saya mau pergi kepasar!";
// let tokenisasi = kalimat.split(' ');
// console.log(tokenisasi)

// inisialisasi variabel expression
const price = 100;
const paid = 80;

// bagian 1

const error = new Error('error abangkuh');
// // console.log(error)
// if (paid < price) {
//         throw error;
// }

// bagian 2
// if (paid < price) {
    // throw new Error('Pembayaran kurang');
// }

// bagian 3
// if (paid < price) {
//     console.log(error.message)
// }

// bagian 4

// try {
//     if (paid < price) {
//         // throw error;
//         console.log('e')
//     }
// } catch (e) {
//     console.log(e.message); // Hanya menampilkan pesan error
// }


// try, cacth, finally
// try {
//     console.log('Ini try block');
//     throw new Error('Error: Program berhenti');
// } catch (err) {
//     console.log('Ini catch block');
// } finally {
//     console.log('Ini finally block');
// }

// contoh implementasi
function checkGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (typeof grades[i] !== 'number') {
            throw new Error('Invalid input. Please provide an array of numbers.');
        }
  
        const grade = grades[i];
        let predicate;
  
        if (grade >= 90) {
            predicate = 'A';
        } else if (grade >= 80) {
            predicate = 'B';
        } else if (grade >= 70) {
            predicate = 'C';
        } else if (grade >= 60) {
            predicate = 'D';
        } else {
            predicate = 'E';
        }
        console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
    }
}

try {
    const studentGrades = [95, 85, 65, 80, 70];
    checkGrades(studentGrades);
} catch (e) {
    console.error(e);
}