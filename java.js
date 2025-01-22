const kelvinOutput = document.getElementById('kelvin');
const fahrenheitOutput = document.getElementById('fahrenheit');
const convertirButton = document.getElementById('convertir');

function convertirTemperatura(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

   
    kelvinOutput.textContent = `Grados Kelvin: ${kelvin.toFixed(2)}`;
    fahrenheitOutput.textContent = `Grados Fahrenheit: ${fahrenheit.toFixed(2)}`;

    
    if (celsius > 30) {
        document.body.style.background = 'linear-gradient(to bottom, #ff7e5f, #feb47b)'; 
    } else {
        document.body.style.background = 'linear-gradient(to bottom, #a0c4ff, #0077b6)'; 
    }
}

convertirButton.addEventListener('click', function() {
    const celsiusInput = prompt("Ingrese grados Celsius:");
    const celsius = parseFloat(celsiusInput);

    if (isNaN(celsius)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    convertirTemperatura(celsius);
});
