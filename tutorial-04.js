//todo              Module No - 26.3            topic:   Arrow function syntax, params, return.

// আমরা  এখন দেখবো , Arrow function => 

//* declaration function: এর  একটা বৈসিস্ট function লেখার আগেও কল করা যায়।

console.log(brotherAge(11,5,2));
 function brotherAge (tanvirAge,abirAge,tohaAge){
    const brother= tanvirAge + abirAge + tohaAge;
    return brother;
    
 }

//  console.log(brotherAge(11,5,2)); 




 //* function expression:  function lekhar age call kora jabe na .

//  console.log(parentAge(50,35)); not work !
 const parentAge=function (dadAge,momAge){
    const ageCalculate= dadAge + momAge;
    return ageCalculate;
 }
 console.log(parentAge(45,35));


 //* arrow function : 

 const mobilePrise= (iphone,xiaomi) => iphone + xiaomi;
 console.log(mobilePrise(120000,80000));


 const divided =(x, y) => x/ y;
 console.log(divided(10,5));


 const minus = (num1, num2) => num1 -num2;
 console.log(minus(20,10));


const laptopPrise = (hp,apple,lenovo) =>{
    const bestPrise = (hp + apple) -lenovo;
    return bestPrise;

}
console.log(laptopPrise(50,50,70));

// boolen value ber kora jay..

const isValueEven = number => number % 2 === 0;
console.log(isValueEven(20));


// professionally arrow function use case: 

// document.getElementById('').addEventListener('click',function(){

// })

document.getElementById().addEventListener('click', () =>{

})