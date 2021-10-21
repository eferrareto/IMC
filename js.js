function confirmar(){
    let nome = document.getElementById('nomes').value;
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let imc = (peso / (altura * altura)).toFixed(1);
    let r = '';
    if(imc < 18.5){
        r = 'Abaixo do Peso';
    } else if(imc > 18.5 && imc < 24.9){
        r = 'com o Peso Normal';
    } else if(imc > 25 && imc < 29.9){
        r = "com Sobrepeso";
    } else if(imc > 30 && imc < 34.9){
        r = "com Obesidade Grau 1";
    } else if(imc > 35 && imc < 39.9){
        r = "com Obesidade Grau 2";
    } else if(imc >= 40){
        r = "com Obesidade Mórbida";
    }

    document.getElementById('resposta').innerHTML = `${nome} seu IMC é ${imc} e você está ${r}`;
}