// todo:    Module no - 26.3            topic: Template string, multiline string, dynamic string:

function myIntro( fastName, lastName){
    const fullName = fastName  + ' ' + lastName;
    console.log("fast Name:" ,fastName , ' ' , 'last Name', lastName ,'full Name :' , fullName);
}

myIntro('ashraful' , 'islam');



//todo:  এখন আমরা দেখবো , স্পেশাল  একটা জিনিস - ` ` . যার নাম back tick ( ` ` );

// 1. example of back tick ` `
function me(fastName, lastName){
    const fullName= fastName +' ' +  lastName;
    console.log(`fast name: ${fastName} last name: ${lastName}  and full name ${fullName}`);
}

me('md Ashraful' , 'islam');


// 2. example of back tick :  multiline and dynamic: 

function getCardHtml( name, description, prise){
    const card= `
    <div>
        <h1>Name: ${name} </h1>
        <p>description: ${description} </p>
        <p>prise : $ ${prise} </p>
   
    </div>`
    console.log(card);
}

getCardHtml('rose', 'very nice flower', 10);


// todo: summery:   back tick: ` ` 
// todo:        1. Template String (সবচেয়ে বেশি ব্যবহার) 2. Multi-line String 3. Expression বসানো (Dynamic Value) 4. HTML Template বানানো 5. Tagged Template (Advanced) 6. Escape সমস্যা কমায়. 






