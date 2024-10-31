//Create a function that takes a string as an argument & returns the number of vowels in the string.

function character(x) 
{
      count = 0;
      for(w of x) 
            {
                  if (w==="a" || w==="e" || w==="i" || w==="o" || w==="u" )
                        {
                              count++;
                        }
            }


}
var red = character("I love Javascript and Python");
console.log(`String = I love Javascript and Python -----> The number of vowels in this string is = ${count}`);


//Using for each loop to access individual arrays index with value.

sale = ["Building", "Apartment", "Luxury Hotels", "Industrial Area", "Farms"]
console.log(sale = ["Building", "Apartment", "Luxury Hotels", "Industrial Area", "Farms"])

sale.forEach((build,idx,less) => {
   console.log(build.toUpperCase(),idx,less);
});


//For a given array of numbers, print the square of each value using the forEach loop.

nums = [2,4,8,16];
console.log(nums = [2,4,8,16])

nums.forEach((val) => {
    console.log(`The Square of each value is ${val} = ${val*val}`);
});


// Using array methods map ,filter and reduce.

numbers = [13,22,10,17,9];

let P = numbers.map((join) => {
   return join*2;
});
console.log(numbers = [13,22,10,17,9]);
console.log(`By using map method we have created a new array and printed the original array values multiplied by 2 = ${P}`);

size = [22,46,32,110,54,165,245,180,250];

let W = size.filter((big) => {
    return big<=180;
});
console.log(size = [22,46,32,110,54,165,245,180,250])
console.log(`Only values less than or equal to 180 will be filtered out from array by using filter method = ${W}`);

newArr = [2,4,8,101,108,12,103,184];

let sum = newArr.reduce((prev,curr) => {
     return prev+curr;
});
console.log(array = [2,4,8,101,108,12,103,184]);
console.log(`The total sum of array subtracted by 100 is ${sum} - 100 = ${sum-100}`);

let compare = [2,4,8,101,108,12,103,184];

let co = compare.reduce((prev,curr) => {
       return prev>curr ? prev : curr; // Ternary operator
});
console.log(array = [2,4,8,101,108,12,103,184]);
console.log(`The biggest number in this array will be fetched out as single output by using reduce method i.e ${co}`);



//-------------------------- PRACTICE QUESTIONS -----------------------------//

// 1. We have given array of marks of students. Filter out the marks of students that scored 90 above.

 marks = [86, 95, 96, 100, 72, 65, 28, 96, 98, 97, 35, 88, 99, 58, 90];
 console.log(marks = [86, 95, 96, 100, 72, 65, 28, 96, 98, 97, 35, 88, 99, 58, 90]);

 let stud = marks.filter((toppers) => {
     return toppers>=90;
 });

 console.log(`These are the marks of students who scored 90 or above 90 = ${stud}`);

 // 2. Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum and product of all numbers in the array.

 let user = prompt("Please enter any number to initiate array :");

 arr = [];
  
 for (i=1;i<=user;i++)
    {
        arr[i-1] = i;
    }

console.log(arr);

 let R = arr.reduce((prev,curr) => {
   return prev+curr;
});

console.log(`Addition of all numbers = ${R}`);

let S = arr.reduce((prev,curr) => {
     return prev*curr;
});

console.log(`product of all numbers = ${S}`);