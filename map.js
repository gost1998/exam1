class Metot{
    constructor(soz){
        this.soz=soz
    };
    map(){
        let d= this.soz.split("")
        let d1=[]
        for(let i=0;i<d.length;i++){
            console.log(d[i]==" ",d[i])
            if(d[i]!=' '){
                d1.push(d[i])
            }
        }
        return d1
    };
};
const soz1=new Metot("salom dunyo")
console.log(soz1.map())