// EKUB 
const ekub=(a,b)=>{
    
    let d=[]
    if(a>=b){
        for(i=1;i<=a;i++){
            if(a%i==0){
                d.push(i)
            };
        };
        console.log(d)
        for(i=d.length;i>0;i--){
            if(b%d[i]==0){
                return d[i]
            }
        }
    }
    if(a<b){
        for(i=1;i<=b;i++){
            if(b%i==0){
                d.push(i)
            };
        };
        console.log(d)
        for(i=d.length;i>0;i--){
            if(a%d[i]==0){
                return d[i]
            }
        }
    }
};

const a=36;
const b=54;
console.log(ekub(a,b))