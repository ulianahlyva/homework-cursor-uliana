let firstPriсe = 15.678;
let secondPriсe = 123.965;
let thirdPriсe = 90.2345;
console.log(Math.max(15.678, 123.965, 90.2345));
document.writeln('<p><b>Максимальне значення:</b>'+ Math.max(15.678, 123.965, 90.2345) +'<BR>');
console.log(Math.min(15.678, 123.965, 90.2345));
document.writeln('<p><b>Мінімальне значення:</b>' + Math.min(15.678, 123.965, 90.2345)+'<BR>');
let sumPrice = firstPriсe+secondPriсe+thirdPriсe;
console.log(sumPrice);
document.writeln('<p><b>Вартість всіх товарів:</b>' + sumPrice + '<BR>');
//округлення в меншу сторону і виведення суми товарів
let firstPriсe_1 = Math.floor(15.678);
let secondPriсe_2 = Math.floor(123.965);
let thirdPriсe_3 = Math.floor(90.2345);
let sumPrice_1 = firstPriсe_1+secondPriсe_2+thirdPriсe_3;
console.log(sumPrice_1);
document.writeln('<p><b>Вартість всіх товарів, без копійок:</b>' + sumPrice_1 + '<BR>');
//виведення суми товарів округленої до сотень
let sumSmall = sumPrice-(sumPrice%100);
let sumBig = sumPrice+(100-sumPrice%100);
if (sumPrice%100>=50){
	console.log(sumBig);
	document.writeln('<p><b>Вартість всіх товарів, округлена до сотень:</b>' + sumBig + '<BR>');
}
else{
	console.log(sumSmall);
	document.writeln('<p><b>Вартість всіх товарів, округлена до сотень:</b>' + sumSmall + '<BR>');
}
//перевірка на парність чи не парність суми
if (sumPrice/2){
	console.log("парне");
	document.writeln('<p><b>Вартість всіх товарів, парна чи непарна:</b>' + 'парне' + '<BR>');
}
else{
	console.log("непарне");
	document.writeln('<p><b>Вартість всіх товарів, парна чи непарна:</b>' + 'непарне' + '<BR>');
}
//виведення здачі після покупки
let payClient = 500;
let rest = payClient-sumPrice;
console.log(rest);
document.writeln('<p><b>Решта з 500 грн:</b>' + rest + '<BR>');
//середнє значення цін 
let midPrice;
midPrice=sumPrice/3;
console.log(midPrice.toFixed(2));
document.writeln('<p><b>Середнє значення вартості всіх товарів,округлене до 2 знаків піля коми:</b>'+ midPrice.toFixed(2) + '<BR>');
//чистий прибуток
let discount = Math.random();
let cost = sumPrice/2;//собівартість товару
let profit;
profit = cost - (sumPrice*((Math.floor(Math.random()*100)+1)/100));
console.log(profit.toFixed(2));
document.writeln('<p><b>Чистий прибуток:</b>' + profit.toFixed(2)); 