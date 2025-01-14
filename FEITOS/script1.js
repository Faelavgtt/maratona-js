
function getValue(){
    let input1 = document.getElementById("numero1");
    let valor1 = input1.value;

    let input2 = document.getElementById("numero2");
    let valor2 = input2.value;

    valor1 = parseInt(valor1)
    valor2 = parseInt(valor2)

    let calculo = valor1 + valor2

    alert("Resultado " + calculo)
}




