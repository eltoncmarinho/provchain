$(document).ready(function(){
	var mosq=0; //indice dos campos de mosqueado.
$("#mosqueada").click(function(){
	
		$('#formulario').empty();
		
		//mosq++;

		

		var formulario_mosqueado="<legend>Cor de fundo</legend><div class='form-row'>";
		formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_fundo' name='selectbasic' class='form-control matizFundo'> <option value ='N/A'> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
		formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_fundo' name='selectbasic' class='form-control valorFundo'> <option></option> </select> </div>";
		formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_fundo' name='selectbasic' class='form-control cromaFundo'> <option></option> </select> </div></div>";
		formulario_mosqueado+="<div class='form-row'>";
		formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome_fundo' name='selectbasic' class='form-control'> <option value ='N/A'> </option> </select> </div>";
		formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Umidade</label> <select id='umido_fundo' name='selectbasic' class='form-control'> <option></option> <option value='umido'>Umido</option> <option value='seco'>Seco</option> </select> </div>";
		formulario_mosqueado+="</div></br>";

		formulario_mosqueado+="<div class='form-row'><legend><button id='novo_mosqueado' class='btn btn-outline-secondary btn-sm' type='button'><i class='fa fa-plus' aria-hidden='true'></i></button> Cor Mosqueada </legend></div><div class='form-row'>";
		formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_mosqueado"+mosq+"' name='selectbasic' data-index="+mosq+" class='form-control matizMosqueada'> <option value='N/A'>Selecione o Matiz</option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
		formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_mosqueado"+mosq+"' name='selectbasic' data-index="+mosq+" class='form-control valorMosqueada'> </select> </div>";
		formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_mosqueado"+mosq+"' name='selectbasic' data-index="+mosq+" class='form-control cromaMosqueada'> </select> </div></div>";
		
		formulario_mosqueado+="<div class='form-row' >";
		formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome_mosqueado"+mosq+"' name='selectbasic' class='form-control'> <option value ='N/A'> </option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
		formulario_mosqueado+="</div>";
		
		formulario_mosqueado+="<div class='form-row'>";
		formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Tamanho</label> <select id='tamanho"+mosq+"' name='selectbasic' class='form-control'> <option></option> <option value='pequeno'>Pequeno</option> <option value='médio'>Médio</option> <option value='grande'>Grande</option> </select> </div>";
		formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Contraste</label> <select id='contraste"+mosq+"' name='selectbasic' class='form-control'> <option></option> <option value='difuso'>Difuso</option> <option value='distinto'>Distinto</option> <option value='proeminente'>Proeminente</option> </select> </div>";
		formulario_mosqueado+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Quantidade </label><select id='quantidade"+mosq+"' name='selectbasic' class='form-control'> <option></option> <option value='Pouco'>Pouco</option> <option value='Médio'>Médio</option> <option value='Muito'>Muito</option> </select> </div>";
		formulario_mosqueado+="</div></br>";

		formulario_mosqueado+="<div id='formulario_dinamico_mosqueado'></div>";

		formulario_mosqueado+="<div class='form-row'><div class='col-md-3'><input id='enviarMosqueado' class='btn btn-primary' type='button' value='Enviar'></div></div>";

		$('#formulario').append(formulario_mosqueado);



	})

	$('#formulario').on('click','#novo_mosqueado',function(){
		mosq++;

		var formulario_mosqueado_dinamico="<div id='formulario_mosqueado_n"+mosq+"'>";
		formulario_mosqueado_dinamico+="<legend><button id='remover_mosqueado' class='btn btn-outline-secondary btn-sm' type='button'><i class='fa fa-minus'></i></button> Cor Mosqueada</legend>";
		formulario_mosqueado_dinamico+="<div class='row col-md'>";
		formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Matiz</label> <select id='matiz_mosqueado"+mosq+"' name='selectbasic' data-index="+mosq+" class='form-control matizMosqueada'> <option value='N/A'>Selecione o Matiz</option> <option value='2,5Y'>2,5Y</option> <option value='2,5YR'>2,5YR</option> <option value='5Y'>5Y</option> <option value='5YR'>5YR</option> <option value='5GY'>5GY</option> <option value='5PB'>5PB</option>  <option value='5R'>5R</option> <option value='5G'>5G</option> <option value='5B'>5B</option> <option value='7,5YR'>7,5YR</option> <option value='7,5R'>7,5R</option> <option value='10Y'>10Y</option> <option value='10YR'>10YR</option> <option value='10GY'>10GY</option> <option value='10BG'>10BG</option> <option value='10R'>10R</option> <option value='10G'>10G</option> <option value='10B'>10B</option> <option value='N'>N</option> </select> </div>";
		formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Valor</label> <select id='valor_mosqueado"+mosq+"'  name='selectbasic' data-index="+mosq+" class='form-control valorMosqueada'> <option></option> </select> </div>";
		formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Croma</label> <select id='croma_mosqueado"+mosq+"' name='selectbasic' data-index="+mosq+" class='form-control cromaMosqueada'> <option></option> </select> </div>";
		formulario_mosqueado_dinamico+="</div>";
		
		formulario_mosqueado_dinamico+="<div class='row col-md' >";
		formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Cor</label> <select id='nome_mosqueado"+mosq+"' name='selectbasic' class='form-control'> <option value ='N/A'></option> </select> </div>";
		formulario_mosqueado_dinamico+="</div>";
		
		formulario_mosqueado_dinamico+="<div class='row col-md' >";
		formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Tamanho</label> <select id='tamanho"+mosq+"' name='selectbasic' class='form-control'> <option></option> <option value='pequeno'>Pequeno</option> <option value='médio'>Médio</option> <option value='grande'>Grande</option> </select> </div>";
		formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Contraste</label> <select id='contraste"+mosq+"' name='selectbasic' class='form-control'> <option></option> <option value='difuso'>Difuso</option> <option value='distinto'>Distinto</option> <option value='proeminente'>Proeminente</option> </select> </div>";
		formulario_mosqueado_dinamico+="<div class='col-md-3'> <label class='col-md-3' for='selectbasic'>Quantidade</label><select id='quantidade"+mosq+"' name='selectbasic' class='form-control'> <option></option> <option value='Pouco'>Pouco</option> <option value='Médio'>Médio</option> <option value='Muito'>Muito</option> </select> </div>";
		formulario_mosqueado_dinamico+="</div>";
		
		$('#formulario_dinamico_mosqueado').append(formulario_mosqueado_dinamico);
		sessionStorage.setItem('mosq', mosq);
	})

	$('#formulario').on('click','#remover_mosqueado',function(){
		$(this).parent().parent().remove(); //remove a div onde o botão está ( no caso, a está dps do legend, por isso parent().parent())


	})



//FUNÇÕES SECAS DO FUNDO

	$('#formulario').on('change','.matizFundo',function(){
		
		var matizSelect=document.getElementById("matiz_fundo");
		if(matizSelect != null){
			var matiz=matizSelect.options[matizSelect.selectedIndex].value;
		}

		console.log(matiz);

		var url='/json/cor.json';
		$.getJSON(url,function(data){
			$.each(data.matizes,function(key,value){
				if(value.matiz == matiz){
					$('#valor_fundo').empty();
					$('#valor_fundo').append('<option> Selecione o Valor</option>'); //insere o campo em branco antes das opções
					$.each(value.valores,function(key,value){
						var html='';
						html+="<option value="+value.numero+">"+value.numero+"</option>";
						$('#valor_fundo').append(html);

					});
				}
			});
		});


		
	})

	$('#formulario').on('change','.valorFundo',function(){

			$('#nome_fundo').empty();
			$('#nome_fundo').append("<option value ='N/A'>Selecione a cor </option>");
			
			var matizSelect=document.getElementById("matiz_fundo");
			if(matizSelect != null){
				var matiz=matizSelect.options[matizSelect.selectedIndex].value;
			}

			var valorSelect=document.getElementById("valor_fundo");
			if(valorSelect != null){
				var valor=valorSelect.options[valorSelect.selectedIndex].value;
			}

			var url='/json/cor.json';
			$.getJSON(url,function(data){
				$.each(data.matizes,function(key,value){
					if(value.matiz == matiz){
						$.each(value.valores,function(key,value){
							if(value.numero == valor){
						 		$('#croma_fundo').empty();
								$('#croma_fundo').append('<option> Selecione o Croma</option>');
						 		$.each(value.cromas,function(key,value){
						 			var html='';
						 			html+="<option value="+value.numero+">"+value.numero+"</option>";
						 			$('#croma_fundo').append(html);
						 		})
							}

						});
					}
				});
			});

	})

	$('#formulario').on('change','.cromaFundo',function(){

		var matizSelect=document.getElementById("matiz_fundo");
		if(matizSelect != null){
			var matiz=matizSelect.options[matizSelect.selectedIndex].value;
		}

		var valorSelect=document.getElementById("valor_fundo");
		if(valorSelect != null){
			var valor=valorSelect.options[valorSelect.selectedIndex].value;
		}

		var cromaSelect=document.getElementById("croma_fundo");
		if(cromaSelect != null){
			var croma= cromaSelect.options[cromaSelect.selectedIndex].value;
		}

		var url='/json/cor.json';
		$.getJSON(url,function(data){
			$.each(data.matizes,function(key,value){
				if(value.matiz == matiz){
					$.each(value.valores,function(key,value){
						if(value.numero == valor){
						 	$('#nome_fundo').empty();
						 	$.each(value.cromas,function(key,value){
						 		if(value.numero == croma){
						 			var html='';
						 			html+="<option value="+value.cor+">"+value.cor+"</option>";
						 			$('#nome_fundo').append(html);
						 		}
						 	})
						}

					});
				}
			});
		});

	})

//FUNÇÕES SECAS DO FUNDO



//FUNÇÕES UMIDAS  DO FUNDO

	$('#formulario').on('change','.matizFundo',function(){
		
		var matizSelect=document.getElementById("matiz_fundo");
		if(matizSelect != null){
			var matiz=matizSelect.options[matizSelect.selectedIndex].value;
		}

		console.log(matiz);

		var url='/json/cor.json';
		$.getJSON(url,function(data){
			$.each(data.matizes,function(key,value){
				if(value.matiz == matiz){
					$('#valor_fundo').empty();
					$('#valor_fundo').append('<option> Selecione o Valor</option>'); //insere o campo em branco antes das opções
					$.each(value.valores,function(key,value){
						var html='';
						html+="<option value="+value.numero+">"+value.numero+"</option>";
						$('#valor_fundo').append(html);

					});
				}
			});
		});


		
	})

	$('#formulario').on('change','.valorFundo',function(){
			$('#nome_umido_fundo').empty();

			var matizSelect=document.getElementById("matiz_fundo");
			if(matizSelect != null){
				var matiz=matizSelect.options[matizSelect.selectedIndex].value;
			}

			var valorSelect=document.getElementById("valor_fundo");
			if(valorSelect != null){
				var valor=valorSelect.options[valorSelect.selectedIndex].value;
			}

			var url='/json/cor.json';
			$.getJSON(url,function(data){
				$.each(data.matizes,function(key,value){
					if(value.matiz == matiz){
						$.each(value.valores,function(key,value){
							if(value.numero == valor){
						 		$('#croma_fundo').empty();
								$('#croma_fundo').append('<option> Selecione o Croma</option>');
						 		$.each(value.cromas,function(key,value){
						 			var html='';
						 			html+="<option value="+value.numero+">"+value.numero+"</option>";
						 			$('#croma_fundo').append(html);
						 		})
							}

						});
					}
				});
			});

	})

	$('#formulario').on('change','.cromaUmidoFundo',function(){

		var matizSelect=document.getElementById("matiz_umido_fundo");
		if(matizSelect != null){
			var matiz=matizSelect.options[matizSelect.selectedIndex].value;
		}

		var valorSelect=document.getElementById("valor_umido_fundo");
		if(valorSelect != null){
			var valor=valorSelect.options[valorSelect.selectedIndex].value;
		}

		var cromaSelect=document.getElementById("croma_umido_fundo");
		if(cromaSelect != null){
			var croma= cromaSelect.options[cromaSelect.selectedIndex].value;
		}

		var url='/json/cor.json';
		$.getJSON(url,function(data){
			$.each(data.matizes,function(key,value){
				if(value.matiz == matiz){
					$.each(value.valores,function(key,value){
						if(value.numero == valor){
						 	$('#nome_umido_fundo').empty();
						 	$.each(value.cromas,function(key,value){
						 		if(value.numero == croma){
						 			var html='';
						 			html+="<option value="+value.cor+">"+value.cor+"</option>";
						 			$('#nome_umido_fundo').append(html);
						 		}
						 	})
						}

					});
				}
			});
		});

	})

//FUNÇÕES UMIDAS  DO FUNDO


//FUNÇÕES MOSQUEADAS

	$('#formulario').on('change','.matizMosqueada',function(){
			var data_index= $(this).attr('data-index');
			console.log(data_index);
			var matizSelect=document.getElementById("matiz_mosqueado"+data_index+"");
			if(matizSelect != null){
				var matiz=matizSelect.options[matizSelect.selectedIndex].value;
			}

			console.log(matiz);

			var url='/json/cor.json';
			$.getJSON(url,function(data){
				$.each(data.matizes,function(key,value){
					if(value.matiz == matiz){
						$('#valor_mosqueado'+data_index+'').empty();
						$('#valor_mosqueado'+data_index+'').append('<option> Selecione o Valor</option>'); //insere o campo em branco antes das opções
						$.each(value.valores,function(key,value){
							var html='';
							html+="<option value="+value.numero+">"+value.numero+"</option>";
							$('#valor_mosqueado'+data_index+'').append(html);

						});
					}
				});
			});

	});

	$('#formulario').on('change','.valorMosqueada',function(){
			var data_index= $(this).attr('data-index');
			$('#nome_mosqueado'+data_index+'').empty();
			$('#nome_mosqueado'+data_index+'').append("<option value ='N/A'>Selecione a cor </option>");

			var matizSelect=document.getElementById("matiz_mosqueado"+data_index+"");
			if(matizSelect != null){
				var matiz=matizSelect.options[matizSelect.selectedIndex].value;
			}

			var valorSelect=document.getElementById("valor_mosqueado"+data_index+"");
			if(valorSelect != null){
				var valor=valorSelect.options[valorSelect.selectedIndex].value;
			}

			var url='/json/cor.json';
			$.getJSON(url,function(data){
				$.each(data.matizes,function(key,value){
					if(value.matiz == matiz){
						$.each(value.valores,function(key,value){
							if(value.numero == valor){
						 		$('#croma_mosqueado'+data_index+'').empty();
								$('#croma_mosqueado'+data_index+'').append('<option> Selecione o Croma</option>');
						 		$.each(value.cromas,function(key,value){
						 			var html='';
						 			html+="<option value="+value.numero+">"+value.numero+"</option>";
						 			$('#croma_mosqueado'+data_index+'').append(html);
						 		})
							}

						});
					}
				});
			});

	})

	$('#formulario').on('change','.cromaMosqueada',function(){
		var data_index= $(this).attr('data-index');

		var matizSelect=document.getElementById("matiz_mosqueado"+data_index+"");
		if(matizSelect != null){
			var matiz=matizSelect.options[matizSelect.selectedIndex].value;
		}

		var valorSelect=document.getElementById("valor_mosqueado"+data_index+"");
		if(valorSelect != null){
			var valor=valorSelect.options[valorSelect.selectedIndex].value;
		}

		var cromaSelect=document.getElementById("croma_mosqueado"+data_index+"");
		if(cromaSelect != null){
			var croma= cromaSelect.options[cromaSelect.selectedIndex].value;
		}

		var url='/json/cor.json';
		$.getJSON(url,function(data){
			$.each(data.matizes,function(key,value){
				if(value.matiz == matiz){
					$.each(value.valores,function(key,value){
						if(value.numero == valor){
						 	$('#nome_mosqueado'+data_index+'').empty();
						 	$.each(value.cromas,function(key,value){
						 		if(value.numero == croma){
						 			var html='';
						 			html+="<option value='"+value.cor+"'>"+value.cor+"</option>";
						 			$('#nome_mosqueado'+data_index+'').append(html);
						 		}
						 	})
						}

					});
				}
			});
		});

	})





$('#formulario').on('click','#enviarMosqueado',function(){
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
	console.log(matiz_array);
	console.log(valor_array);
	console.log(croma_array);
	console.log(nome_array);
	console.log(contraste_array);
	console.log(tamanho_array);


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
                
                alert("Sucesso ao inserir Cor Mosqueada!!");
                window.location.replace('/observacaoView/'+response+'/horizonteView');
    	},
    
    	error: function () {
               alert("Erro ao inserir Cor Mosqueada :(");
    	}


	});
}else{
	alert("Preencha pelo menos duas das cores");
}

})




});
