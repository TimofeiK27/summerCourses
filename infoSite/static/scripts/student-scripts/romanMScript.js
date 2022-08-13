// let x=1;
// function SCREAM(){
//     x=x+1;
//     alert(x);  
// }
// let a=1;
// let b=1;
// let c;

// let count=0;
// function fib(){
    
//     while(true) {
//         console.log(b)
//         c = a+b;
//         a = b;
//         b = c;
//     }

// }



function calc(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = num1 + num2;
    document.getElementById('answer').innerText = sum;

    
}