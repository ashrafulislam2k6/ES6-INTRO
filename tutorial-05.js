
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

