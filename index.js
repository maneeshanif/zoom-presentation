// Here in this session, we will cover Sir Zia's repo from steps 00 to 5f.
// 1)   Let's Start our journey with the most traditional, most famous word in the programming world
// STEP: 00
console.log("Hello World!!");
// simple the above line print our first program "hello World" in our console;
//--------------------------------------------------------------------------------------------------------------------------------------------
// STeP :00b  Syntax Error
// In programming, a syntax error is like a grammatical error in your code. Just like a sentence with missing words or incorrect punctuation is hard to understand,
// code with syntax errors can't be run by the computer
// lett num1 = 23;
// console.log(num1);  this line throw error bcoz thier is no any keyword like this "lett"
// let fruitName == "Mango"
// so what is the word syntax is ??
// syntax is the set of rules that defines the correct sequence of programming statements in a computer language.
let marks = 70; // this is correct syntax for defining a number variable in js /ts
// int marks = 70;   // this line of code is correct in C language but in js its not correct syntax for variable
// console.log(marks);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//   STEP : 00 c type Error
/*    "Type errors occurs when your syntax is valid but the Typescript type checker has detected an error with the program's types'
                                        These do not block Typescript syntax from being converted to javascript . They do ,howeever,often indicate something will crash
                                        or behave unexpectedly if your code is allowed to run "      */
let request = "Would you like to teach me typescript";
// console.logger(request);  // type error
// console.bulb("Nothing is imposible")
//-------------------------------------------------------------------------------------------------------------------------------------------------
// Step : 00 d ASSignibility error
//  "Assignability errors occur when you try to assign a value to a variable that is not
//  allowed by the type checker. For example, you can't assign a string to a
//  variable that is declared as a number. "
let personName; // when you decalre a variable in ts but not assign any value in it .Its default type is any.
let firstName = "King";
// firstName = true;
console.log(firstName);
let favouriteNumber = 131.0;
favouriteNumber.toFixed(2);
console.log(favouriteNumber);
// ----------------------------------------------------------------------------------------------------------------------------------------
//                                 STEP : 01 Strong Typing
//  "Strong typing is a programming language feature that restricts the types of values that can be
//  assigned to a variable. This is in contrast to weak typing, which allows any value to
//  be assigned to a variable. "
let countryName = "Pakistan";
let atomicCountry = true;
//-------------------------------------------------------------------------------------------------------------------------------------------
// STEP : 02  const and let
//------------------------------------------------------------------------------------------------------------------------------------------
// STEP : 03d Chalks
// "Chalk is a npm pakage .it is used to print the output in the console in different colors .which plays a vital role in
// styling of our cli based aplications"
import chalk from "chalk";
let a = chalk.red("hello Habib");
console.log(a);
console.log(chalk.blue("Hello Anees"));
console.log(chalk.redBright.bgBlueBright.bold("Hello Duniya"));
// Avalaible Text Colors:
// chalk.blue, chalk.green, chalk.yellow, chalk.red, chalk.magenta, chalk.cyan
// chalk.white, chalk.grey, chalk.gray, chalk.black, chalk.redBright, chalk.green
// chalk.yellowBright, chalk.redBright, chalk.magentaBright, chalk.cyanBright,
// chalk.whiteBright, chalk.greyBright, chalk.grayBright, chalk.blackBright
// =========================================================================
// Avalaible Background Colors:
// chalk.bgBlue, chalk.bgGreen, chalk.bgYellow, chalk.bgRed, chalk.bg
// chalk.bgMagenta, chalk.bgCyan, chalk.bgWhite, chalk.bgGrey,
// chalk.bgGray, chalk.bgBlack, chalk.bgRedBright, chalk.bgGreenBright,
// chalk.bgYellowBright, chalk.bgRedBright, chalk.bgMagentaBright, chalk.bg
// chalk.bgCyanBright, chalk.bgWhiteBright, chalk.bgGreyBright, chalk.bg
// chalk.bgGrayBright, chalk.bgBlackBright
// =========================================================================
// Avalaible Text Styles:
// chalk.bold, chalk.underline, chalk.italic, chalk.strikethrough,
// chalk.inverse,
// chalk hexadecimal colors for both text and background colors
// chalk.hex('#FF0000'), chalk.hex('#FF0000')
// , chalk.bghex('#FF0000').bold
// let b : string="anees";
// console.log((chalk.hex("#FF0000"),"habib"));
//--------------------------------------------------------------------------------------------------------------------------------------------------------
//                                            STEP :04 UNIOns and literals
/*  Union:-
                                      Expanding a value's allowed type to be two or more possible types.
                                      Example code :
                                  */
let c = "Hello"; // here i got more choices of datatypes in single variable
c = 3;
console.log(c);
c = "Let them cook";
console.log(c);
let D = "Stars";
let E = 3;
let F = false;
console.log(D, E, F);
//   --------------------------------------------------------------------------------------------------------------------------------------------
//       STEP : 05a Objects
/* Objects:-
                                             "  Objects are a collection of key-value pairs. The key is a string and the value
                                              can be any type. The key is used to access the value."
                              
                                    / * Diference between normal variables and object:
                                    * 1. Normal variables are used to store a single value.
                                    * 2. Objects are used to store multiple values.
                                    */
let teacher = {
    name: "Anees",
    age: 20,
    faculty: "Computer Science",
};
// / there are two ways to excess the Objects
// 1. Dot notation
console.log(teacher.name);
console.log(teacher.faculty);
// 2. Bracket notation
console.log(teacher["name"]);
console.log(teacher["age"]);
//---------------------------------------------------------------------------------------------------------------------------------------------
//                                          STEP : 05b  Object Aliased
// First, we see how to define types for objects
let poet = {
    name: "Allama Iqbal",
    born: 1877,
};
let user1 = {
    name: "anees",
    email: "ma@gmail.com",
};
let user2 = {
    name: "HabibUllah",
    email: "habibbhi@gmail.com",
};
let employee = {
    name: "anees",
    department: "computer science",
    role: "intern",
    skills: ["C language", "html", "css", "javascript", "typescript"],
    contact: {
        phone: "987654321",
        email: "anees@gmail.com",
    },
};
// how to access nested objects
console.log(employee.contact.email);
//--------------------------------------------------------------------------------------------------------------------------------------
//  Step : 05e intersections
//   ----------------------------------------------------------------------------------------------------------------------------------------
