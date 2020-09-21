const ukraine = { 
	tax: 0.195, 
	middleSalary: 1789, 
	vacancies: 11476 
	}; 
const latvia = { 
	tax: 0.25,
 	middleSalary: 1586, 
 	vacancies: 3921 
 	}; 
const litva = { 
	tax: 0.15, 
	middleSalary: 1509, 
	vacancies: 1114 
	};

//1111
function getMyTaxes(salary) {
	return this.tax*salary;
}
document.writeln(`<b>Податок до сплати в Україні</b> ${getMyTaxes.call(ukraine, 4000)}`+'<br>');
document.writeln(`<b>Податок до сплати в Латвії</b> ${getMyTaxes.call(latvia, 4100)}`+'<br>');
document.writeln(`<b>Податок до сплати в Литві</b> ${getMyTaxes.call(litva, 4200)}`+'<br>');
//2222
function getMiddleTaxes() {
	return this.tax * this.middleSalary;
}
document.writeln(`<b>Середній податок до сплати в Україні</b> ${getMiddleTaxes.call(ukraine)}`+'<br>');
document.writeln(`<b>Середній податок до сплати в Латвії</b> ${getMiddleTaxes.call(latvia)}`+'<br>');
document.writeln(`<b>Середній податок до сплати в Литві</b> ${getMiddleTaxes.call(litva)}`+'<br>');

//3333
function getTotalTaxes() {
	return this.tax * this.middleSalary* this.vacancies;
}
document.writeln(`<b>Скільки всього податків платять IT-спеціалісти в Україні</b> ${getTotalTaxes.call(ukraine)}`+'<br>');
document.writeln(`<b>Скільки всього податків платять IT-спеціалісти в Латвії</b> ${getTotalTaxes.call(latvia)}`+'<br>');
document.writeln(`<b>Скільки всього податків платять IT-спеціалісти в Литві</b> ${getTotalTaxes.call(litva)}`+'<br>');

//4444
function getMySalary() {
	let salary = Math.floor(Math.random() * 2000) + 1500;
	let taxes = salary * this.tax;
	let profit = salary - taxes;
	return {salary, taxes, profit};
	
}
setInterval(function(){
 getMySalary();
}, 10000);

console.log(getMySalary.call(ukraine));
console.log(getMySalary.call(latvia));
console.log(getMySalary.call(litva));
document.writeln(`<b>In console</b>`);