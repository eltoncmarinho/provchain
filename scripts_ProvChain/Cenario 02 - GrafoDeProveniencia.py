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
    atividade = d0.activity('atividade: Incluir de dados em uma classe')#, other_attributes= {'atividade:Ambiente':'PROVChain',
                                                            #     'atividade:Nome': 'Registrar dados e metadados',
                                                            #     'atividade:Programa': 'PROVChain DApp',
                                                            #     'atividade:Versao': '1.00.00',
                                                            #     'atividade:Tempo Inicial': '<<data/hora>>',
                                                            #     'atividade:Tempo Final': '<<data/hora>>',
                                                            #    })

    alterar = d0.activity('atividade: Alterar de dados em uma classe')#, other_attributes= {'atividade:Ambiente':'PROVChain',
                                                            #     'atividade:Nome': 'Registrar dados e metadados',
                                                            #     'atividade:Programa': 'PROVChain DApp',
                                                            #     'atividade:Versao': '1.00.00',
                                                            #     'atividade:Tempo Inicial': '<<data/hora>>',
                                                            #     'atividade:Tempo Final': '<<data/hora>>',
                                                            #    })
    excluir = d0.activity('atividade: Excluir os dados em uma classe')#, other_attributes= {'atividade:Ambiente':'PROVChain',
                                                            #     'atividade:Nome': 'Registrar dados e metadados',
                                                            #     'atividade:Programa': 'PROVChain DApp',
                                                            #     'atividade:Versao': '1.00.00',
                                                            #     'atividade:Tempo Inicial': '<<data/hora>>',
                                                            #     'atividade:Tempo Final': '<<data/hora>>',
                                                            #    })

    # # Adicionando Entidades
    observacao  = d0.entity('entidade: Observacao')#, {'entidade:Descricao': 'Registrar metadados de alteração',
                                            #          'entidade:Localizacao':' PROVChain',
                                            #          'entidade:Nome':'Observacao',
                                            #          'entidade:Situação': 'Registro alterado',        
                                            #          'entidade:ID': '239a5445-374d-455e-9b88-47c1dcd65b854aj4',
                                            #  })

    # Adicionando Agentes
    pesquisador = d0.agent('agente: Pesquisador')#, {'agente:Nome': 'Élton Carneiro Marinho',
                                                #    'agente:Filiacao_Instituicao': 'UFRJ',
                                                #    'agente:Filiacao_Localizacao': 'Instituto de Computação',
                                                #    'agente:IP': '22.23.25.196',
                                                #    'agente:GPS (latitude)': '-22.766666666667',
                                                #    'agente:GPS (longitude)': '-43.683333333333',
                                                #    'agente:GPS (altitude (m))': '33',
                                                #    'agente:GPS (Intervalo)': '[3479298048, 3479300095]',
                                                #    'agente:GPS (País)': 'BR',
                                                #    'agente:GPS (Estado)': 'RJ',
                                                #    'agente:GPS (Cidade)': 'Rio de janeiro',
                                                #    'agente:GPS (Fuso Horário)': 'America/Sao Paulo',
                                                #    'agente:GPS (Área-acurácia)': '1000',
                                                #    'agente:GPS (Cod. da ergião metropolitana)': '641',
                                                #    'agente:GPS (Estado membro da UE)': '0',
                                                #    })
     
    # # Relação entre Atividades e Entidades
    d0.used(atividade, observacao)
    d0.used(alterar, observacao)
    d0.used(excluir, observacao)
    
    # #Relação entre Atividades
    # d0.wasInformedBy(marcarPontoExato, definirPontos)

    # Relacoes atividades com Agentes 
    d0.wasGeneratedBy(observacao, atividade)
    d0.wasGeneratedBy(observacao, alterar)
    d0.wasGeneratedBy(observacao, excluir)

    # # Relacoes atividades com Enidades
    # d0.wasDerivedFrom(amostra, horizonte)
    # d0.wasDerivedFrom(entidade, observacao)

    # #relação entre agentes
    # d0.actedOnBehalfOf(laboratorista, pedologo)
    # d0.actedOnBehalfOf(pedologo, agronomo)

    # Relação entre Entidades e Agentes
    d0.wasAttributedTo(observacao, pesquisador)#,    other_attributes= {'agente: Função':'Proceder a alteração das informações'})
    
    # Adicionando as relacoes atividades com Agentes 
    d0.wasAssociatedWith(atividade, pesquisador)#,           other_attributes= {'agente: Função ':'Efetuar registro das informacoes da observação'})
    d0.wasAssociatedWith(alterar, pesquisador)#,           other_attributes= {'agente: Função ':'Efetuar registro das informacoes da observação'})
    d0.wasAssociatedWith(excluir, pesquisador)#,           other_attributes= {'agente: Função ':'Efetuar registro das informacoes da observação'})


    # Gerando grafico de proveniencia  
    img = prov_to_dot(d0)
    img.write('/home/provchain/scripts_ProvChain/imagens/CasoDeUso_01.pdf', format='pdf')

    # Exibindo grafico
    chrome  = webbrowser.get("google-chrome")
    chrome.open_new_tab("/home/provchain/scripts_ProvChain/imagens/CasoDeUso_01.pdf")


exibe_proveniencia()


