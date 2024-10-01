// function doSomething(){
//     setTimeout(()=>{
//         console.log('kamu ganteng mbul');
//     },2000)
// }

// async function asyncAwait(){
//     const result = await doSomething();
//     return result;
// }
// // output start, end, kamu ganteng mbul
// console.log('start')
// asyncAwait();
// console.log('end')


// function doSomething(){
//         return 'kamu ganteng mbul';
// }
// async function promiseWithAsyncAwait() {
//     console.log('Start.');
//     const result = await doSomething();
//     console.log(result);
//     console.log('End.');
// }
// // output start, end, kamu ganteng mbul
// promiseWithAsyncAwait();


function promiseExecutor(resolve, reject) {
    setTimeout(() => {
        resolve('You did it!');
    }, 2000);
}
export function doSomething() {
    return new Promise(promiseExecutor);
}

async function promiseWithAsyncAwait(){
    try {
        console.log('start')
        const result = await doSomething();
        // const data = await result;
        console.log(result)
        console.log('end')

    }catch(error){
        console.log('Error' + error)
    }
}

promiseWithAsyncAwait();