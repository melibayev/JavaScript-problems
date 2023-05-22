// Problem 1

// let a = +prompt("A: ");
// let b = +prompt("B: ");

// console.log(`Perimetr: ${2 * (a + b)}`);
// console.log(`Yuza: ${a*b}`);


// Problem 2

// let d = +prompt("D: ");

// console.log(`L: ${3.14 * d}`);


// Problem 3

// let a = +prompt("A: ");

// console.log(`V: ${a ** 3}`);
// console.log(`S: ${6 * a ** 2}`);


// Problem 4

// let a = +prompt("A: ");
// let b = +prompt("B: ");
// let c = +prompt("C: ");

// console.log(`V: ${a * b * c}`);
// console.log(`S: ${2 * (a * b  + b * c + a * c)}`);


// Problem 5

// let a = +prompt("A: ");
// let b = +prompt("B: ");

// console.log(`M: ${(a + b) / 2}`);


// Problem 6

// let a = +prompt("A: ");
// let b = +prompt("B: ");
// c = a ** (1 / 2) + b ** (1 / 2);

// console.log(`C: ${c}`);
// console.log(`P: ${a + b + c}`);


// Problem 7

// let r1 = +prompt("r1: ");
// let r2 = +prompt("r2: ");
// let s1 = 3.14 * r1;
// let s2 = 3.14 * r2;

// console.log(`S1: ${s1}`);
// console.log(`S2: ${s2}`);
// console.log(`S: ${(s1 - s2) * 3.14}`);


// Problem 8

// let l = +prompt("L: ");
// let r = 2 * 3.14 / l;
// console.log(`R: ${r}`);
// console.l+og(`S: ${r ** 2 * 3.14}`);


// Problem 9

// let x1 = +prompt("x1: ");
// let x2 = +prompt("x2: ");
// let y1 = +prompt("y1: ");
// let y2 = +prompt("y2: ");

// console.log(`L: ${(((x1 - x2) ** 2) + ((y1 - y2) ** 2)) ** (1 / 2)}`);

// Problem 10

// let a = +prompt("A: ");
// let b = +prompt("B: ");
// let c = +prompt("C: ");

// console.log(`A: ${b}`);
// console.log(`B: ${c}`);
// console.log(`C: ${a}`);


// Problem 11

// let x = +prompt("x: ");

// console.log(`y: ${4 * ((x - 3) ** 6) - 7 * ((x - 3) ** 3) + 2}`);


// Problem 12

// let a = +prompt("A: ");

// console.log(`A^3: ${a ** 3}`);
// console.log(`A^6: ${a ** 6}`);
// console.log(`A^9: ${a ** 9}`);
// console.log(`A^15: ${a ** 15}`);


// Problem 13

// let tf = +prompt("Tf: ");

// console.log(`Tc: ${(tf - 32) * 5 / 9}`);


// Problem 14

// let a = +prompt("A: ");
// let b = +prompt("B: ");

// console.log(a - b);


// Problem 15

// let olmaNarxi = +prompt("Olmaning narxi: ");
// let olmaKg = +prompt("Necha kilogramm: ");
// let olmaNarxi2 = +prompt("2-Olmaning narxi: ");
// let olmaKg2 = +prompt("Necha kilogramm: ");

// console.log(`${(olmaNarxi * olmaKg) + (olmaNarxi2 * olmaKg)} sum`);


// Problem 16

// let number = +prompt("3 xonali son kiriting: ");
// let c = number % 10;
// let b = ((number - c) % 100);
// let a = (number - (b + c)) / 100;

// console.log(a);
// console.log(b / 10);
// console.log(c);


// Problem 17

// let number = +prompt("3 xonali son kiriting: ");
// let c = number % 10;
// let b = ((number - c) % 100);
// let a = (number - (b + c)) / 100;

// console.log(a + (b / 10) + c);


// Problem 18
// 245
// let number = +prompt("3 xonali son kiriting: ");
// let c = number % 10;
// let b = ((number - c) % 100);
// let a = (number - (b + c)) / 100;

// let ca = c * 100;
// ca += b;
// ca += a;

// console.log(ca);


// Problem 19

// let number = +prompt("3 xonali son kiriting: ");
// let c = number % 10;
// let b = ((number - c) % 100);
// let a = (number - (b + c)) / 100;

// let ba = ((b / 10) * 100) + (a * 10) + c;

// console.log(ba);


// Problem 20

// let number = +prompt("3 xonali son kiriting: ");
// let c = number % 10;
// let b = ((number - c) % 100);
// let a = (number - (b + c)) / 100;

// let cb = a * 100 + c * 10 + b / 10;
// console.log(cb);


// Problem 21
// 98123
// let number = +prompt("999 dan katta bo'lgan son kiriting: ");
// let c = number % 10; 
// let b = ((number - c) % 1000);
// let a = number - (b + c);

// console.log((a % 10000) / 1000);


// Problem 22

// let s = +prompt("Sekund: ")
// console.log(`Kun boshidan ${Math.floor(s / 60)} minut o'tdi`);


// Problem 23

// let s = +prompt("Sekund: ")
// console.log(`Kun boshidan ${Math.floor(s / 3600)} soat o'tdi`);


// Problem 24

// let s = +prompt("Sekund: ");
// let minut = Math.floor(s / 60);
// let sekund = s % 60;
// console.log(`Kun boshidan ${minut} minut va ${sekund} sekund o'tdi`);


// Problem 25

// let s = +prompt("Sekund: ");
// let soat = Math.floor(s / 3600);
// let sekund = s % 3600;
// console.log(`Kun boshidan ${soat} soat va ${sekund} sekund o'tdi`);