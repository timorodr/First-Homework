//***SECTION 1***

// 1. DRY = Dont Repeat Yourself. We should pay attention to it to write cleaner code and avoid redundancy. 
// Writing functions helps automate processes throughout our code to reduce rewriting code.

//2. All 3 are variable types however "const" is a variable that cannot be changed, "let" is a variable that can be changed,
// and "var" are globally scoped while that can be changed. "Const" and "let" are block scoped.

//***SECTION 2***
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
g = 0;

const aAnswer = a < b;
console.log(aAnswer);

const bAnswer = c > d;
console.log(bAnswer);

const cAnswer = ("Kelvin" === "Kelvin");
console.log(cAnswer);

const dAnswer = a < b < c;
console.log(dAnswer);

// Adding paranthesis required to be true?
const eAnswer = (a * a === d);
console.log(eAnswer);

const fAnswer = e === "Kelvin";
console.log(fAnswer);

const gAnswer = 48 !== '48';
console.log(gAnswer);

const hAnswer = f !== e;
console.log(hAnswer);

console.log(g);

g = b + c;
console.log(g);
//I used "let" to allow the addition of 'b + c' to change the 'g' variable into a new value.

// console.log(f);
//I did not get an error without using "let" for the 'g' variable. I also did not get an error
//without using the 'const' for the 'f' variable
// 10 = g

//Writing '10=g' gives a SyntaxError: Invalid left-hand side in assignment on line 49

const iAnswer = a > (b || f) < !f && e !== c;
console.log(iAnswer);

//***SECTION 3***
//while (true) {
	//console.log('Do not run this loop');
//}
//The code above is an infinite loop because there is no conditional statement to stop the loop or make the
//loop false.

// const runProgram = true;
//while (runProgram) {
	//console.log('Do not run this loop');
	//runProgram = false;
//}
// The code above is NOT an infinite loop as 'runProgram' changes from true to false once the loop runs one
// time. The expected output is 'Do not run this loop' will show one tine.

let letters = "A";
let i = 0;
// Start a while loop that will run as long as 'i' is less than 20.
while (i < 20) {
	// 'letters' variable adds an "A". Also written as 'letters = letters + A' while the loop is running
	letters += "A";
	//'i' increases by increments of 1 as long as the loop is running starting from 0
	i++;
	//closes the while loop, the code inside this loop will run as long as 'i' is less than 20
}
//Console logging letters will print 20 A's since the loop will run until the condition is false.
console.log(letters);
//The code does what I expected it to.

//***SECTION 4***
//'for' loops have more control and typically used when we know the number of times a loop should run.
//'while' loops can be run when we dont know the exact number of how many times it should run. 
//Both loops code blocks should contain something that helps it get closer to making the conditional
//expression FALSE. *Maybe a while loop is similar to Zombies in Call of Duty. Not sure how many rounds
//of zombies will run but it will stop eventually if the player dies or if the player wins*

//for (let i = 0; i < 100; i++) {
	//console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
//}
//the first component 'i = 0' allows us a starting point for our iterator.
//the second component, the conditional, 'i < 100' tells us that the loop will run as long as i < 100 is true
//the third component, final expression, i++ tells us that after each loop is ran, as long as teh conditional
//is still true, 1 will be added to the iterator.

for(let i = 0; i < 1000; i++) {
	console.log(i);
}
//The difference between \ and / is that \ acts as a continuation of a statement that requires special characters
// the / is a division operator. The \ is allowing the statement to be printed without interuption since more
//than 2 apostophys are utilized.

for(let i = 999; i >= 0; i--) {
	console.log(i);
}


for (let i = 1; i <= 10; i++) {
	console.log("The value of i is: " + (i) + " of 10");
}

for (let i = 1; i <= 10; i++) {
	console.log(`The value of i is: ${i} of 10`);
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
console.log(StarWars);

//const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i < StarWars.length; i++) {
	console.log(i + " " + StarWars[i]);
}

//const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// Instead of printing every iteration adding 2 skips an element and prints every other
for (let i = 0; i < StarWars.length; i+=2) {
	console.log(StarWars[i]);
}
