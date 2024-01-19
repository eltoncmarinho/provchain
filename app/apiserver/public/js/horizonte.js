$(document).ready(function(){
    $('#raiz_quantidade').on('change',function(){
  
      var selectQnt=document.getElementById('raiz_quantidade');
      var qnt=selectQnt.options[selectQnt.selectedIndex].value;
      if( qnt == 'Ausentes'){
        $('#raiz_diametro').empty();
        $('#raiz_tipo').empty();
        $('#raiz_diametro').attr('disabled', 'disabled');
        $('#raiz_tipo').attr('disabled', 'disabled');
      }
      else if($('#raiz_diametro').attr('disabled') == 'disabled'){
        $('#raiz_diametro').removeAttr('disabled');      
        $('#raiz_tipo').removeAttr('disabled');
      }
    });
  
    $('#eflorescencia_quantidade').on('change',function(){
  
      var selectQnt=document.getElementById('eflorescencia_quantidade');
      var qnt=selectQnt.options[selectQnt.selectedIndex].value;
      if( qnt == 'Ausente' || qnt == 'Não descrito'){
        $('#eflorescencia_local').empty();
        $('#eflorescencia_natureza').empty();
        $('#eflorescencia_local').attr('disabled', 'disabled');
        $('#eflorescencia_natureza').attr('disabled', 'disabled');
      }
      else if($('#eflorescencia_local').attr('disabled') == 'disabled'){
        $('#eflorescencia_local').removeAttr('disabled');      
        $('#eflorescencia_natureza').removeAttr('disabled');
      }
    });
  
  
    $('#pag').on('click','.a_pagination',function(){
      event.preventDefault();
      var href=$(this).attr('href');
      console.log(href);
  
      var url_atual= window.location.pathname;
  
    var id=extrairId(url_atual,1);
  
    var url_req=href;
  
    
  
    
    $.ajax({            
              type: 'GET',
               url: url_req,
              dataType: 'json',
              success: function(response){
  
                  $('#tabela').empty();
                   
              $.each(response.data,function(index,data){
                 
                 
  
  
                 var toAppend = '';
                 var botoes= "<tr>";
                 botoes +="<td class='col-md-3' align='center'>";
                 botoes +=" <a class='btn btn-default myiconbutton' href="+url_atual+"/"+data.id_horizonte+"/DescricaoMorfologicaCompleta><i class='fa fa-eye'></i></a>";
                 botoes += "<a class='btn btn-default myiconbutton' href="+url_atual+"/"+data.id_horizonte+"/editar><em class='fa fa-pencil'></em></a>";
                 botoes += "<a class='btn btn-danger myiconbuttondanger' onclick=''><em class='fa fa-trash-o'></em></a>";
  
                 toAppend +=botoes;
  
                  var tipo= "<td class='col-md-3'>";
  
                  tipo += data.nome_horizonte+"</td>";
  
                  tipo+="<td class='col-md-2'>"+data.limite_superior+" Ã  "+data.limite_inferior+"</td>";
                  
                  tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioFisico role='button'>Inserir A.FÃ­sica</a></br><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarAnaliseFisica role='button'>Editar A.FÃ­sica</a></td>";
  
                  tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioQuimico role='button'>Inserir A.Quimico</a></br><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarAnaliseQuimica role='button'>Editar A. Quimica</a></td>";
                  
                  tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioMetaisPesados role='button'>Inserir Metais Pesados</a></br><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarMetaisPesados role='button'>Editar Metais Pesados</a></td>";
  
                   tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioCurva role='button'>Inserir Curva de Retenção</a></br><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarCurva role='button'>Editar Curva</a></td>";
  
                   tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioAtaqueSulfurico role='button'>Inserir A.Sulfurico</a></br><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarAtaqueSulfurico role='button'>Editar A.Sulfurico</a></td>";
                  
                   tipo += "</tr>";
  
                  toAppend += tipo;
  
                  $('#tabela').append(toAppend);
  
  
              });
  
               },
              error: function () {
                  console.log("Erro ao resgatar os dados: ObservaçÃµes");
              }
          });
  
  
        });
  
      })
  
  function getObservacaoHorizonte(){ //requisita uma observação e recebe a observação com os horizontes ligados a ela, TESTES
  
    var url_atual= window.location.pathname;
  
    var id=extrairId(url_atual,1);
  
    var url_req='/observacao/'+id+'/horizonte';
    
    $.ajax({            
              type: 'GET',
               url: url_req,
              dataType: 'json',
              success: function(response){
                  
                  if(response.data[0]== null){
                    var texto="<legend> <a class='btn btn-outline-secondary' href='/observacaoView/"+id+"/formulario' role='button' hover='inserir horizonte'><i id='' class='fa fa-plus' aria-hidden='true'></i></a> Horizonte</legend>";
                    $('#titulo').append(texto);
                    var url_obs='/observacao/'+id;
       
                    $.ajax({            
                        type: 'GET',
                        url: url_obs,
                        dataType: 'json',
                        success: function(data){
                  
             
                          var nome_observacao="<legend> "+data.tipo_observacao+":"; //pode ser sempre o primeiro porque vão ser sempre da mesma observação
                          nome_observacao += " "+data.identificacao_campo+"</legend>";
                          $('#nome_obs').append(nome_observacao);
  
  
                 
  
  
              
                          
                      
                        },
                        error: function () {
                            console.log("Erro ao resgatar os dados: ObservaçÃµes");
                        }
                    });
                  }
  
              else{
                  JSON.stringify(response);
  
                  var nome_observacao="<legend> "+response.data[0].observacao.tipo_observacao+":"; //pode ser sempre o primeiro porque vão ser sempre da mesma observação
                  nome_observacao += " "+response.data[0].observacao.identificacao_campo+"</legend>";
                  var texto="<legend> <a class='btn btn-outline-secondary' href='/observacaoView/"+id+"/formulario' role='button' hover='inserir horizonte'><i id='' class='fa fa-plus' aria-hidden='true'></i></a> Horizonte</legend>";
  
                  $('#titulo').append(texto);
                  $('#nome_obs').append(nome_observacao);
                   
              $.each(response.data,function(index,data){
                 
                 
  
  
                 var toAppend = '';
                 var botoes= "<tr>";
                 botoes +="<td class='col-md-3' align='center'>";
                 botoes +=" <a class='btn btn-default myiconbutton' href="+url_atual+"/"+data.id_horizonte+"/DescricaoMorfologicaCompleta><i class='fa fa-eye'></i></a>";
                 
                if(document.getElementById('edit_horizonte') != null){
                  botoes += "<a class='btn btn-default myiconbutton' href="+url_atual+"/"+data.id_horizonte+"/editar><em class='fa fa-pencil'></em></a>";
                }
                if(document.getElementById('delete_horizonte') != null){
                  botoes += "<a class='btn btn-danger myiconbuttondanger' onclick='deleteHorizonte("+data.id_horizonte+")'><em class='fa fa-trash-o'></em></a>";
                }
                 toAppend +=botoes;
  
                  var tipo= "<td class='col-md-3'>";
  
                  tipo += data.nome_horizonte+"</td>";
  
                  tipo+="<td class='col-md-2'>"+data.limite_superior+" Ã  "+data.limite_inferior+"</td>";
  
                 
                if(document.getElementById('inserir_fisica') != null && document.getElementById('edit_fisica') != null){
                  tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioFisico role='button'>Inserir A.FÃ­sica</a></br><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarAnaliseFisica role='button'>Editar A.FÃ­sica</a></td>";
                }else{
                  if(document.getElementById('inserir_fisica') != null){
                    tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioFisico role='button'>Inserir A.FÃ­sica</a></td>";
                  }
                  if(document.getElementById('edit_fisica') != null){
                    tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarAnaliseFisica role='button'>Editar A.FÃ­sica</a></td>";
                  }
                }
                  
                if(document.getElementById('inserir_quimica') != null && document.getElementById('edit_quimica') != null){
                  tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioQuimico role='button'>Inserir A.Quimica</a></br><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarAnaliseQuimica role='button'>Editar A. Quimica</a></td>";
                }else{
                  if(document.getElementById('inserir_quimica') != null){
                    tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioQuimico role='button'>Inserir A.Quimica</a></td>";
                  }
                  if(document.getElementById('edit_quimica') != null){
                    tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarAnaliseQuimica role='button'>Editar A. Quimica</a></td>";
                  }
                }
                  
                if(document.getElementById('inserir_metais') != null && document.getElementById('edit_metais') != null){
                  tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioMetaisPesados role='button'>Inserir Metais Pesados</a></br><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarMetaisPesados role='button'>Editar Metais Pesados</a></td>";
                }else{
                  if(document.getElementById('inserir_metais') != null){
                    tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioMetaisPesados role='button'>Inserir Metais Pesados</a></td>";
                  }
                  if(document.getElementById('edit_metais') != null){
                    tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarMetaisPesados role='button'>Editar Metais Pesados</a></td>";
                  }
                }
  
                if(document.getElementById('inserir_curva') != null && document.getElementById('edit_curva') != null){
                   tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioCurva role='button'>Inserir C. de Retenção</a></br><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarCurva role='button'>Editar C. de Retenção</a></td>";
                }else{
                  if(document.getElementById('inserir_curva') != null){
                    tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioCurva role='button'>Inserir Curva de Retenção</a></td>";
                  }
                  if(document.getElementById('edit_curva') != null){
                    tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarCurva role='button'>Editar Curva</a></td>";
                  }
                }
  
                if(document.getElementById('inserir_ataque') != null && document.getElementById('edit_ataque') != null){
                   tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioAtaqueSulfurico role='button'>Inserir A.Sulfurico</a></br><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarAtaqueSulfurico role='button'>Editar A.Sulfurico</a></td>";
                }else{
                  if(document.getElementById('inserir_ataque') != null){
                    tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm' href="+url_atual+"/"+data.id_horizonte+"/formularioAtaqueSulfurico role='button'>Inserir A.Sulfurico</a></td>";
                  }
                  if(document.getElementById('edit_ataque') != null){
                    tipo+="<td class='col-md-2'><a class='btn btn-primary btn-sm table_button' href="+url_atual+"/"+data.id_horizonte+"/editarAtaqueSulfurico role='button'>Editar A.Sulfurico</a></td>";
                  }
                }
                
                   tipo += "</tr>";
  
                  toAppend += tipo;
  
                  $('#tabela').append(toAppend);
  
  
              });
  
              
              for(i=1;i<=response.last_page;i++){
               var pag="<li class='page-item'><a class='a_pagination' href='/observacao/"+id+"/horizonte?page="+i+"'</a>"+i+"</li>"
  
                $('#pag').append(pag);
              }
            }  
                      
              
            },
              error: function () {
                  console.log("Erro ao resgatar os dados: ObservaçÃµes");
              }
          });
  
  
  
  }
  
  function getObservacoesSession(){
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
                 botoes += "<a class='btn btn-danger' onclick=''><em class='fa fa-trash-o'></em></a>";
  
  
                 toAppend +=botoes;
  
                 var identificacao = "<td>";
                  
                  identificacao += o.identificacao_campo;
                                  
                  identificacao += "</td>";
                  
                  toAppend += identificacao;
  
                  var tipo= "<td>";
  
                  tipo += o.tipo_observacao+"</td>";
  
                  tipo += "<td><a class='btn btn-primary btn-sm' href='observacaoHorizonte/"+o.id_observacao+"/formulario'>Inserir Horizonte</a></td>";
  
                  tipo +="<td><a class='btn btn-primary btn-sm' href='observacaoHorizonte/"+o.id_observacao+"/horizonteView'>Visualizar Horizontes</a></td>";
  
                  tipo += "</tr>";
  
                  toAppend += tipo;
  
                  $('#tabela').append(toAppend);
  
  
              });
                          
                      
              },
              error: function () {
                  console.log("Erro ao resgatar os dados: ObservaçÃµes");
              }
          });
  }
  
  
  
  function insertHorizonte(){
    var metodo = document.getElementById("metodo").value;
    if(metodo != null){
      if(metodo == 'Limites_espessura'){
        var limite_superior = document.getElementById("limite_superior").value;
        var limite_inferior= document.getElementById("limite_inferior").value;
      }else if(metodo == 'Limites_transacoes_espessura'){
        var limite_superior = document.getElementById("limite_superior").value;
        var limite_inferior= document.getElementById("limite_inferior").value;
        var superior_transicao= document.getElementById("superior_transicao").value;
        var inferior_transicao= document.getElementById("inferior_transicao").value;
      }
    }
    
    var observacao= document.getElementById("observacao").value;
    var nome_horizonte=document.getElementById("nome_horizonte").value;
    var observacao= document.getElementById("observacao").value;
    var outros_sulfeto= document.getElementById('outros_sulfeto').value;
    
    var selectTopografia= document.getElementById("transicao_topografia");
    var transicao_topografia= selectTopografia.options[selectTopografia.selectedIndex].value;
  
    var selectNitidez= document.getElementById("transicao_nitidez");
    var transicao_nitidez= selectNitidez.options[selectNitidez.selectedIndex].value;
  
    var selectTextura= document.getElementById("outros_outros_textura");
    var outros_textura= selectTextura.options[selectTextura.selectedIndex].value;
  
    var selectCascalho= document.getElementById("outros_cascalho");
    var outros_outros_cascalho=selectCascalho.options[selectCascalho.selectedIndex].value;
  
    outros_textura+=outros_outros_cascalho; // forma a outros_textura, que é composta da concatenização de outros_textura mais o campo outros_outros_cascalho.
  
    var selectCoesao= document.getElementById("outros_coesao"); 
    var outros_coesao= selectCoesao.options[selectCoesao.selectedIndex].value;
  
    var selectCimentacao= document.getElementById("outros_cimentacao");
    var outros_cimentacao= selectCimentacao.options[selectCimentacao.selectedIndex].value;
  
    var selectMagnetismo= document.getElementById("outros_magnetismo");
    var outros_magnetismo= selectMagnetismo.options[selectMagnetismo.selectedIndex].value;
  
    var selectManganes= document.getElementById("outros_manganes");
    var outros_manganes= selectManganes.options[selectManganes.selectedIndex].value;
  
    var selectCarbonato= document.getElementById("outros_carbonato");
    var outros_carbonato= selectCarbonato.options[selectCarbonato.selectedIndex].value;
  
    var selectTipoCompressao= document.getElementById("compressao_tipo");
    var compressao_tipo= selectTipoCompressao.options[selectTipoCompressao.selectedIndex].value;
  
    var selectQuantidadeCompressao= document.getElementById("compressao_quantidade");
    var compressao_quantidade= selectQuantidadeCompressao.options[selectQuantidadeCompressao.selectedIndex].value;
  
    var selectGrauCompressao= document.getElementById("compressao_grau");
    var compressao_grau= selectGrauCompressao.options[selectGrauCompressao.selectedIndex].value;
  
    var selectQuantidadeCerosidade= document.getElementById("cerosidade_quantidade");
    var cerosidade_quantidade= selectQuantidadeCerosidade.options[selectQuantidadeCerosidade.selectedIndex].value;
  
    var selectGrauCerosidade= document.getElementById("cerosidade_grau");
    var cerosidade_grau= selectGrauCerosidade.options[selectGrauCerosidade.selectedIndex].value;
  
    var selectFriccaoQuantidade= document.getElementById("friccao_quantidade");
    var friccao_quantidade= selectFriccaoQuantidade.options[selectFriccaoQuantidade.selectedIndex].value;
  
    var selectFriccaoTamanho= document.getElementById("friccao_tamanho");
    var friccao_tamanho= selectFriccaoTamanho.options[selectFriccaoTamanho.selectedIndex].value;
  
    var selectFriccaoGrau= document.getElementById("friccao_grau");
    var friccao_grau= selectFriccaoGrau.options[selectFriccaoGrau.selectedIndex].value;
  
    var selectMolhadaPlasticidade= document.getElementById("consistencia_molhada_plasticidade");
    var consistencia_molhada_plasticidade= selectMolhadaPlasticidade.options[selectMolhadaPlasticidade.selectedIndex].value;
  
    var selectMolhadaPegajosidade= document.getElementById("consistencia_molhada_pegajosidade");
    var consistencia_molhada_pegajosidade= selectMolhadaPegajosidade.options[selectMolhadaPegajosidade.selectedIndex].value;
  
    var selectUmidoConsistencia= document.getElementById("consistencia_umido");
    var consistencia_umido= selectUmidoConsistencia.options[selectUmidoConsistencia.selectedIndex].value;
  
    var selectSecoConsistencia= document.getElementById("consistencia_seco");
    var consistencia_seco= selectSecoConsistencia.options[selectSecoConsistencia.selectedIndex].value;
  
    var selectQuantidadePoros= document.getElementById("poros_quantidade");
    var poros_quantidade= selectQuantidadePoros.options[selectQuantidadePoros.selectedIndex].value;
  
    var selectDiametroPoros= document.getElementById("poros_diametro");
    var poros_diametro= selectDiametroPoros.options[selectDiametroPoros.selectedIndex].value;
  
    var selectLocalEflorescencia= document.getElementById("eflorescencia_local");
    var eflorescencia_local= selectLocalEflorescencia.options[selectLocalEflorescencia.selectedIndex].value;
  
    var selectNaturezaEflorescencia= document.getElementById("eflorescencia_natureza");
    var eflorescencia_natureza= selectNaturezaEflorescencia.options[selectNaturezaEflorescencia.selectedIndex].value;
  
    var selectQuantidadeEflorescencia= document.getElementById("eflorescencia_quantidade");
    var eflorescencia_quantidade= selectQuantidadeEflorescencia.options[selectQuantidadeEflorescencia.selectedIndex].value;
  
    var selectTamanhoConcrecoes= document.getElementById("nodulos_e_concrecoes_tamanho");
    var nodulos_e_concrecoes_tamanho= selectTamanhoConcrecoes.options[selectTamanhoConcrecoes.selectedIndex].value;
  
    var selectQuantidadeConcrecoes= document.getElementById("nodulos_e_concrecoes_quantidade");
    var nodulos_e_concrecoes_quantidade= selectQuantidadeConcrecoes.options[selectQuantidadeConcrecoes.selectedIndex].value;
  
    var selectNaturezaConcrecoes= document.getElementById("nodulos_e_concrecoes_natureza");
    var nodulos_e_concrecoes_natureza= selectNaturezaConcrecoes.options[selectNaturezaConcrecoes.selectedIndex].value;
  
    var selectDurezaConcrecoes= document.getElementById("nodulos_e_concrecoes_dureza");
    var nodulos_e_concrecoes_dureza= selectDurezaConcrecoes.options[selectDurezaConcrecoes.selectedIndex].value;
  
    var selectFormaConcrecoes= document.getElementById("nodulos_e_concrecoes_forma");
    var nodulos_e_concrecoes_forma= selectFormaConcrecoes.options[selectFormaConcrecoes.selectedIndex].value;
  
    var selectCorConcrecoes= document.getElementById("nodulos_e_concrecoes_cor");
    var nodulos_e_concrecoes_cor= selectCorConcrecoes.options[selectCorConcrecoes.selectedIndex].value;
  
    var selectQuantidadeRaiz= document.getElementById("raiz_quantidade");
    var raiz_quantidade= selectQuantidadeRaiz.options[selectQuantidadeRaiz.selectedIndex].value;
  
    var selectDiametroRaiz= document.getElementById("raiz_diametro");
    var raiz_diametro= selectDiametroRaiz.options[selectDiametroRaiz.selectedIndex].value;
  
    var selectTipoRaiz= document.getElementById("raiz_tipo");
    var raiz_tipo= selectTipoRaiz.options[selectTipoRaiz.selectedIndex].value;
  
    var selectTipoEstrutura= document.getElementById("estrutura_tipo");
    
    if(selectTipoEstrutura != null){
      var estrutura_tipo= selectTipoEstrutura.options[selectTipoEstrutura.selectedIndex].value;
    }
  
    var selectGrauEstrutura= document.getElementById("estrutura_grau");
    if(selectGrauEstrutura != null){
      var estrutura_grau=  selectGrauEstrutura.options[selectGrauEstrutura.selectedIndex].value;
    }
  
    var selectTamanhoEstrutura= document.getElementById("estrutura_tamanho");
    if(selectTamanhoEstrutura != null){  
      var estrutura_tamanho= selectTamanhoEstrutura.options[selectTamanhoEstrutura.selectedIndex].value;
    }  
    var selectFormaEstrutura= document.getElementById("estrutura_forma");
    if(selectFormaEstrutura != null){
      var estrutura_forma= selectFormaEstrutura.options[selectFormaEstrutura.selectedIndex].value;
    }  
    var selectTipoEstrutura2= document.getElementById("estrutura_tipo2");
    if(selectTipoEstrutura2 != null){
     var estrutura_tipo2= selectTipoEstrutura2.options[selectTipoEstrutura2.selectedIndex].value;
    }
  
    var selectGrauEstrutura2= document.getElementById("estrutura_grau2");
  
    if(selectGrauEstrutura2 != null){
      var estrutura_grau2= selectGrauEstrutura2.options[selectGrauEstrutura2.selectedIndex].value;
    }
  
    var selectFormaEstrutura2= document.getElementById("estrutura_forma2");
  
    if(selectFormaEstrutura2 != null){
      var estrutura_forma2= selectFormaEstrutura2.options[selectFormaEstrutura2.selectedIndex].value;
    }
    
    var selectTamanhoEstrutura2= document.getElementById("estrutura_tamanho2")
  
    if(selectTamanhoEstrutura2 != null){
      var estrutura_tamanho2= selectTamanhoEstrutura2.options[selectTamanhoEstrutura2.selectedIndex].value;
    }
  
    var espessura= document.getElementById("espessura").value;
  
    var token = $('meta[name="csrf-token"]').attr('content');
    
    var url_descricao=window.location.href;
  
    
  
    $.ajax({
      type: "POST",
      url:url_descricao,
      data:{
        _token:token,
        limite_superior: limite_superior,
        limite_inferior: limite_inferior,
        superior_transicao: superior_transicao,
        inferior_transicao: inferior_transicao,
        observacao: observacao,
        nome_horizonte: nome_horizonte,
        observacao: observacao,
        transicao_topografia: transicao_topografia,
        transicao_nitidez: transicao_nitidez,
        outros_textura: outros_textura,
        outros_coesao: outros_coesao,
        outros_cimentacao: outros_cimentacao,
        outros_magnetismo: outros_magnetismo,
        outros_manganes: outros_manganes,
        outros_carbonato: outros_carbonato,
        compressao_tipo: compressao_tipo,
        compressao_quantidade: compressao_quantidade,
        compressao_grau: compressao_grau,
        cerosidade_quantidade: cerosidade_quantidade,
        cerosidade_grau: cerosidade_grau,
        friccao_quantidade: friccao_quantidade,
        friccao_tamanho: friccao_tamanho,
        friccao_grau: friccao_grau,
        consistencia_molhada_plasticidade: consistencia_molhada_plasticidade,
        consistencia_molhada_pegajosidade: consistencia_molhada_pegajosidade,
        consistencia_umido: consistencia_umido,
        consistencia_seco: consistencia_seco,
        poros_quantidade: poros_quantidade,
        poros_diametro: poros_diametro,
        eflorescencia_local: eflorescencia_local,
        eflorescencia_natureza: eflorescencia_natureza,
        eflorescencia_quantidade: eflorescencia_quantidade,
        nodulos_e_concrecoes_tamanho: nodulos_e_concrecoes_tamanho,
        nodulos_e_concrecoes_quantidade: nodulos_e_concrecoes_quantidade,
        nodulos_e_concrecoes_natureza: nodulos_e_concrecoes_natureza,
        nodulos_e_concrecoes_dureza: nodulos_e_concrecoes_dureza,
        nodulos_e_concrecoes_forma: nodulos_e_concrecoes_forma,
        nodulos_e_concrecoes_cor: nodulos_e_concrecoes_cor,
        raiz_quantidade: raiz_quantidade,
        raiz_diametro: raiz_diametro,
        raiz_tipo: raiz_tipo,
        estrutura_tipo: estrutura_tipo,
        estrutura_grau: estrutura_grau,
        estrutura_tamanho: estrutura_tamanho,
        estrutura_forma: estrutura_forma,
        estrutura_tipo2: estrutura_tipo2,
        estrutura_grau2: estrutura_grau2,
        estrutura_tamanho2: estrutura_tamanho2,
        estrutura_forma2: estrutura_forma2,
        espessura:espessura,
        outros_sulfeto:outros_sulfeto
  
      },
      success: function (response) {
                  
                  alert('Horizonte e morfologia inseridos com sucesso!!');
  
                  var botao="<a class='btn btn-primary' href="+url_descricao+"/propriedadeMorfologica/"+response+"/formularioCor>Inserir Cor</a>";
                  
                  $('#botao_horizonte').append(botao);
      },  
      
      error: function () {
                 alert("erro ao inserir :(");
      }
  
  });
  
  
  }
  
  
  
  function deleteHorizonte(horizonte){
  
      var id=horizonte;
      var token = $('meta[name="csrf-token"]').attr('content');
      $('#exampleModal').modal('show'); 
      $("#exampleModal").modal().find(".btn-ok").on("click", function(){
        $('#exampleModal').modal('hide');
        $.ajax({
        type: "DELETE",
        url:'/deleteHorizonte',
        data:{
          _token:token,
          id:id
        },
        success: function (response) {
                  alert('Horizonte '+response+' deletado com sucesso!');
                  location.reload(true);
        },
        
        error: function (response) {
                   alert(response.responseJSON.msg);
        }
  
        });
      });
  
  }
  
  function updateDescricaoHorizonte(descricao){
    var metodo = document.getElementById("metodo").value;
    if(metodo != null){
      if(metodo == 'Limites_espessura'){
        var limite_superior = document.getElementById("limite_superior").value;
        var limite_inferior= document.getElementById("limite_inferior").value;
      }else if(metodo == 'Limites_transacoes_espessura'){
        var limite_superior = document.getElementById("limite_superior").value;
        var limite_inferior= document.getElementById("limite_inferior").value;
        var superior_transicao= document.getElementById("superior_transicao").value;
        var inferior_transicao= document.getElementById("inferior_transicao").value;
      }
    }
  
    var nome_horizonte=document.getElementById("nome_horizonte").value;
    
    var selectTopografia= document.getElementById("transicao_topografia");
    var transicao_topografia= selectTopografia.options[selectTopografia.selectedIndex].value;
  
    var selectNitidez= document.getElementById("transicao_nitidez");
    var transicao_nitidez= selectNitidez.options[selectNitidez.selectedIndex].value;
  
    var selectTextura= document.getElementById("outros_textura");
    var outros_textura= selectTextura.options[selectTextura.selectedIndex].value;
  
    var selectCascalho= document.getElementById("outros_outros_cascalho");
    var outros_cascalho= selectCascalho.options[selectCascalho.selectedIndex].value;
    
    outros_textura+=outros_cascalho;
  
    var selectMolhadaPlasticidade= document.getElementById("consistencia_molhada_plasticidade");
    var consistencia_molhada_plasticidade= selectMolhadaPlasticidade.options[selectMolhadaPlasticidade.selectedIndex].value;
  
    var selectMolhadaPegajosidade= document.getElementById("consistencia_molhada_pegajosidade");
    var consistencia_consistencia_molhada_pegajosidade= selectMolhadaPegajosidade.options[selectMolhadaPegajosidade.selectedIndex].value;
  
    var selectUmidoConsistencia= document.getElementById("consistencia_umido");
    var consistencia_umido= selectUmidoConsistencia.options[selectUmidoConsistencia.selectedIndex].value;
  
    var selectSecoConsistencia= document.getElementById("consistencia_seco");
    var consistencia_seco= selectSecoConsistencia.options[selectSecoConsistencia.selectedIndex].value;
  
    var espessura= document.getElementById("espessura").value;
  
    var id_transicao=descricao.horizonte.transicao.id_transicao;
    var id_consistencia=descricao.consistencia.id_consistencia;
    var id_morfologica= descricao.id_morfologica;
    var id_estrutura1= descricao.horizonte.estruturas[0].id_estrutura;
    var id_
    if(typeof descricao.horizonte.estruturas[1] != 'undefined'){
      var id_estrutura2= descricao.horizonte.estruturas[1].id_estrutura;
    }
  
  
  
  var selectEstrutura= document.getElementById("estrutura_tipo1");
  var estrutura_tipo1= selectEstrutura.options[selectEstrutura.selectedIndex].value;
  
  if(estrutura_tipo1=='Agregado'){ //só tera outra estrutura e os campos forma, tamanho e estrutura se for Agregado
    var selectGrau1= document.getElementById("estrutura_grau1");
    var estrutura_grau1= selectGrau1.options[selectGrau1.selectedIndex].value;
  
    var selectTamanho1= document.getElementById("estrutura_tamanho1");
    var estrutura_tamanho1= selectTamanho1.options[selectTamanho1.selectedIndex].value;
  
    var selectForma1= document.getElementById("estrutura_forma1");
    var estrutura_forma1= selectForma1.options[selectForma1.selectedIndex].value;
  
    //Segunda estrutura mostrada no formulário
    var selectEstrutura2= document.getElementById("estrutura_tipo2");
    if(selectEstrutura2 != null){
    
      var estrutura_tipo2= selectEstrutura2.options[selectEstrutura2.selectedIndex].value;
  
      var selectGrau2= document.getElementById("estrutura_grau2");
      var estrutura_grau2= selectGrau2.options[selectGrau2.selectedIndex].value;
  
      var selectTamanho2= document.getElementById("estrutura_tamanho2");
      var estrutura_tamanho2= selectTamanho2.options[selectTamanho2.selectedIndex].value;
  
      var selectForma2= document.getElementById("estrutura_forma2");
      var estrutura_forma2= selectForma2.options[selectForma2.selectedIndex].value;
    }
  }
  
    var selecionaCor= document.getElementById("selectCor");
    var tipo= selecionaCor.options[selecionaCor.selectedIndex].value;
    var id_simples=[];
    var id_mosqueado=[];
    for(j=0;j<(descricao.cor_simples.length);j++){
      var simples = descricao.cor_simples[j].id_simples;
      id_simples.push(simples);
    }
    for(j=0;j<(descricao.mosqueado.length);j++){
      var mosqueado = descricao.mosqueado[j].id_mosqueado;
      id_mosqueado.push(mosqueado);
    }
    if(tipo == 'corSimples'){
  
      var selectMatizSeco= document.getElementById("matiz_seco");
      var matiz_seco= selectMatizSeco.options[selectMatizSeco.selectedIndex].value;
  
      var selectValorSeco= document.getElementById("valor_seco");
      var valor_seco= selectValorSeco.options[selectValorSeco.selectedIndex].value;
  
      var selectCromaSeco= document.getElementById("croma_seco");
      var croma_seco= selectCromaSeco.options[selectCromaSeco.selectedIndex].value;
  
      var selectCorSeco= document.getElementById("nome_seco");
      var nome_seco= selectCorSeco.options[selectCorSeco.selectedIndex].value;
  
      var selectSeco= document.getElementById("seco");
      var seco= selectSeco.options[selectSeco.selectedIndex].value;
  
      var selectMatizUmido= document.getElementById("matiz_umido");
      var matiz_umido= selectMatizUmido.options[selectMatizUmido.selectedIndex].value;
  
      var selectValorUmido= document.getElementById("valor_umido");
      var valor_umido= selectValorUmido.options[selectValorUmido.selectedIndex].value;
  
      var selectCromaUmido= document.getElementById("croma_umido");
      var croma_umido= selectCromaUmido.options[selectCromaUmido.selectedIndex].value;
  
      var selectCorUmido= document.getElementById("nome_umido");
      var nome_umido= selectCorUmido.options[selectCorUmido.selectedIndex].value;
  
      var selectUmido= document.getElementById("umido");
      var umido= selectUmido.options[selectUmido.selectedIndex].value;
  
    }else if(tipo == 'corVariegada'){
      var matiz_array= [];
      var valor_array=[];
      var croma_array=[];
      var nome_array=[];
      var umidade_array=[];
      i = sessionStorage.getItem('i');
      for(index=0;index<=i;index++){
        var selectMatiz=document.getElementById('matiz_variegado'+index+'');
        var selectValor=document.getElementById('valor_variegado'+index+'');
        var selectCroma=document.getElementById('croma_variegado'+index+'');
        var selectNome=document.getElementById('nome_variegado'+index+'');
        var selectUmidade=document.getElementById('umidade'+index+'');
        
  
        if(selectMatiz != null && selectMatiz.options[selectMatiz.selectedIndex].value != 'N/A'){
          var valor=selectValor.options[selectValor.selectedIndex].value;
          var croma=selectCroma.options[selectCroma.selectedIndex].value;
          var matiz=selectMatiz.options[selectMatiz.selectedIndex].value;
          var nome= selectNome.options[selectNome.selectedIndex].value;
          var umidade= selectUmidade.options[selectUmidade.selectedIndex].value;
          
  
          if(selectMatiz != null && selectNome.options[selectNome.selectedIndex].value != ''){
            //alert(matiz);
            matiz_array.push(matiz);
            valor_array.push(valor);
            croma_array.push(croma);
            nome_array.push(nome);
            umidade_array.push(umidade);
  
          }
        }
      }
  
    }else{
      var matiz_array= [];
      var valor_array=[];
      var croma_array=[];
      var nome_array=[];
      var contraste_array=[];
      var tamanho_array=[];
      var quantidade_array=[];
  
      var token = $('meta[name="csrf-token"]').attr('content');
  
      var url= window.location.href;
  
      url+='/corMosqueada';
  
      var selectMatizFundo= document.getElementById('matiz_fundo');
      var selectValorFundo= document.getElementById('valor_fundo');
      var selectCromaFundo= document.getElementById('croma_fundo');
      var selectNomeFundo=document.getElementById('nome_fundo');
      var selectUmidadeFundo=document.getElementById('umido_fundo');
  
      if(selectNomeFundo.options[selectNomeFundo.selectedIndex].value != 'N/A'){
        var matiz_fundo= selectMatizFundo.options[selectMatizFundo.selectedIndex].value;
        var valor_fundo= selectValorFundo.options[selectValorFundo.selectedIndex].value;
        var croma_fundo= selectCromaFundo.options[selectCromaFundo.selectedIndex].value;
        var nome_fundo= selectNomeFundo.options[selectNomeFundo.selectedIndex].value;
        var umidade_fundo= selectUmidadeFundo.options[selectUmidadeFundo.selectedIndex].value;
      }
  
      mosq = sessionStorage.getItem('mosq');
      for(index=0;index<=mosq;index++){
        var selectMatiz=document.getElementById('matiz_mosqueado'+index+'');
        var selectValor=document.getElementById('valor_mosqueado'+index+'');
        var selectCroma=document.getElementById('croma_mosqueado'+index+'');
        var selectNome=document.getElementById('nome_mosqueado'+index+'');
        var selectContraste=document.getElementById('contraste'+index+'');
        var selectTamanho=document.getElementById('tamanho'+index+'');
        var selectQuantidade= document.getElementById('quantidade'+index+'');
        
  
        if(selectMatiz != null && selectMatiz.options[selectMatiz.selectedIndex].value != 'N/A'  && selectNome.options[selectNome.selectedIndex].value != 'N/A'){
          var valor=selectValor.options[selectValor.selectedIndex].value;
          var croma=selectCroma.options[selectCroma.selectedIndex].value;
          var matiz=selectMatiz.options[selectMatiz.selectedIndex].value;
          var nome= selectNome.options[selectNome.selectedIndex].value;
          var contraste= selectContraste.options[selectContraste.selectedIndex].value;
          var tamanho= selectTamanho.options[selectTamanho.selectedIndex].value;
          var quantidade=selectQuantidade.options[selectQuantidade.selectedIndex].value;
  
          if(selectMatiz != null && selectNome.options[selectNome.selectedIndex].value != ''){
            //alert(matiz);
            matiz_array.push(matiz);
            valor_array.push(valor);
            croma_array.push(croma);
            nome_array.push(nome);
            contraste_array.push(contraste);
            tamanho_array.push(tamanho);
            quantidade_array.push(quantidade);
          }
        }
      }
  
    }
  
  
    var token = $('meta[name="csrf-token"]').attr('content');
    
    var url_descricao=window.location.href; //URL local
  
    
  
    $.ajax({
      type: "PATCH",
      url:url_descricao,
      data:{
        _token:token,
        limite_superior: limite_superior,
        limite_inferior: limite_inferior,
        superior_transicao: superior_transicao,
        inferior_transicao: inferior_transicao,
        espessura:espessura,
        nome_horizonte: nome_horizonte,
        transicao_topografia: transicao_topografia,
        transicao_nitidez: transicao_nitidez,
        outros_textura: outros_textura,
        consistencia_molhada_plasticidade: consistencia_molhada_plasticidade,
        consistencia_consistencia_molhada_pegajosidade: consistencia_molhada_pegajosidade,
        consistencia_umido: consistencia_umido,
        consistencia_seco: consistencia_seco,
        estrutura_tipo1: estrutura_tipo1,
        estrutura_grau1: estrutura_grau1,
        estrutura_tamanho1: estrutura_tamanho1,
        estrutura_forma1: estrutura_forma1,
        estrutura_tipo2: estrutura_tipo2,
        estrutura_grau2: estrutura_grau2,
        estrutura_tamanho2: estrutura_tamanho2,
        estrutura_forma2: estrutura_forma2,
        id_transicao: id_transicao,
        id_consistencia: id_consistencia,
        id_morfologica: id_morfologica,
        id_estrutura1: id_estrutura1,
        id_estrutura2: id_estrutura2,
        tipo:tipo,
        id_simples: id_simples,
        id_mosqueado:id_mosqueado,
        matiz_seco: matiz_seco,
        valor_seco: valor_seco,
        croma_seco: croma_seco,
        nome_seco: nome_seco,
        seco: seco,
        matiz_umido: matiz_umido,
        valor_umido: valor_umido,
        croma_umido: croma_umido,
        nome_umido: nome_umido,
        umido: umido,    
        matiz_array:matiz_array,
        valor_array:valor_array,
        croma_array:croma_array,
        nome_array:nome_array,
        umidade_array:umidade_array,
        contraste_array:contraste_array,
        matiz_fundo: matiz_fundo,
        valor_fundo: valor_fundo,
        croma_fundo: croma_fundo,
        nome_fundo: nome_fundo,
        umidade_fundo:umidade_fundo,
        tamanho_array: tamanho_array,
        quantidade_array:quantidade_array
      },
      success: function (response) {
                  
                  alert(response);
                  url_nova=url_descricao.substr(0,(url_descricao.length-7));
                  window.location.href = url_nova+"/editarComplementar";
      },
      
      error: function () {
                 alert("erro ao atualizar :(");
      }
  
  });
  }
  
  
  function updateDescricaoHorizonteComplementar(descricao){
  
    var observacao= document.getElementById("observacao").value;
  
    var selectCoesao= document.getElementById("outros_coesao"); 
    var outros_coesao= selectCoesao.options[selectCoesao.selectedIndex].value;
  
    var selectCimentacao= document.getElementById("outros_cimentacao");
    var outros_cimentacao= selectCimentacao.options[selectCimentacao.selectedIndex].value;
  
    var selectMagnetismo= document.getElementById("outros_magnetismo");
    var outros_magnetismo= selectMagnetismo.options[selectMagnetismo.selectedIndex].value;
  
    var outros_manganes= document.getElementById("outros_manganes").value;
  
    var outros_carbonato= document.getElementById("outros_carbonato").value;
  
    var selectTipoCompressao= document.getElementById("compressao_tipo");
    var compressao_tipo= selectTipoCompressao.options[selectTipoCompressao.selectedIndex].value;
  
    var selectQuantidadeCompressao= document.getElementById("compressao_quantidade");
    var compressao_quantidade= selectQuantidadeCompressao.options[selectQuantidadeCompressao.selectedIndex].value;
  
    var selectGrauCompressao= document.getElementById("compressao_grau");
    var compressao_grau= selectGrauCompressao.options[selectGrauCompressao.selectedIndex].value;
  
    var selectQuantidadeCerosidade= document.getElementById("cerosidade_quantidade");
    var cerosidade_quantidade= selectQuantidadeCerosidade.options[selectQuantidadeCerosidade.selectedIndex].value;
  
    var selectGrauCerosidade= document.getElementById("cerosidade_grau");
    var cerosidade_grau= selectGrauCerosidade.options[selectGrauCerosidade.selectedIndex].value;
  
    var selectFriccaoQuantidade= document.getElementById("friccao_quantidade");
    var friccao_quantidade= selectFriccaoQuantidade.options[selectFriccaoQuantidade.selectedIndex].value;
  
    var selectFriccaoTamanho= document.getElementById("friccao_tamanho");
    var friccao_tamanho= selectFriccaoTamanho.options[selectFriccaoTamanho.selectedIndex].value;
  
    var selectFriccaoGrau= document.getElementById("friccao_grau");
    var friccao_grau= selectFriccaoGrau.options[selectFriccaoGrau.selectedIndex].value;
  
    var selectQuantidadePoros= document.getElementById("poros_quantidade");
    var poros_quantidade= selectQuantidadePoros.options[selectQuantidadePoros.selectedIndex].value;
  
    var selectDiametroPoros= document.getElementById("poros_diametro");
    var poros_diametro= selectDiametroPoros.options[selectDiametroPoros.selectedIndex].value;
  
    var selectLocalEflorescencia= document.getElementById("eflorescencia_local");
    var eflorescencia_local= selectLocalEflorescencia.options[selectLocalEflorescencia.selectedIndex].value;
  
    var selectNaturezaEflorescencia= document.getElementById("eflorescencia_natureza");
    var eflorescencia_natureza= selectNaturezaEflorescencia.options[selectNaturezaEflorescencia.selectedIndex].value;
  
    var selectQuantidadeEflorescencia= document.getElementById("eflorescencia_quantidade");
    var eflorescencia_quantidade= selectQuantidadeEflorescencia.options[selectQuantidadeEflorescencia.selectedIndex].value;
  
    var selectTamanhoConcrecoes= document.getElementById("nodulos_e_concrecoes_tamanho");
    var nodulos_e_concrecoes_tamanho= selectTamanhoConcrecoes.options[selectTamanhoConcrecoes.selectedIndex].value;
  
    var selectQuantidadeConcrecoes= document.getElementById("nodulos_e_concrecoes_quantidade");
    var nodulos_e_concrecoes_quantidade= selectQuantidadeConcrecoes.options[selectQuantidadeConcrecoes.selectedIndex].value;
  
    var selectNaturezaConcrecoes= document.getElementById("nodulos_e_concrecoes_natureza");
    var nodulos_e_concrecoes_natureza= selectNaturezaConcrecoes.options[selectNaturezaConcrecoes.selectedIndex].value;
  
    var selectDurezaConcrecoes= document.getElementById("nodulos_e_concrecoes_dureza");
    var nodulos_e_concrecoes_dureza= selectDurezaConcrecoes.options[selectDurezaConcrecoes.selectedIndex].value;
  
    var selectFormaConcrecoes= document.getElementById("nodulos_e_concrecoes_forma");
    var nodulos_e_concrecoes_forma= selectFormaConcrecoes.options[selectFormaConcrecoes.selectedIndex].value;
  
    var selectCorConcrecoes= document.getElementById("nodulos_e_concrecoes_cor");
    var nodulos_e_concrecoes_cor= selectCorConcrecoes.options[selectCorConcrecoes.selectedIndex].value;
  
    var selectQuantidadeRaiz= document.getElementById("raiz_quantidade");
    var raiz_quantidade= selectQuantidadeRaiz.options[selectQuantidadeRaiz.selectedIndex].value;
  
    var selectDiametroRaiz= document.getElementById("raiz_diametro");
    var raiz_diametro= selectDiametroRaiz.options[selectDiametroRaiz.selectedIndex].value;
  
    var selectTipoRaiz= document.getElementById("raiz_tipo");
    var raiz_tipo= selectTipoRaiz.options[selectTipoRaiz.selectedIndex].value;
  
    if(descricao.eflorescencia != null){
      var id_eflorescencia= descricao.eflorescencia.id_eflorescencia;
    }
    if(descricao.poros != null){
      var id_poros= descricao.poros.id_poros;
    }
    if(descricao.nodulos_concrecoes != null){
      var id_concrecoes=descricao.nodulos_concrecoes.id_concrecoes;
    }
    if(descricao.superficie_friccao != null){
      var id_friccao=descricao.superficie_friccao.id_friccao;
    }
    if(descricao.cerosidade != null){
      var id_cerosidade= descricao.cerosidade.id_cerosidade;
    }
    if(descricao.superficie_compressao != null){
      var id_compressao= descricao.superficie_compressao.id_compressao;
    }
    if(descricao.raiz != null){
      var id_raiz=descricao.raiz.id_raiz;
    }
    var id_morfologica= descricao.id_morfologica;
  
    var token = $('meta[name="csrf-token"]').attr('content');
    
    var url_descricao=window.location.href; //URL local 
  
    $.ajax({
      type: "PATCH",
      url:url_descricao,
      data:{
        _token:token,
        observacao: observacao,
        outros_coesao: outros_coesao,
        outros_cimentacao: outros_cimentacao,
        outros_magnetismo: outros_magnetismo,
        outros_manganes: outros_manganes,
        outros_carbonato: outros_carbonato,
        compressao_tipo: compressao_tipo,
        compressao_quantidade: compressao_quantidade,
        compressao_grau: compressao_grau,
        cerosidade_quantidade: cerosidade_quantidade,
        cerosidade_grau: cerosidade_grau,
        friccao_quantidade: friccao_quantidade,
        friccao_tamanho: friccao_tamanho,
        friccao_grau: friccao_grau,
        poros_quantidade: poros_quantidade,
        poros_diametro: poros_diametro,
        eflorescencia_local: eflorescencia_local,
        eflorescencia_natureza: eflorescencia_natureza,
        eflorescencia_quantidade: eflorescencia_quantidade,
        nodulos_e_concrecoes_tamanho: nodulos_e_concrecoes_tamanho,
        nodulos_e_concrecoes_quantidade: nodulos_e_concrecoes_quantidade,
        nodulos_e_concrecoes_natureza: nodulos_e_concrecoes_natureza,
        nodulos_e_concrecoes_dureza: nodulos_e_concrecoes_dureza,
        nodulos_e_concrecoes_forma: nodulos_e_concrecoes_forma,
        nodulos_e_concrecoes_cor: nodulos_e_concrecoes_cor,
        raiz_quantidade: raiz_quantidade,
        raiz_diametro: raiz_diametro,
        raiz_tipo: raiz_tipo,
        id_eflorescencia: id_eflorescencia,
        id_poros: id_poros,
        id_concrecoes: id_concrecoes,
        id_friccao: id_friccao,
        id_cerosidade: id_cerosidade,
        id_compressao: id_compressao,
        id_raiz: id_raiz,
        id_morfologica: id_morfologica
      },
      success: function (response) {
                  
                  alert("InformaçÃµes Complementares do Horizonte atualizadas com sucesso!");
                  window.location.href = "/observacaoView/"+response+"/horizonteView";
      },
      
      error: function () {
                 alert("erro ao atualizar :(");
      }
  
  });
  }
  
  
  function trocarEstrutura(){ // cria os selects de grau, forma e tamanho do campo estrutura 1
  
  removerEstrutura();

  var selectEstrutura= document.getElementById("estrutura_tipo");
  var estrutura= selectEstrutura.options[selectEstrutura.selectedIndex].value;
  
  if(document.getElementById("estrutura_grau")!= null){  // verifica se tem elemento na div de estrutura
    $('#estrutura_tamanho' ).remove();
    $('#nome_tamanho' ).remove();
    $('#estrutura_grau' ).remove();
    $('#nome_grau' ).remove();
    $('#estrutura_forma').remove();
    $('#nome_forma').remove();
  }
  
  if(estrutura == 'Agregado'){
  
    var selectHtlm= "<div class='row'><div class='col-md-3'> <label class='col-md-3' id='nome_grau'>Grau</label> <select id='estrutura_grau' name='selectEstrutura' class='form-control'> <option></option> <option value='Fraca'>Fraca</option> <option value='Fraca a Moderada'>Fraca a Moderada</option> <option value='Moderada'>Moderada</option> <option value='Moderada a Forte'>Moderada a Forte</option> <option value='Forte'>Forte</option> </select> </div>";
    /*<div class='col-md-3'>
      <label class='col-md-3' for='selectbasic'>Tipo</label>
      <select id='estrutura_grau' name='selectbasic' class='form-control'>
        <option></option>
        <option value='Fraca'>Fraca</option>
        <option value='Fraca a Moderada'>Fraca a Moderada</option>
        <option value='Moderada'>Moderada</option>
        <option value='Moderada a Forte'>Moderada a Forte</option>
        <option value='Forte'>Forte</option>                           
      </select>
    </div>*/
   selectHtlm += "<div class='col-md-3'> <label class='col-md-3' id='nome_tamanho'>Tamanho</label> <select id='estrutura_tamanho' name='selectEstrutura' class='form-control'> <option></option> <option value='Ultrapequena'>Ultrapequena</option> <option value='Ultrapequena e muito pequena'>Ultrapequena e muito pequena</option> <option value='Muito pequena'>Muito pequena</option> <option value='Muito pequena e pequena'>Muito pequena e pequena</option> <option value='Pequena'>Pequena</option> <option value='Pequena e Média'>Pequena e Média</option> <option value='Média'>Média</option> <option value='Média e Grande'>Média e Grande</option> <option value='Grande'>Grande</option> <option value='Grande e Muito Grande'>Grande e Muito Grande</option> <option value='Muito Grande'>Muito Grande</option> <option value='Muito Grande e extremamente Grande'>Muito Grande e extremamente Grande</option> <option value='Extremamente Grande'>Extremamente Grande</option> </select> </div>";
  
  
  /*<div class='col-md-3'>
      <label class='col-md-3' for='selectbasic'>Tipo</label>
      <select id='estrutura_tamanho' name='selectbasic' class='form-control'>
        <option></option>
        <option value='Ultrapequena'>Ultrapequena</option>
        <option value='Ultrapequena e muito pequena'>Ultrapequena e muito pequena</option>
        <option value='Muito pequena'>Muito pequena</option>
        <option value='Muito pequena e pequena'>Muito pequena e pequena</option>
        <option value='Pequena'>Pequena</option>
        <option value='Pequena e Média'>Pequena e Média</option>
        <option value='Média'>Média</option>
        <option value='Média e Grande'>Média e Grande</option>
        <option value='Grande'>Grande</option>
        <option value='Grande e Muito Grande'>Grande e Muito Grande</option>
        <option value='Muito Grande'>Muito Grande</option>
        <option value='Muito Grande e extremamente Grande'>Muito Grande e extremamente Grande</option>
        <option value='Extremamente Grande'>Extremamente Grande</option>                           
      </select>
    </div>*/
  
     selectHtlm +="<div class='col-md-3'> <label class='col-md-3' id='nome_forma'>Forma</label> <select id='estrutura_forma' name='selectEstrutura' class='form-control'> <option></option> <option value='Granular'>Granular</option> <option value='Grumosa'>Grumosa</option> <option value='Blocos Angulares'>Blocos Angulares</option> <option value='Blocos Subangulares'>Blocos Subangulares</option> <option value='Prismática'>Prismática</option> <option value='Colunar'>Colunar</option> <option value='Laminar'>Laminar</option> <option value='Paralelepipédica'>Paralelepipédica</option> <option value='Cuneiforme'>Cuneiforme</option> </select> </div></div>";
    /*<div class='col-md-3'>
      <label class='col-md-3' for='selectbasic'>Forma</label>
      <select id='estrutura_forma' name='selectbasic' class='form-control'>
        <option></option>
        <option value='Granular'>Granular</option>
        <option value='Grumosa'>Grumosa</option>
        <option value='Blocos Angulares'>Blocos Angulares</option>
        <option value='Blocos Subangulares'>Blocos Subangulares</option>
        <option value='Prismática'>Prismática</option>
        <option value='Colunar'>Colunar</option>
        <option value='Laminar'>Laminar</option>
        <option value='Paralelepipédica'>Paralelepipédica</option>
        <option value='Cuneiforme'>Cuneiforme</option>                           
      </select>
    </div>*/
  
    $('#estrutura').append(selectHtlm);
  
  }
  
  }
  
  function trocarEstruturaNovaDiv(){ // cria os selects de grau, forma e tamanho do campo estrutura dois
  
  var selectEstrutura= document.getElementById("estrutura_tipo2");
  var estrutura= selectEstrutura.options[selectEstrutura.selectedIndex].value;
  
  
  if(document.getElementById("estrutura_grau2")!= null){  // verifica se tem elemento na div de estrutura
    /*$( '#estrutura_tamanho' ).remove();
    $( '#nome_tamanho' ).remove();
    $( '#estrutura_grau' ).remove();
    $( '#nome_grau' ).remove();
    $('#estrutura_forma').remove();
    $('#nome_forma').remove();*/
    $('#estruturaFormulario').empty();
  }
  
  if(estrutura == 'Agregado') {
  
    var selectHtlm= "<div class='row'><div class='col-md-3'> <label class='col-md-3'  id='nome_grau2'>Grau</label> <select id='estrutura_grau2' name='selectEstrutura' class='form-control'> <option></option> <option value='Fraca'>Fraca</option> <option value='Fraca a Moderada'>Fraca a Moderada</option> <option value='Moderada'>Moderada</option> <option value='Moderada a Forte'>Moderada a Forte</option> <option value='Forte'>Forte</option> </select> </div>";
    /*<div class='col-md-3'>
      <label class='col-md-3' for='selectbasic'>Tipo</label>
      <select id='estrutura_grau' name='selectbasic' class='form-control'>
        <option></option>
        <option value='Fraca'>Fraca</option>
        <option value='Fraca a Moderada'>Fraca a Moderada</option>
        <option value='Moderada'>Moderada</option>
        <option value='Moderada a Forte'>Moderada a Forte</option>
        <option value='Forte'>Forte</option>                           
      </select>
    </div>*/
   selectHtlm += "<div class='col-md-3'> <label class='col-md-3'>Tamanho</label> <select id='estrutura_tamanho2' name='selectEstrutura' class='form-control'> <option></option> <option value='Ultrapequena'>Ultrapequena</option> <option value='Ultrapequena e muito pequena'>Ultrapequena e muito pequena</option> <option value='Muito pequena'>Muito pequena</option> <option value='Muito pequena e pequena'>Muito pequena e pequena</option> <option value='Pequena'>Pequena</option> <option value='Pequena e Média'>Pequena e Média</option> <option value='Média'>Média</option> <option value='Média e Grande'>Média e Grande</option> <option value='Grande'>Grande</option> <option value='Grande e Muito Grande'>Grande e Muito Grande</option> <option value='Muito Grande'>Muito Grande</option> <option value='Muito Grande e extremamente Grande'>Muito Grande e extremamente Grande</option> <option value='Extremamente Grande'>Extremamente Grande</option> </select> </div>";
  
  
  /*<div class='col-md-3'>
      <label class='col-md-3' for='selectbasic'>Tipo</label>
      <select id='estrutura_tamanho' name='selectbasic' class='form-control'>
        <option></option>
        <option value='Ultrapequena'>Ultrapequena</option>
        <option value='Ultrapequena e muito pequena'>Ultrapequena e muito pequena</option>
        <option value='Muito pequena'>Muito pequena</option>
        <option value='Muito pequena e pequena'>Muito pequena e pequena</option>
        <option value='Pequena'>Pequena</option>
        <option value='Pequena e Média'>Pequena e Média</option>
        <option value='Média'>Média</option>
        <option value='Média e Grande'>Média e Grande</option>
        <option value='Grande'>Grande</option>
        <option value='Grande e Muito Grande'>Grande e Muito Grande</option>
        <option value='Muito Grande'>Muito Grande</option>
        <option value='Muito Grande e extremamente Grande'>Muito Grande e extremamente Grande</option>
        <option value='Extremamente Grande'>Extremamente Grande</option>                           
      </select>
    </div>*/
  
     selectHtlm +="<div class='col-md-3'> <label class='col-md-3' >Forma</label> <select id='estrutura_forma2' name='selectEstrutura' class='form-control'> <option></option> <option value='Granular'>Granular</option> <option value='Grumosa'>Grumosa</option> <option value='Blocos Angulares'>Blocos Angulares</option> <option value='Blocos Subangulares'>Blocos Subangulares</option> <option value='Prismática'>Prismática</option> <option value='Colunar'>Colunar</option> <option value='Laminar'>Laminar</option> <option value='Paralelepipédica'>Paralelepipédica</option> <option value='Cuneiforme'>Cuneiforme</option> </select> </div></div>";
    /*<div class='col-md-3'>
      <label class='col-md-3' for='selectbasic'>Forma</label>
      <select id='estrutura_forma' name='selectbasic' class='form-control'>
        <option></option>
        <option value='Granular'>Granular</option>
        <option value='Grumosa'>Grumosa</option>
        <option value='Blocos Angulares'>Blocos Angulares</option>
        <option value='Blocos Subangulares'>Blocos Subangulares</option>
        <option value='Prismática'>Prismática</option>
        <option value='Colunar'>Colunar</option>
        <option value='Laminar'>Laminar</option>
        <option value='Paralelepipédica'>Paralelepipédica</option>
        <option value='Cuneiforme'>Cuneiforme</option>                           
      </select>
    </div>*/
  
    $('#nova_estrutura').append(selectHtlm);
  
  }
  
  }
  
  
  function criarCampoEstrutura(){ //cria o botão de estrutura 2
  
    var selectTipo=document.getElementById('estrutura_tipo');
    var estrutura_tipo= selectTipo.options[selectTipo.selectedIndex].value;
    var selectHtlm = "<legend><button id='remover_estrutura' class='btn btn-outline-secondary btn-sm' type='button' onclick='removerEstrutura()'><i class='fa fa-minus'></i></button> Estrutura</legend>";
    selectHtlm += "<div id='nova_estrutura'> ";
    selectHtlm += "<div class='col-md'> ";
    selectHtlm += "<label class='col-md'>Tipo</label> ";
    selectHtlm += "<select id='estrutura_tipo2' name='selectEstrutura'  class='form-control' onchange='trocarEstruturaNovaDiv()'> <option></option> <option value='Agregado'>Agregado</option> </select>";
    selectHtlm += "</div>";
    selectHtlm += "</div>";
    /*<legend> Estrutura</legend>
  
    <div class='row'>
      <div class='col-md-3'>
        <label class='col-md-3' for='selectbasic'>Tipo</label>
        <select id='estrutura_tipo' name='selectbasic' class='form-control' onchange='trocarEstrutura()''>
          <option></option>
          <option value='Grão Simples'>Grão Simples</option>
          <option value='Maciça'>Maciça</option>
          <option value='Agregado'>Agregado</option>                           
        </select>
      </div>
    </div>*/
    
    if(estrutura_tipo != 'Agregado'){
      alert('Só é aceito outra estutura se o primeiro campo for agregado');
    }
  
    else{
  
      if(document.getElementById("nova_estrutura") == null){
        $('#estruturaFormulario').append(selectHtlm);
      }
      else{
        alert("Podem ser inserido somente duas Estruturas");
      }    
  
    }
  }
  
  function trocarLimites(){
  
    var selectTopografia= document.getElementById("transicao_topografia");
    var transicao_topografia= selectTopografia.options[selectTopografia.selectedIndex].value;
    var selectMetodo= document.getElementById("metodo");
    if(selectMetodo != null){
      var metodo= selectMetodo.options[selectMetodo.selectedIndex].value;
    }
  
    if(document.getElementById("espessura")!= null){  // verifica se tem elemento na div de limites
      $( '#limite_superior' ).remove();
      $( '#limite_inferior' ).remove();
      $( '#espessura' ).remove();
      $( '#nome_limite_superior' ).remove();
      $( '#nome_limite_inferior' ).remove();
      $( '#nome_espessura' ).remove();
      $( '#divum' ).remove();
      $( '#divdois' ).remove();
      $( '#divtres' ).remove();
      $( '#limite_superior_transicao' ).remove();
      $( '#limite_inferior_transicao' ).remove();
      $( '#nome_limite_superior_transicao' ).remove();
      $( '#nome_limite_inferior_transicao' ).remove();
      $( '#nome_metodo' ).remove();
      $( '#metodo' ).remove();
      $( '#divquatro' ).remove();
      $( '#divcinco' ).remove();
      $( '#divseis' ).remove();
    }
  
    if(transicao_topografia == 'Plana'){
  
        if(selectMetodo == null){
  
          var selectHtlm= "<div class='form-group col-md-6' id='divseis'><label class='col-md-4 control-label' for='textinput' id='nome_metodo'>Método</label><select id='metodo' name='limites_metodo' class='form-control' onchange='trocarLimites()'><option></option><option value='Limites_espessura'>Informar Limite Superior, Inferior e Espessura</option><option value='Espessura'>Informar Espessura</option></select></div>";
        
        }else{
  
          if(metodo == 'Espessura'){
  
            $( '#divseis' ).remove();
  
            var selectHtlm= "<div class='form-group col-md-6' id='divseis'><label class='col-md-4 control-label' for='textinput' id='nome_metodo'>Método</label><select id='metodo' name='limites_metodo' class='form-control' onchange='trocarLimites()'><option></option><option value='Limites_espessura'>Informar Limite Superior, Inferior e Espessura</option><option value='Espessura' selected='selected'>Informar Espessura</option></select></div>";
  
            selectHtlm +="<div class='form-group' id='divtres'><label class='col-md-4 control-label' for='textinput' id='nome_espessura'>Espessura</label><div class='col-md-5'><input name='espessura' id='espessura' name='textinput' type='number' step='0.01' placeholder='Espessura' class='form-control input-md' size='4'></div></div>";
  
          }else{
  
            $( '#divseis' ).remove();
  
            var selectHtlm= "<div class='form-group col-md-6' id='divseis'><label class='col-md-4 control-label' for='textinput' id='nome_metodo'>Método</label><select id='metodo' name='limites_metodo' class='form-control' onchange='trocarLimites()'><option></option><option value='Limites_espessura' selected='selected'>Informar Limite Superior, Inferior e Espessura</option><option value='Espessura'>Informar Espessura</option></select></div>";
  
            selectHtlm+= "<div class='form-group' id='divum'><label class='col-md-4 control-label' for='textinput' id='nome_limite_superior'>Limite Superior</label><div class='col-md-5'><input name='limite_superior' id='limite_superior' name='textinput' type='number' step='0.01' placeholder='Limite Superior' class='form-control input-md' onchange='calculoEspessura()'></div></div>";
        
            selectHtlm += "<div class='form-group' id='divdois'><label class='col-md-4 control-label' for='textinput' id='nome_limite_inferior'>Limite Inferior</label><div class='col-md-5'><input name='limite_inferior' id='limite_inferior' name='textinput' type='number' step='0.01' placeholder='Limite Inferior' class='form-control input-md' onchange='calculoEspessura()'></div></div>";
  
            selectHtlm +="<div class='form-group' id='divtres'><label class='col-md-4 control-label' for='textinput' id='nome_espessura'>Espessura</label><div class='col-md-5'><input name='espessura' id='espessura' name='textinput' type='number' step='0.01' placeholder='Espessura' class='form-control input-md' size='4' readonly></div></div>";
          }
        
        }
       
      $('#limites').append(selectHtlm);
  
    }else{
  
      if(selectMetodo == null){
  
        var selectHtlm= "<div class='form-group col-md-6' id='divseis'><label class='col-md-4 control-label' for='textinput' id='nome_metodo'>Método</label><select id='metodo' name='limites_metodo' class='form-control' onchange='trocarLimites()'><option></option><option value='Limites_transacoes_espessura'>Informar Limite Superior, Superior e Inferior de transição, Inferior e Espessura</option><option value='Limites_espessura'>Informar Limite Superior, Inferior e Espessura</option><option value='Espessura'>Informar Espessura</option></select></div>";
      
      }else{
  
        //var metodo= selectMetodo.options[selectMetodo.selectedIndex].value;
  
        $( '#divseis' ).remove();
  
        if(metodo == 'Espessura'){
  
          var selectHtlm= "<div class='form-group col-md-6' id='divseis'><label class='col-md-4 control-label' for='textinput' id='nome_metodo'>Método</label><select id='metodo' name='limites_metodo' class='form-control' onchange='trocarLimites()'><option></option><option value='Limites_transacoes_espessura'>Informar Limite Superior, Superior e Inferior de transição, Inferior e Espessura</option><option value='Limites_espessura'>Informar Limite Superior, Inferior e Espessura</option><option value='Espessura' selected='selected'>Informar Espessura</option></select></div>";
  
          selectHtlm +="<div class='form-group' id='divtres'><label class='col-md-4 control-label' for='textinput' id='nome_espessura'>Espessura</label><div class='col-md-5'><input name='espessura' id='espessura' name='textinput' type='number' step='0.01' placeholder='Espessura' class='form-control input-md' size='4'></div></div>";
  
        }else if(metodo == 'Limites_espessura'){
          var selectHtlm= "<div class='form-group col-md-6' id='divseis'><label class='col-md-4 control-label' for='textinput' id='nome_metodo'>Método</label><select id='metodo' name='limites_metodo' class='form-control' onchange='trocarLimites()'><option></option><option value='Limites_transacoes_espessura'>Informar Limite Superior, Superior e Inferior de transição, Inferior e Espessura</option><option value='Limites_espessura' selected='selected'>Informar Limite Superior, Inferior e Espessura</option><option value='Espessura'>Informar Espessura</option></select></div>";  
          selectHtlm+= "<div class='form-group' id='divum'><label class='col-md-4 control-label' for='textinput' id='nome_limite_superior'>Limite Superior</label><div class='col-md-5'><input name='limite_superior' id='limite_superior' name='textinput' type='number' step='0.01' placeholder='Limite Superior' class='form-control input-md' onchange='calculoEspessura()'></div></div>";      
          selectHtlm += "<div class='form-group' id='divdois'><label class='col-md-4 control-label' for='textinput' id='nome_limite_inferior'>Limite Inferior</label><div class='col-md-5'><input name='limite_inferior' id='limite_inferior' name='textinput' type='number' step='0.01' placeholder='Limite Inferior' class='form-control input-md' onchange='calculoEspessura()'></div></div>";
          selectHtlm +="<div class='form-group' id='divtres'><label class='col-md-4 control-label' for='textinput' id='nome_espessura'>Espessura</label><div class='col-md-5'><input name='espessura' id='espessura' name='textinput' type='number' step='0.01' placeholder='Espessura' class='form-control input-md' size='4' readonly></div></div>";
        }else{
          var selectHtlm= "<div class='form-group col-md-6' id='divseis'><label class='col-md-4 control-label' for='textinput' id='nome_metodo'>Método</label><select id='metodo' name='limites_metodo' class='form-control' onchange='trocarLimites()'><option></option><option value='Limites_transacoes_espessura' selected='selected'>Informar Limite Superior, Superior e Inferior de transição, Inferior e Espessura</option><option value='Limites_espessura'>Informar Limite Superior, Inferior e Espessura</option><option value='Espessura'>Informar Espessura</option></select></div>";
          selectHtlm+= "<div class='form-group' id='divum'><label class='col-md-4 control-label' for='textinput' id='nome_limite_superior'>Limite Superior</label><div class='col-md-5'><input name='limite_superior' id='limite_superior' name='textinput' type='number' step='0.01' placeholder='Limite Superior' class='form-control input-md' onchange='calculoLimiteInferior()'></div></div>";
          selectHtlm+= "<div class='form-group' id='divquatro'><label class='col-md-4 control-label' for='textinput' id='nome_limite_superior_transicao'>Limite Superior da transição</label><div class='col-md-5'><input name='superior_transicao' id='superior_transicao' type='number' step='0.01' placeholder='Limite Superior da Transição' class='form-control input-md' onchange='calculoLimiteInferior()'></div></div>"; 
          selectHtlm+= "<div class='form-group' id='divcinco'><label class='col-md-4 control-label' for='textinput' id='nome_limite_inferior_transicao'>Limite Inferior da transição</label><div class='col-md-5'><input name='inferior_transicao' id='inferior_transicao' type='number' step='0.01' placeholder='Limite Inferior da Transição' class='form-control input-md' onchange='calculoLimiteInferior()'></div></div>";          
          selectHtlm += "<div class='form-group' id='divdois'><label class='col-md-4 control-label' for='textinput' id='nome_limite_inferior'>Limite Inferior</label><div class='col-md-5'><input name='limite_inferior' id='limite_inferior' name='textinput' type='number' step='0.01' placeholder='Limite Inferior' class='form-control input-md' onchange='calculoLimiteInferior()' readonly></div></div>";  
          selectHtlm +="<div class='form-group' id='divtres'><label class='col-md-4 control-label' for='textinput' id='nome_espessura'>Espessura</label><div class='col-md-5'><input name='espessura' id='espessura' name='textinput' type='number' step='0.01' placeholder='Espessura' class='form-control input-md' size='4' readonly></div></div>";
        }
  
      }
  
        $('#limites').append(selectHtlm);
  
    }
  
  }
  
  
  function removerEstrutura(){
    $('#estruturaFormulario').empty();
  }
  
  
  function calculoLimiteInferior(){
    var inferiorTransicao=parseFloat(document.getElementById("inferior_transicao").value);
    var superiorTransicao=parseFloat(document.getElementById("superior_transicao").value);
    var inferior=document.getElementById("limite_inferior").value;
    var superior=document.getElementById("limite_superior").value;
    var espessura;
    var limiteInferior;
  
    if(inferiorTransicao < 0){
      inferiorTransicao = inferiorTransicao*-1;
    }
  
    if(superiorTransicao < 0){
      superiorTransicao = superiorTransicao*-1;
    }
    
    limiteInferior = (inferiorTransicao + superiorTransicao)/2;
    //console.log(limiteInferior);
    document.getElementById("limite_inferior").value=limiteInferior;
    document.getElementById("espessura").value=limiteInferior-superior;
  }
  
  
  
  
  function calculoEspessura(){ //calculo da espessura no update e no insert
    var inferior=document.getElementById("limite_inferior").value;
    var superior=document.getElementById("limite_superior").value;
    var espessura;
    
  
  
    if(superior < 0){
      superior= superior * -1;
      
  
      espessura= inferior - superior;
      
      
      if(espessura < 0){
        espessura= espessura *-1;
        
      }
  
      
    }
  
    else{
      espessura= inferior-superior;
  
      if(espessura < 0){
        espessura= espessura *-1;
      
      }
    }
  
    document.getElementById("espessura").value=espessura;
  
  }
  
  function LimitesUpdate(superior, inferior, inferior_transicao, superior_transicao, espessura){
  
    var selectTopografia= document.getElementById("transicao_topografia");
    var transicao_topografia= selectTopografia.options[selectTopografia.selectedIndex].value; 
  
    if(transicao_topografia == 'Plana'){
      if(superior){
        var selectHtlm= "<div class='form-group col-md-6' id='divseis'><label class='col-md-4 control-label' for='textinput' id='nome_metodo'>Método</label><select id='metodo' name='limites_metodo' class='form-control' onchange='trocarLimites()'><option></option><option value='Limites_espessura' selected='selected'>Informar Limite Superior, Inferior e Espessura</option><option value='Espessura'>Informar Espessura</option></select></div>";
  
            selectHtlm+= "<div class='form-group' id='divum'><label class='col-md-4 control-label' for='textinput' id='nome_limite_superior'>Limite Superior</label><div class='col-md-5'><input name='limite_superior' id='limite_superior' name='textinput' type='number' step='0.01' placeholder='Limite Superior' class='form-control input-md' value='"+superior+"' onchange='calculoEspessura()'></div></div>";
        
            selectHtlm += "<div class='form-group' id='divdois'><label class='col-md-4 control-label' for='textinput' id='nome_limite_inferior'>Limite Inferior</label><div class='col-md-5'><input name='limite_inferior' id='limite_inferior' name='textinput' type='number' step='0.01' placeholder='Limite Inferior' class='form-control input-md' value='"+inferior+"' onchange='calculoEspessura()'></div></div>";
  
            selectHtlm +="<div class='form-group' id='divtres'><label class='col-md-4 control-label' for='textinput' id='nome_espessura'>Espessura</label><div class='col-md-5'><input name='espessura' id='espessura' name='textinput' type='number' step='0.01' placeholder='Espessura' class='form-control input-md' size='4' value='"+espessura+"' readonly></div></div>";   
      }else{
        var selectHtlm= "<div class='form-group col-md-6' id='divseis'><label class='col-md-4 control-label' for='textinput' id='nome_metodo'>Método</label><select id='metodo' name='limites_metodo' class='form-control' onchange='trocarLimites()'><option></option><option value='Limites_espessura'>Informar Limite Superior, Inferior e Espessura</option><option value='Espessura' selected='selected'>Informar Espessura</option></select></div>";
  
            selectHtlm +="<div class='form-group' id='divtres'><label class='col-md-4 control-label' for='textinput' id='nome_espessura'>Espessura</label><div class='col-md-5'><input name='espessura' id='espessura' name='textinput' type='number' step='0.01' placeholder='Espessura' class='form-control input-md' size='4' value='"+espessura+"'></div></div>";   
      }
    }else{
      if(superior_transicao && inferior_transicao){
  
        var selectHtlm= "<div class='form-group col-md-6' id='divseis'><label class='col-md-4 control-label' for='textinput' id='nome_metodo'>Método</label><select id='metodo' name='limites_metodo' class='form-control' onchange='trocarLimites()'><option></option><option value='Limites_transacoes_espessura' selected='selected'>Informar Limite Superior, Superior e Inferior de transição, Inferior e Espessura</option><option value='Limites_espessura'>Informar Limite Superior, Inferior e Espessura</option><option value='Espessura'>Informar Espessura</option></select></div>";
  
          selectHtlm+= "<div class='form-group' id='divum'><label class='col-md-4 control-label' for='textinput' id='nome_limite_superior'>Limite Superior</label><div class='col-md-5'><input name='limite_superior' id='limite_superior' name='textinput' type='number' step='0.01' placeholder='Limite Superior' class='form-control input-md' value='"+superior+"' onchange='calculoLimiteInferior()'></div></div>";
  
          selectHtlm+= "<div class='form-group' id='divquatro'><label class='col-md-4 control-label' for='textinput' id='nome_limite_superior_transicao'>Limite Superior da transição</label><div class='col-md-5'><input name='superior_transicao' id='superior_transicao' type='number' step='0.01' placeholder='Limite Superior da Transição' class='form-control input-md' value='"+superior_transicao+"' onchange='calculoLimiteInferior()'></div></div>";
  
          selectHtlm+= "<div class='form-group' id='divcinco'><label class='col-md-4 control-label' for='textinput' id='nome_limite_inferior_transicao'>Limite Inferior da transição</label><div class='col-md-5'><input name='inferior_transicao' id='inferior_transicao' type='number' step='0.01' placeholder='Limite Inferior da Transição' class='form-control input-md' value='"+inferior_transicao+"' onchange='calculoLimiteInferior()'></div></div>";
          
          selectHtlm += "<div class='form-group' id='divdois'><label class='col-md-4 control-label' for='textinput' id='nome_limite_inferior'>Limite Inferior</label><div class='col-md-5'><input name='limite_inferior' id='limite_inferior' name='textinput' type='number' step='0.01' placeholder='Limite Inferior' class='form-control input-md' value='"+inferior+"' onchange='calculoLimiteInferior()' readonly></div></div>";
  
          selectHtlm +="<div class='form-group' id='divtres'><label class='col-md-4 control-label' for='textinput' id='nome_espessura'>Espessura</label><div class='col-md-5'><input name='espessura' id='espessura' name='textinput' type='number' step='0.01' placeholder='Espessura' class='form-control input-md' size='4' value='"+espessura+"' readonly></div></div>";
  
        
      }else if(superior && inferior){
        var selectHtlm= "<div class='form-group col-md-6' id='divseis'><label class='col-md-4 control-label' for='textinput' id='nome_metodo'>Método</label><select id='metodo' name='limites_metodo' class='form-control' onchange='trocarLimites()'><option></option><option value='Limites_transacoes_espessura'>Informar Limite Superior, Superior e Inferior de transição, Inferior e Espessura</option><option value='Limites_espessura' selected='selected'>Informar Limite Superior, Inferior e Espessura</option><option value='Espessura'>Informar Espessura</option></select></div>";
  
            selectHtlm+= "<div class='form-group' id='divum'><label class='col-md-4 control-label' for='textinput' id='nome_limite_superior'>Limite Superior</label><div class='col-md-5'><input name='limite_superior' id='limite_superior' name='textinput' type='number' step='0.01' placeholder='Limite Superior' class='form-control input-md' value='"+superior+"' onchange='calculoEspessura()'></div></div>";
        
            selectHtlm += "<div class='form-group' id='divdois'><label class='col-md-4 control-label' for='textinput' id='nome_limite_inferior'>Limite Inferior</label><div class='col-md-5'><input name='limite_inferior' id='limite_inferior' name='textinput' type='number' step='0.01' placeholder='Limite Inferior' class='form-control input-md' value='"+inferior+"' onchange='calculoEspessura()'></div></div>";
  
            selectHtlm +="<div class='form-group' id='divtres'><label class='col-md-4 control-label' for='textinput' id='nome_espessura'>Espessura</label><div class='col-md-5'><input name='espessura' id='espessura' name='textinput' type='number' step='0.01' placeholder='Espessura' class='form-control input-md' size='4' value='"+espessura+"' readonly></div></div>";   
      
      }else{
        var selectHtlm= "<div class='form-group col-md-6' id='divseis'><label class='col-md-4 control-label' for='textinput' id='nome_metodo'>Método</label><select id='metodo' name='limites_metodo' class='form-control' onchange='trocarLimites()'><option></option><option value='Limites_transacoes_espessura'>Informar Limite Superior, Superior e Inferior de transição, Inferior e Espessura</option><option value='Limites_espessura'>Informar Limite Superior, Inferior e Espessura</option><option value='Espessura' selected='selected'>Informar Espessura</option></select></div>";
  
            selectHtlm +="<div class='form-group' id='divtres'><label class='col-md-4 control-label' for='textinput' id='nome_espessura'>Espessura</label><div class='col-md-5'><input name='espessura' id='espessura' name='textinput' type='number' step='0.01' placeholder='Espessura' class='form-control input-md' size='4' value='"+espessura+"' readonly></div></div>";   
      
      }
  
    }
    $('#limites').append(selectHtlm);
  }
  
  function insertNewHorizonte(){
    var metodo = document.getElementById("metodo").value;
    if(metodo != null){
      if(metodo == 'Limites_espessura'){
        var limite_superior = document.getElementById("limite_superior").value;
        var limite_inferior= document.getElementById("limite_inferior").value;
      }else if(metodo == 'Limites_transacoes_espessura'){
        var limite_superior = document.getElementById("limite_superior").value;
        var limite_inferior= document.getElementById("limite_inferior").value;
        var superior_transicao= document.getElementById("superior_transicao").value;
        var inferior_transicao= document.getElementById("inferior_transicao").value;
      }
    }
    
    var nome_horizonte=document.getElementById("nome_horizonte").value;
    
    var selectTopografia= document.getElementById("transicao_topografia");
    var transicao_topografia= selectTopografia.options[selectTopografia.selectedIndex].value;
  
    var selectNitidez= document.getElementById("transicao_nitidez");
    var transicao_nitidez= selectNitidez.options[selectNitidez.selectedIndex].value;
  
    var selectTextura= document.getElementById("outros_textura");
    var outros_outros_textura= selectTextura.options[selectTextura.selectedIndex].value;
  
    var selectCascalho= document.getElementById("outros_cascalho");
    var outros_cascalho=selectCascalho.options[selectCascalho.selectedIndex].value;
  
    outros_outros_textura+=outros_cascalho; // forma a outros_outros_textura, que é composta da concatenização de outros_outros_textura mais o campo outros_cascalho.
  
    var selectMolhadaPlasticidade= document.getElementById("consistencia_molhada_plasticidade");
    var consistencia_molhada_plasticidade= selectMolhadaPlasticidade.options[selectMolhadaPlasticidade.selectedIndex].value;
  
    var selectMolhadaPegajosidade= document.getElementById("consistencia_molhada_pegajosidade");
    var consistencia_molhada_pegajosidade= selectMolhadaPegajosidade.options[selectMolhadaPegajosidade.selectedIndex].value;
  
    var selectUmidoConsistencia= document.getElementById("consistencia_umido");
    var consistencia_umido= selectUmidoConsistencia.options[selectUmidoConsistencia.selectedIndex].value;
  
    var selectSecoConsistencia= document.getElementById("consistencia_seco");
    var consistencia_seco= selectSecoConsistencia.options[selectSecoConsistencia.selectedIndex].value;
  
    var selectTipoEstrutura= document.getElementById("estrutura_tipo");
    
    if(selectTipoEstrutura != null){
      var estrutura_tipo= selectTipoEstrutura.options[selectTipoEstrutura.selectedIndex].value;
    }
  
    var selectGrauEstrutura= document.getElementById("estrutura_grau");
    if(selectGrauEstrutura != null){
      var estrutura_grau=  selectGrauEstrutura.options[selectGrauEstrutura.selectedIndex].value;
    }
  
    var selectTamanhoEstrutura= document.getElementById("estrutura_tamanho");
    if(selectTamanhoEstrutura != null){  
      var estrutura_tamanho= selectTamanhoEstrutura.options[selectTamanhoEstrutura.selectedIndex].value;
    }  
    var selectFormaEstrutura= document.getElementById("estrutura_forma");
    if(selectFormaEstrutura != null){
      var estrutura_forma= selectFormaEstrutura.options[selectFormaEstrutura.selectedIndex].value;
    }  
    var selectTipoEstrutura2= document.getElementById("estrutura_tipo2");
    if(selectTipoEstrutura2 != null){
     var estrutura_tipo2= selectTipoEstrutura2.options[selectTipoEstrutura2.selectedIndex].value;
    }
  
    var selectGrauEstrutura2= document.getElementById("estrutura_grau2");
  
    if(selectGrauEstrutura2 != null){
      var estrutura_grau2= selectGrauEstrutura2.options[selectGrauEstrutura2.selectedIndex].value;
    }
  
    var selectFormaEstrutura2= document.getElementById("estrutura_forma2");
  
    if(selectFormaEstrutura2 != null){
      var estrutura_forma2= selectFormaEstrutura2.options[selectFormaEstrutura2.selectedIndex].value;
    }
    
    var selectTamanhoEstrutura2= document.getElementById("estrutura_tamanho2")
  
    if(selectTamanhoEstrutura2 != null){
      var estrutura_tamanho2= selectTamanhoEstrutura2.options[selectTamanhoEstrutura2.selectedIndex].value;
    }
  
    var espessura= document.getElementById("espessura").value;
  
    var selecionaCor= document.getElementById("selectCor");
    var tipo= selecionaCor.options[selecionaCor.selectedIndex].value;
   
    if(tipo == 'corSimples'){
  
      var selectMatizSeco= document.getElementById("matiz_seco");
      var matiz_seco= selectMatizSeco.options[selectMatizSeco.selectedIndex].value;
  
      var selectValorSeco= document.getElementById("valor_seco");
      var valor_seco= selectValorSeco.options[selectValorSeco.selectedIndex].value;
  
      var selectCromaSeco= document.getElementById("croma_seco");
      var croma_seco= selectCromaSeco.options[selectCromaSeco.selectedIndex].value;
  
      var selectCorSeco= document.getElementById("nome_seco");
      var nome_seco= selectCorSeco.options[selectCorSeco.selectedIndex].value;
  
      var selectSeco= document.getElementById("seco");
      var seco= selectSeco.options[selectSeco.selectedIndex].value;
  
      var selectMatizUmido= document.getElementById("matiz_umido");
      var matiz_umido= selectMatizUmido.options[selectMatizUmido.selectedIndex].value;
  
      var selectValorUmido= document.getElementById("valor_umido");
      var valor_umido= selectValorUmido.options[selectValorUmido.selectedIndex].value;
  
      var selectCromaUmido= document.getElementById("croma_umido");
      var croma_umido= selectCromaUmido.options[selectCromaUmido.selectedIndex].value;
  
      var selectCorUmido= document.getElementById("nome_umido");
      var nome_umido= selectCorUmido.options[selectCorUmido.selectedIndex].value;
  
      var selectUmido= document.getElementById("umido");
      var umido= selectUmido.options[selectUmido.selectedIndex].value;
  
    }else if(tipo == 'corVariegada'){
      var matiz_array= [];
      var valor_array=[];
      var croma_array=[];
      var nome_array=[];
      var umidade_array=[];
      i = sessionStorage.getItem('i');
      for(index=0;index<=i;index++){
        var selectMatiz=document.getElementById('matiz_variegado'+index+'');
        var selectValor=document.getElementById('valor_variegado'+index+'');
        var selectCroma=document.getElementById('croma_variegado'+index+'');
        var selectNome=document.getElementById('nome_variegado'+index+'');
        var selectUmidade=document.getElementById('umidade'+index+'');
        
  
        if(selectMatiz != null && selectMatiz.options[selectMatiz.selectedIndex].value != 'N/A'){
          var valor=selectValor.options[selectValor.selectedIndex].value;
          var croma=selectCroma.options[selectCroma.selectedIndex].value;
          var matiz=selectMatiz.options[selectMatiz.selectedIndex].value;
          var nome= selectNome.options[selectNome.selectedIndex].value;
          var umidade= selectUmidade.options[selectUmidade.selectedIndex].value;
          
  
          if(selectMatiz != null && selectNome.options[selectNome.selectedIndex].value != ''){
            //alert(matiz);
            matiz_array.push(matiz);
            valor_array.push(valor);
            croma_array.push(croma);
            nome_array.push(nome);
            umidade_array.push(umidade);
  
          }
        }
      }
  
    }else{
      var matiz_array= [];
      var valor_array=[];
      var croma_array=[];
      var nome_array=[];
      var contraste_array=[];
      var tamanho_array=[];
      var quantidade_array=[];
  
      var token = $('meta[name="csrf-token"]').attr('content');
  
      var url= window.location.href;
  
      url+='/corMosqueada';
  
      var selectMatizFundo= document.getElementById('matiz_fundo');
      var selectValorFundo= document.getElementById('valor_fundo');
      var selectCromaFundo= document.getElementById('croma_fundo');
      var selectNomeFundo=document.getElementById('nome_fundo');
      var selectUmidadeFundo=document.getElementById('umido_fundo');
  
      if(selectNomeFundo.options[selectNomeFundo.selectedIndex].value != 'N/A'){
        var matiz_fundo= selectMatizFundo.options[selectMatizFundo.selectedIndex].value;
        var valor_fundo= selectValorFundo.options[selectValorFundo.selectedIndex].value;
        var croma_fundo= selectCromaFundo.options[selectCromaFundo.selectedIndex].value;
        var nome_fundo= selectNomeFundo.options[selectNomeFundo.selectedIndex].value;
        var umidade_fundo= selectUmidadeFundo.options[selectUmidadeFundo.selectedIndex].value;
      }
  
      mosq = sessionStorage.getItem('mosq');
      for(index=0;index<=mosq;index++){
        var selectMatiz=document.getElementById('matiz_mosqueado'+index+'');
        var selectValor=document.getElementById('valor_mosqueado'+index+'');
        var selectCroma=document.getElementById('croma_mosqueado'+index+'');
        var selectNome=document.getElementById('nome_mosqueado'+index+'');
        var selectContraste=document.getElementById('contraste'+index+'');
        var selectTamanho=document.getElementById('tamanho'+index+'');
        var selectQuantidade= document.getElementById('quantidade'+index+'');
        
  
        if(selectMatiz != null && selectMatiz.options[selectMatiz.selectedIndex].value != 'N/A'  && selectNome.options[selectNome.selectedIndex].value != 'N/A'){
          var valor=selectValor.options[selectValor.selectedIndex].value;
          var croma=selectCroma.options[selectCroma.selectedIndex].value;
          var matiz=selectMatiz.options[selectMatiz.selectedIndex].value;
          var nome= selectNome.options[selectNome.selectedIndex].value;
          var contraste= selectContraste.options[selectContraste.selectedIndex].value;
          var tamanho= selectTamanho.options[selectTamanho.selectedIndex].value;
          var quantidade=selectQuantidade.options[selectQuantidade.selectedIndex].value;
  
          if(selectMatiz != null && selectNome.options[selectNome.selectedIndex].value != ''){
            //alert(matiz);
            matiz_array.push(matiz);
            valor_array.push(valor);
            croma_array.push(croma);
            nome_array.push(nome);
            contraste_array.push(contraste);
            tamanho_array.push(tamanho);
            quantidade_array.push(quantidade);
          }
        }
      }
  
    }
  
    var token = $('meta[name="csrf-token"]').attr('content');
    
    var url_descricao=window.location.href;
  
    
  
    $.ajax({
      type: "POST",
      url:url_descricao,
      data:{
        _token:token,
        limite_superior: limite_superior,
        limite_inferior: limite_inferior,
        superior_transicao: superior_transicao,
        inferior_transicao: inferior_transicao,
        nome_horizonte: nome_horizonte,
        transicao_topografia: transicao_topografia,
        transicao_nitidez: transicao_nitidez,
        outros_outros_textura: outros_outros_textura,
        consistencia_molhada_plasticidade: consistencia_molhada_plasticidade,
        consistencia_molhada_pegajosidade: consistencia_molhada_pegajosidade,
        consistencia_umido: consistencia_umido,
        consistencia_seco: consistencia_seco,
        estrutura_tipo: estrutura_tipo,
        estrutura_grau: estrutura_grau,
        estrutura_tamanho: estrutura_tamanho,
        estrutura_forma: estrutura_forma,
        estrutura_tipo2: estrutura_tipo2,
        estrutura_grau2: estrutura_grau2,
        estrutura_tamanho2: estrutura_tamanho2,
        estrutura_forma2: estrutura_forma2,
        espessura:espessura,
        tipo:tipo,
        
          matiz_seco: matiz_seco,
          valor_seco: valor_seco,
          croma_seco: croma_seco,
          nome_seco: nome_seco,
          seco: seco,
          matiz_umido: matiz_umido,
          valor_umido: valor_umido,
          croma_umido: croma_umido,
          nome_umido: nome_umido,
          umido: umido,
       
            matiz_array:matiz_array,
            valor_array:valor_array,
            croma_array:croma_array,
            nome_array:nome_array,
            umidade_array:umidade_array,
       
          matiz_array:matiz_array,
          valor_array:valor_array,
          croma_array:croma_array,
          nome_array:nome_array,
          contraste_array:contraste_array,
          matiz_fundo: matiz_fundo,
          valor_fundo: valor_fundo,
          croma_fundo: croma_fundo,
          nome_fundo: nome_fundo,
          umidade_fundo:umidade_fundo,
          tamanho_array: tamanho_array,
          quantidade_array:quantidade_array
       
  
      },
      success: function (response) {
                  
                  alert('Horizonte e morfologia inseridos com sucesso!!');
                  url_nova=url_descricao.substr(0,(url_descricao.length-11));
                  window.location.href = url_nova+"/propriedadeMorfologica/"+response+"/formularioComplementar";
  
                  //var botao="<a class='btn btn-primary' href="+url_descricao+"/propriedadeMorfologica/"+response+"/formularioCor>Inserir Cor</a>";
                  
                  //$('#botao_horizonte').append(botao);
      },  
      
      error: function () {
                 alert("erro ao inserir :(");
      }
  
  });
  
  
  }
  
  
  function pularcomplementar(){
    var url_atual= window.location.pathname;
    var aux=url_atual.split("/");
    var id=aux[2];
    window.location.href ="/observacaoView/"+id+"/horizonteView";
  }
  
  
  function insertcomplementar(){
    var observacao= document.getElementById("observacao").value;
    var outros_sulfeto= document.getElementById('outros_sulfeto').value;
    
    var selectCoesao= document.getElementById("outros_coesao"); 
    var outros_coesao= selectCoesao.options[selectCoesao.selectedIndex].value;
  
    var selectCimentacao= document.getElementById("outros_cimentacao");
    var outros_cimentacao= selectCimentacao.options[selectCimentacao.selectedIndex].value;
  
    var selectMagnetismo= document.getElementById("outros_magnetismo");
    var outros_magnetismo= selectMagnetismo.options[selectMagnetismo.selectedIndex].value;
  
    var selectManganes= document.getElementById("outros_manganes");
    var outros_manganes= selectManganes.options[selectManganes.selectedIndex].value;
  
    var selectCarbonato= document.getElementById("outros_carbonato");
    var outros_carbonato= selectCarbonato.options[selectCarbonato.selectedIndex].value;
  
    var selectTipoCompressao= document.getElementById("compressao_tipo");
    var compressao_tipo= selectTipoCompressao.options[selectTipoCompressao.selectedIndex].value;
  
    var selectQuantidadeCompressao= document.getElementById("compressao_quantidade");
    var compressao_quantidade= selectQuantidadeCompressao.options[selectQuantidadeCompressao.selectedIndex].value;
  
    var selectGrauCompressao= document.getElementById("compressao_grau");
    var compressao_grau= selectGrauCompressao.options[selectGrauCompressao.selectedIndex].value;
  
    var selectQuantidadeCerosidade= document.getElementById("cerosidade_quantidade");
    var cerosidade_quantidade= selectQuantidadeCerosidade.options[selectQuantidadeCerosidade.selectedIndex].value;
  
    var selectGrauCerosidade= document.getElementById("cerosidade_grau");
    var cerosidade_grau= selectGrauCerosidade.options[selectGrauCerosidade.selectedIndex].value;
  
    var selectFriccaoQuantidade= document.getElementById("friccao_quantidade");
    var friccao_quantidade= selectFriccaoQuantidade.options[selectFriccaoQuantidade.selectedIndex].value;
  
    var selectFriccaoTamanho= document.getElementById("friccao_tamanho");
    var friccao_tamanho= selectFriccaoTamanho.options[selectFriccaoTamanho.selectedIndex].value;
  
    var selectFriccaoGrau= document.getElementById("friccao_grau");
    var friccao_grau= selectFriccaoGrau.options[selectFriccaoGrau.selectedIndex].value;
  
    var selectQuantidadePoros= document.getElementById("poros_quantidade");
    var poros_quantidade= selectQuantidadePoros.options[selectQuantidadePoros.selectedIndex].value;
  
    var selectDiametroPoros= document.getElementById("poros_diametro");
    var poros_diametro= selectDiametroPoros.options[selectDiametroPoros.selectedIndex].value;
  
    var selectLocalEflorescencia= document.getElementById("eflorescencia_local");
    var eflorescencia_local= selectLocalEflorescencia.options[selectLocalEflorescencia.selectedIndex].value;
  
    var selectNaturezaEflorescencia= document.getElementById("eflorescencia_natureza");
    var eflorescencia_natureza= selectNaturezaEflorescencia.options[selectNaturezaEflorescencia.selectedIndex].value;
  
    var selectQuantidadeEflorescencia= document.getElementById("eflorescencia_quantidade");
    var eflorescencia_quantidade= selectQuantidadeEflorescencia.options[selectQuantidadeEflorescencia.selectedIndex].value;
  
    var selectTamanhoConcrecoes= document.getElementById("nodulos_e_concrecoes_tamanho");
    var nodulos_e_concrecoes_tamanho= selectTamanhoConcrecoes.options[selectTamanhoConcrecoes.selectedIndex].value;
  
    var selectQuantidadeConcrecoes= document.getElementById("nodulos_e_concrecoes_quantidade");
    var nodulos_e_concrecoes_quantidade= selectQuantidadeConcrecoes.options[selectQuantidadeConcrecoes.selectedIndex].value;
  
    var selectNaturezaConcrecoes= document.getElementById("nodulos_e_concrecoes_natureza");
    var nodulos_e_concrecoes_natureza= selectNaturezaConcrecoes.options[selectNaturezaConcrecoes.selectedIndex].value;
  
    var selectDurezaConcrecoes= document.getElementById("nodulos_e_concrecoes_dureza");
    var nodulos_e_concrecoes_dureza= selectDurezaConcrecoes.options[selectDurezaConcrecoes.selectedIndex].value;
  
    var selectFormaConcrecoes= document.getElementById("nodulos_e_concrecoes_forma");
    var nodulos_e_concrecoes_forma= selectFormaConcrecoes.options[selectFormaConcrecoes.selectedIndex].value;
  
    var selectCorConcrecoes= document.getElementById("nodulos_e_concrecoes_cor");
    var nodulos_e_concrecoes_cor= selectCorConcrecoes.options[selectCorConcrecoes.selectedIndex].value;
  
    var selectQuantidadeRaiz= document.getElementById("raiz_quantidade");
    var raiz_quantidade= selectQuantidadeRaiz.options[selectQuantidadeRaiz.selectedIndex].value;
  
    var selectDiametroRaiz= document.getElementById("raiz_diametro");
    var raiz_diametro= selectDiametroRaiz.options[selectDiametroRaiz.selectedIndex].value;
  
    var selectTipoRaiz= document.getElementById("raiz_tipo");
    var raiz_tipo= selectTipoRaiz.options[selectTipoRaiz.selectedIndex].value;
  
    var token = $('meta[name="csrf-token"]').attr('content');
    
    var url_descricao=window.location.href;
  
    
  
    $.ajax({
      type: "POST",
      url:url_descricao,
      data:{
        _token:token,
        observacao: observacao,
        outros_coesao: outros_coesao,
        outros_cimentacao: outros_cimentacao,
        outros_magnetismo: outros_magnetismo,
        outros_manganes: outros_manganes,
        outros_carbonato: outros_carbonato,
        compressao_tipo: compressao_tipo,
        compressao_quantidade: compressao_quantidade,
        compressao_grau: compressao_grau,
        cerosidade_quantidade: cerosidade_quantidade,
        cerosidade_grau: cerosidade_grau,
        friccao_quantidade: friccao_quantidade,
        friccao_tamanho: friccao_tamanho,
        friccao_grau: friccao_grau,
        poros_quantidade: poros_quantidade,
        poros_diametro: poros_diametro,
        eflorescencia_local: eflorescencia_local,
        eflorescencia_natureza: eflorescencia_natureza,
        eflorescencia_quantidade: eflorescencia_quantidade,
        nodulos_e_concrecoes_tamanho: nodulos_e_concrecoes_tamanho,
        nodulos_e_concrecoes_quantidade: nodulos_e_concrecoes_quantidade,
        nodulos_e_concrecoes_natureza: nodulos_e_concrecoes_natureza,
        nodulos_e_concrecoes_dureza: nodulos_e_concrecoes_dureza,
        nodulos_e_concrecoes_forma: nodulos_e_concrecoes_forma,
        nodulos_e_concrecoes_cor: nodulos_e_concrecoes_cor,
        raiz_quantidade: raiz_quantidade,
        raiz_diametro: raiz_diametro,
        raiz_tipo: raiz_tipo,
        outros_sulfeto:outros_sulfeto
  
      },
      success: function (response) {
                  
                  alert('InformaçÃµes Complementares inseridas com sucesso!!');
                  window.location.href = "/observacaoView/"+response+"/horizonteView/";
      },  
      
      error: function () {
                 alert("erro ao inserir :(");
      }
  
  });
  
  
  }