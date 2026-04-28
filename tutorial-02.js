// todo: module no-26.2         topic:  Function default parameter for not provided values. 

// আমার  যেটা দেখবো , function e  another parameter .but argument not provide.


// 1. family member: 
function family (boy, girl){
    const count = boy  + girl;
    console.log(`boy-${boy} , girl- ${girl}, total- ${count} \n`);
}

family(5, 1); //  this is work : ✅ 
 family(5);    // this is not work ❌ ১টা আরগুমেন্ট  দিয়ে কাজ করানোর জন্য ডিফল্ট পেরামিটার দিতে হবে। girl-- undefine কারন কোন মান নেই , আর NaN এর কারন this is not a Number.




//2. student count: and only one argument and 2 parameter 😄
// ১টা আরগুমেন্ট  দিয়ে কাজ করানোর জন্য ডিফল্ট পেরামিটার দিতে হবে। ✅

   function student( boy, girl = 0){
    let total = boy + girl;
    console.log(`boy-${boy}, girl-${girl}, total- ${total} \n `);
   }

   student(10,40);   // this is work : ✅ 
  student(40);       // this is work : ✅  

//3. default value দেওয়ার ক্ষেত্রে খেয়াল রাখতে হবে ,যে কোন্টার সাথে কি ডিফল্ট value দিব? 

function multiply ( groupA =1 , groupB =1){
    const multiplication = groupA * groupB;
    console.log(`group A- ${groupA}, group B - ${groupB}, total multiplication - ${multiplication} \n`);
}

multiply(10, 5); 
multiply(10); 



//4. string diye practice kori.

function name( fastName = '', lastName= ''){
    const fullName= fastName + ' ' + lastName ;
    console.log(`fast Name: ${fastName}, last Name: ${lastName} , full Name: ${fullName}`);
}

name('ashraful' , 'islam');
name('ashraful');
name('', 'islam');

/**
 *      আমাদের সিচুয়েশন বুঝে ডিফল্ট value দিতে হবে। 
 * 
 *      number        =  0
 *      multiplication=  1
 *      name          = ''
 *      array         = [] 
 *      object        = {}
 */
