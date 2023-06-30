function calculateDiabetes() {
    var glucose = parseInt(document.getElementById('diabetes-glucose').value);

    if (isNaN(glucose) || glucose <= 0) {
        alert("Por favor, insira um valor numérico válido para nível de glicose.");
        return;
    }

    var result = document.getElementById('diabetes-result');
    result.innerHTML = '';

    var classification = calculateDiabetesClassification(glucose);
    result.innerHTML = 'Sua classificação de nível de glicose é: ' + classification;
}

function calculateDiabetesClassification(glucose) {
    if (glucose < 70 ) {
        return "<span style='color:rgb(255, 0, 0); font-weight: bold; '>hipoglicemia (ALERTA)</span>";

    } else if (glucose >= 70 && glucose <= 99) {
        return "<span style='color:#31a252; font-weight: bold; '>Glicemia Normal</span>";

    } else if (glucose >= 100 && glucose <= 125) {
        return "<span style='color:#f0d442; font-weight: bold; '>Pré-Diabetes (ALERTA)</span>";

    } else if (glucose >= 126) {
        return "<span style='color:rgb(255, 0, 0); font-weight: bold; '>Diabetes (ALERTA)</span>";
    }
}

document.getElementById('diabetes-form').addEventListener('submit', function (event) {
    event.preventDefault();
    calculateDiabetes();
});

document.getElementById('diabetes-form').addEventListener('reset', function () {
    document.getElementById('diabetes-result').innerHTML = '';
});