import {readFile} from 'fs';

readFile('sample.txt',(error, data)=>{
    if(error){
        console.error(error)
        return (error)
    }

    const dataKu = data.toString().replace('%nama%', 'mbul').replace('%kota%', 'mamuju');
    console.log(dataKu)
})