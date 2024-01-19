

function inserirProjeto(){
	var nome = document.getElementById("nome_projeto").value;
	var municipio= document.getElementById("municipio").value;
  console.log(municipio);
	var estado = document.getElementById("estado").value;
	var sigla =document.getElementById("sigla").value;
	var select = document.getElementById("orgaos");
	var orgao = select.options[select.selectedIndex].value;
	

	var token = $('meta[name="csrf-token"]').attr('content');
	
	//document.getElementById("limite_superior").value;
	
	//alert(token);
	$.ajax({
  	type: "POST",
  	url:'insertProjeto',
  	data:{
  		_token:token,
  		nome: nome,
  		municipio: municipio,
  		sigla: sigla,
  		estado: estado,
  		orgao:orgao
  	},
  	success: function (response) {
                
                alert('Projeto inserido com sucesso!!');
                location.replace('/projetoView');
    },
    
    error: function () {
               alert("erro ao inserir Projeto :(");
    }

});

	
}

function deleteProjeto(projeto){
	var id=projeto.id_projeto;
	var token = $('meta[name="csrf-token"]').attr('content');
  $('#Modaldelete').modal('show'); 
  $("#Modaldelete").modal().find(".btn-ok-delete").on("click", function(){
    $('#Modaldelete').modal('hide');

  	$.ajax({
    	type: "DELETE",
    	url:'deleteProjeto',
    	data:{
    		_token:token,
    		id:id
    	},
      success: function (response) {
                alert('Projeto '+projeto.nome+' deletado com sucesso!');
                location.reload(true);
      },
      
      error: function (response) {
                 alert(response.responseJSON.msg);
      }

    });
  });
}

function updateProjeto(projeto){
	var id=projeto.id_projeto;
	var nome = document.getElementById("nome_projeto").value;
	var municipio= document.getElementById("municipio").value;
	var estado = document.getElementById("estado").value;
	var sigla =document.getElementById("sigla").value;
	var select = document.getElementById("orgaos");
	var orgao = select.options[select.selectedIndex].value;

	var token = $('meta[name="csrf-token"]').attr('content');


	$.ajax({
  	type: "PATCH",
  	url:'/projetoView/'+id+'/editar',
  	data:{
  		_token:token,
  		nome: nome,
  		municipio: municipio,    
  		sigla: sigla,
  		estado: estado,
  		orgao:orgao,
  		id: id
  	},
  	success: function (response) {
                
                alert('Projeto atualizado com sucesso!!');
                location.replace('/projetoView');
    },
    
    error: function () {
               alert("erro ao atualizar Projeto :(");
    }

}); 

}

function projeto(){
	var token = $('meta[name="csrf-token"]').attr('content');

	$.ajax({
  	type: "GET",
  	url:'/projetos/',
  	data:{
  		_token:token
  	},

});
}

function getOrgaos(){
	$.ajax({            
            type: 'GET',
             url: '/orgaos',
            dataType: 'json',
            success: function(data){
                
            var toAppend = '';
           
            $.each(data,function(i,o){

               var item = "<option ";
                
                item += 'value="'+o.id_orgao+'">';
                item += o.nome_orgao;
                                
                item += "</option>";
                
                toAppend += item;
            });
                        
            $('#orgaos').append(toAppend);  
                    
            },
            error: function () {
                console.log("Erro ao resgatar os dados: Professor");
            }
        });
}

function selecionarProjeto(projeto){
  var id=projeto.id_projeto;
  var url='/selecionarProjeto/'+id;  
  var redirecUrl=window.location.href
  $.ajax({            
            type: 'GET',
             url: url,
            success: function(data){
              //window.location.reload('menu.navbar');
              alert("Projeto selecionado com sucesso!!");
              window.location.href = "/observacaoView";
            },
            error: function () {
                alert("Erro ao selecionar projeto");
            }
        });
  
}

function recuperarProjetoSelecionado(){

  // var url='/projetoSelecionado/';
  var url='/';

   $.ajax({            
            type: 'GET',
             url: url,
            success: function(data){
           
           if(data != ''){
              var projeto= "<p> VocÃª estÃ¡ no Projeto: <b>"+data.nome+"</b></p>";
              
              $('#projeto').empty();
              $('#projeto').append(projeto);            
            }
            else{
              var projeto= "<p>";
               projeto +="Projeto nÃ£o selecionado, por favor selecione o projeto na aba de projetos.";
               projeto+="</p>";


               $('#projeto').empty();
               $('#projeto').append(projeto); 
            } 
                    
            },
            error: function () {
            
           
                        
            $('#projeto').append(projeto);
            }
        });
}


function adicionarUsuario(){
  $('#botao').prop("disabled",true);
  var email = document.getElementById("email").value;
  var nivel = document.getElementById("nivelAcesso").value;
 
  

  var token = $('meta[name="csrf-token"]').attr('content');
  
  var url= window.location.href;
  //document.getElementById("limite_superior").value;
  
  //alert(token);

  $.ajax({
    type: "POST",
    url:url,
    data:{
      _token:token,
      email:email,
      nivel_acesso:nivel
    },
    success: function (response) {
                $('#botao').prop("disabled",false);
                alert("UsuÃ¡rio inserido com sucesso!!");
    },
    
    error: function (response) {
              $('#botao').prop("disabled",false);
               alert(response.responseJSON.msg+" "+response.responseJSON.email+" "+response.responseJSON.msg2);
    }

});

  
}


function atualizarProjUser(){
  $('#atualizar').prop("disabled",true);
  var nivel = document.getElementById("nivelAcesso").value;
 
  

  var token = $('meta[name="csrf-token"]').attr('content');
  
  var url= window.location.href;
  //document.getElementById("limite_superior").value;
  
  //alert(token);

  $.ajax({
    type: "POST",
    url:url,
    data:{
      _token:token,
      nivel_acesso:nivel
    },
    success: function (response) {
                $('#atualizar').prop("disabled",false);
                alert('AtualizaÃ§Ã£o realizada com sucesso!!');
                url = url.split('gerenciarUsuario');
                url = url[0]+'gerenciarUsuario';
                window.location.href = url;
    },
    
    error: function (response) {
              $('#atualizar').prop("disabled",false);
               alert(response.responseJSON.msg);
    }

});

  
}


function deleteProjUser(usuario){
  var idUser=usuario.id_usuario;
  var token = $('meta[name="csrf-token"]').attr('content');
  var url1 = window.location.href;
  var url= window.location.href+'/'+idUser+'/deletar';
  $.ajax({
    type: "POST",
    url:url,
    data:{
      _token:token,
    },
    success: function (response) {
                alert('UsuÃ¡rio '+usuario.nome+' deletado do projeto com sucesso!');
                window.location.href = url1;
    },
    
    error: function (response) {
               alert(response.responseJSON.msg);
    }

});

}

function publicarProjeto(projeto){

  var id=projeto.id_projeto;
  var url='/publicarProjeto/'+id;
  var token = $('meta[name="csrf-token"]').attr('content');
  $('#exampleModal').modal('show'); 
  $("#exampleModal").modal().find(".btn-ok").on("click", function(){
    $('#exampleModal').modal('hide');
    $.ajax({
    type: "POST",
    url:url,
    data:{
      _token:token,
    },
    success: function (response) {
                //console.log(response);
                alert('Projeto '+projeto.nome+' publicado com sucesso!');
                location.replace('/projetoView');
    },
    
    error: function (response) {
               alert(response.responseJSON.msg);
    }

    });    

  });
  
}

function despublicarProjeto(projeto){

  var id=projeto.id_projeto;
  var url='/despublicarProjeto/'+id;
  var token = $('meta[name="csrf-token"]').attr('content');
  $('#despublicarModal').modal('show'); 
  $("#despublicarModal").modal().find(".btn-ok-despublicar").on("click", function(){
    $('#despublicarModal').modal('hide');
    $.ajax({
    type: "POST",
    url:url,
    data:{
      _token:token,
    },
    success: function (response) {
                //console.log(response);
                alert('Projeto '+projeto.nome+' despublicado com sucesso!');
                location.replace('/projetoView');
    },
    
    error: function (response) {
               alert(response.responseJSON.msg);
    }

    });    

  });
  
}

function cidades(){
  $('#municipio option').remove();
  $('#municipio').append('<option> Selecione uma cidade</option>');
  var estado = document.getElementById("estado").value;
  var url='/json/estados_cidades.json';
    $.getJSON(url,function(data){
      $.each(data,function(key,value){
        if(value.sigla == estado){
          $.each(value.cidades,function(chave,dado){
            var html='';
            html+='<option value="'+dado+'">'+dado+'</option>';
            $('#municipio').append(html);

          });
        }
      });
    });

}

function loadcidades(estado, cidade){
  var url='/json/estados_cidades.json';
    $.getJSON(url,function(data){
      $.each(data,function(key,value){
        if(value.sigla == estado){
          $.each(value.cidades,function(chave,dado){
            var html='';
            if(dado == cidade){
              html+='<option value="'+dado+'" selected>'+dado+'</option>';
            }else{
              html+='<option value="'+dado+'">'+dado+'</option>';
            }
            $('#municipio').append(html);

          });
        }
      });
    });
}

function trocacidades(){
  $('#municipio option').remove();
  $('#municipio').append('<option> Selecione uma cidade</option>');
  var estado = document.getElementById("estado").value;
  var url='/json/estados_cidades.json';
    $.getJSON(url,function(data){
      $.each(data,function(key,value){
        if(value.sigla == estado){
          $.each(value.cidades,function(chave,dado){
            var html='';
            html+='<option value="'+dado+'">'+dado+'</option>';
            $('#municipio').append(html);

          });
        }
      });
    });
}

function Habilitabotao(){
  if(document.getElementById('habilita').checked == true){
      document.getElementById('mudabotao').disabled = "";  
  }
  if(document.getElementById('habilita').checked == false){
      document.getElementById('mudabotao').disabled = "disabled";
  }
}

function aceitarpolitica(versaoPolitica){
  if(document.getElementById('mudabotao').disabled == ""){
    var token = $('meta[name="csrf-token"]').attr('content');
    var versaoPolitica = versaoPolitica;
    var url = '/aceitarPolitica';
    var url_local = '/projetoView';
    $.ajax({
    type: "POST",
    url:url,
    data:{
      _token:token,
      versaoPolitica:versaoPolitica

    },
    success: function () {
                alert('Termo de Uso e Politica de Privacidade aceitas com sucesso!');
                window.location.href = url_local;
    },
    
    error: function () {
               alert("Algo deu errado, tente novamente mais tarde!");
    }

    });    
  }
}
