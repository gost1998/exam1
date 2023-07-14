// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     re(){
//         return `${this.name} ${this.age}`
//     }
// };
// const person1=new Person("Ali",24);
// console.log(person1.re())

// function top(nearChapter,b){
//     let d=Object.values(nearChapter)
//     let c=Math.abs(d[0]-b)
//     console.log(d)
//     for(i=0;i<d.length;i++){
//         if(Math.abs(d[i]-b)<c){
//             c=i
//         }
//     }
//     return 
// }

// const b=10
// const nearChapter={
//     "chapter 1":1,
//     "chapter 2":15,
//     "chapter 3":11,
// }
// // console.log(top(nearChapter,b))
// console.log()
const func = () => expect(5).notToBe(null)
console.log(func())