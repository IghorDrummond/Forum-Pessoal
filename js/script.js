//Declaração de Variaveis Globais
//Elementos
var secao = document.getElementsByTagName('section')
var pesquisa = document.getElementsByTagName('input')
var telaAdd = document.getElementById('tela_adiciona')
var inputs = document.getElementsByName('Titulo')
var Text = document.getElementsByName('Descricao')
var BtnPoste = document.getElementById('postar')
var Conteudo = document.getElementsByTagName('main')
//Array 
var Favoritos = new Array()
var ValVazio = [false, false]
var Texto = ['', '']
//Numeros
var Contador = 0
//Função Anonima
var AdicionaSecaoX = null
var favoritos = null

//============================ Funções ==================================
function favorito(nX){
	favoritos(nX)
}

favoritos = function (posicSecao){

	//Verifica se é objeto ou Numero
	if(typeof posicSecao === 'object'){
		posicSecao = parseInt(posicSecao.currentTarget.id) -1
	}

	console.log(posicSecao)
	//Adiciona No Favoritos e Muda a Cor da Section Escolhida
	secao[posicSecao].style.border = '1px solid #E07B67'
	//Verifica o tamanho de favoritos salvos
	Contador = Favoritos.length
	Favoritos[Contador + 1] = secao[posicSecao].id
	console.log(Favoritos[Contador + 1])
}

function AdicionaSecao(){
	AdicionaSecaoX()
}

AdicionaSecaoX = function(){
	//Aciona A tela de Adicionar Elementos
	telaAdd.style.display = 'block'
}

function Pesquisa(){

}

function Cancela(){

	//Formata para padrão
	if(confirm('Deseja Deletar os Arquivos?')){
		inputs[0].value = ''
		Text[0].value = ''
		telaAdd.style.display = 'none'
	}
}

function ValidaVazio(opc){

	switch(opc){
		case '1': 
			if(inputs[0].value.trim() == ''){
				ValVazio[0] = false
			}else{
				ValVazio[0] = true
				Texto[0] = inputs[0].value
			}
			AtivaBtn()
		break

		case '2': 
			if(Text[0].value.trim() == ''){
				ValVazio[1] = false
			}else{
				ValVazio[1] = true
				Texto[1] = Text[0].value
			}
			AtivaBtn()
		break	
	}
}

function AtivaBtn(){

	//Validar se o Usuario Inseriu os Valores Corretos para habilitar ou desabilitar
	if(ValVazio[0] == true && ValVazio[1] == true){
		BtnPoste.className = 'btn btn-block btn-success'
		BtnPoste.disabled = ''
	}
	else{
		BtnPoste.className = 'btn btn-block btn-success disabled'
		BtnPoste.disabled = 'disabled'		
	}
}

function Postar(){
	//Declaração de Variaveis
	var BtnAdd = document.getElementsByClassName('adiciona')
	var NovaSecao = document.createElement('section')
	var Container = document.createElement('div')
	var linha = document.createElement('div')
	var colunas = [document.createElement('div'), document.createElement('div')]
	var tempo = document.createElement('time')
	var btnFav = document.createElement('button')
	var Titulo = document.createElement('h4')
	var Descricao = document.createElement('p')
	var BtnAux = document.createElement('button')
	//Data
	var Data = new Date()
	//Array 
	var Mes = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

	//Adiciona As Classes aos Novos Elementos
	NovaSecao.id = (secao.length + 1).toString()//Section
	Container.className = 'container' //Container
	linha.className = 'row' //Linha
	colunas[0].className = 'col-6' //Coluna 1
	colunas[1].className = 'col-6' //Coluna 2
	btnFav.className = "botao_coracao d-block ml-auto" //Botao Favorito

	//==============Info Titulo e Descricao=============
	Titulo.innerHTML = Texto[0]
	Descricao.innerHTML = Texto[1]

	//==============Info Colunas=============
	tempo.innerHTML = (Data.getDate() + ' De ' + (Mes[Data.getMonth()]) + ' - ' + Data.getFullYear() ).toString()
	btnFav.onclick = favoritos 
	btnFav.id = (secao.length + 1)

	//==============Colunas=============
	//Inserindo os Elementos na Coluna
	colunas[0].appendChild(tempo)
	colunas[1].appendChild(btnFav)

	//==============Linha===============
	//Inserindo Colunas na Linha
	linha.appendChild(colunas[0])
	linha.appendChild(colunas[1])

	//==============Container===============
	//Inserindo Linha no Container
	Container.appendChild(linha)	
	Container.appendChild(Titulo)
	Container.appendChild(Descricao)

	//==============Section===============
	//Inserindo Container na Section
	NovaSecao.appendChild(Container)

	//==============Main===============
	//Insere o Novo Elemento na Main/Conteudo
	document.getElementById('Conteudo').appendChild(NovaSecao);

	//Reajusta Botão
	BtnAux.className = 'd-block w-100 border border-light mt-3 adiciona'
	BtnAux.innerHTML = '+'
	BtnAux.onclick = AdicionaSecaoX
	document.getElementById('Conteudo').removeChild(BtnAdd[0])
	document.getElementById('Conteudo').appendChild(BtnAux);

	//Limpar Valores 
	inputs[0].value = ''
	Text[0].value = ''
	ValVazio[0] = false
	ValVazio[1] = false
	//Desabilitar o Botão
	AtivaBtn()
	//Desligar a Tela 
	telaAdd.style.display = 'none'
}
