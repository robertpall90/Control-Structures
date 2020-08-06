//1.Display in the console the numbers from 1 to 20

for (var i = 1; i <= 20; i++) {
    console.log(i)
}
console.log(" "); //Pentru a avea empty rows intre exercitii
console.log(" ");




//2.Display in the console the odd numbers from 1 to 20

for (var i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}
console.log(" ");
console.log(" ");




//3. Compute the sum of the elements of an array and display it in the console

var array = [1, 43, 56, 7, 8, 32, 1, 10, 67, 34, 12, 23, 34, 1]
var sum = 0
for (var i = 0; i < array.length; i++) {
    sum = sum + array[i]
}
console.log(sum, " is the sum of the elements")

console.log(" ");
console.log(" ");





//4.Compute the maximum of the elements of an array and display it in the console

var array = [1, 43, 56, 7, 8, 32, 1, 10, 67, 34, 12, 23, 34, 1]
var max = array[0]
for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i]
    }
}
console.log(max, " is the biggest number of the array")

console.log(" ");
console.log(" ");




//5.Compute how many times a certain element appears in an array

var array = [1, 43, 56, 7, 8, 32, 1, 10, 67, 34, 12, 23, 34, 1]
var element1 = 1;
element2 = 34;
count1 = 0;
count2 = 0;
for (var i = 0; i < array.length; i++) {
    if (element1 == array[i]) {
        count1++
    }
    if (element2 == array[i]) {
        count2++
    }
}
console.log(element1, " appears", count1, " times");
console.log(element2, " appears", count2, " times")