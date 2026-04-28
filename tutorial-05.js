
// todo             Module no- 26-5             topic: Spread operator, array max, copy arrays

// আমরা দেখব যে spread operator এর use case:   spread বিছিয়ে দেওয়া .


    // Math.max দিয়ে আমরা বড় সংখ্যা বের করতে পারি। 
 const max = Math.max( 2, 5, 9, 7, 10);
 console.log(max); 

    //  Math.max দিয়ে array থেকে বড় সংখ্যা বের করতে পারব কি? 
 
const number= [19, 23,34,45,50,90];
// const bigNumber= Math.max(number);  এইটা কাজ কতেছে না । কারন এইটা একটা array , array এক কাজ করাতে হলে বিছিয়ে দিতে হবে 
const bigNumber= Math.max(...number);
console.log(number);
console.log(...number);
console.log(bigNumber);



const fastNumber= [12, 45, 66,20, 90];
const secondNumber = fastNumber;
// console.log(...secondNumber);


const params = [25, 25, 50];
function sum( x, y, z){
    return x + y + z ;
}
// console.log(sum(params));  এইটা কাজ করবে না ? এইখানে শুধু  একটা array ache. 
console.log(sum(...params));


// duble array e push kore dekhi ,spread operator.

const firstVariable = [12, 44,44,55];
const secondVariable = [...firstVariable];

firstVariable.push(24,50);
console.log(firstVariable);
console.log(secondVariable);



const arr1= [45, 35, 20, 11];
const arr2= [...arr1];
console.log(arr1[0], arr1[2], arr1[3]);
console.log(arr1);
console.log(arr2);


// amra caile object diyeo try korte pari speared operator: 

const  obj1 = {name: 'iPhone15pro', prise: '$999'};
const obj2= {...obj1, dejegnation:'developer'};
obj2.description= 'good';
console.log(obj1);
console.log(obj2);



