// todo:    Module no -26-9         topic:  Looping objects: for...in, for...of


// array loop :
const numbers= [12,22,334,44,44];
console.log(numbers);

for(const number of numbers){
    console.log(number);
}



// * object e loop calano :

const family ={
    leader : 'abdullah',
     son: 'ashraful ',
     myBrother: 'tanvir',
     members : 'there are 6 people in my family'
}

// console.log(family);

// loop:
for(const key in family){
    // console.log(key);

    const value = family[key];
    console.log(key, value);
    

}
