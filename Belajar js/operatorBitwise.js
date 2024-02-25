// Operator Bitwise:
// &
// (Bitwise AND) |
// (Bitwise OR) ^
// (Bitwise XOR) ~(Bitwise NOT) <<
// (Shift kiri) >>
// (Shift kanan dengan tanda) >>>
// (Shift kanan tanpa tanda)

// var a = 2;

// var hasil = !a
// console.log(`a = ${a} | hasil : ${hasil}`)
// var hasil = ~a
// console.log(`a = ${a} | hasil : ${hasil}`)

let a = 5; // Binary: 0101
let b = 3; // Binary: 0011

let resultAnd = a & b; // Binary: 0001 (1 in decimal)
console.log("Bitwise AND Result:", resultAnd);

let resultOr = a | b; // Binary: 0111 (7 in decimal)
console.log("Bitwise OR Result:", resultOr);

let resultOrDua = a | b; // Binary: 0111 (7 in decimal)
console.log("Bitwise OR Result:", resultOrDua);
let resultXor = a ^ b; // Binary: 0110 (6 in decimal)
console.log("Bitwise XOR Result:", resultXor);

let c = 5; // Binary: 0101

let resultNot = ~c; // Binary: 1010 (Inverted and negated, -6 in decimal)
console.log("Bitwise NOT Result:", resultNot);

let resultLeftShift = a << 1; // Binary: 1010 (Shifted left by 1, 10 in decimal)
let resultRightShift = a >> 1; // Binary: 0010 (Shifted right by 1, 2 in decimal)

console.log("Left Shift Result:", resultLeftShift);
console.log("Right Shift Result:", resultRightShift);