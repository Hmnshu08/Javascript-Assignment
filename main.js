// alert("hello!");
// document.write("HEllo!");
// Q1
// function parity(num){
//     if (num % 2 ==0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// }

// parity(100);

// Q2


// function max(num1,num2,num3){
//     if(num1 >= num2 && num1 >= num3) {
//         largest = num1;
//     }
//     else if (num2 >= num1 && num2 >= num3) {
//         largest = num2;
//     }
//     else {
//         largest = num3;
//     }
//     console.log(largest); 
// }

// max(1,6,4);
// max(5,6,9);
// max(10,4,4);

// Q3
// function numHeads(num){
//     let Count=0; 
//     for(i=0; i<num; i++){
//         Coinface = (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
//         if(Coinface === 'heads'){
//             Count++;
//         }
//     }
//     console.log(Count);
// }
// numHeads(10);

// Q4
// function numHeads(num){
//     let Count=0; 
//     for(i=0; i<num; i++){
//         Coinface = (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
//         if(Coinface === 'heads'){
//             Count++;
//         }
//     }
//     console.log(Count/num);
// }
// numHeads(10);

// Q5
// function padChars(num, op){
//     for(i=0;i<num;i++){
//         console.log(op);   
//     }
// }
// padChars(5,"*");
// padChars(6,"-");


// Q6
// function numRollsToGetSix(){
//     let Count = 0; 
//     let gotSix=0;
//     while(gotSix!=6){
//         gotSix = (Math.floor(Math.random() * 6) + 1)  ;
//         if(gotSix == 6){  
//           break;
//         }else{
//             Count++;
//         }
//     }
//     console.log("Dice rolled " +Count+ " times");
// }
// numRollsToGetSix();
// numRollsToGetSix();

// Q7
message = (Math.floor(Math.random() * 2) == 0) ? 'Have a Good Day' : 'Have a Bad Day';
document.getElementById("Q7").innerHTML = message;

//Q8 
// var fourNumbers = [];
// for (i=0; i<4; i++) {
//     fourNumbers.push(Math.random());
// }
// console.log(fourNumbers);

// Q9
// var hundredNumbers = [];
// for (i=0; i<100; i++) {
//     hundredNumbers.push(Math.random());
// }
// console.log(hundredNumbers);

// Q10
// function numberArray(strings){
//     var arrayOfNumbers = strings.map(Number);
//     return arrayOfNumbers;
// }
// var strings = ["1.2","2.3","3.4"];
// var nums = numberArray(strings);
// console.log(nums);
// Q11
// var value1 = 1;
// var value2 = 2;
// var value3 = 3;
// var value4 = 4;
// var value5 = 5;
// console.log(value1);
// console.log(value2);
// console.log(value3);
// console.log(value4);
// console.log(value5);
// Q12
// function half(x){
//     console.log (x/2);
// }

// half(4);
// half(3);
// half(x);

// Q13
// function seven(){
//     x=7;
//     return (x);
// }
// seven();
// console.log(x);

// Q14
// function calculation(a,b,c){
//     return result = a+b/c;
// }
// calculation(1,1,0);
// console.log(result);
// calculation(-1,-1,0);
// console.log(result);
// calculation(1,-1,0);
// console.log(result);
//infinity
//-infinity
//-infinity

// Q15
//already doing

//Q16
// function isEven(num){
//     let arr = ["Even ", "Odd"];
//     console.log(arr[num%2]);
// }
// isEven(19);
// isEven(20);

// Q17
// document.write("Hello World");

// Q18
// var nam = prompt("What is your name?", "");
// alert("Hi, " + nam + "! It is very nice to meet you.");

// Q19
// var nam = prompt("What is your name?", "");
// if(nam == "alice" || nam == "bob" ){
//     alert("Hi, " + nam + "! It is very nice to meet you.");
// }else{
//     alert("Hi! It is very nice to meet you.");
// }

// Q20
// const number = parseInt(prompt('Enter a positive integer: '));
// var sum = 0;

// for (let i = 1; i <= number; i++) {
//     sum = sum+i;
// }
// console.log(sum);
// document.write(sum);

// Q21

// const number = parseInt(prompt('Enter a positive integer: '));
// var sum = 0;

// for (let i = 1; i <= number; i++) {
//     if(i % 3 == 0 || i % 5 == 0 ){
//         sum = sum+i;
//     }

// }
// console.log(sum);
// document.write(sum);

// Q22
// const number1 = parseInt(prompt('Enter first positive integer: '));
// const number2 = parseInt(prompt('Enter second positive integer: '));
// var sum = 0;
// var product = 1;

// for (let i = number1; i <= number2; i++) {

//     sum = sum+i;
//     product = product * i;


// }
// console.log(sum);
// console.log(product);
// document.writeln(sum);
// document.writeln(product);

// Q23
// for(i=2;i<=12;i++){    
//     for(j=1;j<=10;j++){
//         document.writeln(i + "*" + j + "=" + i*j);
//         document.write("<br>");
//     }
//     document.write("<br>")

// }

// Q24
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }
//     if (i > 1 && flag == 0) {
//         console.log(i);
//         document.writeln(i);
//     }
// }
// Q25
// function leap_year_range(st_year) {
//     end_year = st_year + 40;
//     var year_range = [];
//     for (var i = st_year; i <= end_year; i++)
//     {
//          year_range.push(i);
//     }
//     var new_array = [];

// year_range.forEach(
// function(year)
// { 
//    if (test_LeapYear(year)) 
//    new_array.push(year);
// });

// return new_array;
//  }

// function test_LeapYear(year) {
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
//             return year;
//     } else {
//             return false;
//     }
// }

// console.log(leap_year_range(2021));
//[2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060]

// Q26
// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }
// console.log(largest);

// Q28
// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var newArr = array.reverse();
// console.log(newArr);

// Q29
// var array = [3 , 6, 2, 56, 32, 5, 89, 32,5];
// let duplicates = []

// const tempArray = [...array].sort()

// for (let i = 0; i < tempArray.length; i++) {
//   if (tempArray[i + 1] === tempArray[i]) {
//     duplicates.push(tempArray[i])
//   }
// }
// console.log(duplicates)

// Q30
// var array = [3 , 6, 2, 56, 32, 5, 89, 32,5];
// for(i = 0 ; i < array.length; i=i+2){
//     console.log(array[i]);
// }

// Q31
// var array = [2,4,6,8,10,12];
// console.log(array);
// var new_array = array.concat();

// for(i=1; i<array.length;i++){
//     new_array[i] = new_array[i-1] + array[i];
// }
// console.log(new_array);

// Q32
// function checkPalindrome(str) {
//     const len = string.length;

//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const string = prompt('Enter a string: ');
// const value = checkPalindrome(string);

// console.log(value);

// Q33
// var sum = 0;
// for (var i = 1; i <= 5; i++) {
//    sum = sum + i;
// }
// console.log("Sum = " + sum);

// var sum = 0;
// var number = 1;
// while (number <= 10); {
//    sum += number;         
//    number++;              
// }    
// console.log("Sum = " + sum); 

// function sum(num) {
//     if(num > 0) {
//         return num + sum(num - 1);
//     }
//     else {
//         return num;
//     }
//  }

// const number = 5;
// const result = sum(number);
// console.log(result);

// Q34
// var str1 = ["a","b","c"];
// var str2 = [1,2,3];
// var res = str1.concat(str2);
// console.log(res);

// Q35
// var array1 = [1, 2, 3];
// var array2 = ['a', 'b', 'c'];

// var result = array1.map(
//     (element, index) => [element, array2[index]]
//   ).flat();

// console.log(result);

// Q36

// var arr = [1,2,3,4,5,6];
// arr.push(arr.shift());
// arr.push(arr.shift());
// console.log(arr);

// Q37
// var number = 100;
// let n1 = 0, n2 = 1, nextTerm;
// console.log('Fibonacci Series:');
// for (let i = 1; i <= number; i++) 
// {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

// Q38
// var mynum = 235345;
// // and typecasting it into an integer
// let myFunc = num => Number(num);
// var intArr = Array.from(String(mynum), myFunc);
// console.log(intArr);

// Q39
// Selection sort
// function selectionSort(inputArr) { 
//     let n = inputArr.length;

//     for(let i = 0; i < n; i++) {
//         // Finding the smallest number in the subarray
//         let min = i;
//         for(let j = i+1; j < n; j++){
//             if(inputArr[j] < inputArr[min]) {
//                 min=j; 
//             }
//          }
//          if (min != i) {
//              // Swapping the elements
//              let tmp = inputArr[i]; 
//              inputArr[i] = inputArr[min];
//              inputArr[min] = tmp;      
//         }
//     }
//     return inputArr;
// }
// let inputArr = [4,7, 9, 2, 1, 8];
// selectionSort(inputArr);
// console.log(inputArr);

// Q40
// function insertionSort(inputArr) {
//     let n = inputArr.length;
//         for (let i = 1; i < n; i++) {
//             // Choosing the first element in our unsorted subarray
//             let current = inputArr[i];
//             // The last element of our sorted subarray
//             let j = i-1; 
//             while ((j > -1) && (current < inputArr[j])) {
//                 inputArr[j+1] = inputArr[j];
//                 j--;
//             }
//             inputArr[j+1] = current;
//         }
//     return inputArr;
// }
// let inputArr = [4,7, 9, 2, 1, 8];
// insertionSort(inputArr);
// console.log(inputArr);

// Q41
// function mergeSort(array) {
//     const half = array.length / 2

//     // Base case or terminating case
//     if(array.length < 2){
//       return array 
//     }

//     const left = array.splice(0, half)
//     return merge(mergeSort(left),mergeSort(array))
// }
// array = [4, 8, 7, 2, 11, 1, 3];
// console.log(mergeSort(array));

// Q42
// function partition(arr, start, end){
//     // Taking the last element as the pivot
//     const pivotValue = arr[end];
//     let pivotIndex = start; 
//     for (let i = start; i < end; i++) {
//         if (arr[i] < pivotValue) {
//         // Swapping elements
//         [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//         // Moving to next element
//         pivotIndex++;
//         }
//     }

//     // Putting the pivot value in the middle
//     [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
//     return pivotIndex;
// };
// array = [4, 8, 7, 2, 11, 1, 3];
// quickSortRecursive(array, 0, array.length - 1)
// console.log(array);

// Q43
// Q44
// function binarySearch(sortedArray, key){
//     let start = 0;
//     let end = sortedArray.length - 1;

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);

//         if (sortedArray[middle] === key) {
//             // found the key
//             return middle;
//         } else if (sortedArray[middle] < key) {
//             // continue searching to the right
//             start = middle + 1;
//         } else {
//             // search searching to the left
//             end = middle - 1;
//         }
//     }
// 	// key wasn't found
//     return -1;
// }
// sortedArray = [2,3,5,6,7,34,64]
// middle=binarySearch(sortedArray, 5);
// console.log(middle);

// Q45
string = ["Hello", "World", "in", "a", "frame"];
document.write("*******");
document.write("<br>");
for (i = 0; i < string.length; i++) {
    document.write(string[i]);
    document.write("<br>");
}
document.write("<br>");
document.write("*******");
document.write("<br>");
// Q46

var string = 'The quick brown fox';
function pigLatin(str) {
    return str.replace(/\b(\w)(\w+)\b/g, function (a, b, c) {
        if (/[A-Z]/.test(b)) {
            c = c.replace(/^\w/, function (x) { return x.toUpperCase() });
        }
        return c + b.toLowerCase() + (/[aeiou]/i.test(b) ? 'way' : 'ay');
    })
};

document.write(pigLatin(string));

// Q47

function findCelsius() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius;
    if (fahrenheit != '') {
        celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("output").innerHTML = celsius;
    } else {
        document.getElementById("output").innerHTML = "Please enter a value!";
    }
}

//Q48
// document.writeln("<br>");
// for(j=1;j<=3;j++){
//     var value1 = prompt('Enter '+ j + ' number: ');
//     document.writeln("<br>");
//     if (value1 > 1 && value1 < 30){
//         for(i=0;i<value1;i++){
//             document.writeln("*");
//         }
//     }
// }

//49
function createTable() {
    rowNo = window.prompt("Input number of rows");
    colNo = window.prompt("Input number of columns");

    for (var row = 0; row < parseInt(rowNo, 10); row++) {
        var x = document.getElementById('Table').insertRow(row);
        for (var col = 0; col < parseInt(colNo, 10); col++) {
            var y = x.insertCell(col);
            y.innerHTML = "Row-" + row + " Column-" + col;
        }
    }
}

//50

function showInput() {
    document.getElementById('displayname').innerHTML =
        document.getElementById("name").value;
    document.getElementById('displayemail').innerHTML =
        document.getElementById("email").value;
    document.getElementById('displaycheese').innerHTML =
        document.getElementById("cheese").value;
    document.getElementById('displayPepperoni').innerHTML =
        document.getElementById("Pepperoni").value;
    document.getElementById('displayMushrooms').innerHTML =
        document.getElementById("Mushrooms").value;
    document.getElementById('displayExtcheese').innerHTML =
        document.getElementById("Extcheese").value;
    document.getElementById('displayolives').innerHTML =
        document.getElementById("olives").value;
    document.getElementById('displaydelivery').innerHTML =
        document.getElementById("delivery").value;
    document.getElementById('displaypickup').innerHTML =
        document.getElementById("pickup").value;
    document.getElementById('displayadd').innerHTML =
        document.getElementById("address").value;
}