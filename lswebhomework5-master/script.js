//1. print the number 5 to the console

console.log(5);
//2. Print your name to the console
console.log("Joe Chan");
//3. Store your age as a variable called "myAge"

var myAge = 26;

//4. Print to the console how old you will be in 5 years
console.log(myAge+5);

//5. Store your favorite food as a variable called "myFavoriteFood"

var myFavoriteFood = "Steak";

//6. Publish your favorite food to `index.html` using `document.write()`
document.write(myFavoriteFood);
document.write("<br>");

//7. Print the remainder of 14 / 3 to the console

console.log(14%3);

//8. Print the remainder of 829 / 13 to the console
console.log(829%3);


//9. Create a for loop that counts from 0 to 130 by 3s

for ( a = 0; a<=130; a=a+3){
console.log(a);

}

//10. Create a for loop that counts from 3 to 17 by 2s

for (b=3; b<=17; b=b+2){ 
console.log(b);
}

//11. Create a for loop that counts from 100 to 3 by -1

for (c=100; c>=3; c=c-1) {

console.log(c);

}



//12. Create a for loop that counts from 1 to 100 by 1s


for (d = 1; d <= 100; d = d+ 1) {

	console.log(d);
}

//13. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `fizz` if the number is divisible by 5
for (var e =1; e<= 100; e++){

	if (e % 5 === 0) {
		document.write("fizz <br>");

	}

else{ 
document.write(e + "<br>")};

}


//14. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `buzz` if the number is divisible by 3

for (var f =1; f<= 100; f++){

	if (f % 3 === 0) {
		document.write("buzz <br>");

	}

else{ 
document.write(f + "<br>")};

}

//15. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `fizzbuzz` if the number is divisible by 15

for (var g = 1; g <= 100; g++){

if (g % 15 === 0){
	document.write("fizzbuzz <br>");

}

else{ document.write(g+ "<br>")};


}

//EXTRA CREDIT: Fizzbuzz

for (var x = 1; x <= 100; x++){

if (x % 15 === 0){
	document.write("fizzbuzz <br>");

}

else if (x % 5 === 0) {
document.write("buzz <br>");

}

else if ( x % 3 === 0 ) {
	document.write("fizz <br>");
}


else{
	{ document.write(x+ "<br>")};
}


}

/*

The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:

"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

Hint: Use your last three loops and if/then/else statements. You can learn about those here https://www.w3schools.com/js/js_if_else.asp

*/