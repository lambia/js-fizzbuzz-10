/*
[x] Scrivi un programma che stampi i numeri da 1 a 100
[x] Per i multipli di 3 stampi “Fizz” al posto del numero
[x] Per i multipli di 5 stampi Buzz.
[ ] Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
[x] In tutti gli altri casi stampiamo il numero stesso
*/

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

console.log("Ciclo terminato");