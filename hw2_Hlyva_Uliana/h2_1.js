let number_1 = +prompt('Введіть перше ціле число!');

		if (Number.isInteger(number_1)){
			console.log('Перше число:', number_1);
		} else{
			console.log('Перше число:', 'NaN');
		}	

let number_2 = +prompt('Введіть друге ціле число!');

		if (Number.isInteger(number_2)){
			console.log('Друге число:', number_2);
		} else{
			console.log('Друге число:', 'NaN');
		}

const yesNo = confirm('Чи потрібно пропускати парні числа?');
	if(yesNo){
		console.log('так');
	}else{
		console.log('ні');
	}
	
//знаходження суми чисел всіх чисел, суми парних
let suma = 0;
let suma_1 = 0;
let parni = 0;
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



document.writeln('<b>Перше число:</b>', number_1 + '<br>');
document.writeln('<b>Друге число:</b>', number_2 + '<br>');
document.writeln('<b>Чи потрібно пропускати парні числа?</b>', yesNo + '<br>');
if (yesNo === true) {
document.writeln('<b>Потрібно:</b>', suma_1-parni + '<br>');
}else if (yesNo === false) {
document.writeln('<b>Непотрібно:</b>', suma_1 + '<br>');
}