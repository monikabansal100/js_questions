
// 1.	Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.



function getLastElements(arr, n = 1) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return undefined; // Return undefined for invalid input or empty array
    }
  
    if (n === 1) {
      return arr[arr.length - 1]; // Return the last element
    } else if (n > arr.length) {
      return arr.slice(); // Return a copy of the whole array if n is greater than the array length
    } else {
      return arr.slice(-n); // Return the last 'n' elements
    }
  }
  
  // Test cases
  const arr1 = [1, 2, 3, 4, 5];
  console.log(getLastElements(arr1)); // Output: 5
  
  const arr2 = [10, 20, 30, 40, 50];
  console.log(getLastElements(arr2, 2)); // Output: [40, 50]
  




// 2.	 Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.


function insertDashesBetweenEvens(inputNumber) {
    const inputString = String(inputNumber);
    let outputString = "";
  
    for (let i = 0; i < inputString.length; i++) {
      const digit = parseInt(inputString[i], 10);
      const nextDigit = parseInt(inputString[i + 1], 10);
  
      outputString += digit;
  
      if (digit % 2 === 0 && nextDigit % 2 === 0) {
        outputString += "-";
      }
    }
  
    return outputString;
  }
  
  // Test the function
  const inputNumber = 025468;
  const outputString = insertDashesBetweenEvens(inputNumber);
  console.log(outputString); // Output: "0-254-6-8"
  



// 3.	Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));


function flatten(arr, shallow = false) {
    let result = [];
  
    for (const item of arr) {
      if (Array.isArray(item) && !shallow) {
        const flattenedItem = flatten(item);
        result = result.concat(flattenedItem);
      } else {
        result.push(item);
      }
    }
  
    return result;
  }
  
  // Test the function
  const nestedArray = [1, [2], [3, [[4]]], [5, 6]];
  console.log(flatten(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
  console.log(flatten(nestedArray, true)); // Output: [1, 2, 3, [[4]], 5, 6]
  




// 4.	Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :
var library = [ 
  {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
  
 },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
  title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];


   
  library.sort(function (a, b) {
    return a.libraryID - b.libraryID;
  });
  
  console.log(library);
  



// 5.	Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
// Example input-{red: "#FF0000", green: "#00FF00", white: "#FFFFFF"};
// expected output-{"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}



function swapKeysAndValues(obj) {
    const swappedObj = {};
    for (const key in obj) {
      const value = obj[key];
      swappedObj[value] = key;
    }
    return swappedObj;
  }
  

  const inputObj = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
  const outputObj = swapKeysAndValues(inputObj);
  console.log(outputObj);
  


