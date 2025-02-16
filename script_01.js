"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
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


// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));
function calculator(a,b,op) {

switch (op) {
	case "+": return add(a,b);
		// return add
	case "-": return substract(a,b);
		// return sub
	case "*": return muliply(a,b);
		// return mul
	case "/": return divide(a,b);
	case ":": return divide(a,b);
		// return add
		
	default:
		return ERROR_STR_GEN;
}
	
}


// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}

startApp();
function startApp() {
	output(calculator(getNum(),getNum(),getOp()));
	
}

function getNum() {
	return parseInt(prompt("Zahl?"));
}


function getOp() {
	return prompt("Operator?");
}