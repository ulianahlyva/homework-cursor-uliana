//1111111
function getRandomArray(length, min, max) {
	let randomArray =[];
	for (let i = 0; i < length; i++) {
		randomArray.push(Math.floor(Math.random() * max) + min);
	}
	return(randomArray);
}
console.log(getRandomArray(15, 1, 100));
document.writeln(`<p><b>1. Випадковий масив:</b>` + getRandomArray(15, 1, 100));

//222222
let valuesForModa = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 5.6 ,7, 8.9];
function getModa(...valuesForModa){
	let valuesForModaInt = [];
	let valuesForModaNotInt = [];
	let numbersModa = [];
	 let numbers_Count ={};
	 let maxNumbers_Count = 0;
	for (let i =0; i < valuesForModa.length; i++) {
		if (Number.isInteger(valuesForModa[i])) {
		valuesForModaInt.push(valuesForModa[i]);
		valuesForModaInt.forEach(el=>numbers_Count[el] = numbers_Count[el]+1 ||1);
		for (let key in numbers_Count) {
			if(numbers_Count[key]>maxNumbers_Count){
				numbersModa = [Number(key)];
				maxNumbers_Count = numbers_Count[key];
			}else if (numbers_Count[key] === maxNumbers_Count) {
				numbersModa.push(Number(key));
			}
			if(numbersModa.length === Object.keys(numbers_Count).length){
				numbersModa = [];
			}
		}
		//console.log(valuesForModaInt);
	} else {valuesForModaNotInt.push(valuesForModa[i]); 
		//console.log(valuesForModaNotInt);
	}
	}
  return numbersModa;
}
console.log(getModa(...valuesForModa));
document.writeln(`<p><b>2. Мода з вибірки чисел ${valuesForModa} :</b>`+ ' ' + getModa(...valuesForModa));




//3333333
let numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 3.5];
function getAverange(...numbers) {
	let sum = 0;
	let numbersInt = [];
	let numbersNotInt = [];
	for (let i =0; i < numbers.length; i++) {
		if (Number.isInteger(numbers[i])) {
		numbersInt.push(numbers[i]);
		//сума цілих чисел
		sum +=numbersInt[i];
	} else {numbersNotInt.push(numbers[i]); 
	}
	}
	return (sum/numbersInt.length);
}
console.log(getAverange(...numbers));
document.writeln(`<p><b>3. Середнє арифметичне:</b>` + getAverange(...numbers));


//44444444444444
let values = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
function getMedian(...values){
	let valuesInt = [];
	let valuesNotInt = [];
	let mediana;
	for (let i =0; i < values.length; i++) {
		if (Number.isInteger(values[i])) {
		valuesInt.push(values[i]);
		valuesInt.sort((x, y) => x-y);
		//шукаємо середину масиву значень
		let lowLimit = Math.floor((valuesInt.length-1)/2);
		let highLimit = Math.ceil((valuesInt.length-1)/2);
		mediana =(valuesInt[lowLimit] + valuesInt[highLimit])/2;
		//console.log(valuesInt);
	} else {valuesNotInt.push(values[i]); 
		//console.log(valuesNotInt);
	}
	}
	return mediana;
}
console.log(getMedian(...values));
document.writeln(`<p><b>4. Медіана з вибірки чисел ${values} :</b>`+ ' ' + getMedian(...values));


//5555555555
let numbersFive =[1, 2, 3, 4, 5, 6];
	let evenNumbers = numbersFive.filter(numb => numb%2===1);
	console.log(evenNumbers);
document.writeln(`<p><b>5. Непарні числа з чисел ${numbersFive}:</b>` + evenNumbers);


//66666666

let num = [1, -2, 3, -4, -5, 6];
function countPositiveNumbers(...num){
	let positiveNumbers =[];
	for (let i = 0; i < num.length; i++) {
		if (num[i] >= 0) {
			positiveNumbers.push(num[i]);
		}
	}
	return positiveNumbers.length;
}
console.log(countPositiveNumbers(...num) );
document.writeln(`<p><b>6. Кількість позитивних значень в масиві:</b>` + countPositiveNumbers(...num) );




//777777
let numbersDividedByFive = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
let DividedByFive = numbersDividedByFive.filter(getDividedbyFive => getDividedbyFive%5===0);
	console.log(DividedByFive);
document.writeln(`<p><b>7. Числа, які діляться на 5, з чисел  ${numbersDividedByFive}:</b>` + DividedByFive);

//888888

//99999
let word = 'My life'
 	function divideByThree(word){
 		let wordWithoutSpace;
 		let newArr;
 		//видалення пробілів з рядка
 		let arr = word.toLowerCase().split('');
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === ' '){
			arr.splice(i, 1); i--;
			}
				wordWithoutSpace = arr.join('');
		if(wordWithoutSpace.length<3){  break; }
		newArr = wordWithoutSpace.match(/.{1,3}/g);
		}
	
	return newArr;
 	}
 	console.log(divideByThree(word));
document.writeln(`<p><b>8. Розбиття слова або речення "${word}" на умовні склади по 3 букви:</b>` + divideByThree(word));





//10.10.10.10.10