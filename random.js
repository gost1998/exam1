const btn = document.querySelector("btn")
const div = document.querySelector("div")
const body = document.querySelector("body")

div.addEventListener("click", (e) => {
    let a=Math.floor(Math.random()*120000)
    a=a.toString()
    let b=''
    if(a.length<6){
        for(i=5;i>a.length-1;i--){
            b+='0'
        }
    }
    b=b+a
    body.style.backgroundColor = `#${b}`
})
