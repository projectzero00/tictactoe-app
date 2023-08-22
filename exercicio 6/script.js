let calculation = localStorage.getItem('calculation') || '';
let result = document.getElementById('result');

if(localStorage.getItem('calculation')){
    calculation = localStorage.getItem('calculation');
    result.innerHTML = calculation;
}

function updateCalculation(value) {
    calculation += value;
    result.innerHTML = calculation;
    localStorage.setItem('calculation', calculation);
}

// Optional: you can also create a function in order
// to reuse this code.
