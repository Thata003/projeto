function validar() {
    var nome = form1.nome.value
    var log =form1.login.value
	var senha=form1.senha.value

    if(nome==""){
		alert("Digite seu nome.");
		return false; // Se ele encontrar algum erro, ele vai retornar avisando que falta algo. O campo não pode ficar vazio.
		}
	
    if(log=="" || log.indexOf('admin',0) == -1){
		alert("Digite seu Login correto.");
		return false;
		}
	
	if(senha=="" || senha.indexOf('102030',0) == -1){ //indexOF é um comando de validação, que só deixa você avançar para a próxima página se ele detectar o que for definido como obrigatório.
		alert("Digite sua senha correta!");
		return false;
		}

        if(log == 'admin' && senha == '102030'){ // && significa "E"
            window.open("salas.htm") //Comando de abrir janelas
    }
}

function calcular() {
    var t1 = parseInt(document.form1.preto.value)
    var t2 = parseInt(document.form1.amarelo.value)
    var t3 = parseInt(document.form1.azul.value)
    var t4 = parseInt(document.form1.vermelho.value)
    var t5 = parseInt(document.form1.laranja.value)
    var t6 = parseInt(document.form1.verde.value)
    var r = t1 + t2 + t3 + t4 + t5 + t6 
{
    window.alert(`A quantidade de tampinhas é de: ${r}`)
}
}