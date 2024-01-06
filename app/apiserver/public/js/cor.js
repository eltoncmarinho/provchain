//COR VARIEGADA
$(document).ready(function(){
    var i=1;//indice dos campos de variegado
   $("#variegada").click(function(){
       

   $('#formulario').empty();

   //seco
   var formulario="<div class='row'>";
   formulario+="<legend><button id='novo_variegada' class='btn btn-outline-secondary btn-sm' type='button'><i id='click_variegada' class='fa fa-plus' aria-hidden='true'></i></button> Cor Variegada</legend></div>";
   formulario+="<div class='row'>";
   formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_variegado"+i+"' name='selectbasic' data-index='"+i+"' class='form-control matizVariegada'> <option value='N/A'>Selecione o Matiz</option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option></select> </div>";
   formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_variegado"+i+"' name='selectbasic' data-index='"+i+"' class='form-control valorVariegada'> <option></option> </select> </div>";
   formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_variegado"+i+"' name='selectbasic' data-index='"+i+"' class='form-control cromaVariegada'> <option></option> </select> </div></div>";
   formulario+="<div class='row'>";
   formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome_variegado"+i+"' data-index='"+i+"' name='selectbasic' class='form-control variegada'> <option value=''></option> </select> </div><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Umidade</label> <select id='umidade"+i+"' name='selectbasic' class='form-control'> <option value='seco'>Seco</option> <option value='umido'>Umido</option> </select> </div></div></br>";

   i++;

   formulario+="<div class='row'>";
   formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_variegado"+i+"' name='selectbasic' data-index='"+i+"' class='form-control matizVariegada'><option value='N/A'>Selecione o Matiz</option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
   formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_variegado"+i+"' data-index='"+i+"' name='selectbasic' class='form-control valorVariegada'>   <option></option> </select> </div>";
   formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_variegado"+i+"' data-index='"+i+"' name='selectbasic' class='form-control cromaVariegada'> <option></option> </select> </div>";
   formulario+="</div>";
   formulario+="<div class='row'>";
   formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome_variegado"+i+"' data-index='"+i+"' name='selectbasic' class='form-control variegada'><option></option> </select> </div><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Umidade</label> <select id='umidade"+i+"' name='selectbasic' class='form-control'><option value='seco'>Seco</option> <option value='umido'>Umido</option> </select> </div>";
   formulario+="</div></br>";

   formulario+="<div id='formulario_dinamico'></div>";

   formulario+="<div class='row'><div class='col-md-3'><input id='enviarVariegado' class='btn btn-primary' type='button' value='Enviar' onclick=''></div></div>";

   $('#formulario').append(formulario);		
       
       
   })

   $('#formulario').on('click','#novo_variegada',function(){
       i++;

       //seco
       var formulario_novo="<div id='formulario_variegado_n"+i+"'><legend><button id='remover_variegado' class='btn btn-outline-secondary btn-sm' type='button'><i class='fa fa-minus'></i></button> Cor</legend><div class='row'><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_variegado"+i+"' data-index='"+i+"' name='selectbasic' class='form-control matizVariegada'> <option value='N/A'>Selecione o Matiz</option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
       formulario_novo+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_variegado"+i+"' data-index='"+i+"' name='selectbasic' class='form-control valorVariegada'> <option></option> </select> </div>";
       formulario_novo+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_variegado"+i+"' data-index='"+i+"' name='selectbasic' class='form-control cromaVariegada'> <option></option> </select> </div></div>";
       formulario_novo+="<div class='row'><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome_variegado"+i+"' data-index="+i+" name='selectbasic' class='form-control'> <option value=''></option> </select> </div><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Umidade</label> <select id='umidade"+i+"' name='selectbasic' class='form-control variegada' data-index='"+i+"'> <option value='seco'>Seco</option> <option value='umido'>Umido</option> </select> </select> </div></div></br>";

       
       
       $("#formulario_dinamico").append(formulario_novo);
       sessionStorage.setItem('i', i);

   })


   $('#formulario').on('click','#remover_variegado',function(){
       $(this).parent().parent().remove();  //remove a div onde o botão está ( no caso, a div está dps do legend, por isso parent().parent())

   
       
   })

   

   /*$('#formulario').on('click','select',function(){
       var index= $(this).attr('data-index');
       console.log(index);
   })*/


//FUNÃ‡Ã•ES DE COR UMIDA VARIEGADA

   $('#formulario').on('change','.matizVariegada',function(){
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
                   $('#valor_variegado'+data_index+'').append('<option> Selecione o Valor</option>'); //insere o campo em branco antes das opções
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

//FUNÃ‡Ã•ES DE COR UMIDA VARIEGADA




//FUNÇÕES DE COR SECA VARIEGADA

   $('#formulario').on('change','.matizSecoVariegada',function(){
           var data_index= $(this).attr('data-index');
           console.log(data_index);
           var matizSelect=document.getElementById("matiz_seco"+data_index+"");
           if(matizSelect != null){
               var matiz=matizSelect.options[matizSelect.selectedIndex].value;
           }

           console.log(matiz);

           var url='/json/cor.json';
           $.getJSON(url,function(data){
               $.each(data.matizes,function(key,value){
                   if(value.matiz == matiz){
                       $('#valor_seco'+data_index+'').empty();
                       $('#valor_seco'+data_index+'').append('<option> Selecione o Valor</option>'); //insere o campo em branco antes das opções
                       $.each(value.valores,function(key,value){
                           var html='';
                           html+="<option value="+value.numero+">"+value.numero+"</option>";
                           $('#valor_seco'+data_index+'').append(html);

                       });
                   }
               });
           });

   });




   $('#formulario').on('change','.valorSecoVariegada',function(){
           var data_index= $(this).attr('data-index');
           $('#nome_seco'+data_index+'').empty();

           var matizSelect=document.getElementById("matiz_seco"+data_index+"");
           if(matizSelect != null){
               var matiz=matizSelect.options[matizSelect.selectedIndex].value;
           }

           var valorSelect=document.getElementById("valor_seco"+data_index+"");
           if(valorSelect != null){
               var valor=valorSelect.options[valorSelect.selectedIndex].value;
           }

           var url='/json/cor.json';
           $.getJSON(url,function(data){
               $.each(data.matizes,function(key,value){
                   if(value.matiz == matiz){
                       $.each(value.valores,function(key,value){
                           if(value.numero == valor){
                                $('#croma_seco'+data_index+'').empty();
                               $('#croma_seco'+data_index+'').append('<option> Selecione o Croma</option>');
                                $.each(value.cromas,function(key,value){
                                    var html='';
                                    html+="<option value="+value.numero+">"+value.numero+"</option>";
                                    $('#croma_seco'+data_index+'').append(html);
                                })
                           }

                       });
                   }
               });
           });

   })

   $('#formulario').on('change','.cromaSecoVariegada',function(){
       var data_index= $(this).attr('data-index');

       var matizSelect=document.getElementById("matiz_seco"+data_index+"");
       if(matizSelect != null){
           var matiz=matizSelect.options[matizSelect.selectedIndex].value;
       }

       var valorSelect=document.getElementById("valor_seco"+data_index+"");
       if(valorSelect != null){
           var valor=valorSelect.options[valorSelect.selectedIndex].value;
       }

       var cromaSelect=document.getElementById("croma_seco"+data_index+"");
       if(cromaSelect != null){
           var croma= cromaSelect.options[cromaSelect.selectedIndex].value;
       }

       var url='/json/cor.json';
       $.getJSON(url,function(data){
           $.each(data.matizes,function(key,value){
               if(value.matiz == matiz){
                   $.each(value.valores,function(key,value){
                       if(value.numero == valor){
                            $('#nome_seco'+data_index+'').empty();
                            $.each(value.cromas,function(key,value){
                                if(value.numero == croma){
                                    var html='';
                                    html+="<option value="+value.cor+">"+value.cor+"</option>";
                                    $('#nome_seco'+data_index+'').append(html);
                                }
                            })
                       }

                   });
               }
           });
       });

   })
//FUNÇÕES DE COR SECA VARIEGADA



$('#formulario').on('click','#enviarVariegado',function(){
   var matiz_array= [];
   var valor_array=[];
   var croma_array=[];
   var nome_array=[];
   var umidade_array=[];

   var token = $('meta[name="csrf-token"]').attr('content');

   var url= window.location.href;

   url+='/corVariegada';


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
   console.log(matiz_array);
   console.log(valor_array);
   console.log(croma_array);
   console.log(nome_array);
   console.log(umidade_array);

   if(nome_array.length > 1){
       
       
       $.ajax({
       type: 'POST',
       url:url,
       data:{
           _token:token,
           matiz_array:matiz_array,
           valor_array:valor_array,
           croma_array:croma_array,
           nome_array:nome_array,
           umidade_array:umidade_array

       },
       success: function (response) {
               
               alert("Sucesso ao inserir Cor Variegada!!");
               window.location.replace('/observacaoView/'+response+'/horizonteView');
       },
   
       error: function () {
              alert("Erro ao inserir Cor Simples :(");
       }


   });
}else{
   alert("Preencha pelo menos duas das cores");
}

})
});

//function para mostrar os formulários de acordo com o tipo de cor selecionado

function mostrarform(opc){
     var selecionaCor= document.getElementById("selectCor");
     var tipo= selecionaCor.options[selecionaCor.selectedIndex].value;
   if(document.getElementById("formulario")!= null){  // verifica se tem elemento na div de formularios 
   $( "#formcor" ).remove();
 }
 var mosq = 0;
 var i = 0;
   if(tipo == 'corSimples'){
       $('#formulario').empty();

       var formulario="</br><div class='row'><legend>Cor Seco</legend>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_seco' name='selectbasic' class='form-control matizSecoSimples'> <option></option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_seco' name='selectbasic' class='form-control valorSecoSimples'> <option></option> </select> </div>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_seco' name='selectbasic' class='form-control cromaSecoSimples'> <option></option> </select> </div></div>";
       formulario+="<div class='row'>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome_seco' name='selectbasic' class='form-control' > <option></option> </select></div>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Umidade</label> <select id='seco' name='selectbasic' class='form-control' > <option value='seco' selected>Seco</option> </select> </div>";
       formulario+="</div>";

       formulario+="<div class='row'><legend>Cor Úmido</legend>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_umido' name='selectbasic' class='form-control matizUmidoSimples'> <option></option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_umido' name='selectbasic' class='form-control valorUmidoSimples'> <option></option> </select> </div>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_umido' name='selectbasic' class='form-control cromaUmidoSimples'> <option></option> </select> </div>";
       formulario+="</div>";
       formulario+="<div class='row'>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome_umido' name='selectbasic' class='form-control' > <option></option> </select></div>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Umidade</label> <select id='umido' name='selectbasic' class='form-control' > <option value='umido' selected>Umido</option> </select> </div>";
       formulario+="</div>";


       $('#formulario').append(formulario);
   }
   else if(tipo == 'corVariegada'){
       $('#formulario').empty();
       var formulario="</br><div class='row'><legend><button id='novo_variegada' class='btn btn-outline-secondary btn-sm' type='button'><i id='click_variegada' class='fa fa-plus' aria-hidden='true'></i></button> Cor Variegada</legend></div><div class='row'>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_variegado"+i+"' name='selectbasic' data-index='"+i+"' class='form-control matizVariegada'> <option value='N/A'>Selecione o Matiz</option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option></select> </div>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_variegado"+i+"' name='selectbasic' data-index='"+i+"' class='form-control valorVariegada'> <option></option> </select> </div>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_variegado"+i+"' name='selectbasic' data-index='"+i+"' class='form-control cromaVariegada'> <option></option> </select> </div></div>";
       formulario+="<div class='row'><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome_variegado"+i+"' data-index='"+i+"' name='selectbasic' class='form-control variegada'> <option value=''></option> </select> </div>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Umidade</label> <select id='umidade"+i+"' name='selectbasic' class='form-control'> <option value='seco'>Seco</option> <option value='umido'>Umido</option> </select> </div></div></br>";

       i++;

       formulario+="<div class='row'><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_variegado"+i+"' name='selectbasic' data-index='"+i+"' class='form-control matizVariegada'><option value='N/A'>Selecione o Matiz</option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_variegado"+i+"' data-index='"+i+"' name='selectbasic' class='form-control valorVariegada'>   <option></option> </select> </div>";
       formulario+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_variegado"+i+"' data-index='"+i+"' name='selectbasic' class='form-control cromaVariegada'> <option></option> </select> </div></div>";
       formulario+="<div class='row'><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome_variegado"+i+"' data-index='"+i+"' name='selectbasic' class='form-control variegada'><option></option> </select> </div><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Umidade</label> <select id='umidade"+i+"' name='selectbasic' class='form-control'><option value='seco'>Seco</option> <option value='umido'>Umido</option> </select> </div></div>";

       formulario+="<div id='formulario_dinamico'></div>";

       $('#formulario').append(formulario);	
       sessionStorage.setItem('i', i);
   }else{
       $('#formulario').empty();
       var formulario_mosqueado="</br><legend>Cor de fundo</legend><div class='row'><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_fundo' name='selectbasic' class='form-control matizFundo'> <option value ='N/A'> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
       formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_fundo' name='selectbasic' class='form-control valorFundo'> <option></option> </select> </div>";
       formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_fundo' name='selectbasic' class='form-control cromaFundo'> <option></option> </select> </div></div>";
       formulario_mosqueado+="<div class='row'><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome_fundo' name='selectbasic' class='form-control'> <option value ='N/A'> </option> </select> </div><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Umidade</label> <select id='umido_fundo' name='selectbasic' class='form-control'> <option></option> <option value='umido'>Umido</option> <option value='seco'>Seco</option> </select> </div></div></br>";

       formulario_mosqueado+="<div class='row'><legend><button id='novo_mosqueado' class='btn btn-outline-secondary btn-sm' type='button'><i class='fa fa-plus' aria-hidden='true'></i></button> Cor Mosqueada </legend></div><div class='row'><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_mosqueado"+mosq+"' name='selectbasic' data-index="+mosq+" class='form-control matizMosqueada'> <option value='N/A'>Selecione o Matiz</option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
       formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_mosqueado"+mosq+"' name='selectbasic' data-index="+mosq+" class='form-control valorMosqueada'> </select> </div>";
       formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_mosqueado"+mosq+"' name='selectbasic' data-index="+mosq+" class='form-control cromaMosqueada'> </select> </div></div>";
       
       formulario_mosqueado+="<div class='row'><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome_mosqueado"+mosq+"' name='selectbasic' class='form-control'> <option value ='N/A'> </option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div></div>";
       
       formulario_mosqueado+="<div class='row'><div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Tamanho</label> <select id='tamanho"+mosq+"' name='selectbasic' class='form-control'> <option></option> <option value='pequeno'>Pequeno</option> <option value='médio'>Médio</option> <option value='grande'>Grande</option> </select> </div>";
       formulario_mosqueado+="<div class='col-md-3'> <label class='col-md' for='selectbasic'>Contraste</label> <select id='contraste"+mosq+"' name='selectbasic' class='form-control'> <option></option> <option value='difuso'>Difuso</option> <option value='distinto'>Distinto</option> <option value='proeminente'>Proeminente</option> </select> </div>";
       formulario_mosqueado+="<div class='col-md-3'> <label class='col-md' for='selectbasic'>Quantidade</label><select id='quantidade"+mosq+"' name='selectbasic' class='form-control'> <option></option> <option value='Pouco'>Pouco</option> <option value='Médio'>Médio</option> <option value='Muito'>Muito</option> </select> </div></div></br>";

       formulario_mosqueado+="<div id='formulario_dinamico_mosqueado'></div>";

       $('#formulario').append(formulario_mosqueado);

   }

}

$('#formulario').on('click','#novo_mosqueado',function(){
       mosq++;

       var formulario_mosqueado_dinamico="<div id='formulario_mosqueado_n"+mosq+"'><legend><button id='remover_mosqueado' class='btn btn-outline-secondary btn-sm' type='button'><i class='fa fa-minus'></i></button> Cor Mosqueada</legend>";
       formulario_mosqueado_dinamico+="<div class='row'>";
       formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_mosqueado"+mosq+"' name='selectbasic' data-index="+mosq+" class='form-control matizMosqueada'> <option value='N/A'>Selecione o Matiz</option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
       formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_mosqueado"+mosq+"'  name='selectbasic' data-index="+mosq+" class='form-control valorMosqueada'> <option></option> </select> </div>";
       formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_mosqueado"+mosq+"' name='selectbasic' data-index="+mosq+" class='form-control cromaMosqueada'> <option></option> </select> </div>";
       formulario_mosqueado_dinamico+="</div>";
       
       formulario_mosqueado_dinamico+="<div class='row'>";
       formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome_mosqueado"+mosq+"' name='selectbasic' class='form-control'> <option></option> </select> </div>";
       formulario_mosqueado_dinamico+="</div>";
       
       formulario_mosqueado_dinamico+="<div class='row'>";
       formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Tamanho</label> <select id='tamanho"+mosq+"' name='selectbasic' class='form-control'> <option></option> <option value='pequeno'>Pequeno</option> <option value='médio'>Médio</option> <option value='grande'>Grande</option> </select> </div>";
       formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Contraste</label> <select id='contraste"+mosq+"' name='selectbasic' class='form-control'> <option></option> <option value='difuso'>Difuso</option> <option value='distinto'>Distinto</option> <option value='proeminente'>Proeminente</option> </select> </div>";
       formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Quantidade</label><select id='quantidade"+mosq+"' name='selectbasic' class='form-control'> <option></option> <option value='Pouco'>Pouco</option> <option value='Médio'>Médio</option> <option value='Muito'>Muito</option> </select> </div></div>";
       formulario_mosqueado_dinamico+="</div>";
       
        {/* <div id='formulario_mosqueado_n"+mosq+"'>
            <legend><button id='remover_mosqueado' class='btn btn-outline-secondary btn-sm' type='button'><i class='fa fa-minus'></i></button> Cor Mosqueada </legend>
            <div class='row'>
                <div class='col-md-3'> 
                    <label class='col-md' for='selectbasic'>Matiz</label> 
                    <select id='matiz_mosqueado"+mosq+"' name='selectbasic' data-index="+mosq+" class='form-control matizMosqueada'> 
                        <option value='N/A'>Selecione o Matiz</option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> 
                    </select> 
                </div>
                <div class='col-md-3'> 
                    <label class='col-md' for='selectbasic'>Valor</label> 
                    <select id='valor_mosqueado"+mosq+"'  name='selectbasic' data-index="+mosq+" class='form-control valorMosqueada'> 
                        <option></option> 
                    </select> 
                </div>
                <div class='col-md-3'> 
                    <label class='col-md' for='selectbasic'>Croma</label> 
                    <select id='croma_mosqueado"+mosq+"' name='selectbasic' data-index="+mosq+" class='form-control cromaMosqueada'> 
                        <option></option> 
                    </select> 
                </div>
            </div>

            <div class='row'>
                <div class='col-md-3'> 
                    <label class='col-md' for='selectbasic'>Cor</label> 
                    <select id='nome_mosqueado"+mosq+"' name='selectbasic' class='form-control'> 
                        <option></option> 
                    </select> 
                </div>
            </div>

            <div class='row'>
                <div class='col-md-3'> 
                    <label class='col-md' for='selectbasic'>Tamanho</label> 
                    <select id='tamanho"+mosq+"' name='selectbasic' class='form-control'> 
                        <option value='pequeno'>Pequeno</option> <option value='médio'>Médio</option> <option value='grande'>Grande</option> 
                    </select> 
                </div>
                <div class='col-md-3'> 
                    <label class='col-md' for='selectbasic'>Contraste</label> 
                    <select id='contraste"+mosq+"' name='selectbasic' class='form-control'> 
                        <option value='difuso'>Difuso</option> <option value='distinto'>Distinto</option> <option value='proeminente'>Proeminente</option> 
                    </select> 
                </div>
                <div class='col-md-3'> 
                    <label class='col-md' for='selectbasic'>Quantidade</label>
                    <select id='quantidade"+mosq+"' name='selectbasic' class='form-control'> 
                        <option value='Pouco'>Pouco</option> <option value='Médio'>Médio</option> <option value='Muito'>Muito</option> 
                    </select> 
                </div>
            </div>
        </div>
        */}

       $('#formulario_dinamico_mosqueado').append(formulario_mosqueado_dinamico);
       sessionStorage.setItem('mosq', mosq);

   })

   $('#formulario').on('click','#remover_mosqueado',function(){
       $(this).parent().parent().remove(); //remove a div onde o botão está ( no caso, a está dps do legend, por isso parent().parent())


   })

   function deleteCorVariegada(id_simples){
       var token = $('meta[name="csrf-token"]').attr('content');
       $.ajax({
       type: 'DELETE',
       url:'/deleteCorVariegada',
       data:{
           _token:token,
           id_simples:id_simples
       },
       success: function (response) {
               
               alert("Sucesso ao excluir Cor Variegada!!");
              location.reload(true);
       },
   
       error: function () {
              alert("Erro ao excluir Cor Variegada :(");
       }


   });
   }

   function deleteCorMosqueado(id_mosqueado){
       var token = $('meta[name="csrf-token"]').attr('content');
       $.ajax({
       type: 'DELETE',
       url:'/deleteCorMosqueado',
       data:{
           _token:token,
           id_mosqueado:id_mosqueado
       },
       success: function (response) {
               
               alert("Sucesso ao excluir Cor Mosqueada!!");
              location.reload(true);
       },
   
       error: function () {
              alert("Erro ao excluir Cor Mosqueada :(");
       }


   });
   }