########## Importações
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from prov.dot import prov_to_dot
from prov.model import ProvDocument
import webbrowser

chrome = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

def exibe_proveniencia(): 
    # Criando documento de proveniência vazio
    d0 = ProvDocument() 

    # Declarando namespaces 
    d0.add_namespace('entidade', 'https://github.com/eltoncmarinho/blockchain.git')
    d0.add_namespace('agente', 'agente')
    d0.add_namespace('atividade', 'atividade')

    # Adicionando atividade
    iniciarProjeto = d0.activity('atividade: Iniciar Projeto', other_attributes= {'atividade:Ambiente':'ProvChain',
                                                                'atividade:Nome': 'Elaborar projeto de mapeamento',
                                                                'atividade:Programa': 'ProvChain Web',
                                                                'atividade:Versao': '1.00.00',
                                                                'atividade:Tempo Inicial': '<<data/hora>>',
                                                                'atividade:Tempo Final': '<<data/hora>>'
                                                               })
    definirPontos = d0.activity('atividade: Definir possiveispontos de coleta', other_attributes= {'atividade:Ambiente':'ProvChain',
                                                                'atividade:Nome': 'Definir possiveis pontos de coleta',
                                                                'atividade:Programa': 'ProvChain Web',
                                                                'atividade:Versao': '1.00.00',
                                                                'atividade:Tempo Inicial': '<<data/hora>>',
                                                                'atividade:Tempo Final': '<<data/hora>>'
                                                               })
    autorizarInicioColeta = d0.activity('atividade: Autorizar inicio de coleta', other_attributes= {'atividade:Ambiente':'ProvChain',
                                                                'atividade:Nome': 'Autorizar inici de coleta',
                                                                'atividade:Programa': 'ProvChain Web',
                                                                'atividade:Versao': '1.00.00',
                                                                'atividade:Tempo Inicial': '<<data/hora>>',
                                                                'atividade:Tempo Final': '<<data/hora>>'
                                                               })
    marcarPontoExato = d0.activity('atividade: Marcar ponto exato de coleta', other_attributes= {'atividade:Ambiente':'ProvChain',
                                                                'atividade:Nome': 'Registrar ponto exato de coleta',
                                                                'atividade:Programa': 'ProvChain Web',
                                                                'atividade:Versao': '1.00.00',
                                                                'atividade:Tempo Inicial': '<<data/hora>>',
                                                                'atividade:Tempo Final': '<<data/hora>>'
                                                               })
    efetuarAnalise = d0.activity('atividade: Efetuar analise das amostras', other_attributes= {'atividade:Ambiente':'ProvChain',
                                                                'atividade:Nome': 'Efetuar analise das amostras',
                                                                'atividade:Programa': 'ProvChain Web',
                                                                'atividade:Versao': '1.00.00',
                                                                'atividade:Tempo Inicial': '<<data/hora>>',
                                                                'atividade:Tempo Final': '<<data/hora>>'
                                                               })
    registrarDadosColetaAmostra = d0.activity('atividade: Registrar dados da coleta de amostras', other_attributes= {'atividade:Ambiente':'ProvChain',
                                                                'atividade:Nome': 'Registrar dados da coleta de amostras',
                                                                'atividade:Programa': 'ProvChain Web',
                                                                'atividade:Versao': '1.00.00',
                                                                'atividade:Tempo Inicial': '<<data/hora>>',
                                                                'atividade:Tempo Final': '<<data/hora>>'
                                                               })

    # Adicionando Entidades
    projeto = d0.entity('entidade:Projeto', {'entidade:Descricao': 'Possui dados referentes ao projeto',
                                             'entidade:Localizacao':' ProvChain',
                                             'entidade:Nome':'Projeto',
                                             })
    analise = d0.entity('entidade: Analise', {'entidade:Descricao': 'Possui informacoes ddos resultados das analises de solo executadas',
                                             'entidade:Localizacao':' ProvChain',
                                             'entidade:Nome':'Analise',
                                             })
    observacao  = d0.entity('entidade: Observacao', {'entidade:Descricao': 'Possui a descricao da observacao e sua posicao georeferenciads',
                                             'entidade:Localizacao':' ProvChain',
                                             'entidade:Nome':'Observacao',
                                             })
    horizonte=d0.entity('entidade: Horizonte', {'entidade:Descricao': 'Possui a descricao do horizonte, seus limites e demais informacoes',
                                             'entidade:Localizacao':' ProvChain',
                                             'entidade:Nome':'Horizonte',
                                             })
    amostra = d0.entity('entidade: Amostra', {'entidade:Descricao': 'Possui informacao sobre cada amostra coletada',
                                             'entidade:Localizacao':' ProvChain',
                                             'entidade:Nome':'Amostra',
                                             })

    # Adicionando Agentes
    coordenador = d0.agent('agente: Coordenador', {'agente:DadosGeoreferenciais': '()',
                                                   'agente:Filiacao_Instituicao': 'UFRJ',
                                                   'agente:Filiacao_Localizacao': 'Departamenteo de solos',
                                                   'agente:IP': '127.0.0.1',
                                                   'agente:Nome': 'Nome completo',
                                                   })
    agronomo = d0.agent('agente: Agronomo', {'agente:DadosGeoreferenciais': '()',
                                                   'agente:Filiacao_Instituicao': 'UFRJ',
                                                   'agente:Filiacao_Localizacao': 'Departamenteo de solos',
                                                   'agente:IP': '127.0.0.1',
                                                   'agente:Nome': 'Nome completo',
                                                   })
    pedologo = d0.agent('agente: Pedologo', {'agente:DadosGeoreferenciais': '()',
                                                   'agente:Filiacao_Instituicao': 'UFRJ',
                                                   'agente:Filiacao_Localizacao': 'Departamenteo de solos',
                                                   'agente:IP': '127.0.0.1',
                                                   'agente:Nome': 'Nome completo',
                                                   })
    laboratorista = d0.agent('agente: Laboratorista', {'agente:DadosGeoreferenciais': '()',
                                                   'agente:Filiacao_Instituicao': 'UFRJ',
                                                   'agente:Filiacao_Localizacao': 'Departamenteo de solos',
                                                   'agente:IP': '127.0.0.1',
                                                   'agente:Nome': 'Nome completo',
                                                   })
    
    # Relação entre Atividades e Entidades
    d0.used(definirPontos, projeto)
    d0.used(autorizarInicioColeta, projeto)
    d0.used(marcarPontoExato, observacao)
    d0.used(efetuarAnalise, analise)
    d0.used(registrarDadosColetaAmostra, observacao)
    d0.used(registrarDadosColetaAmostra, horizonte)
    d0.used(registrarDadosColetaAmostra, amostra)

    #Relação entre Atividades
    d0.wasInformedBy(marcarPontoExato, definirPontos)

    # Relacoes atividades com Agentes 
    d0.wasGeneratedBy(projeto, iniciarProjeto)

    # Relacoes atividades com Enidades
    d0.wasDerivedFrom(amostra, horizonte)
    d0.wasDerivedFrom(horizonte, observacao)

    #relação entre agentes
    d0.actedOnBehalfOf(laboratorista, pedologo)
    d0.actedOnBehalfOf(pedologo, agronomo)

    # Relação entre Entidades e Agentes
    d0.wasAttributedTo(projeto, coordenador,    other_attributes= {'agente: Coordenar projeto':'()'})
    d0.wasAttributedTo(projeto, agronomo,       other_attributes= {'agente: Responsável pelo projeto':'()'})
    d0.wasAttributedTo(analise, laboratorista,  other_attributes= {'agente: Coordenar Analises de amostras':'()'})
    d0.wasAttributedTo(observacao, pedologo,    other_attributes= {'agente: Coordenar coleta de amostras':'()'})
    d0.wasAttributedTo(horizonte, pedologo,     other_attributes= {'agente: Coordenar coleta de amostras':'()'})
    d0.wasAttributedTo(amostra, pedologo,       other_attributes= {'agente: Coordenar coleta de amostras':'()'})
    
    # Adicionando as relacoes atividades com Agentes 
    d0.wasAssociatedWith(iniciarProjeto, coordenador,           other_attributes= {'agente: Efetuar registro das informacoes do projeto':'()'})
    d0.wasAssociatedWith(definirPontos, agronomo,               other_attributes= {'agente: Registrar possiveris pontos de coleta':'()'})
    d0.wasAssociatedWith(efetuarAnalise, laboratorista,         other_attributes= {'agente: Registrar informacoes com o resultado das analises laboratoriais executadas':'()'})
    d0.wasAssociatedWith(autorizarInicioColeta, agronomo,       other_attributes= {'agente: Registrar autorizacao para inicio da coleta':'()'})
    d0.wasAssociatedWith(marcarPontoExato, pedologo,            other_attributes= {'agente: Registrar dados de geolocalizacao do ponto exato de coleta ':'()'})
    d0.wasAssociatedWith(registrarDadosColetaAmostra, pedologo, other_attributes= {'agente:Registrar informacoes sobre a coleta e disponibilizar para o laboratorio':'()'})


    # Gerando grafico de proveniencia  
    img = prov_to_dot(d0)
    img.write('/home/provchain/scripts_ProvChain/imagens/GrafoDeProveniencia.pdf', format='pdf')

    # Exibindo grafico
    chrome  = webbrowser.get("google-chrome")
    chrome.open_new_tab("/home/provchain/scripts_ProvChain/imagens/GrafoDeProveniencia.pdf")


exibe_proveniencia()


