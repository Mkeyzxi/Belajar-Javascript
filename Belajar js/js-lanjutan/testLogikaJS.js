// let arr = [9,21,8,13,3,7,5];
// arr[7] = 0;


// let arrLeaders = [];

// for(i = 0; i <= arr.length; i++){
//     if(arr[i] > arr[i+1]){
//         arrLeaders.push(arr[i]);
//     }

// }
let arr = [23,43,12,43,1,12,2,2,1,23,53,12,4,7];

// arr.filter((e, i, array) => {
//     console.log(`Index: ${i}, Element: ${e}, Array ${array}`);
//     return i < array.length - 1 && e > array[i + 1];
// });


// let arrLeaders = arr.filter((e, i, array) => {
//     if(array[arr.length]){
//         arrLeaders.push(array[arr.length])
//     }
//     return array[i] > array[i+1]
// })


function leaeders(arr){
    let arrLeaders = arr.filter((e, i, array) => {
        if (i === array.length - 1) {
            return true;
        }
        return e > array[i + 1];
    });
    console.log(arrLeaders)
    
}

leaeders(arr)