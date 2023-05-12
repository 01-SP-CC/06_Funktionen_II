"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!"





// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a, b) {
	return a + b;
}

// module: subtraction a - b |  test:
// output(substract(3,2));
// output(substract(3,-2));
// output(substract(3,0));
function substract(a, b) {
	return a - b;
}

// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function muliply(a, b) {
	return a * b;
}

// module: division a / b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(3,0));
function divide(a,b) {
	
if (b == 0) {
	return ERROR_STR_DIV; // Ausnahme + Abbruch
} 
	return a / b; // Regel
}









// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}






