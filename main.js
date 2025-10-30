/*
[x] Scrivi un programma che stampi i numeri da 1 a 100
[x] Per i multipli di 3 stampi “Fizz” al posto del numero
[x] Per i multipli di 5 stampi Buzz.
[x] Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
[x] In tutti gli altri casi stampiamo il numero stesso
*/

// Versione di base (stampo direttamente nell'if)

for (let i = 1; i <= 100; i++) {

    if ( i % 15 == 0 ) {
        console.log("FizzBuzz");
    } else if( i % 3 == 0 ) {
        console.log("Fizz");
    } else if ( i % 5 == 0 ) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}

// Con variabile di appoggio "msg"

// for (let i = 1; i <= 100; i++) {

//     let msg = i;

//     if (i % 15 == 0) {
//         msg = "FizzBuzz"
//     } else if (i % 3 == 0) {
//         msg = "Fizz";
//     } else if (i % 5 == 0) {
//         msg = "Buzz"
//     }

//     console.log(msg);

// }

// Condizione esplicite

// for (let i = 1; i <= 100; i++) {

//     if( i % 3 == 0 && i % 5 != 0 ) {
//         console.log("Fizz");

//     } else if ( i % 5 == 0 && i % 3 != 0 ) {
//         console.log("Buzz");

//     } else if ( i % 3 == 0 && i % 5 == 0 ) {
//         console.log("FizzBuzz");

//     } else {
//         console.log(i);
//     }

// }


// Versione con concatenazione di stringhe e if separati

// for (let i = 1; i <= 100; i++) {

//     let msg = "";

//     if( i % 3 == 0 ) {
//         msg += "Fizz";
//     }

//     if ( i % 5 == 0 ) {
//         msg += "Buzz"
//     }

//     if ( i % 3 != 0 && i % 5 != 0) {
//         msg = i;
//     }

//     console.log(msg);

// }

console.log("Ciclo terminato");