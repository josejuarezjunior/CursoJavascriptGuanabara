function tabuada(){
    let num = window.document.getElementById('txtn');
    let tab = window.document.getElementById('seltab');
    
    if(num.value.length == 0 || num.value == null){
        window.alert('Por favor digite um número!');
    }else{
        var n = Number(num.value);
        let c = 1;
        //Para limpar o conteúdo da tabela
        tab.innerHTML = '';
        while (c <= 10){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }

}