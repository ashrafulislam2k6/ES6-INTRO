// todo:     Module no-26-8     topic:    Accessing object data: nested object, dot vs bracket and optional chaining

const wrestling= {
    wweHigCif : 'The Rock',
    wweboss: 'triple age',

    samoOnFamily:{
        tribleCif: 'Roman Range',
        usos: 'jay and jemi uso',
        group: 'The blood line',
        advoket: 'pol hyman'
    },
    worldChampion:'otc Roman range',
    haveywaitChampion: 'cody rose'

}


//todo  1. Dot Notation : 
console.log(wrestling.wweHigCif);
console.log(wrestling.wweboss);
console.log(wrestling.samoOnFamily);
console.log(wrestling.samoOnFamily.group);



// todo  2. bracket notation: 
const oldBoss= 'vins macman';

console.log(wrestling['worldChampion']);
console.log(wrestling['samoOnFamily']['usos']);
console.log(wrestling['samoOnFamily']['group']);



// todo , 3. optional chaining : অপশনাল চেইনিং ঃ property?.

// console.log(wrestling.mondayNightRaw.smacdown);  error dibe.
console.log(wrestling?.mondayNightRaw?.smacdown);



