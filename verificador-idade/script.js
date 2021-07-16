function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = ' ';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked){
            genero = 'homem';
            if(idade > 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(idade < 21){
                //Adolescente
                img.setAttribute('src', 'foto-adolescente-m.png')
            }else if(idade < 30){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else{
            genero = 'mulher';
            if(idade > 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade < 16){
                //Adolescente
                img.setAttribute('src', 'foto-adolescente-f.png')
            }else if(idade < 30){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}