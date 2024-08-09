
function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultElement = document.getElementById('result');

    if (isNaN(tempInput) || tempInput === '') {
        resultElement.innerText = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(tempInput);
    let result;

    if (unitSelect === 'C') {
        
        result = (temperature * 9/5) + 32;
        resultElement.innerText = `${temperature}°C is ${result.toFixed(2)}°F`;
    } else {
    
        result = (temperature - 32) * 5/9;
        resultElement.innerText = `${temperature}°F is ${result.toFixed(2)}°C`;
    }
}
