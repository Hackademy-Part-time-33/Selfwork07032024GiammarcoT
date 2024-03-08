// ESERCIZIO 1

// let rollnumber = prompt("Quante volte vuoi tirare?");
// let p1result = dicegame(rollnumber);
// let p2result = dicegame(rollnumber);

// console.log("Risultato Player 1: ", p1result);
// console.log("Risultato Player 2: ", p2result);


// function dicegame(rolls) {
//     let sum = 0;
//     for (let numdice = 0; numdice < rolls ; numdice++) {
//         let result = Math.floor(Math.random() * (7 - 1) + 1);
//         sum = sum + result;
//     }
//     return sum;
// }
// if (p1result > p2result) {
//     console.log("il vincitore è Player 1");
// }
// else{
//     console.log("il vincitore è Player 2");
// }



// ESERCIZIO 1 CON ARROW FUNCTION

// let dicegame = rolls => {
//     let sum = 0;
//     for (let numdice = 0; numdice < rolls ; numdice++) {
//         let result = Math.floor(Math.random() * (7 - 1) + 1);
//         sum = sum + result;
//     }
//     return sum;
// }
// let rollnumber = prompt("Quante volte vuoi tirare?");
// let p1result = dicegame(rollnumber);
// let p2result = dicegame(rollnumber);

// console.log("Risultato Player 1: ", p1result);
// console.log("Risultato Player 2: ", p2result);

// if (p1result > p2result) {
//     console.log("il vincitore è Player 1");
// }
// else{
//     console.log("il vincitore è Player 2");
// }




// ESERCIZIO 2

// let numberslist = 60;

// function numbers(n) {
//     for (let i = 1; i <= n; i++) {

//         if (i % 15 == 0) {
//             console.log("fizzBuzz");
//         }
//         else if (i % 5 == 0) {
//             console.log("Buzz");
//         }
//         else if (i % 3 == 0) {
//             console.log("Fizz");
//         }

//         else{
//             console.log(i);
//         }
//     }
// }

// numbers(numberslist);



// ESERCIZIO 2 CON ARROW FUNCTION

// let numberslist = 60;

// let numbers = n => {
//     for (let i = 1; i <= n; i++) {

//         if (i % 15 == 0) {
//             console.log("fizzBuzz");
//         }
//         else if (i % 5 == 0) {
//             console.log("Buzz");
//         }
//         else if (i % 3 == 0) {
//             console.log("Fizz");
//         }

//         else{
//             console.log(i);
//         }
//     }
// }

// numbers(numberslist);




// ESERCIZIO 3

// let insertnumber = prompt("Scegli un numero intero da 1 a 9999");

// function countdigit (numero) {
//     let number = numero.toString().length;
//     if (insertnumber > 9999) {
//         console.log("numero troppo grande");
//     }
//     else{console.log(number);}
// }

// countdigit(insertnumber);



// ESERCIZIO 3 CON ARROW FUNCTION

// let insertnumber = prompt("Scegli un numero intero da 1 a 9999");

// let countdigit = numero => {
//     let number = numero.toString().length;
//     if (insertnumber > 9999) {
//         console.log("numero troppo grande");
//     }
//     else{console.log(number);}
// }

// countdigit(insertnumber);




// ESERCIZIO 4

// function dispenser() {

//     while (true) {
//         let choosedrink = prompt("Scegliere un prodotto: \n 1 = ACQUA \n 2 = COCA COLA \n 3 = BIRRA");
//         switch (choosedrink) {
//             case "1":
//             console.log("E’ stata selezionata l’acqua");
//             return;
//             case "2":
//             console.log("E’ stata selezionata coca cola");
//             return;
//             case "3":
//             console.log("E’ stata selezionata birra");
//             return;
//             default:
//             break;
//         }
//     }
// }
// dispenser();



// ESERCIZIO 4 CON ARROW FUNCTION

// let dispenser = () => {

//     while (true) {
//         let choosedrink = prompt("Scegliere un prodotto: \n 1 = ACQUA \n 2 = COCA COLA \n 3 = BIRRA");
//         switch (choosedrink) {
//             case "1":
//             console.log("E’ stata selezionata l’acqua");
//             return;
//             case "2":
//             console.log("E’ stata selezionata coca cola");
//             return;
//             case "3":
//             console.log("E’ stata selezionata birra");
//             return;
//             default:
//             break;
//         }
//     }
// }
// dispenser();
