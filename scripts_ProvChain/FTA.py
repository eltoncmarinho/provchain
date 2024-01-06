########## Importação igraph
from igraph import *
########## Importação para arquivo excel 
import pandas as pd
import time
import datetime as date
import string

########## Importação para navegador Chrome 
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

chrome = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
#chrome.get("https://www.google.com")

from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


import webbrowser
# import os
from selenium.webdriver.chrome.options import Options

########## Importacao do ProvDocument 
from prov.dot import prov_to_dot
from prov.model import ProvDocument

url_provchain = "http://127.0.0.1:8080/"

def titulo_cenario(arquivo, tempo):
    chrome  = webbrowser.get("google-chrome")
    chrome.open_new_tab(arquivo)
    time.sleep(tempo)

def lancamento (url_do_forms, nome_do_arquivo, nome_da_guia, linha):
    print(">>> Início de Serviço - Arquivo: " + nome_do_arquivo + " - Guia: " + nome_da_guia + " - url: " + url_do_forms)

    #print("- Abrindo planilha e apontando para guia definida")
    df = pd.read_excel ( nome_do_arquivo, nome_da_guia )
        
    #print("- Posicionando na linha indicada")
    df.loc[int(linha)-1]
    
    #print("- Abrindo Chrome na página descrita")
    chrome.get(url_do_forms)
    
    #print("- Trazendo esta tela para primeiro plano")
    chrome.fullscreen_window()

    #print("- Maximizando a janela")
    chrome.maximize_window()

    time.sleep(1)

    for col in df.columns:
        valor = str(df.at[linha-1, col])
        cabecalho = col.split(".")
        if not pd.isna (df.at[linha-1, col]):
            print("Linha: " + str(linha)+ " valor: " + valor) 
            if cabecalho[0] == 'btn': 
                if cabecalho[1] == 'texto':
                    items = valor.split(".")
                    btns = chrome.find_elements(By.ID, items[0])
                    for button in btns:
                        if button.text == items[1]:
                            button.click()
                            break
                else:     
                    time.sleep(1)
                    chrome.find_element(By.ID, valor).click()
            elif cabecalho[0] == 'tempo': 
                time.sleep(int(df.at[linha-1, col]))
            elif cabecalho[0] == 'url': 
                chrome.get(url_do_forms + valor)
            elif cabecalho[0] == 'tela':
                    if valor == 'bottom':    
                        last_height = chrome.execute_script("return document.body.scrollHeight")
                        for contador in range(50):
                            chrome.execute_script("window.scrollTo(0, document.body.scrollHeight)")
                            new_height = chrome.execute_script("return document.body.scrollHeight")
                            if new_height == last_height:
                                break
                            last_height = new_height
                    elif valor == 'top':  
                        chrome.execute_script("window.scrollTo(0, 0)")
                    else:
                        print("====>> Posicionar na tela não implementado")    
            elif cabecalho[0] == 'data': 
                campo = chrome.find_element(By.ID, cabecalho[1])
                data = date(string(valor, 6, 9)), string(valor,3, 4), string(valor,0, 1)
                campo.send_keys(data)
            else:    
                campo = chrome.find_element(By.ID, col)
                if campo.get_attribute('type') == 'text' or campo.get_attribute('type') == 'textarea' :
                    campo.clear()
                try:
                    campo.send_keys(valor)
                except:
                    campo.send_keys(str(valor))

def exibe_proveniencia_cenario_fazendinha(tempo): 
        # Criando documento de proveniência vazio
    d0 = ProvDocument() 

    # Declarando namespaces 
    d0.add_namespace('fairchain', 'https://github.com/eltoncmarinho/fairchain.git')
    d0.add_namespace('ator', 'Agentes')
    d0.add_namespace('atividade', 'https://github.com/eltoncmarinho/fairchain.git')

    # Adicionando Entidades
    e2 = d0.entity('fairchain: https://github.com/eltoncmarinho/fairchain.git')

    # Adicionando Agentes
    d0.agent('ator: Élton Marinho')

    # Atribuindo atores as entidades
    d0.wasAttributedTo(e2, 'ator: Élton Marinho')

    # Adicionando atividade
    d0.activity('atividade:ConsultarOrgao')
    d0.activity('atividade:ConsultarProjeto')
    d0.activity('atividade:Consultarobservacao')
    d0.activity('atividade:ConsultarHorizonte')

    # Adicionando as relacoes
    d0.used('atividade:ConsultarOrgao', e2)
    d0.used('atividade:ConsultarProjeto', e2)
    d0.used('atividade:Consultarobservacao', e2)
    d0.used('atividade:ConsultarHorizonte', e2)
    
    # Atribuir agentes a atividade
    d0.wasAttributedTo('atividade:ConsultarOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:ConsultarProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:Consultarobservacao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:ConsultarHorizonte', 'ator: Élton Marinho')

    # Gerando grafico de proveniencia  
    dot = prov_to_dot(d0)
    dot.write('imagens/proveniencia.pdf', format='pdf')

    # Exibindo grafico
    chrome  = webbrowser.get("google-chrome")
    chrome.open_new_tab("imagens/proveniencia.pdf")
    time.sleep(tempo)

def exibe_proveniencia_cenario_projeto(tempo):
    # Criando documento de proveniência vazio
    d0 = ProvDocument() 

    # Declarando namespaces 
    d0.add_namespace('fairchain', 'https://github.com/eltoncmarinho/fairchain.git')
    d0.add_namespace('ator', '')
    d0.add_namespace('atividade', 'https://github.com/eltoncmarinho/fairchain.git')

    # Adicionando Entidades
    e2 = d0.entity('fairchain: https://github.com/eltoncmarinho/fairchain')

    # Adicionando Agentes
    d0.agent('ator: Élton Marinho')

    # Atribuindo atores as entidades
    d0.wasAttributedTo(e2, 'ator: Élton Marinho')

    # Adicionando atividade
    d0.activity('atividade:incluirProjeto')
    d0.activity('atividade:alterarProjeto')
    d0.activity('atividade:exibirHistoricoProjeto')
    
    # Adicionando as relacoes
    d0.used('atividade:incluirProjeto', e2)
    d0.used('atividade:alterarProjeto', e2)
    d0.used('atividade:exibirHistoricoProjeto', e2)


    d0.wasAttributedTo('atividade:incluirProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoProjeto', 'ator: Élton Marinho')
 
    # Gerando grafico de proveniencia  
    dot = prov_to_dot(d0)
    dot.write('imagens/proveniencia.pdf', format='pdf')

    # Exibindo grafico
    chrome  = webbrowser.get("google-chrome")
    chrome.open_new_tab("imagens/proveniencia.pdf")
    time.sleep(tempo)

def exibe_proveniencia_cenario_orgao_executor(tempo):
    # Criando documento de proveniência vazio
    d0 = ProvDocument() 

    # Declarando namespaces 
    d0.add_namespace('fairchain', 'https://github.com/eltoncmarinho/fairchain.git')
    d0.add_namespace('ator', '')
    d0.add_namespace('atividade', 'https://github.com/eltoncmarinho/fairchain.git')

    # Adicionando Entidades
    e2 = d0.entity('fairchain: https://github.com/eltoncmarinho/fairchain')

    # Adicionando Agentes
    d0.agent('ator: Élton Marinho')

    # Atribuindo atores as entidades
    d0.wasAttributedTo(e2, 'ator: Élton Marinho')

    # Adicionando atividade
    d0.activity('atividade:incluirProjeto')
    d0.activity('atividade:incluirOrgao')
    d0.activity('atividade:alterarProjeto')
    d0.activity('atividade:alterarOrgao')
    d0.activity('atividade:exibirHistoricoProjeto')
    d0.activity('atividade:exibirHistoricoOrgao')
    
    
    # Adicionando as relacoes
    d0.used('atividade:incluirProjeto', e2)
    d0.used('atividade:incluirOrgao', e2)
    d0.used('atividade:alterarProjeto', e2)
    d0.used('atividade:alterarOrgao', e2)
    d0.used('atividade:exibirHistoricoProjeto', e2)
    d0.used('atividade:exibirHistoricoOrgao', e2)

    d0.wasAttributedTo('atividade:incluirProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoOrgao', 'ator: Élton Marinho')

    
    # Gerando grafico de proveniencia  
    dot = prov_to_dot(d0)
    dot.write('imagens/proveniencia.pdf', format='pdf')

    # Exibindo grafico
    chrome  = webbrowser.get("google-chrome")
    chrome.open_new_tab("imagens/proveniencia.pdf")
    time.sleep(tempo)

def exibe_proveniencia_cenario_observacao(tempo):
    # Criando documento de proveniência vazio
    d0 = ProvDocument() 

    # Declarando namespaces 
    d0.add_namespace('fairchain', 'https://github.com/eltoncmarinho/fairchain.git')
    d0.add_namespace('ator', '')
    d0.add_namespace('atividade', 'https://github.com/eltoncmarinho/fairchain.git')

    # Adicionando Entidades
    e2 = d0.entity('fairchain: https://github.com/eltoncmarinho/fairchain')

    # Adicionando Agentes
    d0.agent('ator: Élton Marinho')

    # Atribuindo atores as entidades
    d0.wasAttributedTo(e2, 'ator: Élton Marinho')

    # Adicionando atividade
    d0.activity('atividade:incluirProjeto')
    d0.activity('atividade:incluirOrgao')
    d0.activity('atividade:incluirobservacao')
    d0.activity('atividade:alterarProjeto')
    d0.activity('atividade:alterarOrgao')
    d0.activity('atividade:alterarobservacao')
    d0.activity('atividade:exibirHistoricoProjeto')
    d0.activity('atividade:exibirHistoricoOrgao')
    d0.activity('atividade:exibirHistoricoobservacao')
    
    
    # Adicionando as relacoes

    d0.used('atividade:incluirProjeto', e2)
    d0.used('atividade:incluirOrgao', e2)
    d0.used('atividade:incluirobservacao', e2)
    d0.used('atividade:alterarProjeto', e2)
    d0.used('atividade:alterarOrgao', e2)
    d0.used('atividade:alterarobservacao', e2)
    d0.used('atividade:exibirHistoricoProjeto', e2)
    d0.used('atividade:exibirHistoricoOrgao', e2)
    d0.used('atividade:exibirHistoricoobservacao', e2)

    d0.wasAttributedTo('atividade:incluirProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirobservacao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarobservacao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoobservacao', 'ator: Élton Marinho')
    
    # Gerando grafico de proveniencia  
    dot = prov_to_dot(d0)
    dot.write('imagens/proveniencia.pdf', format='pdf')

    # Exibindo grafico
    chrome  = webbrowser.get("google-chrome")
    chrome.open_new_tab("imagens/proveniencia.pdf")
    time.sleep(tempo)

def exibe_proveniencia_cenario_horizonte(tempo):
    # Criando documento de proveniência vazio
    d0 = ProvDocument() 

    # Declarando namespaces 
    d0.add_namespace('fairchain', 'https://github.com/eltoncmarinho/fairchain.git')
    d0.add_namespace('ator', '')
    d0.add_namespace('atividade', 'https://github.com/eltoncmarinho/fairchain.git')

    # Adicionando Entidades
    e2 = d0.entity('fairchain: https://github.com/eltoncmarinho/fairchain')

    # Adicionando Agentes
    d0.agent('ator: Élton Marinho')

    # Atribuindo atores as entidades
    d0.wasAttributedTo(e2, 'ator: Élton Marinho')

    # Adicionando atividade
    d0.activity('atividade:incluirProjeto')
    d0.activity('atividade:incluirOrgao')
    d0.activity('atividade:incluirobservacao')
    d0.activity('atividade:incluirHorizonte')
    d0.activity('atividade:alterarProjeto')
    d0.activity('atividade:alterarOrgao')
    d0.activity('atividade:alterarobservacao')
    d0.activity('atividade:alterarHorizonte')
    d0.activity('atividade:exibirHistoricoProjeto')
    d0.activity('atividade:exibirHistoricoOrgao')
    d0.activity('atividade:exibirHistoricoobservacao')
    d0.activity('atividade:exibirHistoricoHorizonte')
    
    # Adicionando as relacoes
    d0.used('atividade:incluirProjeto', e2)
    d0.used('atividade:incluirOrgao', e2)
    d0.used('atividade:incluirobservacao', e2)
    d0.used('atividade:incluirHorizonte', e2)    
    d0.used('atividade:alterarProjeto', e2)
    d0.used('atividade:alterarOrgao', e2)
    d0.used('atividade:alterarobservacao', e2)
    d0.used('atividade:alterarHorizonte', e2)
    d0.used('atividade:exibirHistoricoProjeto', e2)
    d0.used('atividade:exibirHistoricoOrgao', e2)
    d0.used('atividade:exibirHistoricoobservacao', e2)
    d0.used('atividade:exibirHistoricoHorizonte', e2)


    d0.wasAttributedTo('atividade:incluirProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirobservacao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirHorizonte', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarobservacao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarHorizonte', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoobservacao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoHorizonte', 'ator: Élton Marinho')
    
    # Gerando grafico de proveniencia  
    dot = prov_to_dot(d0)
    dot.write('imagens/proveniencia.pdf', format='pdf')

    # Exibindo grafico
    chrome  = webbrowser.get("google-chrome")
    chrome.open_new_tab("imagens/proveniencia.pdf")
    time.sleep(tempo)

def exibe_proveniencia_cenario_excluir_tudo(tempo):
    # Criando documento de proveniência vazio
    d0 = ProvDocument() 

    # Declarando namespaces 
    d0.add_namespace('fairchain', 'https://github.com/eltoncmarinho/fairchain.git')
    d0.add_namespace('ator', '')
    d0.add_namespace('atividade', 'https://github.com/eltoncmarinho/fairchain.git')

    # Adicionando Entidades
    e2 = d0.entity('fairchain: https://github.com/eltoncmarinho/fairchain')

    # Adicionando Agentes
    d0.agent('ator: Élton Marinho')

    # Atribuindo atores as entidades
    d0.wasAttributedTo(e2, 'ator: Élton Marinho')

    # Adicionando atividade
    d0.activity('atividade:incluirProjeto')
    d0.activity('atividade:incluirOrgao')
    d0.activity('atividade:incluirobservacao')
    d0.activity('atividade:incluirHorizonte')
    d0.activity('atividade:alterarProjeto')
    d0.activity('atividade:alterarOrgao')
    d0.activity('atividade:alterarobservacao')
    d0.activity('atividade:alterarHorizonte')
    d0.activity('atividade:exibirHistoricoProjeto')
    d0.activity('atividade:exibirHistoricoOrgao')
    d0.activity('atividade:exibirHistoricoobservacao')
    d0.activity('atividade:exibirHistoricoHorizonte')
    d0.activity('atividade:excluirProjeto')
    d0.activity('atividade:excluirOrgao')
    d0.activity('atividade:excluirobservacao')
    d0.activity('atividade:excluirHorizonte')
    
    # Adicionando as relacoes
    d0.used('atividade:incluirProjeto', e2)
    d0.used('atividade:incluirOrgao', e2)
    d0.used('atividade:incluirobservacao', e2)
    d0.used('atividade:incluirHorizonte', e2)    
    d0.used('atividade:alterarProjeto', e2)
    d0.used('atividade:alterarOrgao', e2)
    d0.used('atividade:alterarobservacao', e2)
    d0.used('atividade:alterarHorizonte', e2)
    d0.used('atividade:exibirHistoricoProjeto', e2)
    d0.used('atividade:exibirHistoricoOrgao', e2)
    d0.used('atividade:exibirHistoricoobservacao', e2)
    d0.used('atividade:exibirHistoricoHorizonte', e2)
    d0.used('atividade:excluirProjeto', e2)
    d0.used('atividade:excluirOrgao', e2)
    d0.used('atividade:excluirobservacao', e2)
    d0.used('atividade:excluirHorizonte', e2)


    d0.wasAttributedTo('atividade:incluirProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirobservacao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirHorizonte', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarobservacao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarHorizonte', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoobservacao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoHorizonte', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:excluirProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:excluirOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:excluirobservacao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:excluirHorizonte', 'ator: Élton Marinho')
    
    # Gerando grafico de proveniencia  
    dot = prov_to_dot(d0)
    dot.write('imagens/proveniencia.pdf', format='pdf')

    # Exibindo grafico
    chrome  = webbrowser.get("google-chrome")
    chrome.open_new_tab("imagens/proveniencia.pdf")
    time.sleep(tempo)


def lancar_cenario_01(url_base): 
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>> Cenario 01 >>>>>>>>>>>>>>>>>>>>>>>>>>>")
    lancamento (url_base, "Cenario.xlsx", "projeto", 1)
    lancamento (url_base, "Cenario.xlsx", "observacao", 1)
    lancamento (url_base, "Cenario.xlsx", "horizonte", 1)
   
def lancar_cenario_02 (url_base): 
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>> Cenario 02 >>>>>>>>>>>>>>>>>>>>>>>>>>>")
    lancamento (url_base, "Cenario.xlsx", "projeto", 2)
    lancamento (url_base, "Cenario.xlsx", "alterarProjeto", 2)
    lancamento (url_base, "Cenario.xlsx", "historico", 2)

    lancamento (url_base, "Cenario.xlsx", "observacao", 4)
    lancamento (url_base, "Cenario.xlsx", "alterarObservacao", 4)
    lancamento (url_base, "Cenario.xlsx", "historico", 4)
        
    lancamento (url_base, "Cenario.xlsx", "horizonte", 5)
    lancamento (url_base, "Cenario.xlsx", "alterarHorizonte", 5)
    lancamento (url_base, "Cenario.xlsx", "historico", 5)

    lancamento (url_base, "Cenario.xlsx", "excluir", 1)
    lancamento (url_base, "Cenario.xlsx", "excluir", 2)
    lancamento (url_base, "Cenario.xlsx", "excluir", 3)
    
def lancar_cenario_03 (url_base):     
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>> Cenario 03 >>>>>>>>>>>>>>>>>>>>>>>>>>>")
    lancamento (url_base, "Cenario.xlsx", "excluidos", 1)
    
def lancar_cenario_04 (url_base):     
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>> Cenario 04 >>>>>>>>>>>>>>>>>>>>>>>>>>>")
    lancamento (url_base, "Cenario.xlsx", "lista_blockchain", 1)


print("================ Inicio de Serviço ================")
titulo_cenario ("imagens/Inicio_de_servico.jpeg", 1)

titulo_cenario ("imagens/Cenario_01.jpeg", 1)
lancar_cenario_01(url_provchain)

titulo_cenario ("imagens/Cenario_02.jpeg", 1)
lancar_cenario_02(url_provchain)

titulo_cenario ("imagens/Cenario_03.jpeg", 1)
lancar_cenario_03 (url_provchain)

titulo_cenario ("imagens/Cenario_04.jpeg", 1)
lancar_cenario_04 (url_provchain)

titulo_cenario ("imagens/Fim_de_servico.jpeg", 1)
print("================ Fim de Serviço ================")
