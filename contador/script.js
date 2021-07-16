function contar(){
    var inicio = window.document.getElementById('txtinicio');
    var fim = window.document.getElementById('txtfim');
    var passo = window.document.getElementById('txtpasso');
    var res = window.document.getElementById('res');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossível contar. Preencha todos os campos!";
    }else if(passo.value <= 0){
        res.innerHTML = "O valor do passo deve ser maior que zero!";
    }else{
        res.innerHTML = "Contando: <br>";
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        //Contagem crescente
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`;
            }
        //Contagem decrescente
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`;
            } 
        }res.innerHTML += `\u{1F3C1}`   
    }
    
}