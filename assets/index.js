

let x = document.getElementById("form");
let y = document.getElementById("primeNumber");
let z = document.getElementById("submit");
let a = document.getElementById("answer");

x.addEventListener("submit",function ch(e){
    e.preventDefault();
    

console.log(y.value,"bael");
if(y.value === "")
    {
        
a.textContent = "...Empty Input...";
    }
 else if(y.value < 1){
a.textContent = "You Entered Number Lessthan One Please Enter Again..."
 }else{
    if( !Prime()){
        a.textContent = y.value+" "+" is Prime Number";

    }else{
        a.textContent = y.value+" "+" is Not Prime Number";

    }

 }  
});

 let Prime =()=>{
    for(let i = 2; i<y.value/2; i++){
        if(y.value%i==0)
        {
            return true;
            break;
        }
        
    }
    return false;
 }