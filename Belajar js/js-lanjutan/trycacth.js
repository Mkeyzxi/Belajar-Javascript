function categorizeNumber(input) {
    if (typeof input !== 'number') {
        throw new Error("Input harus berupa bilangan bulat");
    }
    if (input < 0) {
        return "Negatif";
    }
    if (input === 0) {
        return "Nol";
    }
    if (input % 2 === 0) {
        return "Genap";
    }
    
    if (isPrime(input)) {
        return "Prima";
    }
    return "Ganjil";
}

function isPrime(num) {
    if (num < 2) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}

// Contoh penggunaan
try {
    categorizeNumber('abc');
} catch (error) {
    console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}

console.log(categorizeNumber(15));  // Output: "Ganjil"
console.log(categorizeNumber(12));  // Output: "Genap"
console.log(categorizeNumber(17)); 
