//1.Display in the console the numbers from 1 to 20

for (var i = 1; i <= 20; i++) {
    console.log(i)
}

//2.Display in the console the odd numbers from 1 to 20

for (var i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

//3. Compute the sum of the elements of an array and display it in the console

var array = [1, 43, 56, 7, 8, 34, 1, 10, 67, 12, 23, 34, 1]
var sum = 0
for (var i = 0; i < array.length; i++) {
    sum = sum + array[i]
}
console.log(sum)

//4.Compute the maximum of the elements of an array and display it in the console

var array = [1, 43, 56, 7, 8, 34, 1, 10, 67, 12, 23, 34, 1]
var max = array[0]
for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i]
    }
}
console.log(max)