function sum(a){
    return (b)=>{
        if(b==undefined){
            return a
        }
        else{ 
            return sum(a+b)
        }
    };
};
console.log(sum(1)(2)(3)(4)())