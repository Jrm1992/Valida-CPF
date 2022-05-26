function verificarItem() {
    let cpf = document.querySelector('.input');
    let cpfLimpo = cpf.value.replace(/\D+/g, '');
    let resultado = document.querySelector('.resultado')
    let sequencia = false;

    cpfArray = Array.from(cpfLimpo);

    cpfParaVerificar = cpfArray.slice(0, -2)

    function novoCpf() {
        
        primeiraMultiplicacao = cpfParaVerificar.map((value, index) => {
            return value * ((cpfParaVerificar.length + 1) - index);
        })

        primeiraSoma = primeiraMultiplicacao.reduce(function (total, numero) {
            return total + numero;
        }, 0)

        if ((11 - (primeiraSoma % 11)) > 9) {
            proximoDigito = 0
        } else {
            proximoDigito = 11 - (primeiraSoma % 11)
        }
    
        cpfParaVerificar.push(proximoDigito.toString())
    }

    while (cpfParaVerificar.length < 11) {
        novoCpf()
    }
        
    if (cpfParaVerificar.toString() === cpfArray.toString()) {
        resultado.textContent = "CPF Valido!"
        document.querySelector('.resultado').style.color = 'green'
    } else {
        resultado.textContent = "CPF Invalido!"
        document.querySelector('.resultado').style.color = 'red'
            
    }
    
    
}