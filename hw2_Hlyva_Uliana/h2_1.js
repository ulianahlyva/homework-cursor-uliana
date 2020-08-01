let number_1 = +prompt('Введіть перше ціле число!');
	if(!Number.isInteger(number_1)||number_1 == ""){
	do{
		number_1 = +prompt('Введіть перше ціле число ЩЕ РАЗ!');
	}while(!Number.isInteger(number_1));
	}
console.log('Перше число:', number_1);
document.writeln('<b>Перше число:</b>', number_1 + '<br>');


let number_2 = +prompt('Введіть друге ціле число!');
if(!Number.isInteger(number_2)||number_2 == "" || number_2<=number_1){
	do{
		number_2 = +prompt('Введіть друге ціле число ЩЕ РАЗ!');
		}
		while(!Number.isInteger(number_2));
	}
console.log('Друге число:', number_2);
document.writeln('<b>Друге число:</b>', number_2 + '<br>');
 


const yesNo = confirm('Чи потрібно пропускати парні числа?');
	if(yesNo){
		console.log('так');
		document.writeln('<b>Чи потрібно пропускати парні числа?</b>', 'так' + '<br>');
	}else{
		console.log('ні');
		document.writeln('<b>Чи потрібно пропускати парні числа?</b>', 'ні' + '<br>');
	}


	
//знаходження суми чисел всіх чисел, суми парних
let suma = 0;
let suma_1 = 0;
let parni = 0;
if (number_1 <= number_2) {
for (let i = number_1; i <= number_2 ; i++) {
	suma = suma+i;
	suma_1 = suma;
		console.log(suma_1);		
if (i%2 === 0) {
	parni = parni + i;
	console.log(parni);
}
if (yesNo === true) {
	console.log(suma_1-parni);
}else if (yesNo === false) {
	console.log(suma_1);
}
}
}else if (number_2 <= number_1){
	for (let i = number_1; i >= number_2 ; i--) {
	suma = suma+i;
	suma_1 = suma;
		console.log(suma_1);		
if (i%2 === 0) {
	parni = parni + i;
	console.log(parni);
}
if (yesNo === true) {
	console.log(suma_1-parni);
}else if (yesNo === false) {
	console.log(suma_1);
}
}
}
if (yesNo === true) {
	document.writeln('<b>Результат при пропусканні парних чисел:</b>', suma_1-parni + '<br>');
}else if (yesNo === false) {
	document.writeln('<b>Результат при пропусканні непарних чисел:</b>', suma_1 + '<br>');
}