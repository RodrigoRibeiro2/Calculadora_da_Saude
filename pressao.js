// script.js
function calculateBloodPressure() {
    var systolic = parseInt(document.getElementById('bp-systolic').value);
    var diastolic = parseInt(document.getElementById('bp-diastolic').value);

    if (isNaN(systolic) || isNaN(diastolic) || systolic <= 0 || diastolic <= 0) {
        alert("Por favor, preencha valores válidos para pressão arterial sistólica e diastólica.");
        return;
    }

    var result = document.getElementById('bp-result');
    result.innerHTML = '';

    var classification = calculateHypertensionClassification(systolic, diastolic);
    if (classification) {
        result.innerHTML = 'Sua classificação de pressão arterial é: ' + classification;
    } else {
        alert("Não foi possível determinar a classificação da pressão arterial.");
    }
}

function calculateHypertensionClassification(systolic, diastolic) {
    if (systolic < 90 && diastolic < 60) {
        return "<span style='color: #31a252; font-weight: bold;'>Pressão arterial baixa (hipotensão)</span>";
        
    } else if (systolic >= 90 && systolic <= 125 && diastolic >= 60 && diastolic <= 85) {
        return "<span style='color: #31a252; font-weight: bold;'>Pressão arterial normal</span>";

    } else if (systolic >= 126 && systolic <= 139 && diastolic >= 86 && diastolic <= 89) {
        return "<span style='color:#f0d442; font-weight: bold;'>Pré-hipertensão</span>";

    } else if (systolic >= 140 && systolic <= 159 || diastolic >= 90 && diastolic <= 99) {
        return "<span style='color:#f59330; font-weight: bold;'>Hipertensão estágio 1 (Pressão arterial elevada)</span>";

    } else if (systolic >= 160 && systolic <= 179 || diastolic >= 100 && diastolic <= 119) {
        return "<span style='color:#f84600; font-weight: bold;'>Hipertensão estágio 2 (Pressão arterial elevada)</span>";

    } else if (systolic > 180 && diastolic > 120) {
        return "<span style='color:rgb(255, 0, 0); font-weight: bold;'>Crise hipertensiva (EMERGÊNCIA MÉDICA)</span>";
    }

    return null;
}

document.getElementById('bp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBloodPressure();
});

document.getElementById('bp-form').addEventListener('reset', function() {
    document.getElementById('bp-result').innerHTML = '';
});
