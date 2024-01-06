$(document).ready(function(){
	
    extrairCaminho();
});

function extrairId(urlFront, quantidadeId){ //extrai o id da URL selecionada, usando a funÃ§Ã£o do Js location.pathname
	var t= window.location.href;


	var urlsearch= urlFront;
	var ids=urlsearch.split("/");


	var arrayID= Array();
		
	//alert(ids[8]);

	if(quantidadeId == '3'){
		
		arrayID.push(ids[2]);
		arrayID.push(ids[4]);
		arrayID.push(ids[6]);
		
		return arrayID;
		//var url='/descricaoView/'+ids[8];
	}
	
	if(quantidadeId == '2' ){
		
		arrayID.push(ids[2]);
		arrayID.push(ids[4]);
		
		return arrayID;
		
		//var url='/descricaoView/'+ids[6];
	}

	if(quantidadeId= '1'){
		arrayID.push(ids[2]);

		return arrayID;
	}	
	 /*$.ajax({            
            type: 'GET',
             url: url,
            success: function(data){
           
              
             
                    
            },
            error: function () {
           
                        
            }
        });*/
}

function extrairIdPropriedadeMorfologica(urlFront){  //Essa URL quebra o padrÃ£o de caminho/id/caminho/id. 
													//EntÃ£o fiz uma funÃ§Ã£o especÃ­fica para ela
	var urlsearch= urlFront;                        //Ã‰ usada na inserÃ§Ã£o de cor para pegar o horizonte em qual a cor estÃ¡ sendo inserida
	var ids=urlsearch.split("/");


	var arrayID= Array();
	arrayID.push(ids[5]);

	return arrayID;
}


function extrairIdHorizonte(urlFront){
	var urlsearch= urlFront;
	var ids=urlsearch.split("/");


	//var arrayID= Array();
	//arrayID.push(ids[4]);
	
	var id=ids[4];

	return id;
}

function extrairIdObservacao(urlFront){
	var urlsearch= urlFront;
	var ids=urlsearch.split("/");

	var id=ids[4];

	return id;
}


function caminhoAplicacaoProjetoView(){
	var url=window.location.href;

	var toAppend="<p><a href='/projetoView'>Visualizar Projetos </a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoProjetoAdicionarUsuario(){
	var url=window.location.href;

	var toAppend="<p><a href='/projetoView'>Visualizar Projetos </a> > <a href='"+url+"'> Cadastrar UsuÃ¡rio no Projeto </a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoUsuarioView(){
	var url=window.location.href;

	var toAppend="<p><a href='"+url+"'>Visualizar UsuÃ¡rio </a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoProjetoFormulario(){
	var url=window.location.href;

	var toAppend="<p><a href='/projetoView'>Visualizar Projetos </a> ><a href='"+url+"'> FormulÃ¡rio Projeto </a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoUsuarioFormulario(){
	var url=window.location.href;

	var toAppend="<p><a href='/formularioUsuario'>FormulÃ¡rio UsuÃ¡rio </a>";

	$('#caminho').append(toAppend);
}


function caminhoAplicacaoProjetoEditar(){
	var url=window.location.href;

	var toAppend="<p><a href='/projetoView'>Visualizar Projetos </a> ><a href='"+url+"'> Editar Projeto </a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoProjetoGerenciarUsuarioEditar(){
	var url=window.location.href;

	var urlaux = url.split('gerenciarUsuario');
    urlaux = urlaux[0]+'gerenciarUsuario';

	var toAppend="<p><a href='/projetoView'>Visualizar Projetos </a> > <a href='"+urlaux+"'> Gerenciar UsuÃ¡rios do Projeto </a> > <a href='"+url+"'> Editar UsuÃ¡rio no Projeto </a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoProjetoGerenciarUsuario(){
	var url=window.location.href;

	var toAppend="<p><a href='/projetoView'>Visualizar Projetos </a> > <a href='"+url+"'> Gerenciar UsuÃ¡rio no Projeto </a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoVisualizarObservacao(){
	var url=window.location.href;

	var toAppend="<p><a href='/observacaoView'>Visualizar ObservaÃ§Ãµes</a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoFormularioEspectral(){
	var urlEspectral=window.location.href;

	var toAppendEspectral="<p><a href='/observacaoView'>Visualizar ObservaÃ§Ãµes</a> > <a href='"+urlEspectral+"'> Inserir Curva Espectral </a>";

	$('#caminho').append(toAppendEspectral);
}

function caminhoAplicacaoObservacaoFormulario(){
	var urlsearch= window.location.href;

	//console.log(id);

	var toAppend="<p><a href='/observacaoView'>Visualizar ObservaÃ§Ãµes</a> > <a href='"+urlsearch+"'> FormulÃ¡rio ObservaÃ§Ã£o</a>";

	$('#caminho').append(toAppend); 
}


function caminhoAplicacaoRelatorioObservacao(){
	var url=window.location.href;

	var toAppend="<p><a href='/observacaoView'>Visualizar ObservaÃ§Ãµes</a> > <a href='"+url+"'> RelatÃ³rio da ObservaÃ§Ã£o </a>";

	$('#caminho').append(toAppend);
}


function caminhoAplicacaoObservacaoEditar(){
	var urlsearch= window.location.href;

	

	//console.log(id);

	var toAppend="<p><a href='/observacaoView'>Visualizar ObservaÃ§Ãµes</a> > <a href='"+urlsearch+"'> Editar ObservaÃ§Ã£o</a>";

	$('#caminho').append(toAppend); 
}

function caminhoAplicacaoObservacaoDescricao(){
	var urlsearch= window.location.href;

	

	//console.log(id);

	var toAppend="<p><a href='/observacaoView'>Visualizar ObservaÃ§Ãµes</a> > <a href='"+urlsearch+"'> DescriÃ§Ã£o Geral</a>";

	$('#caminho').append(toAppend); 
}

function caminhoAplicacaoHorizonteFormulario(){
	var url= window.location.href;

	var toAppend="<a href='/observacaoView'>Visualizar observaÃ§Ã£o</a> > <a href='"+url+"'> FormulÃ¡rio Horizonte </a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoHorizonteFormularioComplementar(){
	var url= window.location.href;

	var toAppend="<a href='/observacaoView'>Visualizar observaÃ§Ã£o</a> > <a href='"+url+"'> FormulÃ¡rio Complementar </a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoHorizonteView(){
	var urlsearch= window.location.href;

	var ids=urlsearch.split("/");

	var id=ids[4];

	//console.log(id);

	var toAppend="<p><a href='/observacaoView'>Visualizar ObservaÃ§Ãµes</a> > <a href='"+urlsearch+"'> Horizontes da ObservaÃ§Ã£o</a>";

	$('#caminho').append(toAppend); 
}

function caminhoAplicacaoDescricaoMorfologicar(){
	var urlsearch= window.location.href;

	var ids=urlsearch.split("/");

	var id=ids[4];
	
	//console.log(id);

	var toAppend="<p><a href='/observacaoView'>Visualizar ObservaÃ§Ãµes</a> > <a href='/observacaoView/"+id+"/horizonteView'> Horizontes da ObservaÃ§Ã£o</a> > <a href='"+urlsearch+"'> DescriÃ§Ã£o MorfolÃ³gica </a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoHorizonteEditar(){
	var urlsearch= window.location.href;

	var ids=urlsearch.split("/");

	var id=ids[4];
	
	//console.log(id);

	var toAppend="<p><a href='/observacaoView'>Visualizar ObservaÃ§Ãµes</a> > <a href='/observacaoView/"+id+"/horizonteView'> Horizontes da ObservaÃ§Ã£o</a> > <a href='"+urlsearch+"'> Editar Horizonte </a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoHorizonteEditarComplementar(){
	var urlsearch= window.location.href;

	var ids=urlsearch.split("/");

	var id=ids[4];

	url_nova=urlsearch.substr(0,(urlsearch.length-12));
	
	//console.log(id);

	var toAppend="<p><a href='/observacaoView'>Visualizar ObservaÃ§Ãµes</a> > <a href='/observacaoView/"+id+"/horizonteView'> Horizontes da ObservaÃ§Ã£o</a> > <a href='"+url_nova+"'> Editar Horizonte </a> > <a href='"+urlsearch+"'> Editar InformaÃ§Ã£o Complementar do Horizonte </a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoAnalise(){
	var urlsearch= window.location.href;

	var ids=urlsearch.split("/");

	var id=ids[4];

	//console.log(id);

	var toAppend="<p><a href='/observacaoView'>Visualizar ObservaÃ§Ãµes</a> > <a href='/observacaoView/"+id+"/horizonteView'> Horizontes da ObservaÃ§Ã£o</a> > <a href='"+urlsearch+"'> FormulÃ¡rio da AnÃ¡lise </a>";

	$('#caminho').append(toAppend);
}

function caminhoAplicacaoAnaliseEditar(){
	var urlsearch= window.location.href;

	var ids=urlsearch.split("/");

	var id=ids[4];
	
	//console.log(id);

	var toAppend="<p><a href='/observacaoView'>Visualizar ObservaÃ§Ãµes</a> > <a href='/observacaoView/"+id+"/horizonteView'> Horizontes da ObservaÃ§Ã£o</a> > <a href='"+urlsearch+"'> EdiÃ§Ã£o da AnÃ¡lise </a>";

	$('#caminho').append(toAppend);
}



function extrairCaminho(){
	var url=window.location.pathname;

	var caminho=url.split("/");

	if(caminho[2] == 'estado'){
		$('#buscas').attr('class','sub-menu collapse show');
		$('#busca_estado').attr('class','active');
	}
	if(caminho[2] == 'localizacao'){
		$('#buscas').attr('class','sub-menu collapse show');
		$('#busca_localizacao').attr('class','active');
	}
	if(caminho[2] == 'tipo-de-solo'){
		$('#buscas').attr('class','sub-menu collapse show');
		$('#busca_tipo_solo').attr('class','active');
	}
	if(caminho[2] == 'projeto'){
		$('#buscas').attr('class','sub-menu collapse show');
		$('#busca_projeto').attr('class','active');
	}
	if(caminho[2] == 'usuario'){
		$('#buscas').attr('class','sub-menu collapse show');
		$('#busca_usuario').attr('class','active');
	}

	if(caminho[1] == 'formularioProjeto'){
		$('#projetos').attr('class','sub-menu collapse show');
		$('#criar_projeto').attr('class','active');

	}

	if(caminho[1] == 'projetoView'){
		$('#projetos').attr('class','sub-menu collapse show');
		$('#visualizar_projeto').attr('class','active');
	}

	if(caminho[1]== 'formularioObservacao'){
		$('#observacoes').attr('class','sub-menu collapse show');
		$('#inserir_observacoes').attr('class','active');
	}

	if(caminho[1]== 'observacaoView'){
		$('#observacoes').attr('class','sub-menu collapse show');
		$('#visualizar_observacoes').attr('class','active');
	}

	if(caminho[1]=='formularioUsuario'){
		$('#usuario').attr('class','active');
	}

}


function testeJson(){
	var text = '{ "employees" : [' +
	'{ "firstName":"John" , "lastName":"Doe" },' +
	'{ "firstName":"Anna" , "lastName":"Smith" },' +
	'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

	var obj = JSON.parse(text);

	var url= window.location.href;



	var token = $('meta[name="csrf-token"]').attr('content');

	/*$.ajaxSetup({
    	headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    	}
	});*/

	$.ajax({
    	type: 'POST',
    	url:url,
    	datatype : "application/json",
    	data:{
    		_token:token,
        	obj:obj

    	},
    	success: function (response) {
                
                alert("Sucesso ao inserir Teste !!");
            
    	},
    
    	error: function () {
               alert("Erro ao inserir Curva de RetenÃ§Ã£o :(");
    	}


	});
}

