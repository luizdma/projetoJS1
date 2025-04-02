




function tocaSom(seletorAudio){

    const elemento = document.querySelector(seletorAudio);     // guardando o valor retornado pela funcao seletora que encontrou a tecla 
    //se elemento existe(nao eh nulo) e sua tag eh do tipo audio entao toca
    if(elemento.localName === 'audio' && elemento != null){
        elemento.play();
    }
    else {
        alert('elemento nao encontrado');
    }

}
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador< listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];   //pega a tecla_ + (tipo de som)
    const idAudio = `#som_${instrumento}`;  //concatenando uma string som_ + tecla_pom ou tecla_tim(varia de acordo com a q vc clicar)

    tecla.onclick= function(){   //funcao q eh acionada quando clicamos com o mouse na tecla d som

        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento){         //funcao ativada quand utilizamos tab e espaco ou enter para acionar o som da tecla 
        if(evento.code==='Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');               
        }
    }
    tecla.onkeyup = function(){     // funcao ativada para remover o fundo vermelho ativado pelo keydown no momento que soltamos a tecla enter ou espaco

        tecla.classList.remove('ativa');
    }
}


