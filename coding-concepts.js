// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: 10 - .length displays the number of characters are defining a particular variable; blank spaces [] in between letters/numbers also count towards the totality (which is why my initial answer was incorrect, I forgot that fact.).


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: l (the 2nd "l" to be exact)
// b) Verify and explain: o - greetings[4] command starts the "counting" process at 0, instead of 1 as done traditionally which is why I was one character off on my initial guess. 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: JavaScript
// b) Verify and explain: Ruby - Similiar to the previous problem, the counting of an index element starts at 0, not 1 so this is why I was one off from the actual output. 


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: TypeError: weekendDays.toUpperCase is not a function at Object.<anonymous>. --  This occurs because the command is being applied to code that does specify a string and thus no function, so there needs to be more information provided because         .toUpperCase() must be applied to properly identified functions/strings.  


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: 3
// b) Verify and explain: number - typeof command returns the strings of its designated setup so in this case is an "object" (found by removing .length and runing line #56). However, even with my general understanding of .length and not typeof and after research, it is still unclear as to why combing the two gives me an output of "number." Is it because the two combine create an issuing of the 1st listed to be output?? 