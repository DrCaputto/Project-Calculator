const selectedButton = document.querySelector('#casing');
const oldOutput = document.querySelector('.old-input')
const newOutput = document.querySelector('.new-input')

let numb1 = 0; 
let numb2 = 0; 
let selectedOperand = '';

selectedButton.addEventListener('click', (event) => {
    if(!event.target.closest('button')) return;

    const btn = event.target.textContent;

    const type = event.target.getAttribute('data-type');

    if (type === 'number'){
        typeDigit (btn);
    } else if (type === 'operand') {
        typeOperand (btn);
    } else if (type === 'equal') {
        typeEqual ();
    }
    
});

function typeDigit (digit) {
    digit = Number(digit);
    
    if (selectedOperand) {
        numb2 = numb2*10 + digit;
        printNew (numb2);
    } else {
        numb1 = numb1*10 + digit;
        printNew (numb1);
    }
}

function typeOperand (operand) {
    selectedOperand = operand;
    printOld (numb1 + ' ' + selectedOperand);
    printNew ('');
}

function typeEqual () {
    if (selectedOperand === '+') {
        numb1 = add ();
        numb2 = 0;
        printNew (numb1)
        printOld ('');
    }
}

// operand functions

function add () {
     let sum = numb1 + numb2;
     return sum;
}

function subtract () {
     let sub = numb1 - numb2; 
     return sub;
}

function multiply () {
    let mult = numb1 * numb2;
    return mult;
}

function devide () {
    let devid = numb1 / numb2;
    return devid;
}

// print functions

function printNew (number) {
    newOutput.textContent = number;
}

function printOld (text) {
    oldOutput.textContent = text;

}