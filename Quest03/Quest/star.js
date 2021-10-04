'use strict'

let star='';
let a=prompt();
for (let i=0;i<5;i++){
    for (let j=4;j>i;j--){
        star+=' ';
    }
    for (let m=0;m<=(i*2);m++){
        star +='*';
    }
    star += '\n';
}
console.log(star);