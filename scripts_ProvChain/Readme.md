# Como operacionalizar o script

<P>
<b>Pré-requisitos</b><br>
Os campos do formulário devem, obrigatoriamente, ter a tag <i>id</i> definida, mais especificamente, todos os que forem ser acionados pelo script. Em caso de <i>id</i>s idênticos, 
o texto no corpo do campo (botão), deve ser diferente.
<P>
<b>Como funciona</b><br>
Dentre as funcionalidades do script está o lançamento em tela web de valores e ações diversas. <br>
A funcionalidade de lançamento recebe como parâmetros, o endereço da página onde deve ser iniciado o navegador, o nome do arquivo excel a ser utilizado, a guia, ou aba e a linha a ser executada. <br>
Todos os arquivos devem/podem ficar no mesmo diretório, o acesso é relativo, logo pode-se colocar o caminho completo no parâmetro.<br>
O script irá ler, na guia selecionada, cada coluna e o valor correspondente na linha indicada. Se o valor for nulo, a coluna será ignorada. O título da coluna pode ser um comando ou o identificador de algum campo na tela (id). <br>
&nbsp;&nbsp;&nbsp;&nbsp;Se for um id, o script irá popular o campo com este identificador com o valor da linha definida. <br>
&nbsp;&nbsp;&nbsp;&nbsp;Se for um comando no título, este será avaliado conforme regras abaixo:
<ul>
        <li><b>btn</b> – será acionado o botão, cujo <i>id</i> seja o valor da linha.</li>
        <li><b>btn.texto</b> – será acionado o botão cujo <i>id</i> corresponda a primeira parte do valor e o texto do botão a segunda parte do texto no valor (ex valor igual a incluir.Consulta, irá acionar o botão cujo <i>id</i> seja incluir e o texto do botão seja Consulta) </li>
        <li><b>tempo</b> – irá aguardar o tempo, em segundos, indicado como valor.</li>
        <li><b>tela</b> – a coluna tela pode receber dois valores, <i>top</i> ou <i>bottom</i>, e irá rolar a página de acordo com o valor passado na linha.</li>
</ul>        
<br>
O script ainda pode ser muito melhorado, mas estes passos atenderam a necessidade de validação da prova de conceito. <br>
Uma proposta seria incluir a funcionalidade para verificar o retorno de um lançamento, ou validar os campos de uma consulta.<br>
&nbsp;
<P>
<b>Observações Adicionais</b><br>
No caso específico desta prova de conceito ainda foram incluídas duas funcionalidades, a montagem e exibição do grafo com as funcionalidades do aplicativo, que executa após cada lançamento de informação para localizar o usuário do andamento do processamento e um gráfico de proveniência que executa ao final de cada cenário e exibe o resultado. 