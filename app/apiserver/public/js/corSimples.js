
$(document).ready(function(){



    // FUNÇÕES PARA COR SIMPLES SECA
    $('#formulario').on('change','.matizSecoSimples',function(){
        var matizSelect=document.getElementById("matiz_seco");
        if(matizSelect != null){
            var matiz=matizSelect.options[matizSelect.selectedIndex].value;
            $('#valor_seco').empty();
        }
        console.log(matiz);
        var url='/json/cor.json';
        $.getJSON(url,function(data){
            $.each(data.matizes,function(key,value){
                if(value.matiz == matiz){
                    $('#valor_seco').empty();
                    $('#valor_seco').append('<option> Selecione o Valor</option>'); //insere o campo em branco antes das opções
                    $.each(value.valores,function(key,value){
                        var html='';
                        html+="<option value="+value.numero+">"+value.numero+"</option>";
                        $('#valor_seco').append(html);
                    });
                }
            });
        });
    })

    $('#formulario').on('change','.valorSecoSimples',function(){
            $('#nome_seco').empty();
            var matizSelect=document.getElementById("matiz_seco");
            if(matizSelect != null){
                var matiz=matizSelect.options[matizSelect.selectedIndex].value;
            }
            var valorSelect=document.getElementById("valor_seco");
            if(valorSelect != null){
                var valor=valorSelect.options[valorSelect.selectedIndex].value;
            }
            var url='/json/cor.json';
            $.getJSON(url,function(data){
                $.each(data.matizes,function(key,value){
                    if(value.matiz == matiz){
                        $.each(value.valores,function(key,value){
                            if(value.numero == valor){
                                 $('#croma_seco').empty();
                                $('#croma_seco').append('<option> Selecione o Croma</option>');
                                 $.each(value.cromas,function(key,value){
                                     var html='';
                                     html+="<option value="+value.numero+">"+value.numero+"</option>";
                                     $('#croma_seco').append(html);
                                 })
                            }
                        });
                    }
                });
            });
        })
    
        $('#formulario').on('change','.cromaSecoSimples',function(){
            var matizSelect=document.getElementById("matiz_seco");
            if(matizSelect != null){
                var matiz=matizSelect.options[matizSelect.selectedIndex].value;
            }
            var valorSelect=document.getElementById("valor_seco");
            if(valorSelect != null){
                var valor=valorSelect.options[valorSelect.selectedIndex].value;
            }
            var cromaSelect=document.getElementById("croma_seco");
            if(cromaSelect != null){
                var croma= cromaSelect.options[cromaSelect.selectedIndex].value;
            }
            var url='/json/cor.json';
            $.getJSON(url,function(data){
                $.each(data.matizes,function(key,value){
                    if(value.matiz == matiz){
                        $.each(value.valores,function(key,value){
                            if(value.numero == valor){
                                 $('#nome_seco').empty();
                                 $.each(value.cromas,function(key,value){
                                     if(value.numero == croma){
                                         var html='';
                                         html+="<option value="+value.cor+">"+value.cor+"</option>";
                                         $('#nome_seco').append(html);
                                     }
                                 })
                            }
                        });
                    }
                });
            });
        })
    // FUNÇÕES PARA COR SIMPLES SECA
    
    
    // FUNÇÕES PARA COR SIMPLES UMIDA
    
    $('#formulario').on('change','.matizUmidoSimples',function(){
            var matizSelect=document.getElementById("matiz_umido");
            if(matizSelect != null){
                var matiz=matizSelect.options[matizSelect.selectedIndex].value;
                $('#valor_umido').empty();
            }
    
            console.log(matiz);
    
            var url='/json/cor.json';
            $.getJSON(url,function(data){
                $.each(data.matizes,function(key,value){
                    if(value.matiz == matiz){
                        $('#valor_umido').empty();
                        $('#valor_umido').append('<option> Selecione o Valor</option>'); //insere o campo em branco antes das opções
                        $.each(value.valores,function(key,value){
                            var html='';
                            html+="<option value="+value.numero+">"+value.numero+"</option>";
                            $('#valor_umido').append(html);
    
                        });
                    }
                });
            });
    
    
            
        })
    
        $('#formulario').on('change','.valorUmidoSimples',function(){
            
            $('#nome_umido').empty();
    
            var matizSelect=document.getElementById("matiz_umido");
            if(matizSelect != null){
                var matiz=matizSelect.options[matizSelect.selectedIndex].value;
            }
    
            var valorSelect=document.getElementById("valor_umido");
            if(valorSelect != null){
                var valor=valorSelect.options[valorSelect.selectedIndex].value;
            }
    
            var url='/json/cor.json';
            $.getJSON(url,function(data){
                $.each(data.matizes,function(key,value){
                    if(value.matiz == matiz){
                        $.each(value.valores,function(key,value){
                            if(value.numero == valor){
                                 $('#croma_umido').empty();
                                $('#croma_umido').append('<option> Selecione o Croma</option>');
                                 $.each(value.cromas,function(key,value){
                                     var html='';
                                     html+="<option value="+value.numero+">"+value.numero+"</option>";
                                     $('#croma_umido').append(html);
                                 })
                            }
    
                        });
                    }
                });
            });
    
        })
    
    
        $('#formulario').on('change','.cromaUmidoSimples',function(){
            
    
            var matizSelect=document.getElementById("matiz_umido");
            if(matizSelect != null){
                var matiz=matizSelect.options[matizSelect.selectedIndex].value;
            }
    
            var valorSelect=document.getElementById("valor_umido");
            if(valorSelect != null){
                var valor=valorSelect.options[valorSelect.selectedIndex].value;
            }
    
            var cromaSelect=document.getElementById("croma_umido");
            if(cromaSelect != null){
                var croma= cromaSelect.options[cromaSelect.selectedIndex].value;
            }
    
            var url='/json/cor.json';
            $.getJSON(url,function(data){
                $.each(data.matizes,function(key,value){
                    if(value.matiz == matiz){
                        $.each(value.valores,function(key,value){
                            if(value.numero == valor){
                                 $('#nome_umido').empty();
                                 $.each(value.cromas,function(key,value){
                                     if(value.numero == croma){
                                         var html='';
                                         html+='<option value="'+value.cor+'">'+value.cor+'</option>';
                                         $('#nome_umido').append(html);
                                     }
                                 })
                            }
    
                        });
                    }
                });
            });
    
        })
    
    //FUNÇÕES PARA COR SIMPLES UMIDA
    });
    
    
    
    
    
    function formularioCorSimples(){
    
    $('#formulario').empty();
    
    var formulario="<div class='form-row'><legend>Cor Simples </legend>";
    formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_seco' name='selectbasic' class='form-control matizSecoSimples'> <option></option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
    formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_seco' name='selectbasic' class='form-control valorSecoSimples'> <option></option> </select> </div>";
    formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_seco' name='selectbasic' class='form-control cromaSecoSimples'> <option></option> </select> </div>";
    formulario+="</div>";
    formulario+="<div class='form-row'>";
    formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label>   <select id='nome_seco' name='selectbasic' class='form-control'> <option></option> </select></div>";
    formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Umidade</label> <select id='seco' name='selectbasic' class='form-control'> <option value='seco' selected>Seco</option> </select> </div>";
    formulario+="</div>";
    
    formulario+="<div class='form-row'>";
    formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_umido' name='selectbasic' class='form-control matizUmidoSimples'> <option></option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
    formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_umido' name='selectbasic' class='form-control valorUmidoSimples'> <option></option> </select> </div>";
    formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_umido' name='selectbasic' class='form-control cromaUmidoSimples'> <option></option> </select> </div>";
    formulario+="</div>";
    formulario+="<div class='form-row'>";
    formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label>     <select id='nome_umido' name='selectbasic' class='form-control'> <option></option> </select></div>";
    formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Umidade</label> <select id='umido' name='selectbasic' class='form-control'> <option value='umido' selected>Umido</option> </select> </div>";
    formulario+="</div>";
    
    
    formulario+="<div class='form-row'><div class='col-md-3'><input class='btn btn-primary' type='button' value='Enviar' onclick='insertCorSimples()'></div></div>";
    
    $('#formulario').append(formulario);
    
    /*<div class='col-md-3'>
        <label class='col-md-3' for='selectbasic'>Valor</label>
        <select id='tipo_raiz' name='selectbasic' class='form-control'>
          <option></option>                          
        </select>
      </div>*/
    }
    
    
    function insertCorSimples(){
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
    
        var token = $('meta[name="csrf-token"]').attr('content');
    
        var url= window.location.href;
    
        url+='/corSimples';
    
    
        //verificação se a cor está preenchida ou não no backend.
    
        $.ajax({
        type: 'POST',
        url:url,
        data:{
            _token:token,
            matiz_seco: matiz_seco,
            valor_seco: valor_seco,
            croma_seco: croma_seco,
            nome_seco: nome_seco,
            seco: seco,
            matiz_umido: matiz_umido,
            valor_umido: valor_umido,
            croma_umido: croma_umido,
            nome_umido: nome_umido,
            umido: umido
    
        },
        success: function (response) {
                    
                    alert("Sucesso ao inserir Cor Simples!!");
                    window.location.replace('/observacaoView/'+response+'/horizonteView');
        },
        
        error: function () {
                   alert("Erro ao inserir Cor Simples :(");
        }
    
    
    });
    
    }
    
    function updateCorSeca(cor){
        var selectMatizSeco= document.getElementById("matiz_seco");
        var matiz_seco= selectMatizSeco.options[selectMatizSeco.selectedIndex].value;
    
        var selectValorSeco= document.getElementById("valor_seco");
        var valor_seco= selectValorSeco.options[selectValorSeco.selectedIndex].value;
    
        var selectCromaSeco= document.getElementById("croma_seco");
        var croma_seco= selectCromaSeco.options[selectCromaSeco.selectedIndex].value;
    
        var selectCorSeco= document.getElementById("nome_seco");
        var nome_seco= selectCorSeco.options[selectCorSeco.selectedIndex].value;
    
        var id_simples= cor.id_simples;
    
    
        var token = $('meta[name="csrf-token"]').attr('content');
    
        var url= window.location.href;
    
        url+='/corSimples';
    
        
    
    
        //verificação se a cor está preenchida ou não no backend.
    
        $.ajax({
        type: 'PATCH',
        url:url,
        data:{
            _token:token,
            matiz_seco: matiz_seco,
            valor_seco: valor_seco,
            croma_seco: croma_seco,
            nome_seco: nome_seco,
            id_simples:id_simples
            
    
        },
        success: function (response) {
                    
                    alert("Sucesso ao Atualizar Cor Simples!!");
                    
        },
        
        error: function () {
                   alert("Erro ao atualizar Cor Simples :(");
        }
    
    
    });
    
    }
    
    
    function updateCorUmida(cor){
    
        var selectMatizUmido= document.getElementById("matiz_umido");
        var matiz_umido= selectMatizUmido.options[selectMatizUmido.selectedIndex].value;
    
        var selectValorUmido= document.getElementById("valor_umido");
        var valor_umido= selectValorUmido.options[selectValorUmido.selectedIndex].value;
    
        var selectCromaUmido= document.getElementById("croma_umido");
        var croma_umido= selectCromaUmido.options[selectCromaUmido.selectedIndex].value;
    
        var selectCorUmido= document.getElementById("nome_umido");
        var nome_umido= selectCorUmido.options[selectCorUmido.selectedIndex].value;
    
        var id_simples= cor.id_simples;
    
    
        var token = $('meta[name="csrf-token"]').attr('content');
    
        var url= window.location.href;
    
        url+='/corSimples';
    
    
        //verificação se a cor está preenchida ou não no backend.
    
        $.ajax({
        type: 'PATCH',
        url:url,
        data:{
            _token:token,
            matiz_umido: matiz_umido,
            valor_umido: valor_umido,
            croma_umido: croma_umido,
            nome_umido: nome_umido,
            id_simples:id_simples
    
        },
        success: function (response) {
                    
                    alert("Sucesso ao Atualizar Cor Simples!!");
                    
        },
        
        error: function () {
                   alert("Erro ao Atualizar Cor Simples :(");
        }
    
    
    });
    
    }