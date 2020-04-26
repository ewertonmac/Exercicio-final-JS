var  numero = document.getElementById('ntxt')
var sel =document.getElementById('selectlist')
var res = document.getElementById('res')
var arrayNum = []

//validação dos numeros a serem adicionados
function validNumber(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inArray(n, array){
    if(array.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adiciona(){

    if(validNumber(numero.value) && !inArray(numero.value, arrayNum)){
        arrayNum.push(Number(numero.value))
        var opt = document.createElement('option')
        opt.value = `list ${numero.value}`
        opt.text = `Valor ${numero.value} adicionado.`
        sel.appendChild(opt)
        res.innerHTML = ''
    }
    else{
        alert('Valor já informado ou inválido.')
    }
    numero.value = ''
    numero.focus()
}

function calcular(){
    
    if (sel.length == 0){
        alert('Adicione números antes de calcular.')
    }
    else{
        var total = arrayNum.length
        var menor = arrayNum[0]
        var maior = arrayNum[0]
        var soma = 0

        for(var c in arrayNum){
            if(arrayNum[c]<menor)
                menor = arrayNum[c]

            if(arrayNum[c]>maior)
                maior=arrayNum[c]
            
            soma+=arrayNum[c]
        }

        var media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.`
        res.innerHTML += `<p>A média dos valores é ${media.toFixed(2).replace('.',',')}` 
    }
}

function limpa(){
    numero.focus()
    numero.value = ""
    sel.innerHTML = ''
    res.innerHTML = ''
    arrayNum = []
}