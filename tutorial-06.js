// todo:            Module no-26-6          topic: (Advanced) Object and array destructuring

const product ={
    name: 'iphone 15pro',
    prise: '$999',
    brand:'apple'
}

product.discount='$99';
console.log(product);


// যদি আমরা product এর  যেকোন  property access করতে চাই তাহলে এইভাবে করতে পারিঃ 
 console.log(product.name);
 console.log(`iphone prise is - ${product.prise}`);

 // আবার যদি আমরা product এর  যেকোন  property access করতে চাই তাহলে এইভাবে করতে পারিঃ 
   
 const prise= product.prise;
 console.log(prise);

 const discount= product.discount;
 console.log(`now iphone provide - ${discount} discount`);





 //* আর সবচেয়ে advanced way তে করতে চাইলে destructuring use করতে হবে।

 const {name,prise:laptopPrise,ram,color} = {name:'hp', prise:'$500', ram:'8GB', color:'white'}
 console.log(name);
 console.log(laptopPrise);
 console.log(ram);
 console.log(color);

// const same name variable thakle , notun nam deoya jabe, exaple- prise:newPrise .
// আবার আমরা চাইলে, default value set করতে পারি।  

const {country,home,familyLeader,brother, me='Ashraful'} = {country:'bangladesh', home:'natore', familyLeader: 'dad', brother: 'tanvir,abir,toha'}

console.log(country);
console.log(home);
 console.log(me);


 // আবার আমরা , array দিয়েও destructuring কাজটা করতে পারি। 

//  const money =['10Taka', '100Taka', '500Taka','1000Taka'];
 const [tentaka, hundred, fiveHundret, oneK, oneMilion ='1 melion '] =[ '10Taka', '100Taka', '500Taka','1000Taka'];
 console.log(tentaka);
 console.log(hundred);
 console.log(oneMilion);



 /*
 *   summery: destructuring operator : 

todo: আমার array and object এর ভেতরে থাকা property এর value গুল কে সহজে  access করার জন্য ,destructuring operator use করব। array and object এর ভেতরে থাকা property গুলোকে variable name বানিয়ে দিব, যাতে খুব সহজে access করা যায়। object এর ক্ষেত্রে {} এর ভেতরে property name গুলো লিখবো । আর array এর ক্ষেত্রে [] ভেতরে property গুল লিখব। আমরা চাইলে , আলাদা ডিফল্ট value set করে দিতে পারি। এবং property name অন্য কোন variable er সাথে মিলে গেলে, নতুন নাম সেট করে দিতে পারি। {prise: newPrise} . prise এর নতুন নাম newPrise . */



 
