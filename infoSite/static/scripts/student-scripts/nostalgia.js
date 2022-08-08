function calc(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = parseFloat(num1) + parseFloat(num2);
    document.getElementById('answer').innerText = sum;
}