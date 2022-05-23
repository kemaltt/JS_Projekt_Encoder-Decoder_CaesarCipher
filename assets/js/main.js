const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const input_caesar = document.getElementById('input_caesar')
const input_key = document.getElementById('input_key')
const encoding_type = document.getElementById('encoding_type')
const output_key = document.getElementById('output_key')



const encrypt = () => {
    let input = input_caesar.value.toLowerCase();
    let key = Number(input_key.value % 26);
    let output = '';

    if (encoding_type.value == 'encrypt') {
        for (let i = 0; i < input.length; i++) {
            // console.log(input[i]);
            alphabet.map((el) => {
                // console.log(el);
                if (input[i] == el) {
                    // console.log(alphabet.indexOf(el) + key);
                    if (alphabet.indexOf(el) + key < alphabet.length) {
                        output += alphabet[alphabet.indexOf(el) + key]
                        console.log(output);
                    } else {
                        output += alphabet[alphabet.indexOf(el) + key - alphabet.length];
                    }
                    output_key.innerHTML = output.toUpperCase();
                }
            })
        }
    } else {
        for (let i = 0; i < input.length; i++) {
            alphabet.map((el) => {
                if (input[i] == el) {
                    if (alphabet.indexOf(el) - key >= 0) {
                        output += alphabet[alphabet.indexOf(el) - key]
                        console.log(output);
                    } else {
                        output += alphabet[alphabet.indexOf(el) - key + alphabet.length];
                    }
                    output_key.innerHTML = output.toUpperCase();
                }

            })


        }
    }

}

// const decrypt = () => {
//     let input = input_caesar.value.toLowerCase();
//     let key = Number(input_key.value % 26);
//     let output = '';
//     for (let i = 0; i < input.length; i++) {
//         alphabet.map((el) => {
//             if (input[i] == el) {
//                 if (alphabet.indexOf(el) - key >= 0) {
//                     output += alphabet[alphabet.indexOf(el) - key]
//                     console.log(output);
//                 } else {
//                     output += alphabet[alphabet.indexOf(el) - key + alphabet.length];
//                 }
//                 output_key.innerHTML = output.toUpperCase();
//             }

//         })


//     }
// }