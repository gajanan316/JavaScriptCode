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






