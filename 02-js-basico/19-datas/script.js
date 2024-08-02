
/* 19 Datas */
console.log("");

//data e hora atual do sietema
var date = new Date();
console.log(date);

//data e hora fixa >> 10/01/2022
var date = new Date(2022, 0, 10);
console.log(date);

//data e hora fixa >> 15/03/2022 - 22:30
var date = new Date(2022, 2, 15, 22, 30);
console.log(date);

//data e hora fixa >> 05/04/2022 - 21:20:20
var date = new Date(2022, 3, 15, 21, 20, 20);
console.log(date);

//string MM DD YYYY
var date = new Date("01 05 2022 20:20:20");
console.log(date);

//string MM/DD/YYYY
var date = new Date("11/05/2022");
console.log(date);

//pegando as informações das datas
console.log(date.getDate());
console.log(date.getMonth()); //base 0
console.log(date.getFullYear());

