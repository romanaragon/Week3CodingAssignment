// STEP 1 : Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // Here I am creating the array with the array command.

// a. Programmatically subtract the value of the first element in the array from the value in the last 
//    element of the array (do not use numbers to reference the last element, find it programmatically, 
//    ages[7] – ages[0] is not allowed). Print the result to the console.

ages[ages.length - 1] - ages[0] //This is taking the last element in the array and subtracting it from the first. 
console.log(ages[ages.length - 1] - ages[0]); // This is printing the result of the above step.

// b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of 
//   different lengths).

ages.push(99); // This command is pushing the number 99 to into the array where it will be placed after 93.
console.log(ages) // This is printing the array with the new element added to it.
console.log(ages[ages.length - 1] - ages[0]); // this is taking the last element in the array, 99, and subtracting it from the first, 3.

//c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let total = 0; //We are declaring a new variable for the total of the elements in the array to use later in our function.

for(let i = 0; i <= ages.length - 1; i++){ //This is a for loop that sets the index, i to zero, makes i less than or equal to the number of elements in the array
   total += ages[i] // this is making our variable total = the total + ages[i]

}
let averageAge = total / ages.length; //This is creating a new variable for the averageAge and setting it to our total / ages.length.
console.log(averageAge); // This is printing the average age to the console so we can see it.

//STEP 2 : Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //This is where I am creating an array

//a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

let total2 = 0; //Creating a new variable which I will use for the running total of the letters in the names.
let averageLetters = 0; //Creating a new variable for the average number of letters in the names
for(let i = 0; i <= names.length - 1; i++){ //Created a for loop.
    total2 = total2 + names[i].length; //setting the variable total to = our old total(0) + the number of letters in each name of the array.
}
averageLetters = total2 / names.length; // Setting the variable to divide our new total^^ by the number of elements in the array.
console.log(averageLetters); //printing to the console the average number of letters.

//b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

for(let i = 0; i < names.length; i++){ // this is a for loop
   console.log(names.join(' ')); //this prints the names using the .join command. The space in the parenthesis prints a space in between each name.
} 

//STEP 5 : Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = []; //Creating a new array without any elements since we will populate these later
nameLengths = names.map(function(element) { //setting the new array, nameLengths, to equal the names.map command. We are using the (function(element) to pull the elements
   return element.length; // Here we are returning the lengths of each element of the previously created name array
}); 
console.log(nameLengths); //we are printing the new array nameLengths and seeing if we are right.

//STEP 6 : Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let sum = nameLengths.reduce(function( previousValue, currentValue){ //Creating a new variable and using the reduce command to create one value
   return previousValue + currentValue; // returning the value resulting from the previous callbackfn + the value of the current element
})
console.log(sum); //printing the sum to the console.

//STEP 7 : Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//         (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function wordRepeat(word, n){ //Created the function
   for(let i = 0; i < n; i++){ //using a for loop here with integer < n 
       return word.repeat(n) //Used the .repeat command to multiple the parameters together
   } 
}
console.log(wordRepeat('Hello', 3)); //printing to the console the argument

// STEP 8 : Write a function that takes two parameters, firstName and lastName, and returns a full name 
//          (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName){ //Here I am creating the function with firstName and lastName as parameters
   return firstName + ' ' + lastName;  //Here I am telling the function to return firstName + 'space' + lastName
}
let fullNameEntry = fullName('Roman', 'Aragon');  //I am creating a variable to be able to print, also to use as my argument
console.log(fullNameEntry); // I am printing to the console my new variable

//STEP 9 : Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let numbers = [3,6,9,12,15,18, 21, 24, 27]; //I am creating the number array
let sumOfNumbers = numbers.reduce(function(x, y){ //I am using the reduce command to create a new array with the sum
    return x + y; //returning
}, 0); 

if(sumOfNumbers > 100) { //this is my if statement stating that if sumofnumbers if greater than 100
    console.log('true'); // this is my print to console saying that if it is greater than 100 I will return true
} 
else { //if not greater than 100 it will return false.
    console.log(false); //printing to console false.
}

//STEP 10 : Write a function that takes an array of numbers and returns the average of all the elements in the array.

let nums = [1,3,5,10]; //Creating a new array
let averageOfArray = nums.reduce(function(x, y){ //using the reduce command to create a new array as a single value
    return x + y; //returning the value resulting from the previous callbackfn + the value of the current element
}, 0);

let averageOfNumbers = averageOfArray / nums.length; // creating a new variable to equal the average of the numbers in the current array
console.log(averageOfNumbers); //printing to the console the average

//STEP 11 : Write a function that takes two arrays of numbers and returns true if the average of the elements in the 
//          first array is greater than the average of the elements in the second array.

let array1 = [1,4,9]; //creating first array
let averageOfArray1 = array1.reduce(function(x, y){ //This whole section is to get the average of the first array
    return x + y;
}, 0);

let averageOfNumbers1 = averageOfArray1 / array1.length; //Creating a new variable for the average of the array
console.log(averageOfNumbers1); //Printing to the console to make sure it works


let array2 = [1,2,5]; //This whole section is to get the average of the second array 
let averageOfArray2 = array2.reduce(function(x, y){ 
    return x + y;
}, 0);

let averageOfNumbers2 = averageOfArray2 / array2.length; //Creating a new variable for the average of the array
console.log(averageOfNumbers2); //printing to the console the average to make sure it works

if(averageOfNumbers1 > averageOfNumbers2){ //Using an if statement to determine if the array1 average is > the array2 average
    console.log(true);
//    return true;                 //Returning true if it is true
}

//STEP 12 :  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and 
//           returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let isHotOutside = true; //Creating the boolean 
let moneyInPocket = 50000; //Creating the number of money in my pocket

function willBuyDrink(){ //Creating a function
    if(isHotOutside === true && moneyInPocket > 10.50) //if statement to determine if we will return true if conditions are met
    return true   //return true if the conditions above are met
}
willBuyDrink(); //calling the function
console.log(willBuyDrink()); //printing to the console the result of the function.

//STEP 13 : Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
//          MY FUNCTION PROMPT: Create a function named lemonadeStand that determines if you have enough to buy a cup of lemonade.
//          This function takes numbers and determines if a person has enough money to buy lemonade from the lemonade stand. I created
//          it because I wanted more practice with the use of two parameters in a function. 

let priceOflemonade = 4;
let myMoney = 88;

function lemonadeStand(priceOfLemonade, myMoney){
    if(priceOfLemonade <= myMoney){
        return 'Enough Money';
    } return 'Not Enough Money';
}

console.log(lemonadeStand(4, 88));

