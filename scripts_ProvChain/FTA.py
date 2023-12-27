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

# from selenium import webdriver 
#  from selenium.webdriver.common.by import By
#  from selenium.webdriver.common.keys import Keys

from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


import webbrowser
import os
from selenium.webdriver.chrome.options import Options
########## Importacao do ProvDocument 
from prov.dot import prov_to_dot
from prov.model import ProvDocument

#chrome = webdriver.Chrome(executable_path="chromedriver.exe")
url_fairchain = "http://127.0.0.1:8080/"
#url_fairchain = "http://89.117.33.155:8080/"


# Cores nos grafos
cor_orgao = 'lightblue'
cor_projeto = 'red'
cor_perfil = 'green'
cor_horizonte = 'yellow'
cor_excluido = 'gray'
cor_lexcluido = 'burlywood2'
cor_blockchain = 'DodgerBlue'


# Posicição dos vertices para layout
cOrgao = (2,1)
cHisOrgao = (0,0)
cAltOrgao = (0,1)
cExcOrgao = (0,2)

cPrj = (2,4)
cHisPrj = (0,3)
cAltPrj = (0,4)
cExcPrj = (0,5)

cPer = (4,1)
cHisPer = (6,0)
cAltPer = (6,1)
cExcPer = (6,2)

cHor = (4,4)
cHisHor = (6,3)
cAltHor = (6,4)
cExcHor = (6,5)

cExcluidos = (3,5)
cBlockchain = (3,0)

cLimites01 = (-1,-1)
cLimites02 = (7,6)

cores = [cor_projeto, cor_projeto, cor_projeto, cor_orgao, cor_orgao, cor_orgao, cor_perfil, cor_perfil, cor_perfil, cor_horizonte, cor_horizonte, cor_horizonte, cor_excluido, cor_excluido, cor_excluido, cor_excluido, cor_lexcluido, cor_blockchain]
layout = [cPrj, cAltPrj, cHisPrj, cOrgao , cAltOrgao, cHisOrgao, cPer, cAltPer, cHisPer, cHor, cAltHor, cHisHor, cExcHor, cExcPer, cExcOrgao, cExcPrj, cExcluidos, cBlockchain, cLimites01, cLimites02]

def titulo_cenario(arquivo, tempo):
    chrome  = webbrowser.get("google-chrome")
    chrome.open_new_tab(arquivo)
    time.sleep(tempo)

def gera_exibe_arquivo (vertices, arestas, vertice_cor, layout, tempo):
    g = Graph(directed=True)

    #print("- Adiciona os vertices")
    g.add_vertices(vertices)

    #print("- Adiciona ids e labels aos vertices")
    for i in range(len(g.vs)):
        g.vs[i]["id"] = i
        g.vs[i]["label"] = vertices[i]

    #print("- Adiciona arestas")
    g.add_edges(arestas)

    #print("- Plotando o gráfico")
    plot(g, target='imagens/grafo.pdf', 
        vertex_size=77,
        vertex_color=vertice_cor,
        edge_width=[1, 2],
        edge_color=['black'],
        layout=layout)

    chrome  = webbrowser.get("google-chrome")
    chrome.open_new_tab("imagens/grafo.pdf")
  
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
    d0.activity('atividade:ConsultarPerfil')
    d0.activity('atividade:ConsultarHorizonte')

    # Adicionando as relacoes
    d0.used('atividade:ConsultarOrgao', e2)
    d0.used('atividade:ConsultarProjeto', e2)
    d0.used('atividade:ConsultarPerfil', e2)
    d0.used('atividade:ConsultarHorizonte', e2)
    
    # Atribuir agentes a atividade
    d0.wasAttributedTo('atividade:ConsultarOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:ConsultarProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:ConsultarPerfil', 'ator: Élton Marinho')
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

def exibe_proveniencia_cenario_perfil(tempo):
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
    d0.activity('atividade:incluirPerfil')
    d0.activity('atividade:alterarProjeto')
    d0.activity('atividade:alterarOrgao')
    d0.activity('atividade:alterarPerfil')
    d0.activity('atividade:exibirHistoricoProjeto')
    d0.activity('atividade:exibirHistoricoOrgao')
    d0.activity('atividade:exibirHistoricoPerfil')
    
    
    # Adicionando as relacoes

    d0.used('atividade:incluirProjeto', e2)
    d0.used('atividade:incluirOrgao', e2)
    d0.used('atividade:incluirPerfil', e2)
    d0.used('atividade:alterarProjeto', e2)
    d0.used('atividade:alterarOrgao', e2)
    d0.used('atividade:alterarPerfil', e2)
    d0.used('atividade:exibirHistoricoProjeto', e2)
    d0.used('atividade:exibirHistoricoOrgao', e2)
    d0.used('atividade:exibirHistoricoPerfil', e2)

    d0.wasAttributedTo('atividade:incluirProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirPerfil', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarPerfil', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoPerfil', 'ator: Élton Marinho')
    
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
    d0.activity('atividade:incluirPerfil')
    d0.activity('atividade:incluirHorizonte')
    d0.activity('atividade:alterarProjeto')
    d0.activity('atividade:alterarOrgao')
    d0.activity('atividade:alterarPerfil')
    d0.activity('atividade:alterarHorizonte')
    d0.activity('atividade:exibirHistoricoProjeto')
    d0.activity('atividade:exibirHistoricoOrgao')
    d0.activity('atividade:exibirHistoricoPerfil')
    d0.activity('atividade:exibirHistoricoHorizonte')
    
    # Adicionando as relacoes
    d0.used('atividade:incluirProjeto', e2)
    d0.used('atividade:incluirOrgao', e2)
    d0.used('atividade:incluirPerfil', e2)
    d0.used('atividade:incluirHorizonte', e2)    
    d0.used('atividade:alterarProjeto', e2)
    d0.used('atividade:alterarOrgao', e2)
    d0.used('atividade:alterarPerfil', e2)
    d0.used('atividade:alterarHorizonte', e2)
    d0.used('atividade:exibirHistoricoProjeto', e2)
    d0.used('atividade:exibirHistoricoOrgao', e2)
    d0.used('atividade:exibirHistoricoPerfil', e2)
    d0.used('atividade:exibirHistoricoHorizonte', e2)


    d0.wasAttributedTo('atividade:incluirProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirPerfil', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirHorizonte', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarPerfil', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarHorizonte', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoPerfil', 'ator: Élton Marinho')
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
    d0.activity('atividade:incluirPerfil')
    d0.activity('atividade:incluirHorizonte')
    d0.activity('atividade:alterarProjeto')
    d0.activity('atividade:alterarOrgao')
    d0.activity('atividade:alterarPerfil')
    d0.activity('atividade:alterarHorizonte')
    d0.activity('atividade:exibirHistoricoProjeto')
    d0.activity('atividade:exibirHistoricoOrgao')
    d0.activity('atividade:exibirHistoricoPerfil')
    d0.activity('atividade:exibirHistoricoHorizonte')
    d0.activity('atividade:excluirProjeto')
    d0.activity('atividade:excluirOrgao')
    d0.activity('atividade:excluirPerfil')
    d0.activity('atividade:excluirHorizonte')
    
    # Adicionando as relacoes
    d0.used('atividade:incluirProjeto', e2)
    d0.used('atividade:incluirOrgao', e2)
    d0.used('atividade:incluirPerfil', e2)
    d0.used('atividade:incluirHorizonte', e2)    
    d0.used('atividade:alterarProjeto', e2)
    d0.used('atividade:alterarOrgao', e2)
    d0.used('atividade:alterarPerfil', e2)
    d0.used('atividade:alterarHorizonte', e2)
    d0.used('atividade:exibirHistoricoProjeto', e2)
    d0.used('atividade:exibirHistoricoOrgao', e2)
    d0.used('atividade:exibirHistoricoPerfil', e2)
    d0.used('atividade:exibirHistoricoHorizonte', e2)
    d0.used('atividade:excluirProjeto', e2)
    d0.used('atividade:excluirOrgao', e2)
    d0.used('atividade:excluirPerfil', e2)
    d0.used('atividade:excluirHorizonte', e2)


    d0.wasAttributedTo('atividade:incluirProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirPerfil', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:incluirHorizonte', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarPerfil', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:alterarHorizonte', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoPerfil', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:exibirHistoricoHorizonte', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:excluirProjeto', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:excluirOrgao', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:excluirPerfil', 'ator: Élton Marinho')
    d0.wasAttributedTo('atividade:excluirHorizonte', 'ator: Élton Marinho')
    
    # Gerando grafico de proveniencia  
    dot = prov_to_dot(d0)
    dot.write('imagens/proveniencia.pdf', format='pdf')

    # Exibindo grafico
    chrome  = webbrowser.get("google-chrome")
    chrome.open_new_tab("imagens/proveniencia.pdf")
    time.sleep(tempo)


def lancar_cenario_fazendinha(url_base): 
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>> Cenario Fazendinha >>>>>>>>>>>>>>>>>>>>>>>>>>>")
    cores = [cor_orgao, cor_projeto, cor_perfil, cor_horizonte]
    layout = [cOrgao, cPrj, cPer, cHor, cHisHor, cPer, cHisPer, cAltPer, cExcPer, cHisOrgao, cHisPer, cExcPrj, cExcHor, cLimites01, cLimites02]
    
    lancamento (url_base, "Cenario.xlsx", "orgao", 1)
    gera_exibe_arquivo(['Consultar\nÓrgão'], [], cores, layout, 2)  

    lancamento (url_base, "Cenario.xlsx", "projeto", 1)
    gera_exibe_arquivo(['Consultar\nÓrgão', 
                        'Consultar\nProjeto'], [(1,0)], cores, layout, 2) 
   
    lancamento (url_base, "Cenario.xlsx", "perfil", 1)
    gera_exibe_arquivo(['Consultar\nÓrgão', 
                        'Consultar\nProjeto', 
                        'Consultar\nPerfil'], [(1,0), (1,2)], cores, layout, 2) 

    lancamento (url_base, "Cenario.xlsx", "horizonte", 1)
    gera_exibe_arquivo(['Consultar\nÓrgão', 
                        'Consultar\nProjeto', 
                        'Consultar\nPerfil', 
                        'Consultar\nHorizonte'],  [(1,0), (1,2), (2,3)], cores, layout, 2) 
   


    lancamento (url_base, "Cenario.xlsx", "horizonte", 1)
    gera_exibe_arquivo(['Consultar\nÓrgão', 
                        'Consultar\nProjeto', 
                        'Consultar\nPerfil', 
                        'Consultar\nHorizonte'],  [(1,0), (1,2), (2,3)], cores, layout, 2) 
   
def lancar_cenario_projeto (url_base): 
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>> Cenario Projeto >>>>>>>>>>>>>>>>>>>>>>>>>>>")

    lancamento (url_base, "Cenario.xlsx", "projeto", 2)
    gera_exibe_arquivo(['Incluir\nProjeto'], [], cores, layout, 2) 

    lancamento (url_base, "Cenario.xlsx", "alterarProjeto", 2)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto'], [(1,0)], cores, layout, 2) 

    lancamento (url_base, "Cenario.xlsx", "historico", 2)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto'], [(1,0),(2,0)], cores, layout, 2) 

def lancar_cenario_orgao_executor (url_base): 
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>> Cenario Órgão >>>>>>>>>>>>>>>>>>>>>>>>>>>")

    lancamento (url_base, "Cenario.xlsx", "orgao", 3) 
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão'], [(1,0), (2,0), (3,0)], cores, layout, 2) 

    lancamento (url_base, "Cenario.xlsx", "alterarOrgao", 3)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',
                        'Alterar\nÓrgão'], [(1,0),(2,0), (3,0), (4,3)], cores, layout, 2) 

    lancamento (url_base, "Cenario.xlsx", "historico", 3)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',
                        'Alterar\nÓrgão',
                        'Histórico\nÓrgão'], [(1,0),(2,0), (3,0), (4,3), (5,3) ], cores, layout, 2) 

def lancar_cenario_perfil (url_base):  
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>> Cenario Perfil >>>>>>>>>>>>>>>>>>>>>>>>>>>") 

    lancamento (url_base, "Cenario.xlsx", "perfil", 4)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',
                        'Alterar\nÓrgão', 
                        'Histórico\nÓrgão',     
                        'Incluir\nPerfil'], [(1,0),(2,0), (3,0), (4,3), (5,3), (6,0) ], cores, layout, 2) 

    lancamento (url_base, "Cenario.xlsx", "alterarPerfil", 4)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',
                        'Alterar\nÓrgão', 
                        'Histórico\nÓrgão', 
                        'Incluir\nPerfil',
                        'Alterar\nPerfil'], [(1,0),(2,0), (3,0), (4,3), (5,3), (6,0),(7,6) ], cores, layout, 2) 

    lancamento (url_base, "Cenario.xlsx", "historico", 4)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',
                        'Alterar\nÓrgão',
                        'Histórico\nÓrgão', 
                        'Incluir\nPerfil',
                        'Alterar\nPerfil',
                        'Histórico\nPerfil'], [(1,0),(2,0),(3,0),(4,3),(5,3),(6,0),(7,6),(8,6) ], cores, layout, 2) 
        
def lancar_cenario_horizonte (url_base): 
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>> Cenario Horizonte >>>>>>>>>>>>>>>>>>>>>>>>>>>")
    
    lancamento (url_base, "Cenario.xlsx", "horizonte", 5)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',
                        'Alterar\nÓrgão', 
                        'Histórico\nÓrgão', 
                        'Incluir\nPerfil',
                        'Alterar\nPerfil',
                        'Histórico\nPerfil',
                        'Incluir\nHorizonte', ], [(1,0),(2,0),(3,0),(4,3),(5,3),(6,0),(7,6),(8,6), (9,6)], cores, layout, 2) 

    lancamento (url_base, "Cenario.xlsx", "alterarHorizonte", 5)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',
                        'Alterar\nÓrgão', 
                        'Histórico\nÓrgão', 
                        'Incluir\nPerfil',
                        'Alterar\nPerfil',
                        'Histórico\nPerfil',
                        'Incluir\nHorizonte', 
                        'Alterar\nHorizonte',], [(1,0),(2,0),(3,0),(4,3),(5,3),(6,0),(7,6),(8,6), (9,6),(10,9)], cores, layout, 2) 

    lancamento (url_base, "Cenario.xlsx", "historico", 5)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',
                        'Alterar\nÓrgão', 
                        'Histórico\nÓrgão', 
                        'Incluir\nPerfil',
                        'Alterar\nPerfil',
                        'Histórico\nPerfil',
                        'Incluir\nHorizonte', 
                        'Alterar\nHorizonte',
                        'Histórico\nHorizonte'], [(1,0),(2,0),(3,0),(4,3),(5,3),(6,0),(7,6),(8,6), (9,6),(10,9),(11,9)], cores, layout, 2) 

def lancar_cenario_excluir_tudo (url_base):     
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>> Cenario de exclusão >>>>>>>>>>>>>>>>>>>>>>>>>>>")
    lancamento (url_base, "Cenario.xlsx", "excluir", 1)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',
                        'Alterar\nÓrgão', 
                        'Histórico\nÓrgão', 
                        'Incluir\nPerfil',
                        'Alterar\nPerfil',
                        'Histórico\nPerfil',
                        'Incluir\nHorizonte', 
                        'Alterar\nHorizonte',
                        'Histórico\nHorizonte',
                        'Excluir\nHorizonte'], [(1,0),(2,0),(3,0),(4,3),(5,3),(6,0),(7,6),(8,6), (9,6),(10,9),(11,9),(12,9)], cores, layout, 2) 

    lancamento (url_base, "Cenario.xlsx", "excluir", 2)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',
                        'Alterar\nÓrgão', 
                        'Histórico\nÓrgão', 
                        'Incluir\nPerfil',
                        'Alterar\nPerfil',
                        'Histórico\nPerfil',
                        'Incluir\nHorizonte', 
                        'Alterar\nHorizonte',
                        'Histórico\nHorizonte',
                        'Excluir\nHorizonte',
                        'Excluir\nPerfil'], [(1,0),(2,0),(3,0),(4,3),(5,3),(6,0),(7,6),(8,6), (9,6),(10,9),(11,9),(12,9),(13,6)], cores, layout, 2) 
    
    lancamento (url_base, "Cenario.xlsx", "excluir", 3)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',
                        'Alterar\nÓrgão', 
                        'Histórico\nÓrgão', 
                        'Incluir\nPerfil',
                        'Alterar\nPerfil',
                        'Histórico\nPerfil',
                        'Incluir\nHorizonte', 
                        'Alterar\nHorizonte',
                        'Histórico\nHorizonte',
                        'Excluir\nHorizonte',
                        'Excluir\nPerfil',
                        'Excluir\nÓrgão'], [(1,0),(2,0),(3,0),(4,3),(5,3),(6,0),(7,6),(8,6), (9,6),(10,9),(11,9),(12,9),(13,6),(14,3)], cores, layout, 2) 

    lancamento (url_base, "Cenario.xlsx", "excluir", 4)
    gera_exibe_arquivo(['Incluir\nProjeto',     #0
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',       #3
                        'Alterar\nÓrgão', 
                        'Histórico\nÓrgão', 
                        'Incluir\nPerfil',      #6
                        'Alterar\nPerfil',
                        'Histórico\nPerfil',
                        'Incluir\nHorizonte',   #9
                        'Alterar\nHorizonte',
                        'Histórico\nHorizonte',
                        'Excluir\nHorizonte',   #12
                        'Excluir\nPerfil',
                        'Excluir\nÓrgão',
                        'Excluir\nProjeto'], [(1,0),(2,0),(3,0),(4,3),(5,3),(6,0),(7,6),(8,6), (9,6),(10,9),(11,9),(12,9),(13,6),(14,3), (15,0)], cores, layout, 2) 

    lancamento (url_base, "Cenario.xlsx", "excluidos", 1)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',
                        'Alterar\nÓrgão', 
                        'Histórico\nÓrgão', 
                        'Incluir\nPerfil',
                        'Alterar\nPerfil',
                        'Histórico\nPerfil',
                        'Incluir\nHorizonte', 
                        'Alterar\nHorizonte',
                        'Histórico\nHorizonte',
                        'Excluir\nHorizonte',
                        'Excluir\nPerfil',
                        'Excluir\nÓrgão',
                        'Excluir\nProjeto',
                        'Excluídos'], [(1,0),(2,0),(3,0),(4,3),(5,3),(6,0),(7,6),(8,6), (9,6),(10,9),(11,9),(12,9),(13,6),(14,3), (15,0)], cores, layout, 2) 

def lancar_cenario_lista_blockchain (url_base):     
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>> Cenario de exclusão >>>>>>>>>>>>>>>>>>>>>>>>>>>")
    lancamento (url_base, "Cenario.xlsx", "lista_blockchain", 1)
    gera_exibe_arquivo(['Incluir\nProjeto', 
                        'Alterar\nProjeto', 
                        'Histórico\nProjeto', 
                        'Incluir\nÓrgão',
                        'Alterar\nÓrgão', 
                        'Histórico\nÓrgão', 
                        'Incluir\nPerfil',
                        'Alterar\nPerfil',
                        'Histórico\nPerfil',
                        'Incluir\nHorizonte', 
                        'Alterar\nHorizonte',
                        'Histórico\nHorizonte',
                        'Excluir\nHorizonte',
                        'Excluir\nPerfil',
                        'Excluir\nÓrgão',
                        'Excluir\nProjeto',
                        'Excluídos',
                        'Lista\nBlockchain'], [(1,0),(2,0),(3,0),(4,3),(5,3),(6,0),(7,6),(8,6), (9,6),(10,9),(11,9),(12,9),(13,6),(14,3), (15,0), (16,0)], cores, layout, 2) 


print("================ Inicio de Serviço ================")
titulo_cenario ("imagens/Inicio_de_Servico.pdf", 3)

titulo_cenario ("imagens/Cenario_Fazendinha.pdf", 3)
lancar_cenario_fazendinha(url_fairchain)
#exibe_proveniencia_cenario_fazendinha(3)

titulo_cenario ("imagens/Cenario_Projeto.pdf", 3)
lancar_cenario_projeto(url_fairchain)
# #exibe_proveniencia_cenario_projeto(3)

titulo_cenario ("imagens/Cenario_Orgao_Executor.pdf", 3)
lancar_cenario_orgao_executor(url_fairchain)
# #exibe_proveniencia_cenario_orgao_executor(3)

titulo_cenario ("imagens/Cenario_Perfil.pdf", 3)
lancar_cenario_perfil(url_fairchain)
#exibe_proveniencia_cenario_perfil(3)

titulo_cenario ("imagens/Cenario_Horizonte.pdf", 3)
lancar_cenario_horizonte(url_fairchain)
#exibe_proveniencia_cenario_horizonte(3)

titulo_cenario ("imagens/Cenario_Exclui_Tudo.pdf", 3)
lancar_cenario_excluir_tudo (url_fairchain)
#exibe_proveniencia_cenario_excluir_tudo(3)

titulo_cenario ("imagens/Cenario_Lista_Blockchain.pdf", 3)
lancar_cenario_lista_blockchain (url_fairchain)

titulo_cenario ("imagens/Fim_de_Servico.pdf", 3)
print("================ Fim de Serviço ================")
