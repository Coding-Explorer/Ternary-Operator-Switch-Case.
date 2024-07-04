/////////////TERNARY OPERATORS//////////////.
/* The ternary operator is a one-line if statement.
The ternary operator is the only JavaScript operator that takes three operands.
It can be used as a shortcut for the if statement.
The ternary operator is referred to as the conditional operator because it allows the execution of different expressions
based on a condition . The term ternary refers to the fact that it takes three operands.
An alternative to the if/else statement, the ternary operator allows javascript developers to write concise
conditional statement . it is written as ?: and takes three operands ; a logical condition , a value to return if true,
and a value to return if false. it can be used to replace multiple lines of code with a single line*/
// Here's i'm gonna to explore the Example no 01.
var num = 10;
var result = num > 5 ? "num is greater than 5" : "num is less than 5";
console.log(result);
// Now seeing the Example no 02.
var num1 = 100;
var result1 = num1 > 50 ? "num is greater than 50" : "num is less than 50";
console.log(result1);
// Now seeing the Example no 03.
var person = "Rehan";
var result2 = person === "Rehan" ? "person is Rehan" : "person is not Rehan";
console.log(result2);
// Now seeing the Example no 04.
var statement = true;
var result3 = statement === true ? "statement is true" : "statement is false";
console.log(result3);
// Now seeing the Example no 05.
// The usage of ternary operators in a function.
function getResult(num) {
    return num > 5 ? num : num * 2;
}
console.log(getResult(20));
// Now seeing the Example no 06.
// The usage of ternary operators in a objects.
var result4 = "Rehan";
var result5 = result4 === "Rehan" ? "person is Rehan" : "person is not Rehan";
console.log(result5);
// Now seeing the Example no 07.
var isHungry = true;
var snack = isHungry ? "apple" : "water";
console.log("you should have some ".concat(snack));
var isHungry1 = false;
var snack1 = isHungry1 ? "apple" : "water";
console.log("you should have some ".concat(snack1));
// Now seeing the Example no 08.
var userName = "Rabail khan";
var password = "19995";
userName == "Mehwish" ? console.log("You're logged in!!") : console.log("Invalid user name or password!!!");
// Result should be "Invalid user name or password!!!".
// Now seeing the Example no 09.
var age = 22;
var message = age >= 18 ? "You're an adult eligible to vote" : "You're a minor not eligibile to vote";
console.log(message);
// Result should be "You're an adult eligible to vote".
// In this example, the ternary operator is used to check if the user is an adult (age >= 18) and display a message accordingly.
// In this simply one condition should be checked and if the condition is true then the first expression will be executed, otherwise the second expression will be executed.
//.......................................................................................................//.
/////////////////SWITCH CASE//////////////////////.
// The switch case statement in TypeScript is used to execute a block of code based on the value of a variable.
// It is similar to the switch statement in JavaScript, but with some additional features and restrictions.
// Here's i'm gonna to explore the Example no 01.
var day = 3;
var dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
}
console.log(dayName);
// Here's i'm gonna to explore the Example no 02.
var dayOff = "Sunday";
switch (dayOff) {
    case "Monday":
        console.log("Working day! Follow your casual schedule");
        break;
    case "Tuesday":
        console.log("Working day! Follow your casual schedule");
        break;
    case "Wednesday":
        console.log("Working day! Follow your casual schedule");
        break;
    case "Thursday":
        console.log("Working day! Follow your casual schedule");
        break;
    case "Friday":
        console.log("Working day! Take some extra time for Prayers,supplications and Recitation");
        break;
    case "Saturday":
        console.log("Weekend! Go for some adventure or chill out with friends");
        break;
    case "Sunday":
        console.log("Weekend! Free to go anywhere you want");
        break;
    default:
        console.log("Invalid day");
}
console.log("Have a nice day!");
// Here's i'm gonna to explore the Example no 03.
var receptionDay = "Wednesday";
switch (receptionDay) {
    case "Monday":
        console.log("Enjoy the starting functions of the wedding like the ritual of Mehandi!!");
        break;
    case "Tuesday":
        console.log("Enjoy another functions of the wedding with the guests!!");
        break;
    case "Wednesday":
        console.log("Finally!! The day of the reception is here. Enjoy the function!!");
        break;
}
console.log("Have a nice day!");
// Here's i'm gonna to explore the Example no 04.
// Explore the usage of switch case in function.
function getDayName(day) {
    var dayName;
    switch (day) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
    }
    return dayName;
}
console.log(getDayName(1));
