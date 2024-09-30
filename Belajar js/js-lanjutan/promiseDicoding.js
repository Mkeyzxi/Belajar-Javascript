function promiseExecutor(resolve, reject){
    const penentu = Math.random();

    if(penentu > 0.5){
        reject('gagal')
    }

    resolve('berhasil')
}


function eksekusi(){
    return new Promise(promiseExecutor);
}

function terpenuhi(eksekusi){
    console.log(eksekusi)
}

function tidakTerpenuhi(eksekusi){
    console.log(eksekusi)

}

eksekusi().then(terpenuhi, tidakTerpenuhi)
