// forLoops offer us a quick and easy way to do something repeatedly

// for 

/* 
    BRONZE

    - Write a for loop that runs until it's reached the end of the alphabet array, and prints each letter to the console.
*/

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i])
}
for (let i = 0; i < alphabet.length; i++) {
    if (i % 2===0) {
    console.log(alphabet[i])
} else console.log("odd");
}

let arr = []
for (let i = 0; i < alphabet.length; i++) {
    if (i % 2 ===0) {
    arr.push(alphabet[i])
    console.log(arr)
}
    else console.log(`index of ${alphabet[i]} is odd`)
}