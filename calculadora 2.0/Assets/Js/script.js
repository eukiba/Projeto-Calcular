function calcular() {
    let num1 = document.getElementById('n1')
    let num2 = document.getElementById('n2')
    let operador = document.getElementById('operador')
    let res = document.getElementById('res')
    let op = operador.value
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let s = ''

    // Faz a validação de campos em branco 
    if(    num1.value.length == 0 
        || num2.value.length == 0
        || op.length == 0
        || op != '+'
        && op != '-'
        && op != '*'
        && op!= '/' ){
      alert('[ERROR] Verifique os dados e tente novamente')

    // Faz a verificação do operador aritimetico
    }else if(op == '+'){
        s = n1 + n2
        res.innerHTML = `${n1} + ${n2} = ${s}`
    }else if (op == '-'){ 
        s = n1 - n2
        res.innerHTML = `${n1} - ${n2} = ${s}`
    }else if (op == '*'){
        s = n1 * n2
        res.innerHTML = `${n1} * ${n2} = ${s}`
    }else if (op == '/'){ 
        s = n1 / n2
        res.innerHTML = `${n1} / ${n2} = ${s.toFixed()}`
    }    
}