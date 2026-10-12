//console.log("Gajanan");
/*Que 1:
-------
Que 1 : Write a C program to input all sides of a triangle and check whether triangle is valid or not.
-------  
          Validity Check:
          The sum of side1 and side2 must be greater than side3.
          The sum of side1 and side3 must be greater than side2.
          The sum of side2 and side3 must be greater than side1.
          If all three conditions are true, the program prints "The triangle is valid."
          If any of the conditions are false, the program prints "The triangle is not valid."

Sample input  : Enter the lengths of the three sides of the triangle:
                Side 1: 3
                Side 2: 4
                Side 3: 5

Sample output : The triangle is valid.



Sample input  : Enter the lengths of the three sides of the triangle:
                Side 1: 1
                Side 2: 2
                Side 3: 3

Sample output : The triangle is not valid.*/
/* --->
   let a = 10 ;
   let b = 20 ;
   let c = 20 ;

   if(a + b > c && a+ c > b && b+c > a ){
    console.log("vaild triangle");

   }
   else{
    console.log("not vaild triangle");
   }*/


    
    
    
    /*Que 2 : Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
-------  
         Validity Check:
         If all three sides are equal then the triangle is equilateral.
         If exactly two sides are equal then the triangle is isosceles.
         If all sides are different then the triangle is scalene.

Sample input :  Enter the lengths of the three sides of the triangle:
                Side 1: 3
                Side 2: 3
                Side 3: 3
Sample output : The triangle is equilateral.


Sample input :  Enter the lengths of the three sides of the triangle:
                Side 1: 5
                Side 2: 5
                Side 3: 8
Sample output : The triangle is isosceles.


Sample input : Enter the lengths of the three sides of the triangle:
                Side 1: 3
                Side 2: 4
                Side 3: 5
Sample output : The triangle is scalene.


Sample input : Enter the lengths of the three sides of the triangle:
                Side 1: 1
                Side 2: 2
                Side 3: 3
Sample output : The triangle is not valid. */

 /*----> let side1 = Number(prompt("Side1"));
 let side2 = Number(prompt("side2"));
 let side3 = Number(prompt("side3"));

   if(side1 <= 0||side2 <= 0 ||side3 <= 0|| side1+ side2 <= side3|| side1 + side3 <= side2|| side2 + side3 <= side1){
     console.log("invaild triangel");
    
     }
     else if(side1 === side2 && side2 === side3){
               console.log("triangle is equilateral");
     }
     else if(side1 === side2 || side2 === side3 || side1=== side3){
         console.log("triangle is isosceles.");
     }
    else{
        console.log("scalene.");
    }*/
 
    




        /*Que 3 : Write a C program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
--------

Percentage >= 90% : Grade A

Percentage >= 80% : Grade B

Percentage >= 70% : Grade C

Percentage >= 60% : Grade D

Percentage >= 40% : Grade E

Percentage < 40% : Grade F 


------>*/
   
 /*let physics = Number (prompt("Enter the marks of physices"));
 let chemistry = Number(prompt("Enter the Marks of Chemistry"));
 let Biology = Number(prompt("Enter the Marks of Biology"));
 let Mathematics = Number(prompt("Enter he Marks of Mathematic"));
 let  computer = Number(prompt("Enter the Marks of the Computer"));

  let total = physics + chemistry+Biology+Mathematics+computer;
   console.log(total);
    let percentage =  total /500 * 100 ;
  console.log(percentage);

  if(percentage >= 90){
    console.log("Grade A");
  }
  else if (percentage >= 80){
    console.log("Gread B");
  }
  else if(percentage >= 70){
    console.log("Gread C");
  }
  else if(percentage >= 60){
    console.log("greas D");
  }
  else if(percentage >= 40){
    console.log("Gread E");
  }
   else{
    console.log("fail");
   }
*/












/*Que 4 : Write a C program to input electricity unit charges and calculate total electricity bill according to the given condition:
--------

For first 50 units Rs. 0.50/unit

For next 100 units Rs. 0.75/unit

For next 100 units Rs. 1.20/unit

For unit above 250 Rs. 1.50/unit

An additional surcharge of 20% is added to the bill*/
 
/*
  let unit = Number(prompt("Enter the Unit"));
let bill =0
    if(unit >= 50 ){
      bill = unit * 0.50 ;
    }
    else if(unit >= 50 && unit <= 150){
      bill = (50 * 0.50)+(unit - 50)* 0.75 ;
        
    }
    else if(unit >= 150 && unit <= 250){
      bill = ( 50*0.50)+(100 *0.75 )+(unit - 150 ) * 1.20 ;
    }
    else if(unit >= 250){
      bill = ( 50*0.50)+(100 *0.75 )+(100* 1.75 ) + (unit - 250) * 1.50;
    }

 
let surcharge = bill * 0.20;
let totalBill = bill + surcharge;

console.log("Electricity Charges: ₹" + bill.toFixed(2));
console.log("Surcharge (20%): ₹" + surcharge.toFixed(2));
console.log("Total Electricity Bill: ₹" + totalBill.toFixed(2));*/



/*Que 5 :
-------
Write a js  pprogram that takes the time of day as input (in hours) and prints whether it is morning, afternoon, evening, or night using an if statement.

-categorize the time of day into four categories:
if the time between 0 - 5 then print Night
if the time between 6 - 11 then print Morning
if the time between 12 -17 then print Afternoon
if the time between 18 - 23 then print Evening


case 1:
Input: 
	Enter time  : 3
Expected Output: 
	"It is night."

case 2:
- Input: 
	Enter time  :  9
Expected Output: 
	"It is morning."

case 3:
- Input: 
	Enter time  : 14
Expected Output: 
	"It is afternoon."

case 4:
- Input:
	 Enter time  : 20
Expected Output: 
	"It is evening."
 */


  /*let time = Number(prompt("Enter the time "));

    if(time >= 0 && time <= 5){
      console.log("night");
    }
    else if(time >= 6  && time <= 11){
      console.log("Its morning");
    }
    else if(time >= 12 && time <= 17 ){
      console.log("afternoon");
    }
    else if(time >= 18 && time <= 23){
      console.log("Evining");
    }*/








      /*Que 6:
------
A company is organizing a sales competition between two sales representatives, Sales Rep A and Sales Rep B. The sales representative with the highest sales amount at the end of the month wins a bonus. 
Write a js  program that takes the sales amounts of Sales Rep A and Sales Rep B as input and prints whether Sales Rep A has won, Sales Rep B has won using if-else. 

Sample input  :
                Enter sales amounts of team A : 30000
		Enter sales amounts of team B : 45000

Sample output :  
		Congratulations Team B wins bonus.

Sample input  :
                Enter sales amounts of team A : 20000
		Enter sales amounts of team B : 15000

Sample output :  
		Congratulations Team A wins bonus. */



    /*let teamA = Number(prompt("Enter the sales amount A"));
    let  teamB = Number (prompt("Enter the sales team B"));

    if(teamA > teamB){
      console.log("Congratulation Team A win");
    }
    else{
      console.log("Congratulation team B wins ");
    }*/



      /*==========================================================================================================
Que 7:
------
Write a js program to find the previous multiple & next multiple of 100 of a given three digit number using if-else. 
if the number is 3 digit print invalid massage.

Case 1:

Sample input  : 234

Sample output : Previous multiple : 200
		next multiple : 300

Case 2:

Sample input  : 23

Sample output : Invalid Input

case 3:

Sample input : 1234
Sample output : Invalid Input

case 4:

Sample input  : -567

Sample output : Invalid Input

*/
 /*    
  
let digit = Number(prompt("Enter the number"));

if (digit >= 100 && digit <= 999) {
    let num = Math.floor(digit / 100);

    let pre = num * 100;
    let next = pre + 100;

    console.log("Previous multiple:", pre);
    console.log("Next multiple:", next);
} else {
    console.log("Invalid digit");
}
*/

/*=============================================================================================================
Que 8:
------
Write a C program that takes the marks of a student in three subjects as input and prints whether the student has passed or failed in three subject using  if statement.
	if marks is above 35 then pass and student is fail in any one subject then fail.


Sample input  :  
		Enter three subject marks : 57 66 88
Sample output : 
		Result is pass 

Sample input  :  
		Enter three subject marks : 71 64 32
Sample output : 
		Result is Fail */


/*
    let marks  = Number(prompt("Enter the marks Math "), prompt("Enter the Marks of English") , prompt("Enter the Msrkd of Science"));

     if(marks > 34 ){
      console.log("Result is pass");
     }
     else{
      console.log("Result is fail");
     }

    */


     /*Que 9:
------
write a js program takes the cost price and selling price of an item as input and prints whether the transaction was profitable or loss-making.

Sample input  :
	Cost Price: 100
	Selling Price: 150

Expected Output: 
	The transaction was profitable.

Sample input  :
	Cost Price: 200
	Selling Price: 150
Expected Output: 
	The transaction was loss-making. */

   
  /* let cost_price =Number(prompt("Enter the cost price"));
   let Selling_price = Number(prompt("Enter the Selling Price "));

    if(cost_price > Selling_price){
       console.log("The Transation was loss");
    }
   else {
      console.log("The tracsaction was profitable ");
   }
*/




/*==============================================================================================================
Que 10:
------

Write a js program that takes the number of items purchased by a customer as input and prints whether the customer is eligible for a discount or not using an if statement.

 customers who purchase 10 or more items in a single transaction. The program should take the number of items purchased as input and print whether the customer is eligible for the discount or not.

case 1:
Sample input  :
 		Enter no.of items purchased:  12

Expected Output: 
		The customer is eligible for a discount.

case 2
Sample input  :
 		Enter no.of items purchased:  5


Expected Output: 
		The customer is not eligible for a discount. */


/*
    let items = Number(prompt("Enter the Number of Items"));

    if(items > 10 ){
      console.log("The Customer is Eligible of discount");

    }
    else{
      console.log("The Customer is not eligible of discount ");
    }

*/


/*======================================================================================================================
Que 11:
------

Write a js program that takes the temperature in Celsius as input and prints whether the weather is hot, cold, or normal using an if statement.
	weather into three categories based on the temperature in Celsius:

 if Temperature above 30°C then Hot
 if Temperature below 15°C then Cold
 if Temperature between 15°C and 30°C then Normal

Case 1:
Input: 
	Enter temperature : 35
 Expected Output: 
	The weather is hot.

Case 2:
- Input: 
	Enter temperature : 10
 Expected Output: 
	The weather is cold.

Case 3:
 Input: 
	Enter temperature : 20
 Expected Output: 
	The weather is normal.  */


 /* let temperature = Number(prompt("Enter the Temperature "));
    if(temperature  > 30 ){
      console.log("The  Wether is hot");
    }
    else if(temperature < 15){
       console.log("The wether is cold");
    }
    else if(temperature > 15 && temperature < 30){
      console.log("The wether is normal ");
    }*/



  /*======================================================================================================================
Que 12:
------


Write a js program to calculate a discount for a customer based on their membership status. If the customer is a "Premium Member", they get a 20% discount. If they are a "Regular Member", they get a 10% discount. Otherwise, no discount is given.

Input:
	Enter your membership type (1 for Premium, 2 for Regular, 0 for None): 1
Output:
	You get a 20% discount.
 */


   /* let status = Number(prompt("Enter the Status( 1 for primium_mumber , 2 for regular_member , 3 for other_member)"));
    ;
    if(status == 1){
      console.log("get 20 % discount");
    }
  
   else if (status == 2){
    console.log("get 10 % Discount");
   }
   else if( status == 3){
    console.log("no discount");
   }
   else {
    console.log("invalid login");
   }
*/


/*======================================================================================================================
Que 13:
------


Write a js program to calculate the salary of an employee based on their years of experience.

If experience is greater than 10 years, salary is $1000.
If experience is between 5 and 10 years, salary is $800.
If experience is less than 5 years, salary is $500.
Input:
	Enter your years of experience: 7
Output:
	Your salary is $800.*/

/*let years = Number(prompt("choice the year of experience "));

if(years > 10){
  console.log("salary is $1000");
}
else if(years >5 && years < 10){
  console.log("salary is $800");
}
else if(years <= 5 ){
   console.log("salary is $500");
}
else{
   console.log("invaild year experence ");
}
*/


/*Que 14:
------

Write a C program to find the day of the week for a given number (1 for Monday, 2 for Tuesday, etc.) using nested if-else statements.

Input:
	Enter a number (1-7): 4
Output:
	The day is Thursday.*/

 /* let day = Number(prompt("select the choice(1 for monday , 2 for Tuesday , 3 for wednesday , 4 for thusday , 5 for friday , 6 for saturday , 7 for sunday)"));

  if(day == 1)
{
  console.log("monday");
}
else if(day == 2){
  console.log("tuesday");
}
else if(day == 3){
  console.log("wednesday");
}
else if(day == 4){
   console.log("thusday");
}
else if (day == 5){
   console.log("friday");
}
else if(day == 6){
   console.log("saturday");
}
else if(day == 7){
   console.log("sunday");
}
else{
  console.log("invalid input ");
}*/




/*======================================================================================================================
Que 15:
------
Write a  js program to determine the grade of a student based on their marks and if they received extra credit. If the student received extra credit (1 for Yes, 0 for No), add 5 marks to their grade.

Input:
	Enter your marks: 80
	Enter if you have extra credit (1 for Yes, 0 for No): 1
Output:
	Your grade is A.*/

    
  
/*let  marks = Number(prompt("Enter the number"));
let grade = Number(prompt(" Enter the Gread (1 for yes , 2 for No)"));
   if (grade == 1){
    marks = marks + 5;
   }
if( marks > 80){
  if(yes){
    console.log("add 5 marks to there creadit");
  }
    console.log("your gread is is A");
}
  else if(marks > 65 && marksv <= 80){
   console.log("your gread is B");

 }

 else if(marks > 35 && marks < 65){
   console.log("your grade is c");
 }
  else{
    console.log("invalid data");
  }
*/

/*
===================================================================================================================================

Que 16:
------

You are a game developer and you want to implement a system to manage game levels. If the player's score is above 1000, you want to assign a high level. If the player's score is between 500 and 1000, you want to assign a medium level. If the player's score is below 500, you want to assign a low level. Write a C program to calculate the game level based on the player's score.

Example input: Player score: 750
Example output: Medium level


*/

/* let score = Number(prompt("Enter the Score"));
 if(score > 1000){
   console.log("Assign a high level");
 }
 else if( score > 500 && score < 1000){
   console.log("medium");
 }
 else if( score <= 500){
  console.log("low level");
 }
*/






  


    


 