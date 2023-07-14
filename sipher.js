// let soz="salomAz";
// soz=soz.toLowerCase()
// const num=1;
// soz=soz.split("");
// let d=[]
// for(let i=0;i<soz.length;i++){
//     d.push(soz[i].charCodeAt())
// };
// let a=''
// for(let i=0;i<d.length;i++){
//     d[i]+=num;
//     if(d[i]>122){
//         d[i]-=26
//     }
//     console.log(d[i]);
//     a+=String.fromCharCode(d[i])
// }
// console.log(a)


const qiyin=()=>{
    let d=[]
    for(let i=0;i<soz.length;i++){
        d.push(soz[i].charCodeAt())
    };
    let a=''
    for(let i=0;i<d.length;i++){
        d[i]+=num;
        if(d[i]>122){
            d[i]-=26
        }
        a+=String.fromCharCode(d[i])
    }
    return a
}

let soz="salomAz";
soz=soz.toLowerCase()
const num=1;
soz=soz.split("");
console.log(qiyin(soz,num))