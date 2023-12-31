// menentukan pilihan player

var ulang = true;
while(ulang){
var input = prompt('waktunya suit batu, gunting, atau kertas')
// menangkap pilihan komputer

// membangkitkan  bilangan random
var komp = Math.random();
if(komp < 0.34){
    komp = 'gunting'
}else if(komp >= 34 && komp >= 0.67){
    komp = 'batu'
}else {
    komp = 'kertas'
}

// menentukan rules
if(input == 'gunting'){
    if(input == 'gunting' && komp == 'kertas' ){
    alert(`kamu menang karena ${input} lawan ${komp} menang ${komp}`)
    }else if(input == 'gunting' && komp == 'gunting' ){
    alert(`kamu seri karena ${input} lawan ${komp} menang ${komp}`)
    }else if(input == 'gunting' && komp == 'batu' ){
        alert(`kamu kalah karena ${input} lawan ${komp} menang ${komp}`)
    }
}else if(input == 'batu'){
    if(input == 'batu' && komp == 'batu' ){
        alert(`kamu seri karena ${input} lawan ${komp} menang ${komp}`)
    }else if(input == 'batu' && komp == 'gunting' ){
        alert(`kamu menang karena ${input} lawan ${komp} menang ${komp}`)
    }else if(input == 'batu' && komp == 'kertas' ){
        alert(`kamu kalah karena ${input} lawan ${komp} menang ${komp}`)
    }
}else if(input == 'kertas'){
    if(input == 'kertas' && komp =='batu'){
    alert(`kamu menang karena ${input} lawan ${komp} menang ${komp}`)   
    }else if(input == 'kertas' && komp == 'gunting' ){
    alert(`kamu kalah karena ${input} lawan ${komp} menang ${komp}`)
    }else if(input == 'kertas' && komp == 'kertas' ){
    alert(`kamu seri karena ${input} lawan ${komp} menang ${komp}`)
    }
}
// tampilkan hasilnya

ulang = confirm("apakah anda ingin ulang?");
}