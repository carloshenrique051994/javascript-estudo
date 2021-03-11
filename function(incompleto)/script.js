function clicar(){
    var n1 = document.querySelector(".num1").value;
    var n2 = document.querySelector(".num2").value;
    var pegandoValor = document.querySelector('.operacao')
    var operacaoJavascript = pegandoValor.options[pegandoValor.selectedIndex].value;

    if(pegandoValor == 'somar'){
        var resultado = Number(n1)+Number(n2)
    }
    if(pegandoValor == 'subtrair') {
        var resultado = Number(n1)-Number(n2)
    }
    else{
        var resultado = Number(n1)*Number(n2)
    }
    document.querySelector(".resultado").innerHTML = resultado
}

function resetar(){
    var resultado = 0
    var operacaoJavascript = null
    document.querySelector(".resultado").innerHTML = resultado

}

