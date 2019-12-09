/*
Directions: 

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (let i = 1; i <= 100; i++) { //iterates up to 100
  if (i % 3 == 0 && i % 5 != 0) { //modulo checks all numbers only divisible by 3 but not 5
    console.log("Fizz"); //prints 'Fizz' to console
  } else if (i % 5 == 0 && i % 3 != 0) { //modulo checks all numbers divisible by 5 but not 3
    console.log("Buzz"); //prints 'Buzz' to console
  } else if (i % 3 == 0 && i % 5 == 0) { //modulo checks all numbers divisible by both 3 and 5
    console.log("FizzBuzz") //prints 'FizzBuzz' to console
  } else {
    console.log(i); //prints all other numbers not divisible by 3, 5, or both to console
  }
}