let resultDisplayed = false; 

function clearDisplay() {
    document.getElementById('display').value = '';
    resultDisplayed = false; 
}


function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}


function appendCharacter(character) {
    const display = document.getElementById('display');

    
    if (resultDisplayed) {
        if (character === '+' || character === '-' || character === '*' || character === '/') {
            display.value += character; 
            resultDisplayed = false; 
        } else if (character === '.') {
            display.value = '0.'; 
            resultDisplayed = false; 
        } else {
            
            display.value = '';
            resultDisplayed = false; 
        }
    } else {
        
        if (character === '.') {
            if (!display.value || display.value.slice(-1).match(/[\+\-\*\/]/)) {
                display.value += '0.';
            } else if (display.value.includes('.')) {
                return;
            } else {
                display.value += '.';
            }
        } else {
            display.value += character; 
        }
    }
}

function formatNumber(value) {
    return Number(value).toLocaleString('de-DE');
}


function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);

        display.value = formatNumber(result);
        resultDisplayed = true; 
    } catch (e) {
        display.value = 'Error';
        resultDisplayed = false; 
    }
}

function appendDot() {
    const display = document.getElementById('display');

    if (resultDisplayed) {
        display.value = '0.'; 
        resultDisplayed = false; 
    } else if (!display.value.includes('.')) {
        display.value += '.'; 
    }
}
