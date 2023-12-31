// // // let nama = 'Muhammad Makbul N'
// // // let usia = 19
// // // let tinggiBadan = 170.5
// // // let beratBadan = 55
// // // let Gender = null

// // // if(Gender == null){
// // //         Gender = "Laki-laki"
// // // }else{
// // //         Gender = "Belum punya"
// // // } 
// // // let kamu = 2

// // // switch(kamu){
// // //         case 1:
// // //                 kamu = "saya";
// // //                 break;
// // //         case 2:
// // //                 kamu = "mereka";
// // //                 break;
// // //         default:
// // //                 kamu = "tidak tahu bang";
// // //                 break;
// // // }


// // // alert(`saya adalah ${nama} usia saya saat ini ${usia} tinggi dan berat badan saya ${tinggiBadan} dan ${beratBadan} adapun gender saya adalah ${Gender} dan >> ${kamu}`);


// // // let saldoAwal = 12000000;
// // // let saldoTambahan = 5000000;
// // // // alert(`saldo saya awal saya sebesar Rp.${saldoAwal} & saya saat ini memiliki tambahan Rp.${saldoTambahan} maka jika ditotal semuanya ${saldoAwal + saldoTambahan}`)

// // // for (let i = 0; i < 5; ++i) {
// // //     console.log('kamu')
// // // }

// // // let terima = confirm('yakin dek ?');
// // // if(terima === false){
// // //     alert('yakin bangetlah')
// // // }else{
// // //     alert('nd yakin dek')
// // // }

// // // let ulang = confirm('anda mau disambut? ');

// // // while(ulang === true){
// // //     alert('Hai selamat datang');
// // //     let nama = prompt('masukkan nama anda : ');
// // //     alert('haloo sayang ' + nama);
// // //     ulang = confirm('ulang lagi ?');
    
// // // }

// // // alert('terimakasih')


// // // let angka = prompt('masukkan angka anda : ');
// // // alert('angka yang anda masukkan adalah : ' + angka);
// // // let nomorAngkot = 1 ;   
// // // let jmlhAngkot = 10;
// // // let angkotBeroperasi = 6;

// // // while(nomorAngkot <= angkotBeroperasi){
// // //     console.log(`Angkot No. ${nomorAngkot} Beroperasi dengan baik`);
// // //     nomorAngkot++;
// // // };
// // // ++angkotBeroperasi;
// // // for(angkotBeroperasi; angkotBeroperasi <= jmlhAngkot; ++angkotBeroperasi){
// // //     console.log(`Angkot No. ${angkotBeroperasi} Sedang Tidak Beroperasi`);
// // // };




// //     // let input = prompt('masukkan bilangan untuk mencari tahu : ');

// //     // if(input % 2 == 0){
// //     //     alert(`${input} ini bilangan genap`);
// //     //     confirm(ulang);
        
// //     // }else {
// //     //     alert('anda salah memasukkan angka');
    
    
// //     // };

// // // var angkot = 10;

// // // for(let jumlahAngkot = 1; jumlahAngkot <= angkot; jumlahAngkot++){
// // //     if(jumlahAngkot <= 6){
// // //         console.log(`angkot no. ${jumlahAngkot} beroperasi dengan baik`)
// // //     }else if(jumlahAngkot == 8 & jumlahAngkot == 10){
// // //         console.log(`angkot no. ${jumlahAngkot} sedang lembur`)
// // //     }else {
// // //         console.log(`angkot no. ${jumlahAngkot} sedang tidak beroperasi`)
// // //     }

// // // }

// // // let angka = parseString(prompt('masukkan angka 1-10'))

// // // switch (angka){
// // // case 1: 
// // //         alert('ini adalah angka 1')
// // //         break;
// // // case 2: 
// // //         alert('ini adalah angka 12')
// // //         break;
// // // case 3: 
// // //         alert('ini adalah angka 2')
// // //         break;  
// // // default: 
// // //         alert('ini adalah angka 4')
// // //         break;      

// // // }

// // // function kubusPenjumlahan(kubus1,kubus2){
// // //     let hasil = (kubus1 * kubus1 * kubus1) + (kubus2 * kubus2 * kubus2)

// // //     return hasil;

// // // }

// // // console.log(kubusPenjumlahan(8,3));
// // // console.log(kubusPenjumlahan(4,2));
// // // console.log(kubusPenjumlahan(7,5));
// // // console.log(kubusPenjumlahan(2,6));


// // // function benarGakyah(){ 
// // //     let benar = prompt('masukkan kata benar untuk yah');

// // //     if(benar == 'benar'){
// // //         benar = alert("yah kamu benar");
// // //         return benar;
// // //     }else {
// // //         benar = alert('wah coba lagi, kamu salah')
// // //         return benar;
// // //     }
    
// // // }
// // // benarGakyah();


// // // function tambah(a,b){
// // //     return a + b;
// // // };

// // // function kali(a,b){
// // //     return a * b;
// // // };

// // // var hasil = tambah(tambah(5,5), kali(5,5));
// // // console.log(hasil)

// // // function tambah(){
// // //     var hasil = 0;

// // //     for(i = 0; i < arguments.length; i++){
// // //         hasil += arguments[i];
// // //     }
// // //     return hasil;
// // // }

// // // var coba = tambah(5,5,5,5);
// // // console.log(coba);

// // // "use strict" //>>> untuk membuat vartiabel otomatis lokal jika tidak didefinisikan
// // // function penjelajah(){
// // //     var hasil = 2;
// // //     console.log(hasil)

// // // }
// // // penjelajah();

// // // >>>> Rekursif untuk membuat stop fungcion
// // // function kamu(n){
// // // if(n === 0) return n;
// // //     console.log(n)
// // //     return kamu(n-1);
// // // }
// // // kamu(20);

// // function faktorial(n){
// //     if(n === 0) return 1;
// //     return n * faktorial(n-1);    
// // }

// // faktorial(5);

// // function rekursif(n){
// //     if(n === 0) return 1;
// //     console.log(n)
// //     return n * rekursif(n-1);
// // }

// // rekursif(5);

// // // function kamu(n){
// // //     if(n === 0) return 1;

// // //     console.log(n)
// // //     return n * kamu(n-1)
// // // }

// // // kamu(10);


// function cetakAngka(n){
    
//     if(n === 0){
//         return 1;

//     }
//     console.log(n)
    
//     return n * cetakAngka(n-1)

    
// }

// cetakAngka(10);


// >>>> array multi dimensi
// var a = 12;
// let x = [
//     [a, 24],
//     ['Sara', 23], 
//     ['Peter', 24]
//     ];

// console.log(x[0][0])

// var kita = 'amin'
// var saya = 'bersama'
// var kamu = ` ${saya} kamu naik haji ${kita.length}`

// console.log(kamu)
// var kamu = "kamu";

// var kita = prompt("isis bang")

// console.log(kita)

var aku = 'kita';
alert(`manusia itu ${aku}`)