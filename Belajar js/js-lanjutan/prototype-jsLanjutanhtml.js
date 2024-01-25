function mbul() {}

console.log(mbul())

// python tutor (website) untuk mengetahui bagaimanajs mengelola kode kita
// https://pythontutor.com/
// https://pythontutor.com/javascript.html#mode=edit

// cara 1 tidak kedetek di web
// function a() {
//     console.log('ini a')
//     b = () => {
//         console.log('ini b')
//         c = () => {
//             console.log('ini c')

//             function d() {
//                 console.log('ini d')
//             }
//             d()
//         }
//         c()
//     }
//     b()
// }
// a()

// cara 2 kedetek
function a() {
    console.log('ini a')

    function b() {
        console.log('ini b')

        function c() {
            console.log('ini c')
            d()

            function d() {
                console.log('ini d')
            }

        }
        c()

    }
    b()
}
a()