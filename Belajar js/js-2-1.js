// 1. membuat apk menebak dan memunculkan bilangan
// bulat 1-10
// 2. menggunakan operator ternari
// 3. harus bilangan bulat jangan pecahan

var ulang = true;
while(ulang){
    let input = parseInt(prompt('masukkan angka 1-10 untuk menebak angka mana yang akan muncul'));

    let angkaRandom = Math.random();
    if(angkaRandom <= 0.1){
        angkaRandom = 1;
    }else if(angkaRandom <= 0.2){
        angkaRandom = 2;
    }else if(angkaRandom <= 0.3){
        angkaRandom = 3;
    }else if(angkaRandom <= 0.4){
        angkaRandom = 4;
    }else if(angkaRandom <= 0.5){
        angkaRandom = 5;
    }else if(angkaRandom <= 0.6){
        angkaRandom = 6;
    }else if(angkaRandom <= 0.7){
        angkaRandom = 7;
    }else if(angkaRandom <= 0.8){
        angkaRandom = 8;
    }else if(angkaRandom <= 0.9){
        angkaRandom = 9;
    }else if(angkaRandom <= 1){
        angkaRandom = 10;
    }
    switch(input){
        case 1:
            input == 1 && angkaRandom == 1 ? alert(`pilihan anda benar karena ${input} akan menjadi ${angkaRandom}`) : alert(`anda salah karena milih ${input} sedangkan nilainya ${angkaRandom}`);
            break;
        case 2:
            input == 2 && angkaRandom == 2 ? alert(`pilihan anda benar karena ${input} akan menjadi ${angkaRandom}`) : alert(`anda salah karena milih ${input} sedangkan nilainya ${angkaRandom}`);
            break;
        case 3:
            input == 3 && angkaRandom == 3 ? alert(`pilihan anda benar karena ${input} akan menjadi ${angkaRandom}`) : alert(`anda salah karena milih ${input} sedangkan nilainya ${angkaRandom}`);
            break;
        case 4:
            input == 4 && angkaRandom == 4 ? alert(`pilihan anda benar karena ${input} akan menjadi ${angkaRandom}`) : alert(`anda salah karena milih ${input} sedangkan nilainya ${angkaRandom}`);
            break;
        case 5:
            input == 5 && angkaRandom == 5 ? alert(`pilihan anda benar karena ${input} akan menjadi ${angkaRandom}`) : alert(`anda salah karena milih ${input} sedangkan nilainya ${angkaRandom}`);
            break;
        case 6:
            input == 6 && angkaRandom == 6 ? alert(`pilihan anda benar karena ${input} akan menjadi ${angkaRandom}`) : alert(`anda salah karena milih ${input} sedangkan nilainya ${angkaRandom}`);
            break;
        case 7:
            input == 7 && angkaRandom == 7 ? alert(`pilihan anda benar karena ${input} akan menjadi ${angkaRandom}`) : alert(`anda salah karena milih ${input} sedangkan nilainya ${angkaRandom}`);
            break;
        case 8:
            input == 8 && angkaRandom == 8 ? alert(`pilihan anda benar karena ${input} akan menjadi ${angkaRandom}`) : alert(`anda salah karena milih ${input} sedangkan nilainya ${angkaRandom}`);
            break;
        case 9:
            input == 9 && angkaRandom == 9 ? alert(`pilihan anda benar karena ${input} akan menjadi ${angkaRandom}`) : alert(`anda salah karena milih ${input} sedangkan nilainya ${angkaRandom}`);
            break;
        case 10:
            input == 10 && angkaRandom == 10 ? alert(`pilihan anda benar karena ${input} akan menjadi ${angkaRandom}`) : alert(`anda salah karena milih ${input} sedangkan nilainya ${angkaRandom}`);
            break;


        
    }
    ulang = confirm("lagi bang ? ")
}

