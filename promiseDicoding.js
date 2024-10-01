// bagian 1
// function promiseExecutor(resolve, reject){
//     const penentu = Math.random();
//     if(penentu > 0.5){
//         reject('gagal')
//     }
//     resolve('berhasil')
// }
// function eksekusi(){
//     return new Promise(promiseExecutor);
// }
// function terpenuhi(eksekusi){
//     console.log(eksekusi)
// }
// function tidakTerpenuhi(eksekusi){
//     console.log(eksekusi)
// }
// eksekusi().then(terpenuhi, tidakTerpenuhi)


// bagian 2
// function promiseExecutor(resolve, reject){
//     const penentu = Math.random();
//     setTimeout(()=>{
//         console.log(penentu)
//         console.log('melakukan sesuatu sebelum promise diselesaikan')
//         if(penentu > 0.5){
//             resolve('berhasil')
//         }
//         reject('gagal')
//     },0)
// }

// function eksekusi(){
//     return new Promise(promiseExecutor);
// }
// function terpenuhi(eksekusi){
//     console.log(eksekusi)
// }
// function tidakTerpenuhi(eksekusi){
//     console.log(eksekusi)
// }
// eksekusi().then(terpenuhi, tidakTerpenuhi)


const eksekusi = ((resolve, reject) => {
    const number = Math.random();
    if(number > 0.5){
        resolve('berhasil')
    }else {
        reject('gagal')

    }
})

const promise = new Promise(eksekusi)



promise.then(e => console.log(e)).catch(e => console.log(e))