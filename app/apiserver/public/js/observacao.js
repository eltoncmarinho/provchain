function getProjetos(){
	$.ajax({            
            type: 'GET',
             url: '/allProjetos',
            dataType: 'json',
            success: function(data){
                
            var toAppend = '';
           
            $.each(data,function(i,o){

               var item = "<option ";
                
                item += 'value="'+o.id_projeto+'">';
                item += o.nome;
                                
                item += "</option>";
                
                toAppend += item;
            });
                        
            $('#projetos').append(toAppend);  
                    
            },
            error: function () {
                console.log("Erro ao resgatar os dados");
            }
        });
}

function getObservacao(){
     var url_atual=window.location.href;
     var id=extrairIdObservacao(url_atual);
     console.log(id);

     var url='/observacao/'+id;
     
     $.ajax({            
            type: 'GET',
             url: url,
            dataType: 'json',
            success: function(data){
                
           
               var toAppend = "<p>VocÃª estÃ¡ inserindo o horizonte na observaÃ§Ã£o: <b>"+data.identificacao_campo+"</b></p>";
               
               $('#nome_observacao').append(toAppend);


               


            
                        
                    
            },
            error: function () {
                console.log("Erro ao resgatar os dados: ObservaÃ§Ãµes");
            }
        });
}

function getObservacaoComplementar(){
        var url_atual= window.location.pathname;
        var aux=url_atual.split("/");
        var id=aux[4];
        var url='/descricaoMorfologica/'+id+'';

        $.ajax({            
                type: 'GET',
                 url: url,
                dataType: 'json',
                success: function(response){
                    
               
               
                var horizonte=response.horizonte;
                var observacao=horizonte.observacao;
                var informacoes="<p> ObservaÃ§Ã£o: "+observacao.identificacao_campo+"; ";
                informacoes+="Horizonte: "+horizonte.nome_horizonte+"</p>";
                

                $('#informacoes').append(informacoes);
                            
                        
                },
                error: function () {
                    console.log("Erro ao resgatar os dados: DescriÃ§Ã£o MorfolÃ³gica");
                }
            });
}

function getObservacaoDescricaoMorfologica(){ //estÃ¡ sendo usada na pÃ¡gina de descriÃ§Ã£o morfolÃ³gica do horizonte
     var url_atual=window.location.href;
     var id=extrairIdObservacao(url_atual);
     console.log(id);

     var url='/observacao/'+id;
     
     $.ajax({            
            type: 'GET',
             url: url,
            dataType: 'json',
            success: function(data){
                
           
               var toAppend = "<p>Na observaÃ§Ã£o: <b>"+data.identificacao_campo+"</b></p>";
               
               $('#nome_observacao').append(toAppend);


               


            
                        
                    
            },
            error: function () {
                console.log("Erro ao resgatar os dados: ObservaÃ§Ãµes");
            }
        });
}

function getObservacoesSession(){
    var edit = document.getElementById("edit_observacao").value;
    var delet = document.getElementById("delete_observacao").value;
    var adicionar_horizonte = document.getElementById("adicionar_horizonte").value;
    var inserir_espectral = document.getElementById("inserir_espectral").value;
    var url=/observacaoSession/;
    $( '#tabela' ).empty();

    $.ajax({            
            type: 'GET',
             url: url,
            dataType: 'json',
            success: function(data){
                
           
            $.each(data,function(i,o){
               


               var toAppend = '';
               var botoes= "<tr>";
               botoes +="<td align='center'>";
               botoes +=" <a class='btn btn-default' href=observacaoView/"+o.id_observacao+"><i class='fa fa-eye'></i></a>";
               
               if(edit == 'sim'){
                
                botoes+="<a class='btn btn-default' href=observacaoView/"+o.id_observacao+"/editar><i class='fa fa-pencil'></i></a>";
                }
                if(delet == 'sim'){
                botoes+= "<a class='btn btn-danger' onclick=deleteDescricao("+o.id_observacao+")><em class='fa fa-trash-o'></em></a>";

               }
              


               toAppend +=botoes;

               var identificacao = "<td>";

                identificacao += o.identificacao_campo;


                                
                identificacao += "</td>";
                
                toAppend += identificacao;

                var tipo= "<td>";

                tipo += o.tipo_observacao+"</td>";

                if(adicionar_horizonte == 'sim'){

                    tipo += "<td><a class='btn btn-primary btn-sm' href='observacaoView/"+o.id_observacao+"/formulario'>Adicionar Horizonte</a></td>";

                }

                tipo +="<td><a class='btn btn-primary btn-sm' href='observacaoView/"+o.id_observacao+"/horizonteView'>Visualizar Horizontes</a></td>";

                if(inserir_espectral == 'sim'){

                    tipo +="<td><a class='btn btn-primary btn-sm' href='observacaoView/"+o.id_observacao+"/insertCurvaEspectral'>Inserir Curva Espectral</a></td>";
                
                }

                tipo+="<td><a href='/observacaoView/"+o.id_observacao+"/relatorioObservacao'><i id='relatorio' class='fa fa-book'></i></a></td>";


                tipo += "</tr>";

                toAppend += tipo;

                $('#tabela').append(toAppend);


            });
                        
                    
            },
            error: function () {
                console.log("Erro ao resgatar os dados: ObservaÃ§Ãµes");
            }
        });
}

function insertDescricao(){

    var selectUsoAtual = document.getElementById("uso_atual");
    var uso_atual= selectUsoAtual.options[selectUsoAtual.selectedIndex].value;
    var formacao_geologica= document.getElementById("formacao_geologica").value;
    var litologia= document.getElementById("litologia").value;
    var unidade_mapeamento= document.getElementById("unidade_mapeamento").value;
    var localizacao= document.getElementById("localizacao").value;
    var sibics_antigo=document.getElementById('sibics_antigo').value;
    var wrb=document.getElementById('wrb').value;
    var soil_taxonomy=document.getElementById('soil_taxonomy').value
    
    var selectCronologia = document.getElementById("cronologia");
    var cronologia= selectCronologia.options[selectCronologia.selectedIndex].value;

    var material_originario= document.getElementById("material_originario").value;
    var taxonomica = document.getElementById("taxonomica").value;
    var declive= document.getElementById("declive").value;
    var selectkoppen= document.getElementById("koppen");
    var koppen= selectkoppen.options[selectkoppen.selectedIndex].value;
    
    var selectGilgai=document.getElementById('gilgai');
    var gilgai= selectGilgai.options[selectGilgai.selectedIndex].value;

    var selectTipoPerfil=document.getElementById('tipo_perfil')
    
    if(selectTipoPerfil != null){
        var tipo_perfil= selectTipoPerfil.options[selectTipoPerfil.selectedIndex].value;
    }
    
    
    var selectPedregosidade= document.getElementById("pedregosidade");
    var pedregosidade= selectPedregosidade.options[selectPedregosidade.selectedIndex].value;
    
    var selectRochosidade= document.getElementById("rochosidade");
    var rochosidade= selectRochosidade.options[selectRochosidade.selectedIndex].value;
    
    var selectDrenagem= document.getElementById("drenagem");
    var drenagem= selectDrenagem.options[selectDrenagem.selectedIndex].value;
    
    var vegetacao= document.getElementById("vegetacao").value;

    var selectMassa= document.getElementById("movimento_massa");
    var movimento_massa= selectMassa.options[selectMassa.selectedIndex].value;

    var descrito_coletado= document.getElementById("descrito_coletado").value;
     
    var selectAgente= document.getElementById("agente_causador1"); 
    if(selectAgente.options[selectAgente.selectedIndex].value != ''){

        var agente_causador= selectAgente.options[selectAgente.selectedIndex].value;

        var selectErosao= document.getElementById("forma_erosao1");
        var forma_erosao= selectErosao.options[selectErosao.selectedIndex].value;

        var selectclasse= document.getElementById("classe_erosao1");
        var classe_erosao= selectclasse.options[selectclasse.selectedIndex].value;
    }    
    var selectRelevoLocal= document.getElementById("relevo_local");
    var relevo_local= selectRelevoLocal.options[selectRelevoLocal.selectedIndex].value;

    var selectRelevoRegional= document.getElementById("relevo_regional");
    var relevo_regional= selectRelevoRegional.options[selectRelevoRegional.selectedIndex].value;

    var selectFrequenciaSulcos= document.getElementById("frequencia_sulcos1");
    var freq_sulcos= selectFrequenciaSulcos.options[selectFrequenciaSulcos.selectedIndex].value;

    var selectProfundidadeSulcos= document.getElementById("profundidade_sulcos1");
    var profundidade_sulcos= selectProfundidadeSulcos.options[selectProfundidadeSulcos.selectedIndex].value;

    var selectObservacao= document.getElementById("tipo_observacao");
    var tipo_observacao= selectObservacao.options[selectObservacao.selectedIndex].value;

    var selectEstado= document.getElementById("estado");
    var estado= selectEstado.options[selectEstado.selectedIndex].value;

    /*var selectMunicipio= document.getElementById("municipio");
    var municipio= selectMunicipio.options[selectMunicipio.selectedIndex].value;*/
    var municipio= document.getElementById("municipio").value;

    var selectAgente2= document.getElementById("agente_causador2");
    if(selectAgente2!= null){
        var agente_causador2= selectAgente2.options[selectAgente2.selectedIndex].value;
    }    
    var selectErosao2= document.getElementById("forma_erosao2");
    if(selectErosao2 != null){
        var forma_erosao2= selectErosao2.options[selectErosao2.selectedIndex].value;
    }   

    var selectClasse2= document.getElementById("classe_erosao2");

     if(selectClasse2 != null){
        var classe_erosao2= selectClasse2.options[selectClasse2.selectedIndex].value;
    }
       
    var selectFrequenciaSulcos2= document.getElementById("frequencia_sulcos2");
    if(selectFrequenciaSulcos2 != null){
        var frequencia_sulcos2= selectFrequenciaSulcos2.options[selectFrequenciaSulcos2.selectedIndex].value;
    }
    var selectProfundidadeSulcos2= document.getElementById("profundidade_sulcos2");
    
    if(selectProfundidadeSulcos2 != null){
        var profundidade_sulcos2= selectProfundidadeSulcos2.options[selectProfundidadeSulcos2.selectedIndex].value;
    }

    var identificacao_campo= document.getElementById("identificacao_campo").value;

    var longitude= document.getElementById("longitude").value;
    var latitude= document.getElementById("latitude").value;
    var altitude= document.getElementById("altitude").value;
    var b_a= document.getElementById("b_a").value;

    var selectDatum= document.getElementById("datum");
    var datum= selectDatum.options[selectDatum.selectedIndex].value;

    var fotos= new Array();
    var l=document.getElementById("foto").files;

    for(i=0; i<l.length; i++){
        fotos.push(document.getElementById("foto").files[i]);

    }

    console.log(fotos);
    
    var foto= document.getElementById("foto").files[0];
    
    //var descricao_imagem= document.getElementById('descricao_imagem').value;
    //console.log(foto);
    /*
    form.append('foto',foto);
    form.append('t',"t");
    form.append('descricao_imagem',descricao_imagem);*/



    //form.append('_token',token);

    var token = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
    type: "POST",
    url:'/formularioObservacao',
    data:{
        _token:token,
        uso_atual:uso_atual,
        formacao_geologica:formacao_geologica,
        litologia:litologia,
        unidade_mapeamento:unidade_mapeamento,
        localizacao:localizacao,
        cronologia:cronologia,
        material_originario:material_originario,
        taxonomica:taxonomica,
        declive:declive,
        koppen:koppen,
        pedregosidade:pedregosidade,
        rochosidade:rochosidade,
        drenagem:drenagem,
        vegetacao:vegetacao,
        movimento_massa:movimento_massa,
        descrito_coletado:descrito_coletado,
        agente_causador:agente_causador,
        forma_erosao:forma_erosao,
        relevo_local:relevo_local,
        relevo_regional:relevo_regional,
        freq_sulcos:freq_sulcos, //se der erro Ã© com essa variÃ¡vel
        profundidade_sulcos:profundidade_sulcos,
        tipo_observacao:tipo_observacao,
        identificacao_campo:identificacao_campo,
        longitude:longitude,
        latitude:latitude,
        altitude:altitude,
        agente_causador2:agente_causador2,
        forma_erosao2:forma_erosao2,
        classe_erosao2:classe_erosao2,
        frequencia_sulcos2:frequencia_sulcos2,
        profundidade_sulcos2: profundidade_sulcos2,
        b_a:b_a,
        classe_erosao:classe_erosao,
        datum:datum,
        estado:estado,
        municipio:municipio,
        gilgai:gilgai,
        sibics_antigo:sibics_antigo,
        wrb:wrb,
        soil_taxonomy:soil_taxonomy,
        tipo_perfil:tipo_perfil

    },
    success: function (response) {
            for(i=0; i<l.length; i++){
                if(i==3){
                    var redirect="true";
                }
                var form= new FormData();
                form.append('_token',token);    
                form.append('foto',document.getElementById("foto").files[i]);
                form.append('descricao_imagem',document.getElementById('descricao_imagem'+i).value);    
     

                form.append('id_observacao',response.id_observacao);
                
                $.ajax({
                    url: '/insertFoto',
                    headers:{'X_CSRF_TOKEN':token},
                    type: 'post',
                    data:form,
                    mimeType:"multipart/form-data",
                    contentType: false,
                    cache: false,
                    processData:false,
                    success: function(response){
                        
                  
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                    // Oops! Some Error
                    }           
                });
                
            }
            alert('DescriÃ§Ã£o inserida com sucesso!!');
            /*if(redirect=="true"){
                window.location.replace('/observacaoView/'+response.id_observacao+'/horizonteView');
            }else{
                window.location.href = "/observacaoView";   
            }*/
            window.location.replace('/observacaoView/'+response.id_observacao+'/horizonteView');
    },
    
    error: function () {
        alert("erro ao inserir DescriÃ§Ã£o :(");
    }
    
    });

}



function getObservacoes(){
    
    var url='/observacaoSession/';
    $( '#tabela' ).empty();

    $.ajax({            
            type: 'GET',
             url: url,
            dataType: 'json',
            success: function(data){
                
           
           
            $.each(data,function(i,o){
               


               var toAppend = '';
               var botoes= "<tr>";
               botoes +="<td align='center'>";
               botoes +=" <a class='btn btn-default' href=observacaoView/"+o.id_observacao+"><i class='fa fa-eye'></i></a>";
               botoes += "<a class='btn btn-default' href=/observacao/"+o.id_observacao+"/editar><em class='fa fa-pencil'></em></a>";
               botoes += "<a class='btn btn-danger' onclick=''><em class='fa fa-trash-o'></em></a>";

               toAppend +=botoes;

               var identificacao = "<td>";
                
                identificacao += o.identificacao_campo;
                                
                identificacao += "</td>";
                
                toAppend += identificacao;

                var tipo= "<td>";

                tipo += o.tipo_observacao+"</td>";

                tipo += "</tr>";

                toAppend += tipo;

                $('#tabela').append(toAppend);


            });
                        
                    
            },
            error: function () {
                console.log("Erro ao resgatar os dados: ObservaÃ§Ãµes");
            }
        });
}

function deleteDescricao(descricao){
    var id=descricao;
    var token = $('meta[name="csrf-token"]').attr('content');
    $('#exampleModal').modal('show'); 
    $("#exampleModal").modal().find(".btn-ok").on("click", function(){
        $('#exampleModal').modal('hide');
        $.ajax({
        type: "DELETE",
        url:'deleteDescricao',
        data:{
            _token:token,
            id:id
        },
        success: function (response) {
                alert('ObservaÃ§Ã£o '+response+' deletado com sucesso!');
                location.reload(true);
        },

        error: function (response) {
                 alert(response.responseJSON.msg);
        }

        });
    });
}



function updateDescricao(descricao){
    
    var url= window.location.href;    
    //alert(url);

    var id_descricao= descricao.id_descricao;
    var id_relevo= descricao.relevo.id_relevo;
    var id_erosao= descricao.erosoes[0].id_erosao;

    if(typeof descricao.erosoes[1] != 'undefined'){
        var id_erosao2=descricao.erosoes[1].id_erosao;
    }
    //var id_observacao= descricao.observacao.id_observacao;

    //var selectProjeto = document.getElementById("projetos");
    //var projeto = selectProjeto.options[selectProjeto.selectedIndex].value;

    var selectCronologia = document.getElementById("cronologia");
    var cronologia= selectCronologia.options[selectCronologia.selectedIndex].value;
    
    var selectUsoAtual = document.getElementById("uso_atual");
    var uso_atual= selectUsoAtual.options[selectUsoAtual.selectedIndex].value;

    var formacao_geologica= document.getElementById("formacao_geologica").value;
    var litologia= document.getElementById("litologia").value;
    var unidade_mapeamento= document.getElementById("unidade_mapeamento").value;
    var localizacao= document.getElementById("localizacao").value;
    var cronologia = document.getElementById("cronologia").value;
    var material_originario= document.getElementById("material_originario").value;
    var taxonomica = document.getElementById("taxonomica").value;
    var declive= document.getElementById("declive").value;
    var koppen= document.getElementById("koppen").value;

    var sibics_antigo=document.getElementById('sibics_antigo').value;
    var wrb=document.getElementById('wrb').value;
    var soil_taxonomy=document.getElementById('soil_taxonomy').value
    


    var selectTipoPerfil=document.getElementById('tipo_perfil')
    
    if(selectTipoPerfil != null){
        var tipo_perfil= selectTipoPerfil.options[selectTipoPerfil.selectedIndex].value;
    }

    var selectGilgai=document.getElementById('gilgai');
    var gilgai= selectGilgai.options[selectGilgai.selectedIndex].value;
    
    var selectPedregosidade= document.getElementById("pedregosidade");
    var pedregosidade= selectPedregosidade.options[selectPedregosidade.selectedIndex].value;
    
    var selectRochosidade= document.getElementById("rochosidade");
    var rochosidade= selectRochosidade.options[selectRochosidade.selectedIndex].value;
    
    var selectDrenagem= document.getElementById("drenagem");
    var drenagem= selectDrenagem.options[selectDrenagem.selectedIndex].value;
    
    var vegetacao= document.getElementById("vegetacao").value;

    var selectMassa= document.getElementById("movimento_massa");
    var movimento_massa= selectMassa.options[selectMassa.selectedIndex].value;

    var descrito_coletado= document.getElementById("descrito_coletado").value;

    var selectAgente= document.getElementById("agente_causador1");
    var agente_causador= selectAgente.options[selectAgente.selectedIndex].value;

    var selectErosao= document.getElementById("forma_erosao1");
    var forma_erosao= selectErosao.options[selectErosao.selectedIndex].value;

    var selectclasse= document.getElementById("classe_erosao1");
    var classe_erosao= selectclasse.options[selectclasse.selectedIndex].value;

    var selectRelevoLocal= document.getElementById("relevo_local");
    var relevo_local= selectRelevoLocal.options[selectRelevoLocal.selectedIndex].value;

    var selectRelevoRegional= document.getElementById("relevo_regional");
    var relevo_regional= selectRelevoRegional.options[selectRelevoRegional.selectedIndex].value;

    var selectFrequenciaSulcos= document.getElementById("frequencia_sulcos1");
    var freq_sulcos= selectFrequenciaSulcos.options[selectFrequenciaSulcos.selectedIndex].value;

    var selectProfundidadeSulcos= document.getElementById("profundidade_sulcos1");
    var profundidade_sulcos= selectProfundidadeSulcos.options[selectProfundidadeSulcos.selectedIndex].value;

    var selectObservacao= document.getElementById("tipo_observacao");
    var tipo_observacao= selectObservacao.options[selectObservacao.selectedIndex].value;

    var identificacao_campo= document.getElementById("identificacao_campo").value;

    var longitude= document.getElementById("longitude").value;
    var latitude= document.getElementById("latitude").value;
    var altitude= document.getElementById("altitude").value;
    var b_a= document.getElementById("b_a").value;

    var selectAgente2= document.getElementById("agente_causador2");
    if(selectAgente2!= null){
        var agente_causador2= selectAgente2.options[selectAgente2.selectedIndex].value;
    }    
    var selectErosao2= document.getElementById("forma_erosao2");
    if(selectErosao2 != null){
        var forma_erosao2= selectErosao2.options[selectErosao2.selectedIndex].value;
    }   

    var selectClasse2= document.getElementById("classe_erosao2");

     if(selectClasse2 != null){
        var classe_erosao2= selectClasse2.options[selectClasse2.selectedIndex].value;
    }
        
    var selectFrequenciaSulcos2= document.getElementById("frequencia_sulcos2");
    if(selectFrequenciaSulcos2 != null){
        var freq_sulcos2= selectFrequenciaSulcos2.options[selectFrequenciaSulcos2.selectedIndex].value;
    }
    var selectProfundidadeSulcos2= document.getElementById("profundidade_sulcos2");
    
    if(selectProfundidadeSulcos2 != null){
        var profundidade_sulcos2= selectProfundidadeSulcos2.options[selectProfundidadeSulcos2.selectedIndex].value;
    }

    var selectDatum= document.getElementById("datum");
    var datum= selectDatum.options[selectDatum.selectedIndex].value;

    var selectEstado= document.getElementById("estado");
    var estado= selectEstado.options[selectEstado.selectedIndex].value;

    /*var selectMunicipio= document.getElementById("municipio");
    var municipio= selectMunicipio.options[selectMunicipio.selectedIndex].value;*/
    var municipio= document.getElementById("municipio").value;
    
    var descricao_imagem= document.getElementById('descricao_imagem').value;

    var token = $('meta[name="csrf-token"]').attr('content');
    var foto= document.getElementById("foto").files[0];
    var form= new FormData();
    //console.log(foto);
    form.append('foto',foto);
    form.append('t',"t");
    form.append('descricao_imagem',descricao_imagem);
    form.append('_method','PATCH');
    form.append('_token',token);
    /*for (var pair of form.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
    }*/

    
    $.ajax({
    type:'PATCH',
    headers:{'X_CSRF_TOKEN':token},
    url:url,
    data:{
        _token:token,
        uso_atual:uso_atual,
        formacao_geologica:formacao_geologica,
        litologia:litologia,
        unidade_mapeamento:unidade_mapeamento,
        localizacao:localizacao,
        cronologia:cronologia,
        material_originario:material_originario,
        taxonomica:taxonomica,
        declive:declive,
        koppen:koppen,
        pedregosidade:pedregosidade,
        rochosidade:rochosidade,
        drenagem:drenagem,
        vegetacao:vegetacao,
        movimento_massa:movimento_massa,
        descrito_coletado:descrito_coletado,
        agente_causador:agente_causador,
        forma_erosao:forma_erosao,
        relevo_local:relevo_local,
        relevo_regional:relevo_regional,
        freq_sulcos:freq_sulcos, //se der erro Ã© com essa variÃ¡vel
        classe_erosao:classe_erosao,
        profundidade_sulcos:profundidade_sulcos,
        tipo_observacao:tipo_observacao,
        identificacao_campo:identificacao_campo,
        longitude:longitude,
        latitude:latitude,
        altitude:altitude,
        b_a:b_a,
        agente_causador2:agente_causador2,
        forma_erosao2:forma_erosao2,
        classe_erosao2:classe_erosao2,
        freq_sulcos2:freq_sulcos2, //se der erro Ã© com essa variÃ¡vel
        profundidade_sulcos2:profundidade_sulcos2,
        id_erosao2:id_erosao2,
        id_erosao:id_erosao,
        id_descricao:id_descricao,
        id_relevo:id_relevo,
        datum:datum,
        estado:estado,
        municipio:municipio,
        gilgai:gilgai,
        tipo_perfil:tipo_perfil,
        sibics_antigo:sibics_antigo,
        wrb:wrb,
        soil_taxonomy:soil_taxonomy
    },
    success: function (response) {

                
              $.ajax({
              url: url,
              headers:{'X_CSRF_TOKEN':token},
              type: 'post',
              data:form,
              mimeType:"multipart/form-data",
              contentType: false,
              cache: false,
              processData:false,
              success: function(data, textStatus, jqXHR)
              {
                
                  //alert(data);                   
                  //console.log(data);

              },
              error: function(jqXHR, textStatus, errorThrown) 
              {
                    // Oops! Some Error
              }           
         });
              alert("DescriÃ§Ã£o atualizada com sucesso!");
              window.location.replace('/observacaoView/'+response.id_observacao+'/horizonteView');  
    },
    
    error: function () {
               alert("erro ao inserir DescriÃ§Ã£o :(");
    }


});
   
   



    



       
}


    
    

function criarCampoErosao(){
    var campoErosao= document.getElementById("agente_causador2");
    
    if(campoErosao == null){
        
    var formulario_erosao="<legend><button class='btn btn-outline-secondary btn-sm' type='button' onclick='deletarSegundoCampoErosao()'><i class='fa fa-minus'></i></button> ErosÃ£o</legend><div class='form-row'> <div class='form-group col-md-3'> <label for='inputPassword4'>Agente Causador</label> <select class='form-control erosao' id='agente_causador2' data-index='2'> <option></option> <option value='eolica'>Ã‰olica</option> <option value='hidrica'>HÃ­drica</option> </select> </div> <div class='form-group col-md-3'> <label for='inputPassword4'>Forma ErosÃ£o</label> <select class='form-control' id='forma_erosao2' data-index='2'> <option></option>  </select> </div> <div class='form-group col-md-3'> <label for='inputPassword4'>Classe ErosÃ£o</label> <select class='form-control' id='classe_erosao2'> <option></option> <option value='nao aparente'>NÃ£o aparente</option> <option value='ligeira'>Ligeira</option> <option value='moderada'>Moderada</option> <option value='forte'>Forte</option> <option value='muito forte'>Muito forte</option> <option value='extremamente forte'>Extremamente forte</option> </select> </div> </div> <div class='form-row'> <div class='form-group col-md-3'> <label for='inputEmail4'>FrequÃªncia de Sulcos</label> <select class='form-control' id='frequencia_sulcos2'> <option></option> <option value='ocasionais'>Ocasionais</option> <option value='frequentes'>Frequentes</option> <option value='muito frequentes'>Muito Frequentes</option> </select> </div> <div class='form-group col-md-3'> <label for='inputPassword4'>Profundidade dos Sulcos</label> <select class='form-control' id='profundidade_sulcos2'> <option></option> <option value='superficiais'>Superficiais</option> <option value='rasos'>Rasos</option> <option value='profundos'>Profundos</option> <option value='voÃ§orocas'>VoÃ§orocas</option> </select> </div> </div> </div>";
    $('#erosao2').append(formulario_erosao); 
    }
    else{
        alert("SÃ³ podem ser inserido dois tipos de erosÃ£o");
    }

}

function deletarSegundoCampoErosao(){
    var campoErosao= document.getElementById("agente_causador2");
    if(campoErosao != null){
        $( '#erosao2' ).empty();
        
    }
}

function deletarFoto(foto){
    var url='/foto/'+foto.id_foto;

    var url_atual=window.location.href;
    
    var token = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
        type: "DELETE",
        headers:{'X_CSRF_TOKEN':token},
        url:url,
        data:{

        },
        success: function (response) {
                
                alert('Foto deletada com sucesso!!');
                window.location.replace(url_atual);
        },
    
        error: function () {
               alert("erro ao deletar Foto :(");
        }

    });
}


$(document).ready(function(){
    $('.container').on('change','.erosao',function(){
        var index= $(this).attr('data-index');

        var selectAgente= document.getElementById('agente_causador'+index+'');
        var agente= selectAgente.options[selectAgente.selectedIndex].value;

        if(agente == 'eolica'){
            var html="<option></option> <option value='DefraÃ§Ã£o'>DefraÃ§Ã£o</option><option value='AbrasÃ£o'>AbrasÃ£o</option>";

            $('#forma_erosao'+index+'').empty();
            $('#forma_erosao'+index+'').append(html);

        }

        if(agente == 'hidrica'){
            var html="<option></option> <option value='laminar'>Laminar</option> <option value='sulcos'>Sulcos</option> <option value='desbarrancamento'>Desbarrancamento</option> <option value='Desmoronamento'>Desmoronamento</option> <option value='deslizamento'>Deslizamento</option>";
            
            $('#forma_erosao'+index+'').empty();
            $('#forma_erosao'+index+'').append(html);
        }
    })

    $('#tipo_observacao').change(function(){
        var selectTipo= document.getElementById('tipo_observacao');
        var tipo= selectTipo.options[selectTipo.selectedIndex].value;

        if(tipo =='perfil'){
          var html='<div class="form-group col-md-5"><label for="inputPassword4">Tipo de Perfil</label><select class="form-control" id="tipo_perfil"><option></option><option value="Trincheira">Trincheira</option><option value="Corte de Estrada">Corte de Estrada</option><option value="Barranco">Barranco</option></select></div>'
          $('#div_tipo_perfil').append(html);  
        }
        else{
             $('#div_tipo_perfil').empty();
        }
    })

    $('#foto').change(function(){
        $('#campo_formulario_descricao_imagem').empty();
        var fotos= document.getElementById('foto').files;
        var contador_usuario=1;
        if(fotos.length >4){
            $('#button').prop("disabled",true);

            var html="<div class='alert alert-danger alertaSenha' role='alert'>SÃ³ sÃ£o permitidas 4 fotos por descriÃ§Ã£o<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";

            $('#warning').append(html);
        }
        else{
            $('#button').prop("disabled",false);
            for(index=0;index<fotos.length;index++){
            
                console.log(document.getElementById('foto').files[index]);
                var toAppend="<label class='col-md-3 control-label' for='textinput'>Imagem:"+document.getElementById('foto').files[index].name+"</label><div class='col-md-3'><input id='descricao_imagem"+index+"' type='text' class='form-control'></div>";
                $('#campo_formulario_descricao_imagem').append(toAppend);
                contador_usuario++;
            }
        }
    });

    $("#gerar_pdf").click(function() {
          var url= document.location.pathname;
          var id=extrairId(url,1);
          var url_req='/observacao/'+id;
          var nome_observacao;

           $.ajax({            
            type: 'GET',
             url: url_req,
            dataType: 'json',
            success: function(data){
                nome_observacao=data.identificacao_campo;
                var doc = new jsPDF('p', 'pt', 'a4', true);

                doc.fromHTML($('#pdf').get(0), 15, 15, {
                    'width': 500
                }, function (dispose) {
                doc.save(nome_observacao+'.pdf');
            });    
                
            
                        
                    
            },
            error: function () {
                console.log("Erro ao resgatar os dados: ObservaÃ§Ãµes");
            }
        });
          
          
  });

})