// // array

let arr1 = [5, 1, 49, , 51, 14, 44, 1, 8, 54, 244, 84, 847, 54, "satish"];
console.log(arr1);
console.log(typeof(arr1[arr1.length -1]));               // satish string

arr1.push(99);                                           // add at last
console.log(arr1);                                       
arr1.pop()                                               // remove element from last
console.log(arr1);
arr1.push();                                             // nothing happen
console.log(arr1);

arr1.unshift(99)                                        // add element at first
console.log(arr1); 
arr1.shift()                                            // remove first element
console.log(arr1);

console.log(arr1.includes(44));                          // true
console.log(arr1.indexOf(44));                            // 6

let arr2 = arr1.join();                                   // store element in strings

console.log(typeof arr1);                                  // object
console.log(typeof arr2);                                  // string   ******************************************

// concept of slice and splice

let arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(arr3);                                         // [9,8,7,6,5,4,3,2,1]

console.log(arr3.slice(0, 5));                             // last index not included   [9,8,7,6,5]
console.log(arr3);                                          // [9,8,7,6,5,4,3,2,1]

let arr4 = arr3.splice(0, 6);                              // last index not included  and permanent modified
console.log(arr4);                                        // [ 9, 8, 7, 6, 5, 4 ]
console.log(arr3);                                         // [ 3, 2, 1 ]
