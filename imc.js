function calculateIMC() {
    var weight = parseFloat(document.getElementById('imc-weight').value);
    var height = parseFloat(document.getElementById('imc-height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Por favor, preencha valores válidos para peso e altura.");
        return;
    }

    var bmi = weight / ((height / 100) ** 2);

    var result = document.getElementById('imc-result');
    result.innerHTML = '';

    if (bmi < 18.5) {
        result.innerHTML = 'Seu IMC é de: ' + bmi.toFixed(2) + ' e é classificado como: <span style="color: rgb(255, 0, 0); font-weight: bold; ">Magreza</span>.';

    } else if (bmi >= 18.5 && bmi < 24.99) {
        result.innerHTML = 'Seu IMC é de: ' + bmi.toFixed(2) + ' e é classificado como: <span style="color: #31a252; font-weight: bold; ">Peso ideal</span>.';

    } else if (bmi >= 25 && bmi < 29.99) {
        result.innerHTML = 'Seu IMC é de: ' + bmi.toFixed(2) + ' e é classificado como: <span style="color: #f0d442; font-weight: bold; ">Sobrepeso</span>.';

    } else if (bmi >= 30 && bmi < 39.99) {
        result.innerHTML = 'Seu IMC é de: ' + bmi.toFixed(2) + ' e é classificado como: <span style="color: #f59330; font-weight: bold; ">Obesidade</span>.';

    } else if (bmi >= 40) {
        result.innerHTML = 'Seu IMC é de: ' + bmi.toFixed(2) + ' e é classificado como: <span style="color: rgb(255, 0, 0); font-weight: bold; ">Obesidade grave</span>.';
    }
}

document.getElementById('imc-form').addEventListener('submit', function (event) {
    event.preventDefault();
    calculateIMC();
});

document.getElementById('imc-form').addEventListener('reset', function () {
    document.getElementById('imc-result').innerHTML = '';
});