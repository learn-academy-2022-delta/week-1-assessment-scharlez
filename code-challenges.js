// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:

// Use provide variables. 
// Dcelcare a function expression called boilingPoint.
// Set parameters (degrees1, degrees2, degrees3).
// Use conditional statement to compare passed-in strings:
    //if degrees1 is less than or equal to 42 -- we will return "42 is below boiling point"
    //if degrees2 is equal to 212 -- we will return "212 is at boiling point"
    //if degree3 is greater than or equal to 350 -- we will return "350 is at boiling point"
    //use else or else if to evaluate non-numerical digits and return the other with "Invalid entry, temperature not possible in this reality."

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (degree1, degree2, degree3) => {
    if(degree1 <= 42) {
        return "42 is below boiling point"
    } else if (degree2 = 212) {
        return "212 is at boiling point"   
    } else if (degree3 > 350) {
        return "350 is at boiling point"
    }
}
    console.log (boilingPoint(2)) // 42 is below boiling point
    console.log (boilingPoint(36)) // 42 is below boiling point
    console.log (boilingPoint(212)) // 212 is at boiling point
    console.log (boilingPoint(500)) // 212 is at boiling point 
    
    // Note to Instructor: I'm not sure why "degree3" parameters aren't showing up at "350 is at boiling point". I've tried line #42 with the >= and > but in both cases as well even attempted to create a seperate/additional solo "if" statement just for that line of code but regardless I was unable to get the desired output. Are there only supposed to be 2 parameters or is 3 allowed? At least one of my parameters doesn't seem to be registersing on some level as I keep getting this synthax error "'degree2' (*Sometimes its 'degree3') is declared but its value is never read." I found this odd/confusing. 

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:

// Use provided variables. 
// Declare a function expression called comboArrays. 
// Combine two arrays into one sequency. 
// Return the variable length from previously combined output. 

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const comboArrays = myNumbers1.concat(myNumbers2)
console.log(comboArrays) // [3,  7,  0, 36, -9, 8, -7, 42,  9, 13]
console.log (comboArrays.length) // 10 

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code:

// Use provided variable. 
// Declared function expression called nameReverse. 
// Set parameters (string1)
// Use conditional statement to compare passed-in strings:
    //if string1 is longer than 1 character, then return with reverse output

const currentCohort = "Delta 2022"

// const nameReverse (string1) => {
//     if (string1.length > 1) {
//         return "2202 atleD"
//     }
// }
// console.log (currentCohort)

// Note to Instructors: This one was a bit confusing for me. I tried so many different options but I'm not sure I understand the basics of what is really being asked here; so my code never ran correctly. I keep getting various Syntax Errors and I'm unsure how that's possible. (This is why I have line #81-86 "silenced".)

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:

// Use provided variable. 
// Create logic in the loop for result "odd" & "even"

const myArray = [13, 34, 5, 10, 27, 42]

// Edge Case: 

// for (let i = 0; i < myArray.length; i++) {
//     if(myArray[i] % 2 !=0) {
//         console.log(`${myArray[i]} odd`)
//     }
// }

    // output: 13 odd, 5 odd, 27 odd
 
    for (let i=0; i<=42; i++){
        if(i % 2 ===1) {
            console.log("odd")
        }
    }    
    for (let i=0; i<=42; i++){
        if(i % 2) {
            console.log("even")
        }
    } 

     // output: 21 odd
    // output: 21 even

  // Note to Instructors: I wasn't sure on how to combine the results into an alternating odd/even output, but I was able to get an output to identify which numbers are even and odd. 

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:

//Use provide variables. 
// Declare a function called: stringSubtract
// Set parameters (string1, string2)
// Use conditional statement to subtract string differences.
    //if string1 is subtracted from string2 -- we will return with difference of 42
    // use else or else if to evaluate the opposite 

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const stringSubtract = (string1, string2) => {
    if(string1 - string2){
        return 42
    } else if(string2 - string1) {
        return string 
    }
}

console.log (stringSubtract (number1, number2)) // 42
console.log (stringSubtract (number3, number4)) // 42

// Note to Instructors: I'm having a little trouble understanding the relationship between the two sets and the strings, I think that is holding me up from correctly source coding this function to get both desired outputs instead of just one. Would love some assistance in this matter. 