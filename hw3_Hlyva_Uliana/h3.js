
let number = prompt('Введіть перше число');
function getMaxDigit (number) {number = (number + '').split ('').sort (); 
return 'max=' + number [number.length - 1]
};
console.log (getMaxDigit (number));
document.writeln(`<b>Функція №1:</b>` + getMaxDigit (number) + '<br>');

//222222222222222222222222222222222222222222222222
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
console.log(pow(6, 2));

document.writeln(`<b>Функція №2:</b>` + pow(6, 2) + '<br>');

//333333333333333333333333333333333333333333333333
let name = prompt('Введіть ім`я');
function bigFirstLetter(name) {
	return name.charAt(0).toUpperCase()+name.substring(1).toLowerCase();
}
console.log (bigFirstLetter(name));
document.writeln(`<b>Функція №3:</b>` + bigFirstLetter(name)+ '<br>');


//444444444444444444444444444444444444444444444444
let tax = 0.195;
let sum = prompt('Введіть зарплату без податку');
function wage(sum) {
	sum = sum - sum*tax;
	return sum;
}
console.log (wage(sum));
document.writeln(`<b>Функція №4:</b>` + wage(sum)+ '<br>');
//555555555555555555555555555555555555555555555555
let n = prompt('Введіть перше число');
let m = prompt('Введіть друге число(більше за перше)');
function getRandomNumber(n, m) {
 	return Math.trunc(Math.random() * (m-n) + n);
 }
 console.log (getRandomNumber(n, m));
document.writeln(`<b>Функція №5:</b>` + getRandomNumber(n, m)+ '<br>');
 //6666666666666666666666666666666666666666666666

let word = prompt('Введіть довільне слово');
let letter = prompt('Введіть букву з даного слова');
 function countLetter(word, letter) {
 let letter_Count = 0;
 for (let position = 0; position < word.length; position++) 
 {
    if (word.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
console.log(countLetter(word, letter));
document.writeln(`<b>Функція №6:</b>` +countLetter(word, letter)+ '<br>');


//777777777777777777777777777777777777777777777777
let money = Number(prompt("Скільки грошей, ви маєте?"));
let moneyCurrency = prompt("Яку валюту ви маєте($, UAH)?");
let currencySystem  = prompt("В яку валюту ви хочете конвертувати($, UAH)?");
let currency;
let exchangeRateUSD = 25;
function convertCurrency(currency, currencySystem) {
  if (currencySystem === '$' && moneyCurrency === 'UAH' || moneyCurrency  === 'Uah' || moneyCurrency  === 'uah') {
  	currency = money * exchangeRateUSD;
  	return currency;
  	console.log(currency);
  } 
  else if (moneyCurrency ==='$' && currencySystem  === 'UAH' || currencySystem  === 'Uah' || currencySystem  === 'uah') {
    currency = money * exchangeRateUSD;
    return currency;
    console.log(currency);
  } 
}
console.log(convertCurrency(currency, currencySystem));
document.writeln(`<b>Функція №7:</b>` +convertCurrency(currency, currencySystem)+ '<br>');


//888888888888888888888888888888888888888888888888
let password = 8;
 function getRandomPassword(password) {
 return +Math.random().toFixed(password)*Math.pow(10,password);
 }
 console.log(getRandomPassword(password = 8));
document.writeln(`<b>Функція №8:</b>` +getRandomPassword(password = 8)+ '<br>');


 //99999999999999999999999999999999999999
let words = prompt('Введіть довільне слово');
let letters = prompt('Введіть букву, яку хочете видалити з даного слова');
 function deleteLetters(letters, words) {
 	let arr = words.split('');
for (let i = 0; i < arr.length; i++) {
	if (arr[i] === letters){
		arr.splice(i, 1); i--;
	}
}
return arr.join('');
}
console.log(deleteLetters(letters, words));
document.writeln(`<b>Функція №9:</b>` +deleteLetters(letters, words)+ '<br>');



//10.10.10.10
let palyndrom =  prompt('Перевіте чи це поліндром');
  function isPalyndrom(palyndrom) {
    if (palyndrom == palyndrom.split('').reverse().join('')) {
    	console.log(palyndrom + '-' + 'поліндром');
    	document.writeln(`<b>Функція №10:</b>` +palyndrom + '-' + 'поліндром'+ '<br>');
    }else{
    	console.log(palyndrom + '-' + 'не поліндром');
    	document.writeln(`<b>Функція №10:</b>` +palyndrom + '-' + 'не поліндром'+ '<br>');
    }
    return palyndrom;
  }
console.log(isPalyndrom(palyndrom));
//document.writeln(`<b>Функція №10:</b>` +isPalyndrom(palyndrom)+ '<br>');

//11.11.11.11.11
let sentence = prompt('Введіть речення');
function deleteDuplicateLetter(sentence) {
	let arr = sentence.split('');
	let res = arr.filter(function(val,i,sentence){
		return arr.lastIndexOf(val) === arr.indexOf(val);
	})
	return res.join('');
}
console.log(deleteDuplicateLetter(sentence));
document.writeln(`<b>Функція №11:</b>` +deleteDuplicateLetter(sentence)+ '<br>');