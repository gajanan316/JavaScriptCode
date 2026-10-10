/*Ques 1. Simple Function Declaration 
Goal: Understand the basic syntax of declaring and calling a named function.
Instructions:
1.	Declare a function named greetUser.
2.	Inside the function, print the message: "Hello, welcome to the JavaScript world!".
3.	Call the greetUser function once.
Expected Output:
Hello, welcome to the JavaScript world! */

//console.log("Hello, welcome to the JavaScript world!")  ;


// babic program understanding in javascript 
//
// let arr = [1,3,4,6,3,2];
// console.log(arr);

//document.write("i am gajanan");

//console.log(prompt("enter you name"));
//confirm(" do you want to processed  ");
//heading.innerText = "Javascript is running";

//  function myFunction() {
//  var lastName;
//   var name = "Rathod";
//   console.log(name); // Rathod

//   if (true) {
//     var lastName = "Rathod";
//   }

//   console.log(lastName); // var is a function scoped it can called anywhere inside the function
// }

/*Ques 2. Function for Squaring a Number
Goal: Define a function tha performs a calculation.
Instructions:
1.	Declare a function named squareNumber and declare the variable num inside the function.
2.	calculate the square of the number (num * num).
3.	Print the result, prefixed with: "The square is: ".
4.	Call the function.

sample input: num = 7
Expected Output:
The square is: The square is: 49
----------------------------------- */
// chart gpt some simple question 

//print my name
//console.log("gajanan");

/*Q12. Create variables for:
Name
Age
City
College */

//var name = "Gajanan";
// var age = 21;
// var city ="pune" ;
// let college  =  "sahydri college of engineering";

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(college);



/*Q13. Add two numbers
a = 10
b = 20

Output: 30 */

// let a = 10 ;
// let b = 20;
// let c = a+ b ;

// console.log(c);


/*Q14. Find the type of a variable
Use:
typeof

Example:
let name = "Gajanan";

Find its type. */

//  let name = "Gajanan";
// // console.log(name);
//  typeof("gajanan");

/*Sure 👍 Here are **JavaScript Array questions with answers**, starting from very basic and gradually increasing difficulty.

# 🟢 Level 1 — Basic Arrays

### Q1. Create and print an array

**Question:** Create an array containing 5 numbers and print it.

**Answer:**
```javascript
let numbers = [10, 20, 30, 40, 50];

console.log(numbers);
```

**Output:**
```text
[10, 20, 30, 40, 50]
```

---

### Q2. Print the first element

```javascript
let fruits = ["Apple", "Mango", "Banana", "Orange"];

console.log(fruits[0]);
```

**Output:**
```text
Apple
```



```text
Apple   → index 0
Mango   → index 1
Banana  → index 2
Orange  → index 3
```

---

### Q3. Print the last element

```javascript
let fruits = ["Apple", "Mango", "Banana", "Orange"];

console.log(fruits[fruits.length - 1]);
```

**Output:**
```text
Orange
```

---

### Q4. Find the length of an array

```javascript
let numbers = [10, 20, 30, 40, 50];

console.log(numbers.length);
```

**Output:**
```text
5
```

---

### Q5. Change an array element

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits[1] = "Orange";

console.log(fruits);
```

**Output:**
```text
["Apple", "Orange", "Banana"]
```

---

# 🟡 Level 2 — Array Methods

### Q6. Add an element at the end

Use `push()`.

```javascript
let numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);
```

**Output:**
```text
[10, 20, 30, 40]
```

---

### Q7. Remove the last element

Use `pop()`.

```javascript
let numbers = [10, 20, 30, 40];

numbers.pop();

console.log(numbers);
```

**Output:**
```text
[10, 20, 30]
```

---

### Q8. Add an element at the beginning

Use `unshift()`.

```javascript
let numbers = [20, 30, 40];

numbers.unshift(10);

console.log(numbers);
```

**Output:**
```text
[10, 20, 30, 40]
```

---

### Q9. Remove the first element

Use `shift()`.

```javascript
let numbers = [10, 20, 30, 40];

numbers.shift();

console.log(numbers);
```

**Output:**
```text
[20, 30, 40]
```

--

### Q10. Print all elements

```javascript
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

**Output:**
```text
10
20
30
40
50
```

---

### Q11. Find the sum of array elements

```javascript
let numbers = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log(sum);
```

**Output:**
```text
150
```

---

### Q12. Find the largest number

```javascript
let numbers = [10, 45, 23, 67, 12, 89, 34];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max);
```

**Output:**
```text
89
```

---

### Q13. Find the smallest number

```javascript
let numbers = [10, 45, 23, 67, 12, 89, 34];

let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log(min);
```

**Output:**
```text
10
```

---



### Q14. Count even numbers

```javascript
let numbers = [10, 15, 22, 31, 40, 55, 60];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        count++;
    }
}

console.log(count);
```

**Output:**
```text
4
```

---

### Q15. Count odd numbers

```javascript
let numbers = [10, 15, 22, 31, 40, 55, 60];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        count++;
    }
}

console.log(count);
```

**Output:**
```text
3
```

---

### Q16. Print only even numbers

```javascript
let numbers = [10, 15, 22, 31, 40, 55, 60];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
```

**Output:**
```text
10
22
40
60
```

---

### Q17. Reverse an array

```javascript
let numbers = [10, 20, 30, 40, 50];

let reverse = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reverse.push(numbers[i]);
}

console.log(reverse);
```

**Output:**
```text
[50, 40, 30, 20, 10]
```

---

### Q18. Search for an element

```javascript
let numbers = [10, 20, 30, 40, 50];

let search = 30;

if (numbers.includes(search)) {
    console.log("Element found");
} else {
    console.log("Element not found");
}
```

**Output:**
```text
Element found
```

---


### Q19. Find the second largest number

```javascript
let numbers = [10, 50, 30, 80, 20, 70];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
    } 
    else if (numbers[i] > secondLargest && numbers[i] !== largest) {
        secondLargest = numbers[i];
    }
}

console.log(secondLargest);
```

**Output:**
```text
70
```

---

### Q20. Find duplicate elements

```javascript
let numbers = [10, 20, 10, 30, 20, 40];

for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

        if (numbers[i] === numbers[j]) {
            console.log(numbers[i]);
        }

    }
}
```

**Output:**
```text
10
20
```

---

### Q21. Remove duplicates

```javascript
let numbers = [10, 20, 10, 30, 20, 40];

let unique = [];

for (let i = 0; i < numbers.length; i++) {

    if (!unique.includes(numbers[i])) {
        unique.push(numbers[i]);
    }

}

console.log(unique);
```

**Output:**
```text
[10, 20, 30, 40]
```

---

### Q22. Find frequency of elements


