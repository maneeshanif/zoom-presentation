// Here in this session, we will cover Sir Zia's repo from steps 00 to 5f.

// 1)   Let's Start our journey with the most traditional, most famous word in the programming world

// STEP: 00

console.log("Hello World!!");

// simple the above line print our first program "hello World" in our console;

//-----------------------------------------------------------------------------------------------------------------------------------------------
  // STEP: 00a   JSON
  // JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format. It is
  // human-readable'
  // Syntax:
          //  
          const user = {
              "id": 1,
              "name": "Habib",
              "email": "habibbhi@example.com",
              "isActive": true
            }
            console.log(user.email);


          /*  json is just like plain object . in js object is collection of 
          key value pairs. json is also similar to it the key difference is its both key and value are 
          always in double quotes.  */

          // uses: json is tool to communicate between two application / 
           // language independent

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

let countryName: string = "Pakistan";
let atomicCountry: boolean = true;

//-------------------------------------------------------------------------------------------------------------------------------------------
// STEP : 02  const and let


// Constant: A constant is a fixed value that cannot be changed during the program's execution.
   const pi = 3.17;
  //  Variables are used to store data that can change based on calculations or user input
  let age = 65;
  age = 66;
   //      Block scope vs Global scope
   //  Block scope: A block scope is a section of code that is enclosed within curly braces
  // global scope: 
  //  A global scope is a section of code that is not enclosed within any other code

  var person = "ahmed"
  var person = "ali"
  console.log(person,"var");



  let num1 = 34;

  function fun(){
     let num1 = 23
     
  }
  fun();
  console.log(num1,"outsidelet");

  


//------------------------------------------------------------------------------------------------------------------------------------------
// STEP : 03d Chalks
// "Chalk is a npm pakage .it is used to print the output in the console in different colors .which plays a vital role in
// styling of our cli based aplications"

import chalk from "chalk";

let a: string = chalk.red("hello Habib");
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
let c: string | number = "Hello"; // here i got more choices of datatypes in single variable
c = 3;
console.log(c);
c = "Let them cook";
console.log(c);

/* TYPE Alises:
                                 most union types you"ll see in code will generally only have two or  three constituients . However you may sometimes find a use of longer
                                 union types that have more than three types. In these cases, you can use a type alias
                                  */

// let A : string | number | boolean = "Stars"
// let B : string | number | boolean = 3;
// let C :string | number | boolean = false;

// Example code :
type rawData = string | number | boolean | null;
let D: rawData = "Stars";
let E: rawData = 3;
let F: rawData = false;
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

let poet: {
  name: string;
  born: number;
} = {
  name: "Allama Iqbal",
  born: 1877,
};

//Okay, for a single user, it's good to define the type of the object. But what about when there are more than one user?
//   So, instead of defining the type of objects repeatedly, we can define the type alised of objects once and then use it for more than one user

type User = {
  name: string;
  email: string;
  age?: number;
};

let user1: User = {
  name: "anees",
  email: "ma@gmail.com",
};

let user2: User = {
  name: "HabibUllah",
  email: "habibbhi@gmail.com",
};

//-----------------------------------------------------------------------------------------------------------------------------------------------

//                                Step : 05d nested Objects
//   in programming nested means:
//   1. one object inside another object
//   2. one array inside another array
//   3. one function inside another function
//       and so on

type Employee = {
  name: string;
  department: string;
  role: "manager" | "engineer" | "intern";
  skills?: string[];
  contact: {
    phone: string;
    email: string;
  };
};

let employee: Employee = {
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
