const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function getLength(arr, cb) {
    // getLength passes the length of the array into the callback.
    cb(items.length);
}
getLength(items, (length) => {
  console.log(length);
});
        
  
  
  function last(arr, cb) {
    // last passes the last item of the array into the callback.
    cb(items.slice (-1)[0]);
}
last(items, (slice) => {
  console.log(slice);
});
  
  function sumNums(x, y, cb) {
    // sumNums adds two numbers (x, y) and passes the result to the callback.
return cb (x,y);
  }

   function add(x, y) {
      return x + y;
    }
    
    let sum = sumNums(25,15, add);

    console.log(sum);
  
  function multiplyNums(x, y, cb) {
    // multiplyNums multiplies two numbers and passes the result to the callback.
    return cb (x,y);
}

 function multiply(x, y) {
    return x * y;
  }
  
  let product = multiplyNums(5,18, multiply);

  console.log(product);

  
  function contains(item, list, cb) {
    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.
    return cb(items.includes(item));
}

contains('Pencil',items, console.log);
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let duplicate = {};

  for (let i = 0; i < items.length; i++)  {
duplicate[items[i]] = true;
  }
  cb(Object.keys(seen));
}
