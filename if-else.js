const score = 85;
const grade = (score >= 90) ? 'A' :
              (score >= 80) ? 'B' :
              (score >= 70) ? 'C' :
              (score >= 60) ? 'D' : 'F';

console.log(`Your grade is: ${grade}`);
//o/p:B

const age = 48;
const isAdult = (age >= 18) ? 'You are an adult.' : 'You are not an adult.';
console.log(isAdult);
//o/p:You are an adult
//explanation:This is because the value of age is 48, which is greater than 18.

var day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
} else {
    console.log("It's a weekday.");
}
//o/p:It's the weekend!

var aage = 20; 
var citizenship = true;

if (aage >= 18 && citizenship) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
//o/p:You are eligible to vote

var bage = 15; 
 var citizenship = false;

if (bage >= 18 && citizenship) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
//o/p:You are not eligible to vote

var username = "Admin"; 
var password = "12345";

if (username.toLowerCase() === "admin" && password === "12345") {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password.");
}
// //o/p:Login successful!









