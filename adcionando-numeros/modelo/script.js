let num = window.document.getElementById('fnum');
let lista = window.document.getElementById('flista');
let res = window.document.getElementById('res');
let valores = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adcionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adcionado`;
        lista.appendChild(item);
        //Limpando o resultado
        res.innerHTML = '';
    }else{
        window.alert("Valor inválido ou já adcionado!");
    }
    //Apagando o campo do input
    num.value = ' ';
    //Selecionando o campo do input
    num.focus();
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adcione valores antes de finalizar!')
    }else
    //Limpando a tela
    res.innerHTML = '';
    //Verificando quantidade de itens
    let tot =  valores.length;
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
    //Verificando maior, menor, soma e média
    let maior =  valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for(let pos in valores){
        soma += valores[pos];
        if(valores[pos] > maior){
            maior = valores[pos];
        }
        if(valores[pos] < menor){
            menor = valores[pos];
        }
    }
    media = soma / tot;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
}