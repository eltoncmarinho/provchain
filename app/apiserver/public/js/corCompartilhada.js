$(document).ready(function(){
    var i=0;

    var url_atual= url_atual= window.location.pathname;
    var teste = url_atual.split('/');
    var ultimo = teste[teste.length - 1];
    if(ultimo == 'formularioCor'){
        var id=extrairIdPropriedadeMorfologica(url_atual);
        var url='/descricaoMorfologica/'+id+'';

        $.ajax({            
                type: 'GET',
                 url: url,
                dataType: 'json',
                success: function(response){
                    
               
               
                var horizonte=response.horizonte;
                var observacao=horizonte.observacao;
                var informacoes="<p> Observação: "+observacao.identificacao_campo+"; ";
                informacoes+="Horizonte: "+horizonte.nome_horizonte+"</p>";
                

                $('#informacoes').append(informacoes);
                            
                        
                },
                error: function () {
                    console.log("Erro ao resgatar os dados: DescriÃ§Ã£o MorfolÃ³gica");
                }
            });
    }

recuperarProjetoSelecionado()


    $('#formulario').on('click','#nova_cor',function(){
        i++;

        //seco
        var formulario_novo="<div id='formulario_cor_n"+i+"'><legend><button id='remover_cor' class='btn btn-outline-secondary btn-sm' type='button'><i class='fa fa-minus'></i></button> Cor</legend><div class='form-row'><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz"+i+"' data-index='"+i+"' name='selectbasic' class='form-control matizVariegada'> <option value='N/A'>Selecione o Matiz</option> <option value='5R'>5R</option> </select> </div>";
        formulario_novo+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor"+i+"' data-index='"+i+"' name='selectbasic' class='form-control valorVariegada'> <option></option> </select> </div>";
        formulario_novo+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma"+i+"' data-index='"+i+"' name='selectbasic' class='form-control cromaVariegada'> <option></option> </select> </div></div>";
        formulario_novo+="<div class='form-row'><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome"+i+"' data-index="+i+" name='selectbasic' class='form-control'> <option value=''></option> </select> </div><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Umidade</label> <select id='umidade"+i+"' name='selectbasic' class='form-control variegada' data-index='"+i+"'> <option value='seco'>Seco</option> <option value='umido'>Umido</option> </select> </select> </div></div></br>";

        
        
        $("#formulario_dinamico").append(formulario_novo);

    })

    $('#formulario_dinamico').on('click','#remover_cor',function(){
        $(this).parent().parent().remove();  //remove a div onde o botÃ£o estÃ¡ ( no caso, a div estÃ¡ dps do legend, por isso parent().parent())

    
        
    })

    $('#formulario').on('change','.matizNovaCor',function(){
        var data_index= $(this).attr('data-index');
        console.log(data_index);
        var matizSelect=document.getElementById("matiz_variegado"+data_index+"");
        if(matizSelect != null){
            var matiz=matizSelect.options[matizSelect.selectedIndex].value;
        }

        console.log(matiz);

        var url='/json/cor.json';
        $.getJSON(url,function(data){
            $.each(data.matizes,function(key,value){
                if(value.matiz == matiz){
                    $('#valor_variegado'+data_index+'').empty();
                    $('#valor_variegado'+data_index+'').append('<option> Selecione o Valor</option>'); //insere o campo em branco antes das opÃ§Ãµes
                    $.each(value.valores,function(key,value){
                        var html='';
                        html+="<option value="+value.numero+">"+value.numero+"</option>";
                        $('#valor_variegado'+data_index+'').append(html);

                    });
                }
            });
        });


        
    })

    $('#formulario').on('change','.valorVariegada',function(){
        var data_index= $(this).attr('data-index');
        $('#nome_umido'+data_index+'').empty();

        var matizSelect=document.getElementById("matiz_variegado"+data_index+"");
        if(matizSelect != null){
            var matiz=matizSelect.options[matizSelect.selectedIndex].value;
        }

        var valorSelect=document.getElementById("valor_variegado"+data_index+"");
        if(valorSelect != null){
            var valor=valorSelect.options[valorSelect.selectedIndex].value;
        }

        var url='/json/cor.json';
        $.getJSON(url,function(data){
            $.each(data.matizes,function(key,value){
                if(value.matiz == matiz){
                    $.each(value.valores,function(key,value){
                        if(value.numero == valor){
                            $('#croma_variegado'+data_index+'').empty();
                            $('#croma_variegado'+data_index+'').append('<option> Selecione o Croma</option>');
                            $.each(value.cromas,function(key,value){
                                var html='';
                                html+='<option value='+value.numero+'>'+value.numero+'</option>';
                                $('#croma_variegado'+data_index+'').append(html);
                            })
                        }

                    });
                }
            });
        });

    })


    $('#formulario').on('change','.cromaVariegada',function(){
        var data_index= $(this).attr('data-index');

        var matizSelect=document.getElementById("matiz_variegado"+data_index+"");
        if(matizSelect != null){
            var matiz=matizSelect.options[matizSelect.selectedIndex].value;
        }

        var valorSelect=document.getElementById("valor_variegado"+data_index+"");
        if(valorSelect != null){
            var valor=valorSelect.options[valorSelect.selectedIndex].value;
        }

        var cromaSelect=document.getElementById("croma_variegado"+data_index+"");
        if(cromaSelect != null){
            var croma= cromaSelect.options[cromaSelect.selectedIndex].value;
        }

        var url='/json/cor.json';
        $.getJSON(url,function(data){
            $.each(data.matizes,function(key,value){
                if(value.matiz == matiz){
                    $.each(value.valores,function(key,value){
                        if(value.numero == valor){
                            $('#nome_variegado'+data_index+'').empty();
                            $.each(value.cromas,function(key,value){
                                if(value.numero == croma){
                                    var html='';
                                    html+='<option value="'+value.cor+'">'+value.cor+'</option>';
                                    $('#nome_variegado'+data_index+'').append(html);
                                }
                            })
                        }

                    });
                }
            });
        });

    })

})