// todo:        topic: 26-7         topic:  Keys, values, entries, delete, seal, freeze

// get keys in object: 
const king= {name:'Hassanal Bolkiah', age: 79 , country: 'Brunei Darussalam'}

 const key= Object.keys(king);
 console.log(key);

 // get value in object:
 const value= Object.values(king);
 console.log(value);

 // entries er use case:  entries use করলে , property and value এক সাথে দেখাবে। 2D array (Two-Dimensional Array) বলা হয়.
 const entries = Object.entries(king);
 console.log(entries);


//*  how to delete aney property in object : 
const family = {leader:'my dad', me:'ashraful', brother:4, angryBrother:'tanvir', mylove:'abir', youngerBrother:'abu-toha'}

delete family.brother;
delete family.me;
console.log(family);


// what is freeze of object : freeze করলে , পুরো object টাকে freeze করে দিবে ।


// Object.freeze(family);
console.log(family);

// add new property in family object: 
family.mom='my mom is queen in my family';
console.log(family);



// what is sale : 
Object.isSealed(family); 
console.log(family);



// todo : tutorial no -07.js er summery: 
/**
 * const phone ={name: 'iphone 17pro', brand:'apple', prise:'120k', color:'white'}
 * 1. get property in object:   
 * const keys= object.keys(phone);  আমরা শুধু property গুলো কে পাব। [name,brand,prise, color].
  
 * 
 * 2. get value in object:
 * const value= object.values(phone); আমরা শুধু value গুলো কে পাব। ['iphone 17pro', 'apple', '120k', 'white']
 * 
 

 * 3. what is entries :
 *    object.entries(phone);
 * console.log(entries);   entries use করলে , property and value এক সাথে দেখাবে। 2D array (Two-Dimensional Array) বলা হয়. [['name, 'iphone 17pro] ['brand','apple'] ['prise', '120k'], ['color', 'white'] ]


 * 4. how to delete any property in object:
 *     delete phone.prise;
 *     console.log(prise); প্রথমে, ডিলেট তারপরে object name. যে property কে ডিলেট করবো।
 *
 * 
 

 *5. what is freeze  : 
 * object.freeze(phone);
 * console.log(phone), freeze করলে object er কোন কিছু change হবে না , property add , property delete  kora jabe na ।
 * 
 * 


 *6.  what is sale :  
 * 
 * object.sale(phone);
 * console.log(phone). sale use করলে update করা যাবে। তবে,নতুন property add করা যাবে না এবং property delete করা যাবে না।
 * 
 *  
 * 

 */