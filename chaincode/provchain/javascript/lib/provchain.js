/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0 
 */

'use strict';

const { Console } = require('console');
const { Contract } = require('fabric-contract-api');

class provchain extends Contract {

    async inicializarLivroRazao(ctx) {
        // // >>>>> ORGAO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>        
        // const orgaos = [
        //     {
        //         key: '239a5445-374d-455e-9b88-47c1dcd65b301234',
        //         key_proveniencia: '24df7a93-ef12-45de-bff0-6a30b16dbdfb1234',
        //         nome: 'Empresa Brasileira de Pesquisa Agropecuária',
        //         referencia: 'EMBRAPA',
        //         ano: '1973',
        //         tipo_problema: 'Levantamento semidetalhado',
        //         nivel_levantamento: 'Levantamento semidetalhado',
        //         contato_nome: '',
        //         contato_email: '',
        //         contato_telefone: '',
        //         motivo: '',
        //         tipo_instituicao: 'instituicao_ensino',
        //         abrangencia: 'País',
        //         data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
        //     },
        // ];
        // for (const orgao of orgaos) {
        //     orgao.tipoDoc = 'Orgao';
        //     await ctx.stub.putState(orgao.key, Buffer.from(JSON.stringify(orgao)));
        //     console.info(`Órgão ${orgao.key} initializado`);
        // }
        // >>>>> PROJETOS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>        
        const projetos = [
            {
                key: 'ac93a252-1679-4eba-9f15-04d671b580f31234',
                key_proveniencia: 'ba85d59a-4f50-40ae-ac5c-8f62d69b2a621234',
                nome: 'Levantamento Semidetalhado dos Solos da Área do Sistema Integrado de Produção Agroecológica (SIPA)',
                sigla: 'Fazendinha',
                pais: 'Brasil',
                estado: 'RJ',
                municipio: 'Seropédica',
                abrangencia: 'Municipal',
                aberto: 'Sim',
                data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
            },
        ];
        for (const projeto of projetos) {
            projeto.tipoDoc = 'Projeto';
            await ctx.stub.putState(projeto.key, Buffer.from(JSON.stringify(projeto)));
            console.info(`Projeto ${projeto.key} initializado`);
        }
        // // >>>>> ASSOCIAÇÕES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>        
        // const associacoes = [
        //     {
        //         key: 'd88861bebed6f36de35385f879925edf8353d313',
        //         key_orgao: '239a5445-374d-455e-9b88-47c1dcd65b301234',
        //         key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234',
        //         key_proveniencia: 'a0683526da2dcfc9ac9a5ab546b35a379c49c060',
        //         excluido: false,
        //         data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
        //     },
        // ];
        // for (const associacao of associacoes) {
        //     associacao.tipoDoc = 'AssociacaoOrgaoProjeto';
        //     await ctx.stub.putState(associacao.key, Buffer.from(JSON.stringify(associacao)));
        //     console.info(`Associação ${associacao.key} descrita`);
        // }
        // >>>>> OBSERVACAO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   
        const observacoes = [
            { key: '13f2c75746608613e0ad6b92541464289e103134', key_proveniencia: '654cec2f0483e2f9fc7f8efb353dd3def830420b', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'SIPA 1', data_coleta: '25/04/1995', tipo_observacao: 'Trincheira', latitude: '22,7502778', longitude: '43,6727778', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: 'linha de pedras a 70cm de profundidade.', pedregosidade: 'Não pedregosa', rochosidade: 'Não rochosa', drenagem: 'Bem drenado', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'pastagem de capim colonião.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: '', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'produto de alteração das rochas supracitadas.', sibcs_antigo: 'Podzólico Vermelho-Amarelo Tb Distrófico A moderado textura argilosa/muito argilosa fase floresta tropical subcaducifólia relevo suave ondulado.', wrb: '', soil_taxonomy: '', localizacao: 'campo experimental da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Suave ondulado', relevo_regional: 'Ondulado', descrito_coletado_por: 'Aroaldo Lopes Lemos e Braz Calderano Filho.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '', classe2: '', frequencia_sulcos2: '', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'd9fedc14fdda53c271f7b85f7af257e10f7cc1b9', key_proveniencia: '059f7de55a4297413bfbd432ce7d6e724dd42bae', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'SIPA 4', data_coleta: '26/07/1996', tipo_observacao: 'Trincheira', latitude: '22,7486111', longitude: '43,6736111', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: 'calhaus a 150cm de profundidade.', pedregosidade: 'Não pedregosa', rochosidade: 'Não rochosa', drenagem: 'Bem drenado', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'pastagem de capim colonião.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: '', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'produto de alteração das rochas supracitadas.', sibcs_antigo: 'Podzólico Vermelho-Amarelo Tb Distrófico A moderado textura média/argilosa fase floresta tropical subcaducifólia relevo suave ondulado.', wrb: '', soil_taxonomy: '', localizacao: 'campo experimental da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Ondulado', relevo_regional: 'Suave ondulado', descrito_coletado_por: 'Osório O. M. da Fonseca e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '', classe2: '', frequencia_sulcos2: '', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '32b4421f58e82811f4cfd361cc7eb3d70a9fdf5a', key_proveniencia: '76f228f0a9dae870ad250cf8d67590017766ee0a', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'SIPA 2', data_coleta: '26/04/1995', tipo_observacao: 'Trincheira', latitude: '22,7525000', longitude: '43,6811111', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: 'trincheira com 160cm de profundidade.', pedregosidade: 'Não pedregosa', rochosidade: 'Não rochosa', drenagem: 'Imperfeitamente drenado', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'pastagem de capim colonião.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: 'Sedimentos areno-argilosos', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'sedimentos do Quaternário arenoargilosos e arenosos.', sibcs_antigo: 'Planossolo Tb Álico A moderado textura arenosa/média fase floresta tropical subcaducifólia relevo plano.', wrb: '', soil_taxonomy: '', localizacao: 'campo experimental da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Plano', relevo_regional: 'Suave ondulado', descrito_coletado_por: 'Osório O. M. da Fonseca e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '5', classe2: 'Abundante', frequencia_sulcos2: 'Médio', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'a361fd27bb8acb7581c07327c33327c845bfa7fb', key_proveniencia: '3bd5717abb673d0c26b7f6356e86610bad746385', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'SIPA 3', data_coleta: '26/04/1995', tipo_observacao: 'Trincheira', latitude: '22,7525000', longitude: '43,6666667', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: 'trincheira com 160cm de profundidade.', pedregosidade: 'Não pedregosa', rochosidade: 'Não rochosa', drenagem: 'Imperfeitamente drenado', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'horto florestal.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: 'Sedimentos areno-argilosos', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'sedimentos do Quaternário areno-argilosos e arenosos.', sibcs_antigo: 'Planossolo Tb Distrófico A moderado textura arenosa/média fase floresta tropical subcaducifólia relevo plano.', wrb: '', soil_taxonomy: '', localizacao: 'área de reserva da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Plano', relevo_regional: 'Suave ondulado', descrito_coletado_por: 'Osório O. M. da Fonseca e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '5', classe2: 'Abundante', frequencia_sulcos2: 'Médio', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '64d7a02bfbf5b00c8c1c390557a264f0af41b1d6', key_proveniencia: '7ebb26a08c7b2d74c414dfc2138e38c665c08927', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'T-26', data_coleta: '25/08/1993', tipo_observacao: 'Tradagem', latitude: '22,7502778', longitude: '43,6752778', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: '', pedregosidade: 'Não pedregosa', rochosidade: 'Não rochosa', drenagem: 'Bem drenado', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'pastagem.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: '', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'produto de alteração das rochas supracitadas.', sibcs_antigo: 'Podzólico Vermelho-Amarelo Tb Distrófico A moderado textura arenosa/média fase floresta tropical subcaducifólia relevo ondulado.', wrb: '', soil_taxonomy: '', localizacao: 'campo experimental da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Ondulado', relevo_regional: 'Ondulado', descrito_coletado_por: 'Osório O. M. da Fonseca e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '', classe2: '', frequencia_sulcos2: '', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'd86503ab2ec9d4e6b2503a56898030563e1aa8e3', key_proveniencia: 'c328f85005bfdf68add404e2107f483940e610b9', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'T-32', data_coleta: '26/10/1993', tipo_observacao: 'Tradagem', latitude: '22,7488889', longitude: '43,6733333', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: 'tradagem até 110cm de profundidade.', pedregosidade: 'Não pedregosa', rochosidade: 'Não rochosa', drenagem: 'Bem drenado', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'pastagem.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: '', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'produto de alteração das rochas supracitadas.', sibcs_antigo: 'Podzólico Vermelho-Amarelo Tb Distrófico A moderado textura média/argilosa fase floresta tropical subcaducifólia relevo ondulado.', wrb: '', soil_taxonomy: '', localizacao: 'campo experimental da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Ondulado', relevo_regional: 'Ondulado', descrito_coletado_por: 'Osório O. M. da Fonseca e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '', classe2: '', frequencia_sulcos2: '', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'b50b5f131f24502131814c98636d9e78dabb9be6', key_proveniencia: 'aeab822f387179e528b212b78a410f553f467fab', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'T-33', data_coleta: '26/10/1993', tipo_observacao: 'Tradagem', latitude: '22,7486111', longitude: '43,6736111', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: 'Osório O. M. da Fonseca e Aroaldo L. Lemos.', pedregosidade: 'Não pedregosa', rochosidade: 'Não rochosa', drenagem: 'Bem drenado', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'pastagem.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: '', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'produto da alteração das rochas supracitadas.', sibcs_antigo: 'Podzólico Vermelho-Amarelo Tb Distrófico A moderado textura média/argilosa fase floresta tropical subcaducifólia relevo suave ondulado.', wrb: '', soil_taxonomy: '', localizacao: 'campo experimental da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Ondulado', relevo_regional: 'Suave ondulado', descrito_coletado_por: 'Osório O. M. da Fonseca e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '', classe2: '', frequencia_sulcos2: '', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '7c68d8fcd7a7d58b120b9c2f19d0c71cb7f5c42e', key_proveniencia: '7a3748d4f3ad1fcf6f5efb81db9ed3c465b581f1', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'T-40', data_coleta: '17/09/1998', tipo_observacao: 'Tradagem', latitude: '22,7533333', longitude: '43,6719444', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: 'presença de linha de pedras entre os horizontes A e B.', pedregosidade: 'Ligeiramente pedregosa', rochosidade: 'Não rochosa', drenagem: 'Bem drenado', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'plantio de café.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: '', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'produto de alteração das rochas supracitadas.', sibcs_antigo: 'Podzólico Vermelho-Amarelo Tb Distrófico A moderado textura média/argilosa fase floresta tropical subcaducifólia relevo suave ondulado.', wrb: '', soil_taxonomy: '', localizacao: 'campo experimental da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Ondulado', relevo_regional: 'Ondulado a forte ondulado', descrito_coletado_por: 'Raphael David dos Santos e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '', classe2: '', frequencia_sulcos2: '', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '81c364a9dae86fa17ad74a44f1f7fa86be005007', key_proveniencia: 'de517a0459bc818bcf02dbdb047c98605137264c', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'T-42', data_coleta: '17/09/1998', tipo_observacao: 'Tradagem', latitude: '22,7522222', longitude: '43,6733333', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: 'presença de linha de pedras entre os horizontes A e B.', pedregosidade: 'Pedregosa', rochosidade: 'Não rochosa', drenagem: 'Moderadamente drenado', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'sob mata.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: '', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'produto de alteração das rochas supracitadas.', sibcs_antigo: 'Podzólico Vermelho-Amarelo Tb Álico A moderado textura média/argilosa fase pedregosa floresta tropical subcaducifólia relevo forte ondulado.', wrb: '', soil_taxonomy: '', localizacao: 'área de reserva da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Forte ondulado', relevo_regional: 'Forte ondulado', descrito_coletado_por: 'Raphael David dos Santos e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '', classe2: '', frequencia_sulcos2: '', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '3c43076927091194ca066d92026f5e755d36170b', key_proveniencia: '5e443c003151351b220521f436b12a2ccdd82f6e', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'T-22', data_coleta: '25/08/1993', tipo_observacao: 'Tradagem', latitude: '#VALOR!', longitude: '#VALOR!', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: '', pedregosidade: 'Não pedregosa', rochosidade: 'Não rochosa', drenagem: '', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'pastagem.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: 'Sedimentos areno-argilosos', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'sedimentos do Quaternário areno-argilosos e arenosos.', sibcs_antigo: 'Planossolo Tb Distrófico A moderado textura arenosa/média fase floresta tropical subcaducifólia relevo plano.', wrb: '', soil_taxonomy: '', localizacao: 'campo experimental da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Plano', relevo_regional: 'Ondulado', descrito_coletado_por: 'Osório O. M. da Fonseca e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '', classe2: '', frequencia_sulcos2: '', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '6dec29b27b448e25fe55e8e0b09d3845f2b286d6', key_proveniencia: '6c7dbb98b9dd36d5523dfff87ab185e6e1139e49', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'T-35', data_coleta: '26/10/1993', tipo_observacao: 'Tradagem', latitude: '22,7477778', longitude: '43,6741667', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: 'tradagem até 90cm e coletada amostra de Ap-0-40cm e Bt-60-90cm.', pedregosidade: 'Não pedregosa', rochosidade: 'Não rochosa', drenagem: 'Imperfeitamente drenado', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'pastagem.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: 'Sedimentos areno-argilosos', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'sedimentos do Quaternário areno-argilosos e arenosos.', sibcs_antigo: 'Planossolo Tb Distrófico A moderado textura arenosa/média fase floresta tropical subcaducifólia relevo suave ondulado.', wrb: '', soil_taxonomy: '', localizacao: 'campo experimental da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Suave ondulado', relevo_regional: 'Suave ondulado', descrito_coletado_por: 'Osório O. M. da Fonseca e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '', classe2: '', frequencia_sulcos2: '', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'd2675657b683358a58da19651229fb796da425f3', key_proveniencia: 'f88e2329a20fc105246d3d777a1f8418131fcd9f', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'T-36', data_coleta: '14/09/1998', tipo_observacao: 'Tradagem', latitude: '22,7505556', longitude: '43,6811111', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: 'área queimada há algum tempo.', pedregosidade: 'Não pedregosa', rochosidade: 'Muito rochosa', drenagem: 'Imperfeitamente drenado', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'pastagem.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: 'Sedimentos areno-argilosos', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'sedimentos do Quaternário areno-argilosos e arenosos.', sibcs_antigo: 'Planossolo Tb Álico A moderado textura arenosa/média fase floresta tropical subcaducifólia relevo plano.', wrb: '', soil_taxonomy: '', localizacao: 'campo experimental da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Plano', relevo_regional: 'Plano', descrito_coletado_por: 'Raphael David dos Santos e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '5', classe2: 'Comum', frequencia_sulcos2: 'Médio', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '91a2a4a7e3041b294e4576c9ddf61c46cf114e4d', key_proveniencia: '108465dc626d197ea29fdf5a89f4ecef4b68becd', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'T-37', data_coleta: '14/09/1998', tipo_observacao: 'Tradagem', latitude: '22,7547222', longitude: '43,6780556', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: 'alguns cascalhos na passagem do E para o Btg.', pedregosidade: 'Não pedregosa', rochosidade: 'Não rochosa', drenagem: 'Imperfeitamente drenado', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'área de reserva - campo.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: 'Sedimentos areno-argilosos', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'sedimentos do Quaternário areno-argilosos e arenosos.', sibcs_antigo: 'Planossolo Tb Distrófico A moderado textura arenosa/média fase floresta tropical subcaducifólia relevo plano.', wrb: '', soil_taxonomy: '', localizacao: 'campo experimental da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Plano', relevo_regional: 'Plano', descrito_coletado_por: 'Raphael David dos Santos e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '5', classe2: 'Comum', frequencia_sulcos2: 'Médio', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '4f916f67490d52acc476f6108692abc18a6eb287', key_proveniencia: '1ab7092248f07fa97e97d704c22d4522c42bc15e', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'T-41', data_coleta: '17/09/1998', tipo_observacao: 'Tradagem', latitude: '22,7538889', longitude: '43,6758333', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: '', pedregosidade: 'Não pedregosa', rochosidade: 'Não rochosa', drenagem: 'Imperfeitamente drenado', situacao_declive: '', vegetacao_primaria: 'Floresta tropical subcaducifólia', uso_atual: 'área preparada para pastagem.', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: 'Sedimentos areno-argilosos', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'sedimentos do Quaternário areno-argilosos e arenosos.', sibcs_antigo: 'Planossolo Tb Distrófico A moderado textura arenosa/média fase floresta tropical subcaducifólia relevo plano.', wrb: '', soil_taxonomy: '', localizacao: 'campo experimental da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Plano', relevo_regional: 'Plano', descrito_coletado_por: 'Raphael David dos Santos e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '5', classe2: 'Pouca', frequencia_sulcos2: 'Médio', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'eeb1057ac8044e8292f0fb97a96e78c575447c95', key_proveniencia: 'ca8032a4ce311bf7f776f1e97ae3bb06bf3fc461', key_projeto: 'ac93a252-1679-4eba-9f15-04d671b580f31234', nome: 'T-39', data_coleta: '14/09/1998', tipo_observacao: 'Tradagem', latitude: '22,7519444', longitude: '43,6750000', altitude: '', relacaoBA: '', datum: '', estado: 'RJ', municipio: 'Seropédica', observacao: 'área trabalhada para pastagem.', pedregosidade: 'Não pedregosa', rochosidade: 'Não rochosa', drenagem: 'Imperfeitamente drenado', situacao_declive: '', vegetacao_primaria: '', uso_atual: 'pastagem', koppen: '(tropical) - Quente, com chuvas de verão, temperatura média anual entre 19ºC e 28ºC, pluviosidade média inferior a 2.000 mm/ano', formacao_geologica: '', litologia: 'Sedimentos areno-siltosos', unidade_mapeamento: '', movimento_de_massa: '', cronologia: '', material_originario: 'sedimentos do Quaternário areno-argilosos e arenosos.', sibcs_antigo: 'Glei Pouco Húmico Tb Distrófico textura argilosa fase campo higrófilo de várzea relevo plano de várzea.', wrb: '', soil_taxonomy: '', localizacao: 'campo experimental da Fazendinha, km 47, Seropédica.', gilgai: '', classificacao_taxonomica: '', relevo_local: 'Plano', relevo_regional: 'Plano', descrito_coletado_por: 'Raphael David dos Santos e Aroaldo L. Lemos.', agente_causador1: '', forma1: '', classe1: '', frequencia_sulcos1: '', profundidade_sulcos1: '', agente_causador2: '', forma2: '4', classe2: 'Abundante', frequencia_sulcos2: 'Grande', profundidade_sulcos2: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
        ];
        for (const observacao of observacoes) {
            observacao.tipoDoc = 'Observacao';
            await ctx.stub.putState(observacao.key, Buffer.from(JSON.stringify(observacao)));
            console.info(`Observacoes ${observacao.key} initializados`);
        }

        // >>>>> HORIZONTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   
        const horizontes = [

            { key: 'fabc5e9bac7c7436722838c7d8b7d7744211aeff', key_proveniencia: '8bfe84f97eb6642a56bfd1394ab68326cbe1746b', key_observacao: '13f2c75746608613e0ad6b92541464289e103134', nome: 'Ap', transicao_topografia: 'Plana', transicao_nitidez: 'Gradual', limite_metodo: 'Limites_espessura', limite_inferior: '10', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '7.5YR', cor_valor2: '3', cor_croma2: '3.5', cor1: 'Bruno-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: 'Moderada', estrutura_tamanho: 'Pequena a media', estrutura_forma: 'Granular', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Argilo-arenosa', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'ef7fa9d7179563faaea5ab3912a2fcb678c99789', key_proveniencia: '7857fdb2356febe09a4c20154f8bddccea181c41', key_observacao: '13f2c75746608613e0ad6b92541464289e103134', nome: 'AB', transicao_topografia: 'Plana', transicao_nitidez: 'Gradual', limite_metodo: 'Limites_espessura', limite_inferior: '20', limite_superior: '10', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '7.5YR', cor_valor2: '4', cor_croma2: '6', cor1: 'Bruno-forte', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: 'Fraca a moderada', estrutura_tamanho: 'Pequena a media', estrutura_forma: 'Blocos subangulares', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Argilo-arenosa', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'ee89141d6b7e0f0b9fea2786cfaa1fcfd8f4aecd', key_proveniencia: '9e89a46046c064dbeca13df41d7a1e5f11f7f9b6', key_observacao: '13f2c75746608613e0ad6b92541464289e103134', nome: 'Bt1', transicao_topografia: 'Plana', transicao_nitidez: 'Gradual', limite_metodo: 'Limites_espessura', limite_inferior: '35', limite_superior: '20', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: 'Fraca', cerosidade_quantidade: 'Pouca', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '7.5YR', cor_valor2: '4', cor_croma2: '6', cor1: 'Bruno-forte', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: 'Moderada', estrutura_tamanho: 'Pequena a media', estrutura_forma: 'Blocos subangulares', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Argila', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'e5e8b2a237ced5cbe3bb6056298d7b4e6daa4796', key_proveniencia: '3378fccdb3fa1b57fd84d8aa4119eb151ccf66d5', key_observacao: '13f2c75746608613e0ad6b92541464289e103134', nome: 'Bt2', transicao_topografia: 'Plana', transicao_nitidez: 'Clara', limite_metodo: 'Limites_espessura', limite_inferior: '70', limite_superior: '35', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '6YR', cor_valor2: '4', cor_croma2: '6', cor1: 'Vermelho-amarelado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: 'Moderada', estrutura_tamanho: 'Media a grande', estrutura_forma: 'Blocos subangulares', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Argila', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'e29dbed0b9e9f9b31736915affa33dcc4d465b79', key_proveniencia: '66be03dcbc8fdace8ba3e8465cab0111a37afeb9', key_observacao: '13f2c75746608613e0ad6b92541464289e103134', nome: 'Bt3', transicao_topografia: 'Plana', transicao_nitidez: 'Clara', limite_metodo: 'Limites_espessura', limite_inferior: '80', limite_superior: '70', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: 'Moderada', cerosidade_quantidade: 'Comum', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '5YR', cor_valor2: '4', cor_croma2: '6', cor1: 'Vermelho-amarelado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: 'Moderada a forte', estrutura_tamanho: 'Media a grande', estrutura_forma: 'Blocos angulares', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Muito argilosa com cascalho', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'e107c87c343f2eb35b91a700e2257cc30d5585cb', key_proveniencia: 'd1fc01bbb4fc76ff75b5b099a2ed170c05392daa', key_observacao: '13f2c75746608613e0ad6b92541464289e103134', nome: 'Bt4', transicao_topografia: 'Plana', transicao_nitidez: 'Clara', limite_metodo: 'Limites_espessura', limite_inferior: '120', limite_superior: '80', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '3.5YR', cor_valor2: '4', cor_croma2: '6', cor1: 'Vermelho-amarelado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: 'Moderada a forte', estrutura_tamanho: 'Media a grande', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Muito argilosa (argila pesada)', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'de3d76ca4e699bf12821d16e77bf5d8a177cd2f6', key_proveniencia: '8a03184de156315221b42fdc5d0bb85d64ac8e34', key_observacao: '13f2c75746608613e0ad6b92541464289e103134', nome: 'BC', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '160', limite_superior: '120', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: 'Moderada', cerosidade_quantidade: 'Abundante', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '', cor_valor2: '', cor_croma2: '', cor1: '', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'dc0e4b2efdb5da15f3cf51e398983620db51ded2', key_proveniencia: '134d56732685e9ea854381f29884beb2c4f50789', key_observacao: 'd9fedc14fdda53c271f7b85f7af257e10f7cc1b9', nome: 'Ap', transicao_topografia: 'Plana', transicao_nitidez: 'Clara', limite_metodo: 'Limites_espessura', limite_inferior: '12', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '10YR', cor_valor1: '4', cor_croma1: '2', cor1: 'Bruno-acinzentado-escuro', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '3', cor_croma2: '3', cor1: 'Bruno-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: 'Forte', estrutura_tamanho: 'Pequena a media', estrutura_forma: 'Granular', consistencia_seco: '', consistencia_umido: 'Firme a friável', consistencia_molhada_pegajosidade: 'Muito pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Franco-argilo-arenosa', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'd69be08178fe90d46c77a2fed980111e4faf3084', key_proveniencia: 'f9ae683db8069faafad8e1b98c866d0524b1824e', key_observacao: 'd9fedc14fdda53c271f7b85f7af257e10f7cc1b9', nome: 'AB', transicao_topografia: 'Plana', transicao_nitidez: 'Gradual', limite_metodo: 'Limites_espessura', limite_inferior: '23', limite_superior: '12', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '4', cor_croma2: '3', cor1: 'Bruno-amarelado-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: 'Fraca', estrutura_tamanho: 'Pequena a media', estrutura_forma: 'Blocos subangulares', consistencia_seco: 'Ligeiramente dura', consistencia_umido: 'Muito friável', consistencia_molhada_pegajosidade: 'Muito pegajosa', consistencia_molhada_plasticidade: 'Muito plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Franco-argilo-arenosa', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'cb46011614ed6362ecc704f14dfcd8019a46972c', key_proveniencia: '571b4bac686afffe2ff73fb1eb43e48cc7981533', key_observacao: 'd9fedc14fdda53c271f7b85f7af257e10f7cc1b9', nome: 'BA', transicao_topografia: 'Plana', transicao_nitidez: 'Gradual', limite_metodo: 'Limites_espessura', limite_inferior: '43', limite_superior: '23', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '4', cor_croma2: '4', cor1: 'Bruno-amarelado-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: 'Moderada', estrutura_tamanho: 'Media', estrutura_forma: 'Blocos subangulares', consistencia_seco: 'Ligeiramente dura', consistencia_umido: 'Muito friável', consistencia_molhada_pegajosidade: 'Pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Argilo-arenosa', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'ca1b044ea7155fab20412b2565e0851bc7ecebd0', key_proveniencia: '9019ae66bdf78d020d227818bc5e01a85e8b55da', key_observacao: 'd9fedc14fdda53c271f7b85f7af257e10f7cc1b9', nome: 'Bt1', transicao_topografia: 'Plana', transicao_nitidez: 'Difusa', limite_metodo: 'Limites_espessura', limite_inferior: '84', limite_superior: '43', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: 'Moderada', cerosidade_quantidade: 'Comum', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '5', cor_croma2: '6', cor1: 'Bruno-amarelado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: 'Forte', estrutura_tamanho: 'Pequena a media', estrutura_forma: 'Blocos angulares', consistencia_seco: 'Dura', consistencia_umido: 'Muito friável', consistencia_molhada_pegajosidade: 'Pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Argila', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'c73ca70ae69432981fe702182c9c7c5b4fa49cb0', key_proveniencia: '7a528599f3f5a6f6b35f6788434369bda194d3ce', key_observacao: 'd9fedc14fdda53c271f7b85f7af257e10f7cc1b9', nome: 'Bt2', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '130', limite_superior: '84', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: 'Moderada', cerosidade_quantidade: 'Pouca', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '5', cor_croma2: '6', cor1: 'Bruno-amarelado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: 'Forte', estrutura_tamanho: 'Pequena a media', estrutura_forma: 'Blocos angulares', consistencia_seco: 'Dura', consistencia_umido: 'Muito friável', consistencia_molhada_pegajosidade: 'Pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Argila', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'c401abd751b50cfce80defe7d039e691659fad36', key_proveniencia: 'bb65e5936282b2f6a44e5569e4332c6dc21525d5', key_observacao: '32b4421f58e82811f4cfd361cc7eb3d70a9fdf5a', nome: 'O', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '0', limite_superior: '2', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '', cor_valor2: '', cor_croma2: '', cor1: '', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: 'Litologia: Sedimentos arenoargilosos e arenosos.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'c3f0e99cd42aedc71a7723b2b1299848ad16d501', key_proveniencia: '42debfadf87635e73e5d3b2e20b44ad898556fc4', key_observacao: '32b4421f58e82811f4cfd361cc7eb3d70a9fdf5a', nome: 'A1', transicao_topografia: 'Plana', transicao_nitidez: 'Gradual', limite_metodo: 'Limites_espessura', limite_inferior: '20', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '5', cor_croma2: '2', cor1: 'Bruno-acinzentado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: 'Grãos simples', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Não pegajosa', consistencia_molhada_plasticidade: 'Não-plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Areia', outros_cascalho: '', informacoes_complementares: 'Litologia: Sedimentos arenoargilosos e arenosos.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'c2a69e0d470a61db30fcc509943dfcb30fac1ae9', key_proveniencia: '38d747f2e839b74c842b93bd75f49b44c5858385', key_observacao: '32b4421f58e82811f4cfd361cc7eb3d70a9fdf5a', nome: 'A2', transicao_topografia: 'Plana', transicao_nitidez: 'Gradual', limite_metodo: 'Limites_espessura', limite_inferior: '35', limite_superior: '20', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '5', cor_croma2: '3', cor1: 'Bruno', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: 'Grãos simples', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Não pegajosa', consistencia_molhada_plasticidade: 'Não-plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Areia', outros_cascalho: '', informacoes_complementares: 'Litologia: Sedimentos arenoargilosos e arenosos.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'beb9973e085c175a5afe90c42a10eebf82b4f51e', key_proveniencia: '3e511da7577d1864871b760ab30e05b56943c9b2', key_observacao: '32b4421f58e82811f4cfd361cc7eb3d70a9fdf5a', nome: 'E1', transicao_topografia: 'Plana', transicao_nitidez: 'Gradual', limite_metodo: 'Limites_espessura', limite_inferior: '55', limite_superior: '35', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '6', cor_croma2: '3', cor1: 'Bruno-claro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: 'Grãos simples', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Não pegajosa', consistencia_molhada_plasticidade: 'Não-plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Areia', outros_cascalho: '', informacoes_complementares: 'Litologia: Sedimentos arenoargilosos e arenosos.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'bb21a0974d5f10ea0c75abf9997a20a91688ca35', key_proveniencia: '3497136edeb1c7440423c74dbca96a312f0a25d4', key_observacao: '32b4421f58e82811f4cfd361cc7eb3d70a9fdf5a', nome: 'E2', transicao_topografia: 'Plana', transicao_nitidez: 'Clara', limite_metodo: 'Limites_espessura', limite_inferior: '75', limite_superior: '55', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '6', cor_croma2: '4', cor1: 'Bruno-amarelado-claro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: 'Maciça que se desfaz', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Não pegajosa', consistencia_molhada_plasticidade: 'Não-plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Areia', outros_cascalho: '', informacoes_complementares: 'Litologia: Sedimentos arenoargilosos e arenosos.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'ba0c91667f7ec5f10e1fd1e991b49a4798903208', key_proveniencia: '575a79d1fe5c3ea0ff09cdff1da57aefc5939705', key_observacao: '32b4421f58e82811f4cfd361cc7eb3d70a9fdf5a', nome: 'Btg1', transicao_topografia: 'Plana', transicao_nitidez: 'Clara', limite_metodo: 'Limites_espessura', limite_inferior: '95', limite_superior: '75', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '6', cor_croma2: '4', cor1: 'Bruno-amarelado-claro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: 'Maciça que se desfaz', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Ligeiramente pegajosa', consistencia_molhada_plasticidade: 'Ligeiramente plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Franco-arenosa', outros_cascalho: '', informacoes_complementares: 'Litologia: Sedimentos arenoargilosos e arenosos.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'a58094723e0567b0bd48051c3d7940171032cea3', key_proveniencia: '773cd3cdb98b050be96be0f0aaba2f452f4c2363', key_observacao: '32b4421f58e82811f4cfd361cc7eb3d70a9fdf5a', nome: 'Btg2', transicao_topografia: 'Plana', transicao_nitidez: 'Clara', limite_metodo: 'Limites_espessura', limite_inferior: '115', limite_superior: '95', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '5', cor_croma2: '2', cor1: 'Bruno-acinzentado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: 'Maciça que se desfaz', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Franco-argilo-arenosa', outros_cascalho: '', informacoes_complementares: 'Litologia: Sedimentos arenoargilosos e arenosos.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'a14f4b2f2116615e397fcc0959aca944d6b968d5', key_proveniencia: '04b19ac4d387a21311d4429ae9fb2ceec5a7e99a', key_observacao: '32b4421f58e82811f4cfd361cc7eb3d70a9fdf5a', nome: 'Btg3', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '160', limite_superior: '115', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '6', cor_croma2: '1', cor1: 'Cinzento', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: 'Maciça que se desfaz', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Argilo-arenosa', outros_cascalho: '', informacoes_complementares: 'Litologia: Sedimentos arenoargilosos e arenosos.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '9deaee8740794c480d210a9c8deaff6eb2463483', key_proveniencia: 'd7b3c4383673ec9c28abb409602003237ff3e7c4', key_observacao: 'a361fd27bb8acb7581c07327c33327c845bfa7fb', nome: 'A1', transicao_topografia: 'Plana', transicao_nitidez: 'Gradual', limite_metodo: 'Limites_espessura', limite_inferior: '20', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '3', cor_croma2: '3', cor1: 'Bruno-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: 'Grãos simples', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Não pegajosa', consistencia_molhada_plasticidade: 'Não-plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Areia', outros_cascalho: '', informacoes_complementares: 'Litologia: sedimentos areno-argilosos e arenosos.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '9acdd280310031fd9fb97e06495e979995b14a5e', key_proveniencia: 'd0cf56e097b038f7e516adde2f82e9543692a49d', key_observacao: 'a361fd27bb8acb7581c07327c33327c845bfa7fb', nome: 'A2', transicao_topografia: 'Plana', transicao_nitidez: 'Gradual', limite_metodo: 'Limites_espessura', limite_inferior: '35', limite_superior: '20', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '4', cor_croma2: '3', cor1: 'Bruno', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: 'Grãos simples', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Não pegajosa', consistencia_molhada_plasticidade: 'Não-plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Areia', outros_cascalho: '', informacoes_complementares: 'Litologia: sedimentos areno-argilosos e arenosos.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '993ffb0265bf42d14e7a50eb497a06801ba7461d', key_proveniencia: '8452f142cb0915e230dc36a50cca4156e15dafdc', key_observacao: 'a361fd27bb8acb7581c07327c33327c845bfa7fb', nome: 'E', transicao_topografia: 'Plana', transicao_nitidez: 'Clara', limite_metodo: 'Limites_espessura', limite_inferior: '60', limite_superior: '35', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '5', cor_croma2: '3', cor1: 'Bruno', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: 'Maciça que se desfaz', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Não pegajosa', consistencia_molhada_plasticidade: 'Não-plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Areia', outros_cascalho: '', informacoes_complementares: 'Litologia: sedimentos areno-argilosos e arenosos.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '98e34c42f12a3611fd23c6abcb973637a8027038', key_proveniencia: 'f56c2250b6a6a291eb3f07e3fe78b1b61b97eaab', key_observacao: 'a361fd27bb8acb7581c07327c33327c845bfa7fb', nome: 'Btg1', transicao_topografia: 'Plana', transicao_nitidez: 'Difusa', limite_metodo: 'Limites_espessura', limite_inferior: '95', limite_superior: '60', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '5', cor_croma2: '2', cor1: 'Bruno-acinzentado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: 'Maciça que se desfaz', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Areia-franca', outros_cascalho: '', informacoes_complementares: 'Litologia: sedimentos areno-argilosos e arenosos.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '903d55fe49110071cd2f00fdcedc4ac1054fe143', key_proveniencia: 'a102fdf25d3727b96949cc5260ba1bcb48315f03', key_observacao: 'a361fd27bb8acb7581c07327c33327c845bfa7fb', nome: 'Btg2', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '160', limite_superior: '95', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '5', cor_croma2: '2', cor1: 'Bruno-acinzentado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: 'Maciça que se desfaz', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: 'Pegajosa', consistencia_molhada_plasticidade: 'Plástica', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Franco-argilo-arenosa', outros_cascalho: '', informacoes_complementares: 'Litologia: sedimentos areno-argilosos e arenosos.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '8b5ceaf9dc01683bd871b00e9b0d73efed3097c1', key_proveniencia: '15c5162c860795f4524a908df29926aa114ec41b', key_observacao: '64d7a02bfbf5b00c8c1c390557a264f0af41b1d6', nome: 'A', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '20', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '3', cor_croma2: '3', cor1: 'Bruno-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '820660a7bb7e09d3869752c895df42f8742f72d4', key_proveniencia: 'a4499596cc3871c25879f139a3e80ccf71d7fe61', key_observacao: '64d7a02bfbf5b00c8c1c390557a264f0af41b1d6', nome: 'B', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '90', limite_superior: '60', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '4', cor_croma2: '4', cor1: 'Bruno-amarelado-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '726921aa8536da3db6c6fa271c237ded8ff41d21', key_proveniencia: '10fb39519f43b71217973475b198cd7a6150abcd', key_observacao: 'd86503ab2ec9d4e6b2503a56898030563e1aa8e3', nome: 'Ap', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '20', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '', cor_valor2: '', cor_croma2: '', cor1: '', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Franco-argilo-arenosa', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '6d6f4521164cf33b73fcb8d197190cb260b689f4', key_proveniencia: '8cfaa9f6e0933f542c0aea577e080b5dea6487e5', key_observacao: 'd86503ab2ec9d4e6b2503a56898030563e1aa8e3', nome: 'Bt1', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '80', limite_superior: '60', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '', cor_valor2: '', cor_croma2: '', cor1: '', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Argilo-arenosa', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '6aea0cbd6b22b51f16066d8f033cd6b4bd0c4262', key_proveniencia: 'e8514244883622c98c18a4b5f9bd3a720b36877a', key_observacao: 'b50b5f131f24502131814c98636d9e78dabb9be6', nome: 'Ap', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '20', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '', cor_valor2: '', cor_croma2: '', cor1: '', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Franco-arenosa', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '680c144fc2e503f7438d1a90a3b82a846494a1c2', key_proveniencia: '4389c3e760a570a7785e99aef9ed7182abf217ba', key_observacao: 'b50b5f131f24502131814c98636d9e78dabb9be6', nome: 'Bt1', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '70', limite_superior: '50', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '', cor_valor2: '', cor_croma2: '', cor1: '', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Argilo-arenosa', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '657dd1af30e07df847be4f52807c53c84a8b23d1', key_proveniencia: '4a3a4c7a3292b289706d302d100b57b6e776c0c2', key_observacao: '7c68d8fcd7a7d58b120b9c2f19d0c71cb7f5c42e', nome: 'Ap', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '20', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '7.5YR', cor_valor2: '3', cor_croma2: '2', cor1: 'Bruno-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '56346fe82a0f92870542575d8ce7ef9ed8e372b3', key_proveniencia: '7dab13953b2604f3e27835c4487a0d4bfdae58cc', key_observacao: '7c68d8fcd7a7d58b120b9c2f19d0c71cb7f5c42e', nome: 'Bt2', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '100', limite_superior: '80', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '2.5YR', cor_valor2: '4', cor_croma2: '8', cor1: 'Vermelho', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '46fb1d9f19c84211ae91ef17d2248d3e9d681771', key_proveniencia: '996ef69422694d1e8193947c515f1d1c2b6274c0', key_observacao: '81c364a9dae86fa17ad74a44f1f7fa86be005007', nome: 'Ap', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '10', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '4', cor_croma2: '3', cor1: 'Bruno-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '4267e945815a791bc73543e456a9931f355e21e7', key_proveniencia: '1005631db50f66d0b2f7538a6895718a74c8b143', key_observacao: '81c364a9dae86fa17ad74a44f1f7fa86be005007', nome: 'Bt1', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '70', limite_superior: '50', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '5', cor_croma2: '4', cor1: 'Bruno-amarelado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '3e20888fc81bba23435887230506cf726de8e46b', key_proveniencia: '725247a1e99cc87b7807980f39716f24ba870c0d', key_observacao: '81c364a9dae86fa17ad74a44f1f7fa86be005007', nome: 'Bt2', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '90', limite_superior: '70', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '3', cor_croma2: '4', cor1: 'Bruno-amarelado-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '3c79417329f514d2be59957caf2f09b2c5eab773', key_proveniencia: '27472eea400f0c559b61bd786fda14a864a01c7e', key_observacao: '3c43076927091194ca066d92026f5e755d36170b', nome: 'A', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '15', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '3', cor_croma2: '3', cor1: 'Bruno-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '2fabdbf1e8bf9985d55979a42a9d2622c31283e9', key_proveniencia: '29c7aaac91de9178ebb2ff78a1972b017d629905', key_observacao: '3c43076927091194ca066d92026f5e755d36170b', nome: 'E', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '60', limite_superior: '40', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '10YR', cor_valor2: '4', cor_croma2: '4', cor1: 'Bruno-amarelado-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '2eec4fa1008c929ff98b466665873aaccf6a1627', key_proveniencia: '06ab4797d5bce3ff8d88e7000c467615e4efd67b', key_observacao: '6dec29b27b448e25fe55e8e0b09d3845f2b286d6', nome: 'Ap', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '20', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '', cor_valor2: '', cor_croma2: '', cor1: '', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Areia', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '292dd5c6c130c17e99e9ba3285433b5671c27e6f', key_proveniencia: '77c0259a675f4c158e49ef28fab29a88f9081399', key_observacao: '6dec29b27b448e25fe55e8e0b09d3845f2b286d6', nome: 'Bt', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '90', limite_superior: '60', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '', cor_valor2: '', cor_croma2: '', cor1: '', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: 'Franco-argilo-arenosa', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '255d1facf178aceefe647cff7601729b15851171', key_proveniencia: '24ee036ef8f437c45898bccd4a0ae5b7b441cae1', key_observacao: 'd2675657b683358a58da19651229fb796da425f3', nome: 'A1', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '20', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '7.5YR', cor_valor2: '', cor_croma2: '4', cor1: 'Cinzento-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '1fc3358e8c7b547b01c47323ae5999915bc1887c', key_proveniencia: 'c19def0ab03e264ed60a79de90718d0d401950e7', key_observacao: 'd2675657b683358a58da19651229fb796da425f3', nome: 'E', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '60', limite_superior: '30', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '2.5YR', cor_valor2: '5', cor_croma2: '2', cor1: 'Bruno-acinzentado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '1b6b9e0f5114aa05a831ff57975b10d7ef211d1f', key_proveniencia: '80a649ce6ce6122fbdd06481e887e0e3b8218520', key_observacao: 'd2675657b683358a58da19651229fb796da425f3', nome: 'Btg', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '100', limite_superior: '80', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '2.5YR', cor_valor2: '5', cor_croma2: '2', cor1: 'Bruno-acinzentado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '1aec49e499d270f67775ab3b4216f5417995227e', key_proveniencia: '9c70ca651ddd72c55f9e2e57846a674b7d61c230', key_observacao: '91a2a4a7e3041b294e4576c9ddf61c46cf114e4d', nome: 'A', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '20', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '5YR', cor_valor2: '4', cor_croma2: '1', cor1: 'Cinzento-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '1579fa9c00fb528ea29cd9def770e95ddb7345a1', key_proveniencia: '9aadc81c59b73dfdb3a132b679cacce4d80ffe8d', key_observacao: '91a2a4a7e3041b294e4576c9ddf61c46cf114e4d', nome: 'E', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '50', limite_superior: '20', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '2.5YR', cor_valor2: '6', cor_croma2: '2', cor1: 'Cinzento-brunado-claro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '0f4dad20a0746999d2e654b99ce41af553236dda', key_proveniencia: '0113adf58dc93c408023b48fd524a53868f38a04', key_observacao: '91a2a4a7e3041b294e4576c9ddf61c46cf114e4d', nome: 'Btg', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '110', limite_superior: '80', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '', cor_valor2: '', cor_croma2: '5', cor1: 'Cinzento', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '0df7a9485beeed3dba5f0a7dc8aa065d60daa069', key_proveniencia: '90bbcb3934d06114ad716f1881f066ac3c7dd5ec', key_observacao: '4f916f67490d52acc476f6108692abc18a6eb287', nome: 'Ap', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '20', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '2.5Y', cor_valor2: '4', cor_croma2: '2', cor1: 'Bruno-acinzentado-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '0b666e07784498777d019c4cb552f3725952f353', key_proveniencia: 'f2410f9ce42dadf84d6420b03b23182153bbb198', key_observacao: '4f916f67490d52acc476f6108692abc18a6eb287', nome: 'E', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '60', limite_superior: '30', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '2.5Y', cor_valor2: '5', cor_croma2: '2', cor1: 'Bruno-acinzentado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '0751c9f65f06b7cd19f5262477a2e9d0e6df3cc1', key_proveniencia: 'bebf6569c850c04396d81f8917fe13402343d591', key_observacao: '4f916f67490d52acc476f6108692abc18a6eb287', nome: 'Btg', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '110', limite_superior: '70', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '', cor_valor2: '5', cor_croma2: '1', cor1: 'Cinzento', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: '', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '064150232a41e5291b5b610a86c1ce31e311f73a', key_proveniencia: '7ef29dddb53efe2c4865f4c1c96940d59e94561c', key_observacao: 'eeb1057ac8044e8292f0fb97a96e78c575447c95', nome: 'Ap', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '10', limite_superior: '0', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '2.5Y', cor_valor2: '4', cor_croma2: '2', cor1: 'Bruno-acinzentado-escuro', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: 'Vegetação primária: campo higrófilo de várzea; Relevo local: plano de várzea; Relevo regional: plano de várzea.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '05b4be6ce3cd546f9bfc94235174ec29731cfe90', key_proveniencia: '8fffea1bc10dde669f903470e943d47ad1f7e38d', key_observacao: 'eeb1057ac8044e8292f0fb97a96e78c575447c95', nome: '2g', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '30', limite_superior: '10', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '2.5Y', cor_valor2: '5', cor_croma2: '2', cor1: 'Bruno-acinzentado', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: 'Vegetação primária: campo higrófilo de várzea; Relevo local: plano de várzea; Relevo regional: plano de várzea.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '02e999abee8f06486c5cb1161e3a82caa4da96ad', key_proveniencia: '955b13b07c06ca9ea4d4cdbf71f1a95eae21f676', key_observacao: 'eeb1057ac8044e8292f0fb97a96e78c575447c95', nome: '3g', transicao_topografia: '', transicao_nitidez: '', limite_metodo: 'Limites_espessura', limite_inferior: '90', limite_superior: '60', transicao_inferior: '', transicao_superior: '', espessura: '', cerosidade_grau: '', cerosidade_quantidade: '', cor_tipo: 'corSimples', cor_matiz1: '', cor_valor1: '', cor_croma1: '', cor1: '', cor_umidade1: 'seco', cor_matiz2: '5Y', cor_valor2: '5', cor_croma2: '1', cor1: 'Cinzento', cor_umidade2: 'umido', estrutura_tipo: 'Agregado', estrutura_grau: '', estrutura_tamanho: '', estrutura_forma: '', consistencia_seco: '', consistencia_umido: '', consistencia_molhada_pegajosidade: '', consistencia_molhada_plasticidade: '', compressao_tipo: 'Fosca', compressao_quantidade: '', compressao_grau: '', friccao_quantidade: '', friccao_tamanho: '', friccao_grau: '', eflorescencia_quantidade: '', eflorescencia_local: '', eflorescencia_natureza: '', poros_quantidade: '', poros_diametro: '', raiz_tipo: '', raiz_diametro: '', raiz_quantidade: '', nodulos_e_concrecoes_quantidade: '', nodulos_e_concrecoes_tamanho: '', nodulos_e_concrecoes_dureza: '', nodulos_e_concrecoes_natureza: '', nodulos_e_concrecoes_forma: '', nodulos_e_concrecoes_cor: '', outros_coesao: '', outros_cimentacao: '', outros_sulfeto: '', outros_magnetismo: '', outros_manganes: '', outros_carbonato: '', outros_textura: '', outros_cascalho: '', informacoes_complementares: 'Vegetação primária: campo higrófilo de várzea; Relevo local: plano de várzea; Relevo regional: plano de várzea.', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },

        ];
        for (const hor of horizontes) {
            hor.tipoDoc = 'Horizonte';
            await ctx.stub.putState(hor.key, Buffer.from(JSON.stringify(hor)));
            console.info(`Horizontes ${hor.key} initializados`);
        }

        // >>>>>>>>>>>> PROVENIENCIA
        const proveniencias = [

            // // >>> Proveniencia ORGAO
            // {
            //     key: '24df7a93-ef12-45de-bff0-6a30b16dbdfb1234',
            //     key_elemento: '239a5445-374d-455e-9b88-47c1dcd65b301234',
            //     usuario_criador: 'appUser',
            //     nome_criador: 'Sabrina Oliveira',
            //     usuario_alterador: 'appUser',
            //     nome_alterador: 'Élton Marinho',
            //     ip: '',
            //     geoLocalizacao_range: '',
            //     geoLocalizacao_country: '',
            //     geoLocalizacao_region: '',
            //     geoLocalizacao_eu: '',
            //     geoLocalizacao_timezone: '',
            //     geoLocalizacao_city: '',
            //     geoLocalizacao_ll: '',
            //     geoLocalizacao_metro: '',
            //     geoLocalizacao_area: '',
            //     software_version: 'Pentaho Data Integration 7.1',
            //     software_browser: '',

            //     status: 'Registro incluído',
            //     excluido: false,
            //     data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
            // },

            // >>> Proveniencia PROJETO
            { key: 'ba85d59a-4f50-40ae-ac5c-8f62d69b2a621234', key_elemento: 'ac93a252-1679-4eba-9f15-04d671b580f31234', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },

            // >>> Proveniencia ASSOCIACAO
            { key: 'a0683526da2dcfc9ac9a5ab546b35a379c49c060', key_elemento: 'd88861bebed6f36de35385f879925edf8353d313', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },

            // >>> Proveniencia OBSERVACAO
            { key: '654cec2f0483e2f9fc7f8efb353dd3def830420b', key_elemento: '13f2c75746608613e0ad6b92541464289e103134', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '059f7de55a4297413bfbd432ce7d6e724dd42bae', key_elemento: 'd9fedc14fdda53c271f7b85f7af257e10f7cc1b9', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '76f228f0a9dae870ad250cf8d67590017766ee0a', key_elemento: '32b4421f58e82811f4cfd361cc7eb3d70a9fdf5a', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '3bd5717abb673d0c26b7f6356e86610bad746385', key_elemento: 'a361fd27bb8acb7581c07327c33327c845bfa7fb', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '7ebb26a08c7b2d74c414dfc2138e38c665c08927', key_elemento: '64d7a02bfbf5b00c8c1c390557a264f0af41b1d6', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'c328f85005bfdf68add404e2107f483940e610b9', key_elemento: 'd86503ab2ec9d4e6b2503a56898030563e1aa8e3', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'aeab822f387179e528b212b78a410f553f467fab', key_elemento: 'b50b5f131f24502131814c98636d9e78dabb9be6', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '7a3748d4f3ad1fcf6f5efb81db9ed3c465b581f1', key_elemento: '7c68d8fcd7a7d58b120b9c2f19d0c71cb7f5c42e', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'de517a0459bc818bcf02dbdb047c98605137264c', key_elemento: '81c364a9dae86fa17ad74a44f1f7fa86be005007', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '5e443c003151351b220521f436b12a2ccdd82f6e', key_elemento: '3c43076927091194ca066d92026f5e755d36170b', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '6c7dbb98b9dd36d5523dfff87ab185e6e1139e49', key_elemento: '6dec29b27b448e25fe55e8e0b09d3845f2b286d6', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'f88e2329a20fc105246d3d777a1f8418131fcd9f', key_elemento: 'd2675657b683358a58da19651229fb796da425f3', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '108465dc626d197ea29fdf5a89f4ecef4b68becd', key_elemento: '91a2a4a7e3041b294e4576c9ddf61c46cf114e4d', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '1ab7092248f07fa97e97d704c22d4522c42bc15e', key_elemento: '4f916f67490d52acc476f6108692abc18a6eb287', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'ca8032a4ce311bf7f776f1e97ae3bb06bf3fc461', key_elemento: 'eeb1057ac8044e8292f0fb97a96e78c575447c95', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },

            // >>> Proveniencia HORIZONTE
            { key: '8bfe84f97eb6642a56bfd1394ab68326cbe1746b', key_elemento: 'fabc5e9bac7c7436722838c7d8b7d7744211aeff', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '7857fdb2356febe09a4c20154f8bddccea181c41', key_elemento: 'ef7fa9d7179563faaea5ab3912a2fcb678c99789', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '9e89a46046c064dbeca13df41d7a1e5f11f7f9b6', key_elemento: 'ee89141d6b7e0f0b9fea2786cfaa1fcfd8f4aecd', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '3378fccdb3fa1b57fd84d8aa4119eb151ccf66d5', key_elemento: 'e5e8b2a237ced5cbe3bb6056298d7b4e6daa4796', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '66be03dcbc8fdace8ba3e8465cab0111a37afeb9', key_elemento: 'e29dbed0b9e9f9b31736915affa33dcc4d465b79', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'd1fc01bbb4fc76ff75b5b099a2ed170c05392daa', key_elemento: 'e107c87c343f2eb35b91a700e2257cc30d5585cb', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '8a03184de156315221b42fdc5d0bb85d64ac8e34', key_elemento: 'de3d76ca4e699bf12821d16e77bf5d8a177cd2f6', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '134d56732685e9ea854381f29884beb2c4f50789', key_elemento: 'dc0e4b2efdb5da15f3cf51e398983620db51ded2', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'f9ae683db8069faafad8e1b98c866d0524b1824e', key_elemento: 'd69be08178fe90d46c77a2fed980111e4faf3084', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '571b4bac686afffe2ff73fb1eb43e48cc7981533', key_elemento: 'cb46011614ed6362ecc704f14dfcd8019a46972c', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '9019ae66bdf78d020d227818bc5e01a85e8b55da', key_elemento: 'ca1b044ea7155fab20412b2565e0851bc7ecebd0', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '7a528599f3f5a6f6b35f6788434369bda194d3ce', key_elemento: 'c73ca70ae69432981fe702182c9c7c5b4fa49cb0', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'bb65e5936282b2f6a44e5569e4332c6dc21525d5', key_elemento: 'c401abd751b50cfce80defe7d039e691659fad36', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '42debfadf87635e73e5d3b2e20b44ad898556fc4', key_elemento: 'c3f0e99cd42aedc71a7723b2b1299848ad16d501', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '38d747f2e839b74c842b93bd75f49b44c5858385', key_elemento: 'c2a69e0d470a61db30fcc509943dfcb30fac1ae9', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '3e511da7577d1864871b760ab30e05b56943c9b2', key_elemento: 'beb9973e085c175a5afe90c42a10eebf82b4f51e', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '3497136edeb1c7440423c74dbca96a312f0a25d4', key_elemento: 'bb21a0974d5f10ea0c75abf9997a20a91688ca35', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '575a79d1fe5c3ea0ff09cdff1da57aefc5939705', key_elemento: 'ba0c91667f7ec5f10e1fd1e991b49a4798903208', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '773cd3cdb98b050be96be0f0aaba2f452f4c2363', key_elemento: 'a58094723e0567b0bd48051c3d7940171032cea3', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '04b19ac4d387a21311d4429ae9fb2ceec5a7e99a', key_elemento: 'a14f4b2f2116615e397fcc0959aca944d6b968d5', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'd7b3c4383673ec9c28abb409602003237ff3e7c4', key_elemento: '9deaee8740794c480d210a9c8deaff6eb2463483', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'd0cf56e097b038f7e516adde2f82e9543692a49d', key_elemento: '9acdd280310031fd9fb97e06495e979995b14a5e', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '8452f142cb0915e230dc36a50cca4156e15dafdc', key_elemento: '993ffb0265bf42d14e7a50eb497a06801ba7461d', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'f56c2250b6a6a291eb3f07e3fe78b1b61b97eaab', key_elemento: '98e34c42f12a3611fd23c6abcb973637a8027038', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'a102fdf25d3727b96949cc5260ba1bcb48315f03', key_elemento: '903d55fe49110071cd2f00fdcedc4ac1054fe143', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '15c5162c860795f4524a908df29926aa114ec41b', key_elemento: '8b5ceaf9dc01683bd871b00e9b0d73efed3097c1', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'a4499596cc3871c25879f139a3e80ccf71d7fe61', key_elemento: '820660a7bb7e09d3869752c895df42f8742f72d4', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '10fb39519f43b71217973475b198cd7a6150abcd', key_elemento: '726921aa8536da3db6c6fa271c237ded8ff41d21', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '8cfaa9f6e0933f542c0aea577e080b5dea6487e5', key_elemento: '6d6f4521164cf33b73fcb8d197190cb260b689f4', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'e8514244883622c98c18a4b5f9bd3a720b36877a', key_elemento: '6aea0cbd6b22b51f16066d8f033cd6b4bd0c4262', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '4389c3e760a570a7785e99aef9ed7182abf217ba', key_elemento: '680c144fc2e503f7438d1a90a3b82a846494a1c2', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '4a3a4c7a3292b289706d302d100b57b6e776c0c2', key_elemento: '657dd1af30e07df847be4f52807c53c84a8b23d1', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '7dab13953b2604f3e27835c4487a0d4bfdae58cc', key_elemento: '56346fe82a0f92870542575d8ce7ef9ed8e372b3', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '996ef69422694d1e8193947c515f1d1c2b6274c0', key_elemento: '46fb1d9f19c84211ae91ef17d2248d3e9d681771', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '1005631db50f66d0b2f7538a6895718a74c8b143', key_elemento: '4267e945815a791bc73543e456a9931f355e21e7', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '725247a1e99cc87b7807980f39716f24ba870c0d', key_elemento: '3e20888fc81bba23435887230506cf726de8e46b', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '27472eea400f0c559b61bd786fda14a864a01c7e', key_elemento: '3c79417329f514d2be59957caf2f09b2c5eab773', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '29c7aaac91de9178ebb2ff78a1972b017d629905', key_elemento: '2fabdbf1e8bf9985d55979a42a9d2622c31283e9', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '06ab4797d5bce3ff8d88e7000c467615e4efd67b', key_elemento: '2eec4fa1008c929ff98b466665873aaccf6a1627', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '77c0259a675f4c158e49ef28fab29a88f9081399', key_elemento: '292dd5c6c130c17e99e9ba3285433b5671c27e6f', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '24ee036ef8f437c45898bccd4a0ae5b7b441cae1', key_elemento: '255d1facf178aceefe647cff7601729b15851171', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'c19def0ab03e264ed60a79de90718d0d401950e7', key_elemento: '1fc3358e8c7b547b01c47323ae5999915bc1887c', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '80a649ce6ce6122fbdd06481e887e0e3b8218520', key_elemento: '1b6b9e0f5114aa05a831ff57975b10d7ef211d1f', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '9c70ca651ddd72c55f9e2e57846a674b7d61c230', key_elemento: '1aec49e499d270f67775ab3b4216f5417995227e', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '9aadc81c59b73dfdb3a132b679cacce4d80ffe8d', key_elemento: '1579fa9c00fb528ea29cd9def770e95ddb7345a1', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '0113adf58dc93c408023b48fd524a53868f38a04', key_elemento: '0f4dad20a0746999d2e654b99ce41af553236dda', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '90bbcb3934d06114ad716f1881f066ac3c7dd5ec', key_elemento: '0df7a9485beeed3dba5f0a7dc8aa065d60daa069', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'f2410f9ce42dadf84d6420b03b23182153bbb198', key_elemento: '0b666e07784498777d019c4cb552f3725952f353', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: 'bebf6569c850c04396d81f8917fe13402343d591', key_elemento: '0751c9f65f06b7cd19f5262477a2e9d0e6df3cc1', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '7ef29dddb53efe2c4865f4c1c96940d59e94561c', key_elemento: '064150232a41e5291b5b610a86c1ce31e311f73a', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '8fffea1bc10dde669f903470e943d47ad1f7e38d', key_elemento: '05b4be6ce3cd546f9bfc94235174ec29731cfe90', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },
            { key: '955b13b07c06ca9ea4d4cdbf71f1a95eae21f676', key_elemento: '02e999abee8f06486c5cb1161e3a82caa4da96ad', usuario_criador: 'appUser', nome_criador: 'Sabrina Oliveira', usuario_alterador: 'appUser', nome_alterador: 'Élton Marinho', ip: '', geoLocalizacao_range: '', geoLocalizacao_country: '', geoLocalizacao_region: '', geoLocalizacao_eu: '', geoLocalizacao_timezone: '', geoLocalizacao_city: '', geoLocalizacao_ll: '', geoLocalizacao_metro: '', geoLocalizacao_area: '', software_version: 'Pentaho Data Integration 7.1', software_browser: '', status: 'Registro incluído', excluido: false, data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'), },

        ]
        for (const proveniencia of proveniencias) {
            proveniencia.tipoDoc = 'Proveniencia';
            await ctx.stub.putState(proveniencia.key, Buffer.from(JSON.stringify(proveniencia)));
            console.info(`Proveniência dos Projetos ${proveniencia.key} initializadas`);
        }
    }

    async listar_entidade(ctx, tipoDoc, campo, valorCampo) {
        console.log('Chaincode tipoDoc: ' + tipoDoc);
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const { key, value } of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            var campoProcurado = 'key';
            switch (campo) {
                case 'key_orgao':
                    campoProcurado = record.key_orgao;
                    break;
                case 'key_projeto':
                    campoProcurado = record.key_projeto;
                    break;
                case 'key_observacao':
                    campoProcurado = record.key_observacao;
                    break;
                case 'key_horizonte':
                    campoProcurado = record.key_horizonte;
                    break;
                case 'key_amostra':
                    campoProcurado = record.key_amostra;
                    break;
                case 'key_analise':
                    campoProcurado = record.key_analise;
                    break;
                default:
                    campoProcurado = null;
                    break;
            }

            if (!record.excluido && record.tipoDoc === tipoDoc && (campoProcurado == valorCampo || campo === "" || campo == null)) {
                allResults.push({ Key: key, Record: record });
            }
        }
        console.log(allResults);
        return allResults;
    }

    async listar_blockchain(ctx) {
        console.log('Listar toda a blockchain');
        const startKey = '';
        const endKey = '';
        const results = [];
        
        let chave_elemento = '';
        for await (const { key, value } of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }

            if ( record.tipoDoc === 'Proveniencia') {
                chave_elemento = record.key_elemento

                let iterator = await ctx.stub.getHistoryForKey(key);
                let res = await iterator.next(); // { done: false };
                while (!res.done) {
                    let val = res.value.value.toString('utf8');
                    //results.push( val );
                    results.push({ Key: key, Record: JSON.parse(val) });
                    res = await iterator.next();
                }
                iterator.close();

                let iterator1 = await ctx.stub.getHistoryForKey(chave_elemento);
                let res1 = await iterator1.next(); // { done: false };
                while (!res1.done) {
                    let val1 = res1.value.value.toString('utf8');
                    //results.push( val );
                    results.push({ Key: chave_elemento, Record: JSON.parse(val1) });
                    res1 = await iterator1.next();
                }
                iterator1.close();
            }

        }            
        return results;
    }

    async listar_excluidos(ctx) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const { key, value } of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }

            if (record.tipoDoc === 'Proveniencia' && record.excluido) {
                allResults.push(record);
            }
        }
        console.log(allResults);
        return JSON.stringify(allResults);
    }

    async consultar_identificador(ctx, elemento) {
        const elementoAsBytes = await ctx.stub.getState(elemento);
        if (!elementoAsBytes || elementoAsBytes.length === 0) {
            return 0
            //throw new Error(`${elemento} does not exist`);
        } else {
            return elementoAsBytes.toString();
        }
    }

    async consultar_dadosAssociados(ctx, id, tipoDocDestino) {
        console.log('Chaincode tipoDoc: <<ENTIDADE>>');
        const startKey = '';
        const endKey = '';

        const allResults = [];
        for await (const { key, value } of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }

            var campoProcurado = 'record.key_analise';
            switch (tipoDocDestino) {
                // case 'Projeto':
                //     campoProcurado = record.key_projeto;
                //     break;
                case 'Observacao':
                    campoProcurado = record.key_projeto;
                    break;
                case 'Horizonte':
                    campoProcurado = record.key_observacao;
                    break;
                case 'Amostra':
                    campoProcurado = record.key_horizonte;
                    break;
                case 'Analise':
                    campoProcurado = record.key_amostra;
                    break;
                default:
                    campoProcurado = 'record.key_analise';
                    break;
            }
            if (record.tipoDoc === tipoDocDestino && campoProcurado === id) {
                allResults.push({ Key: key, Record: record });
            }
        }
        console.log(allResults);
        //            return JSON.stringify(allResults);
        return allResults;
    }

    // async excluir(ctx,
    //     elemento,
    //     user,               // usuario que criou ou fez a ultima alteracao              
    //     user_name,          // usuario que criou ou fez a ultima alteracao    
    //     ip,
    //     geoLocalizacao_range,
    //     geoLocalizacao_country,
    //     geoLocalizacao_region,
    //     geoLocalizacao_eu,
    //     geoLocalizacao_timezone,
    //     geoLocalizacao_city,
    //     geoLocalizacao_ll,
    //     geoLocalizacao_metro,
    //     geoLocalizacao_area,
    //     software_version,
    //     software_browser
    // ) {

    //     var exclusao = {};
    //     const exclusaoAsBytes = await ctx.stub.getState(elemento);
    //     exclusao = JSON.parse(exclusaoAsBytes.toString());

    //     if (exclusao.tipoDoc != 'Proveniencia') {

    //         const x = exclusao.key_proveniencia;

    //         // Exclusão do elemento de WorldStateDatabase
    //         await ctx.stub.deleteState(elemento);

    //         // Atualizando Proveniência
    //         var prov = {};
    //         const provAsBytes = await ctx.stub.getState(x);
    //         prov = JSON.parse(provAsBytes.toString());
    //         prov.key_elemento = elemento;
    //         prov.usuario_alterador = user;
    //         prov.nome_alterador = user_name;
    //         prov.ip = ip;
    //         prov.geoLocalizacao_range = geoLocalizacao_range;
    //         prov.geoLocalizacao_country = geoLocalizacao_country;
    //         prov.geoLocalizacao_region = geoLocalizacao_region;
    //         prov.geoLocalizacao_eu = geoLocalizacao_eu;
    //         prov.geoLocalizacao_timezone = geoLocalizacao_timezone;
    //         prov.geoLocalizacao_city = geoLocalizacao_city;
    //         prov.geoLocalizacao_ll = geoLocalizacao_ll;
    //         prov.geoLocalizacao_metro = geoLocalizacao_metro;
    //         prov.geoLocalizacao_area = geoLocalizacao_area;
    //         prov.software_version = software_version;
    //         prov.software_browser = software_browser;
    //         prov.status = "Registro excluído";
    //         prov.excluido = true;
    //         prov.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
    //         const p = await ctx.stub.putState(x, Buffer.from(JSON.stringify(prov)));
    //         return p
    //     } else {
    //         return 0 //'Não é possível excluir registros de Proveniência'
    //     }
    // }

    async excluir(ctx,
        elemento,
        user,               // usuario que criou ou fez a ultima alteracao              
        user_name,          // usuario que criou ou fez a ultima alteracao    
        ip,
        geoLocalizacao_range,
        geoLocalizacao_country,
        geoLocalizacao_region,
        geoLocalizacao_eu,
        geoLocalizacao_timezone,
        geoLocalizacao_city,
        geoLocalizacao_ll,
        geoLocalizacao_metro,
        geoLocalizacao_area,
        software_version,
        software_browser
    ) {

        var exclusao = {};
        const exclusaoAsBytes = await ctx.stub.getState(elemento);
        exclusao = JSON.parse(exclusaoAsBytes.toString());
        if (exclusao.tipoDoc != 'Proveniencia') {
            exclusao.excluido = true;
            exclusao.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
            const exc = await ctx.stub.putState(elemento, Buffer.from(JSON.stringify(exclusao)));

            // Marcando status na Proveniência
            var prov = {};
            const provAsBytes = await ctx.stub.getState(exclusao.key_proveniencia);
            prov = JSON.parse(provAsBytes.toString());
            prov.usuario_alterador = user;
            prov.nome_alterador = user_name;
            prov.ip = ip;
            prov.geoLocalizacao_range = geoLocalizacao_range;
            prov.geoLocalizacao_country = geoLocalizacao_country;
            prov.geoLocalizacao_region = geoLocalizacao_region;
            prov.geoLocalizacao_eu = geoLocalizacao_eu;
            prov.geoLocalizacao_timezone = geoLocalizacao_timezone;
            prov.geoLocalizacao_city = geoLocalizacao_city;
            prov.geoLocalizacao_ll = geoLocalizacao_ll;
            prov.geoLocalizacao_metro = geoLocalizacao_metro;
            prov.geoLocalizacao_area = geoLocalizacao_area;
            prov.software_version = software_version;
            prov.software_browser = software_browser;
            prov.status = "Registro excluído";
            prov.excluido = true;
            prov.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
            const p = await ctx.stub.putState(exclusao.key_proveniencia, Buffer.from(JSON.stringify(prov)));

            return exc, p
        }    
    }

    async historico(ctx, elemento) {
        let iterator = await ctx.stub.getHistoryForKey(elemento);
        let result = [];
        let res = await iterator.next();
        while (!res.done) {
            if (res.value) {
                // console.info(`found state update with value: ${res.value.value.toString('utf8')}`);
                 const obj = JSON.parse(res.value.value.toString('utf8'));
                 result.push(obj);
                //result.push(res);
            }
            res = await iterator.next();
        }
        await iterator.close();
        return result;
    }

    // async incAlt_Orgao(ctx,
    //     key,
    //     key_proveniencia,
    //     nome,
    //     referencia,
    //     ano,
    //     tipo_problema,
    //     nivel_levantamento,
    //     contato_nome,
    //     contato_email,
    //     contato_telefone,
    //     motivo,
    //     tipo_instituicao,
    //     abrangencia,
    //     // Proveniencia
    //     user,
    //     user_name,
    //     ip,
    //     geoLocalizacao_range,
    //     geoLocalizacao_country,
    //     geoLocalizacao_region,
    //     geoLocalizacao_eu,
    //     geoLocalizacao_timezone,
    //     geoLocalizacao_city,
    //     geoLocalizacao_ll,
    //     geoLocalizacao_metro,
    //     geoLocalizacao_area,
    //     software_version,
    //     software_browser,
    //     status,         

    // ) {

    //     console.info('============= START : Orgao ===========');

    //     var orgao = {};

    //     const orgaoAsBytes = await ctx.stub.getState(key);
    //     if (!orgaoAsBytes || orgaoAsBytes.length === 0) {
    //         orgao = {
    //             key,
    //             key_proveniencia,
    //             nome,
    //             referencia,
    //             ano,
    //             tipo_problema,
    //             nivel_levantamento,
    //             contato_nome,
    //             contato_email,
    //             contato_telefone,
    //             motivo,
    //             tipo_instituicao,
    //             abrangencia,
    //             excluido: false,
    //             tipoDoc: 'Orgao',
    //             data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
    //         }
    //     } else {
    //         orgao = JSON.parse(orgaoAsBytes.toString());
    //         orgao.key = key;
    //         orgao.key_proveniencia = key_proveniencia;

    //         orgao.nome = nome;
    //         orgao.referencia = referencia;
    //         orgao.ano = ano;
    //         orgao.tipo_problema = tipo_problema;
    //         orgao.nivel_levantamento = nivel_levantamento;
    //         orgao.contato_nome = contato_nome;
    //         orgao.contato_email = contato_email;
    //         orgao.contato_telefone = contato_telefone;
    //         orgao.motivo = motivo;
    //         orgao.tipo_instituicao = tipo_instituicao;
    //         orgao.abrangencia = abrangencia;
    //         orgao.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
    //     }
    //     await ctx.stub.putState(key, Buffer.from(JSON.stringify(orgao)));
    //     console.info('============= END : Orgao ===========');
    //     console.info('============= START : Proveniencia ===========');
    //     var proveniencia = {};
    //     const provenienciaAsBytes = await ctx.stub.getState(key_proveniencia);
    //     if (!provenienciaAsBytes || provenienciaAsBytes.length === 0) {
    //         proveniencia = {
    //             key_proveniencia,
    //             key,
    //             usuario_criador: user,                
    //             nome_criador: user_name,            
    //             usuario_alterador: user,            
    //             nome_alterador: user_name,          
    //             ip,
    //             geoLocalizacao_range,
    //             geoLocalizacao_country,
    //             geoLocalizacao_region,
    //             geoLocalizacao_eu,
    //             geoLocalizacao_timezone,
    //             geoLocalizacao_city,
    //             geoLocalizacao_ll,
    //             geoLocalizacao_metro,
    //             geoLocalizacao_area,
    //             software_version,
    //             software_browser,
    //             tipoDoc: 'Proveniencia',
    //             status,
    //             data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
    //         };
    //     } else {
    //         proveniencia = JSON.parse(provenienciaAsBytes.toString());
    //         proveniencia.key = key_proveniencia;
    //         proveniencia.key_elemento = key;
    //         proveniencia.usuario_alterador = user;
    //         proveniencia.nome_alterador = user_name;
    //         proveniencia.ip = ip;
    //         proveniencia.geoLocalizacao_range = geoLocalizacao_range;
    //         proveniencia.geoLocalizacao_country = geoLocalizacao_country;
    //         proveniencia.geoLocalizacao_region = geoLocalizacao_region;
    //         proveniencia.geoLocalizacao_eu = geoLocalizacao_eu;
    //         proveniencia.geoLocalizacao_timezone = geoLocalizacao_timezone;
    //         proveniencia.geoLocalizacao_city = geoLocalizacao_city;
    //         proveniencia.geoLocalizacao_ll = geoLocalizacao_ll;
    //         proveniencia.geoLocalizacao_metro = geoLocalizacao_metro;
    //         proveniencia.geoLocalizacao_area = geoLocalizacao_area;
    //         proveniencia.software_version = software_version;
    //         proveniencia.software_browser = software_browser;
    //         proveniencia.data_alteracao = new Date().toString('yyyy-MM-dd hh:mm:ss');
    //         proveniencia.status = status;
    //         proveniencia.excluido = false;
    //         proveniencia.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
    //     }
    //     await ctx.stub.putState(proveniencia.key, Buffer.from(JSON.stringify(proveniencia)));
    //     console.info('============= END : Proveniencia ===========');             
    // }

    async incAlt_Projeto(ctx,
        key,
        key_proveniencia,
        nome,
        sigla,
        pais,
        estado,
        municipio,
        aberto,
        abrangencia,
        //Proveniencia
        user,
        user_name,
        ip,
        geoLocalizacao_range,
        geoLocalizacao_country,
        geoLocalizacao_region,
        geoLocalizacao_eu,
        geoLocalizacao_timezone,
        geoLocalizacao_city,
        geoLocalizacao_ll,
        geoLocalizacao_metro,
        geoLocalizacao_area,
        software_version,
        software_browser,
        status,
    ) {
        console.info('============= START : Projeto ===========');
        var projeto = {};
        const projetoAsBytes = await ctx.stub.getState(key); 
        if (!projetoAsBytes || projetoAsBytes.length === 0) {
            projeto = {
                key,
                key_proveniencia,
                nome,
                sigla,
                pais,
                estado,
                municipio,
                aberto,
                abrangencia,
                excluido: false,
                tipoDoc: 'Projeto',
                data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
            };
        } else {
            projeto = JSON.parse(projetoAsBytes.toString());
            // projeto.key = key;
            // projeto.key_proveniencia = key_proveniencia;
            projeto.nome = nome;
            projeto.sigla = sigla;
            projeto.pais = pais;
            projeto.estado = estado;
            projeto.municipio = municipio;
            projeto.aberto = aberto;
            projeto.abrangencia = abrangencia;
            // projeto.excluido = false;
            // projeto.tipoDoc = 'Projeto';
            projeto.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
        }
        await ctx.stub.putState(key, Buffer.from(JSON.stringify(projeto)));
        console.info('============= END : Projeto ===========');       

        console.info('============= START : Proveniencia ===========');
        var proveniencia = {};
        const provenienciaAsBytes = await ctx.stub.getState(projeto.key_proveniencia);
        if (!provenienciaAsBytes || provenienciaAsBytes.length === 0) {
            proveniencia = {
                key: key_proveniencia,
                key_elemento: key,
                usuario_criador: user,                          
                nome_criador: user_name,              
                usuario_alterador: user,                            
                nome_alterador: user_name,          
                ip,
                geoLocalizacao_range,
                geoLocalizacao_country,
                geoLocalizacao_region,
                geoLocalizacao_eu,
                geoLocalizacao_timezone,
                geoLocalizacao_city,
                geoLocalizacao_ll,
                geoLocalizacao_metro,
                geoLocalizacao_area,
                software_version,
                software_browser,
                tipoDoc: 'Proveniencia',
                status,
                data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss')
            };
            await ctx.stub.putState(proveniencia.key, Buffer.from(JSON.stringify(proveniencia)));
        } else {
            proveniencia = JSON.parse(provenienciaAsBytes.toString());
            // proveniencia.key = projeto.key_proveniencia;
            // proveniencia.key_elemento = key;
            proveniencia.usuario_alterador = user;
            proveniencia.nome_alterador = user_name;
            proveniencia.ip = ip;
            proveniencia.geoLocalizacao_range = geoLocalizacao_range;
            proveniencia.geoLocalizacao_country = geoLocalizacao_country;
            proveniencia.geoLocalizacao_region = geoLocalizacao_region;
            proveniencia.geoLocalizacao_eu = geoLocalizacao_eu;
            proveniencia.geoLocalizacao_timezone = geoLocalizacao_timezone;
            proveniencia.geoLocalizacao_city = geoLocalizacao_city;
            proveniencia.geoLocalizacao_ll = geoLocalizacao_ll;
            proveniencia.geoLocalizacao_metro = geoLocalizacao_metro;
            proveniencia.geoLocalizacao_area = geoLocalizacao_area;
            proveniencia.software_version = software_version;
            proveniencia.software_browser = software_browser;
            proveniencia.usuario_alterador = user;                        
            proveniencia.nome_alterador = user_name;          
            proveniencia.status = status;
            proveniencia.excluido = false;
            proveniencia.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
            await ctx.stub.putState(proveniencia.key, Buffer.from(JSON.stringify(proveniencia)));
        }
        console.info('============= END :  Proveniencia ===========');        
    }

    async incAlt_Observacao(ctx,
        key,
        key_proveniencia,
        key_projeto,
        nome,
        data_coleta,
        tipo_observacao,
        latitude,
        longitude,
        altitude,
        relacaoBA,
        datum,
        estado,
        municipio,
        pedregosidade,
        rochosidade,
        drenagem,
        situacao_declive,
        vegetacao_primaria,
        uso_atual,
        koppen,
        formacao_geologica,
        litologia,
        unidade_mapeamento,
        movimento_de_massa,
        cronologia,
        material_originario,
        sibcs_antigo,
        wrb,
        soil_taxonomy,
        localizacao,
        gilgai,
        classificacao_taxonomica,
        relevo_local,
        relevo_regional,
        comentario,
        agente_causador1,
        forma1,
        classe1,
        frequencia_sulcos1,
        profundidade_sulcos1,
        agente_causador2,
        forma2,
        classe2,
        frequencia_sulcos2,
        profundidade_sulcos2,
        descrito_coletado_por,
        // Proveniencia
        user,
        user_name,
        ip,
        geoLocalizacao_range,
        geoLocalizacao_country,
        geoLocalizacao_region,
        geoLocalizacao_eu,
        geoLocalizacao_timezone,
        geoLocalizacao_city,
        geoLocalizacao_ll,
        geoLocalizacao_metro,
        geoLocalizacao_area,
        software_version,
        software_browser,
        status,
    ) {

        console.info('============= START : changeObservacao ===========');

        var observacao = {};
        const observacaoAsBytes = await ctx.stub.getState(key);
        if (!observacaoAsBytes || observacaoAsBytes.length === 0) {

            observacao = {
                key,
                key_proveniencia,
                key_projeto,
                nome,
                data_coleta,
                tipo_observacao,
                latitude,
                longitude,
                altitude,
                relacaoBA,
                datum,
                estado,
                municipio,
                pedregosidade,
                rochosidade,
                drenagem,
                situacao_declive,
                vegetacao_primaria,
                uso_atual,
                koppen,
                formacao_geologica,
                litologia,
                unidade_mapeamento,
                movimento_de_massa,
                cronologia,
                material_originario,
                sibcs_antigo,
                wrb,
                soil_taxonomy,
                localizacao,
                gilgai,
                classificacao_taxonomica,
                relevo_local,
                relevo_regional,
                comentario,
                agente_causador1,
                forma1,
                classe1,
                frequencia_sulcos1,
                profundidade_sulcos1,
                agente_causador2,
                forma2,
                classe2,
                frequencia_sulcos2,
                profundidade_sulcos2,
                descrito_coletado_por,
                excluido: false,
                tipoDoc: 'Observacao',
                data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
            };
        } else {niencia.key = projeto.key_proveniencia;
            // proveniencia.k
            observacao = JSON.parse(observacaoAsBytes.toString());
            // observacao.key = key;
            // observacao.key_proveniencia = key_proveniencia;
            observacao.key_projeto = key_projeto;
            observacao.nome = nome;
            observacao.data_coleta = data_coleta;
            observacao.tipo_observacao = tipo_observacao;
            observacao.latitude = latitude;
            observacao.longitude = longitude;
            observacao.altitude = altitude;
            observacao.relacaoBA = relacaoBA;
            observacao.datum = datum;
            observacao.estado = estado;
            observacao.municipio = municipio;
            observacao.pedregosidade = pedregosidade;
            observacao.rochosidade = rochosidade;
            observacao.drenagem = drenagem;
            observacao.situacao_declive = situacao_declive;
            observacao.vegetacao_primaria = vegetacao_primaria;
            observacao.uso_atual = uso_atual;
            observacao.koppen = koppen;
            observacao.formacao_geologica = formacao_geologica;
            observacao.litologia = litologia;
            observacao.unidade_mapeamento = unidade_mapeamento;
            observacao.movimento_de_massa = movimento_de_massa;
            observacao.cronologia = cronologia;
            observacao.material_originario = material_originario;
            observacao.sibcs_antigo = sibcs_antigo;
            observacao.wrb = wrb;
            observacao.soil_taxonomy = soil_taxonomy;
            observacao.localizacao = localizacao;
            observacao.gilgai = gilgai;
            observacao.classificacao_taxonomica = classificacao_taxonomica;
            observacao.relevo_local = relevo_local;
            observacao.relevo_regional = relevo_regional;
            observacao.comentario = comentario;
            observacao.agente_causador1 = agente_causador1;
            observacao.forma1 = forma1;
            observacao.classe1 = classe1;
            observacao.frequencia_sulcos1 = frequencia_sulcos1;
            observacao.profundidade_sulcos1 = profundidade_sulcos1;
            observacao.agente_causador2 = agente_causador2;
            observacao.forma2 = forma2;
            observacao.classe2 = classe2;
            observacao.frequencia_sulcos2 = frequencia_sulcos2;
            observacao.profundidade_sulcos2 = profundidade_sulcos2;
            observacao.descrito_coletado_por = descrito_coletado_por;

            observacao.excluido = false;
            observacao.tipoDoc = 'Observacao';
            observacao.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
        }
        await ctx.stub.putState(key, Buffer.from(JSON.stringify(observacao)));
        console.info('============= END : Observacao ===========');
        console.info('============= START :  Proveniencia ===========');
        var proveniencia = {};
        const provenienciaAsBytes = await ctx.stub.getState(observacao.key_proveniencia);
        if (!provenienciaAsBytes || provenienciaAsBytes.length === 0) {
            proveniencia = {
                key: key_proveniencia,
                key_elemento: key,
                usuario_criador: user,                
                nome_criador: user_name,            
                usuario_alterador: user,            
                nome_alterador: user_name,          
                ip,
                geoLocalizacao_range,
                geoLocalizacao_country,
                geoLocalizacao_region,
                geoLocalizacao_eu,
                geoLocalizacao_timezone,
                geoLocalizacao_city,
                geoLocalizacao_ll,
                geoLocalizacao_metro,
                geoLocalizacao_area,
                software_version,
                software_browser,
                tipoDoc: 'Proveniencia',
                status,
                data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
            };
        } else {
            proveniencia = JSON.parse(provenienciaAsBytes.toString());
            proveniencia.key = key_proveniencia;
            proveniencia.key_elemento = key;
            proveniencia.usuario_alterador = user;
            proveniencia.nome_alterador = user_name;
            proveniencia.ip = ip;
            proveniencia.geoLocalizacao_range = geoLocalizacao_range;
            proveniencia.geoLocalizacao_country = geoLocalizacao_country;
            proveniencia.geoLocalizacao_region = geoLocalizacao_region;
            proveniencia.geoLocalizacao_eu = geoLocalizacao_eu;
            proveniencia.geoLocalizacao_timezone = geoLocalizacao_timezone;
            proveniencia.geoLocalizacao_city = geoLocalizacao_city;
            proveniencia.geoLocalizacao_ll = geoLocalizacao_ll;
            proveniencia.geoLocalizacao_metro = geoLocalizacao_metro;
            proveniencia.geoLocalizacao_area = geoLocalizacao_area;
            proveniencia.software_version = software_version;
            proveniencia.software_browser = software_browser;
            proveniencia.data_alteracao = new Date().toString('yyyy-MM-dd hh:mm:ss');
            proveniencia.status = status;
            proveniencia.excluido = false;
            proveniencia.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
        }
        await ctx.stub.putState(proveniencia.key, Buffer.from(JSON.stringify(proveniencia)));
        console.info('============= END : Proveniencia ===========');        
    }

    async incAlt_Horizonte(ctx,
        key,
        key_proveniencia,
        key_observacao,
        nome,
        transicao_topografia,
        transicao_nitidez,
        limite_metodo,
        limite_inferior,
        limite_superior,
        transicao_inferior,
        transicao_superior,
        espessura,
        cerosidade_grau,
        cerosidade_quantidade,
        cor_tipo,
        cor_matiz1,
        cor_valor1,
        cor_croma1,
        cor_umidade1,
        cor_matiz2,
        cor_valor2,
        cor_croma2,
        cor_umidade2,
        estrutura_tipo,
        estrutura_grau,
        estrutura_tamanho,
        estrutura_forma,
        consistencia_seco,
        consistencia_umido,
        consistencia_molhada_pegajosidade,
        consistencia_molhada_plasticidade,
        compressao_tipo,
        compressao_quantidade,
        compressao_grau,        
        friccao_quantidade,
        friccao_tamanho,
        friccao_grau,
        eflorescencia_quantidade,
        eflorescencia_local,
        eflorescencia_natureza,
        poros_quantidade,
        poros_diametro,
        raiz_tipo,
        raiz_diametro,
        raiz_quantidade,
        nodulos_e_concrecoes_quantidade,        
        nodulos_e_concrecoes_tamanho,
        nodulos_e_concrecoes_dureza,
        nodulos_e_concrecoes_natureza,
        nodulos_e_concrecoes_forma,
        nodulos_e_concrecoes_cor,
        outros_coesao,
        outros_cimentacao,
        outros_sulfeto,
        outros_magnetismo,
        outros_manganes,
        outros_carbonato,
        outros_textura,
        outros_cascalho,
        observacao,
        // Proveniencia
        user,
        user_name,
        ip,
        geoLocalizacao_range,
        geoLocalizacao_country,
        geoLocalizacao_region,
        geoLocalizacao_eu,
        geoLocalizacao_timezone,
        geoLocalizacao_city,
        geoLocalizacao_ll,
        geoLocalizacao_metro,
        geoLocalizacao_area,
        software_version,
        software_browser,
        status,        
    ) {
        console.info('============= START : Horizonte ===========');
        var horizonte = {};
        const elementoAsBytes = await ctx.stub.getState(key); // get the car from chaincode state
        if (!elementoAsBytes || elementoAsBytes.length === 0) {

            horizonte = {
                key,
                key_proveniencia,
                key_observacao,
                nome,
                transicao_topografia,
                transicao_nitidez,
                limite_metodo,
                limite_inferior,
                limite_superior,
                transicao_inferior,
                transicao_superior,
                espessura,
                cerosidade_grau,
                cerosidade_quantidade,
                cor_tipo,
                cor_matiz1,
                cor_valor1,
                cor_croma1,
                cor_umidade1,
                cor_matiz2,
                cor_valor2,
                cor_croma2,
                cor_umidade2,
                estrutura_tipo,
                estrutura_grau,
                estrutura_tamanho,
                estrutura_forma,
                consistencia_seco,
                consistencia_umido,
                consistencia_molhada_pegajosidade,
                consistencia_molhada_plasticidade,
                compressao_tipo,
                compressao_quantidade,
                compressao_grau,
                friccao_quantidade,
                friccao_tamanho,
                friccao_grau,
                eflorescencia_quantidade,
                eflorescencia_local,
                eflorescencia_natureza,
                poros_quantidade,
                poros_diametro,
                raiz_tipo,
                raiz_diametro,
                raiz_quantidade,
                nodulos_e_concrecoes_quantidade,
                nodulos_e_concrecoes_tamanho,
                nodulos_e_concrecoes_dureza,
                nodulos_e_concrecoes_natureza,
                nodulos_e_concrecoes_forma,
                nodulos_e_concrecoes_cor,
                outros_coesao,
                outros_cimentacao,
                outros_sulfeto,
                outros_magnetismo,
                outros_manganes,
                outros_carbonato,
                outros_textura,
                outros_cascalho,
                observacao,
                excluido: false,
                tipoDoc: 'Horizonte',
                data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
            }
        } else {
            horizonte = JSON.parse(elementoAsBytes.toString());
            // horizonte.key = key;
            // horizonte.key_proveniencia = key_proveniencia;
            horizonte.key_observacao = key_observacao;
            horizonte.nome = nome;
            horizonte.transicao_topografia = transicao_topografia;
            horizonte.transicao_nitidez = transicao_nitidez;
            horizonte.limite_metodo = limite_metodo;
            horizonte.limite_inferior = limite_inferior;
            horizonte.limite_superior = limite_superior;
            horizonte.transicao_inferior = transicao_inferior;
            horizonte.transicao_superior = transicao_superior;
            horizonte.espessura = espessura;
            horizonte.cerosidade_grau = cerosidade_grau;
            horizonte.cerosidade_quantidade = cerosidade_quantidade;
            horizonte.cor_tipo = cor_tipo;
            horizonte.cor_matiz1 = cor_matiz1;
            horizonte.cor_valor1 = cor_valor1;
            horizonte.cor_croma1 = cor_croma1;
            horizonte.cor_umidade1 = cor_umidade1;
            horizonte.cor_matiz2 = cor_matiz2;
            horizonte.cor_valor2 = cor_valor2;
            horizonte.cor_croma2 = cor_croma2;
            horizonte.cor_umidade2 = cor_umidade2;
            horizonte.estrutura_tipo = estrutura_tipo;
            horizonte.estrutura_grau = estrutura_grau;
            horizonte.estrutura_tamanho = estrutura_tamanho;
            horizonte.estrutura_forma = estrutura_forma;
            horizonte.consistencia_seco = consistencia_seco;
            horizonte.consistencia_umido = consistencia_umido;
            horizonte.consistencia_molhada_pegajosidade = consistencia_molhada_pegajosidade;
            horizonte.consistencia_molhada_plasticidade = consistencia_molhada_plasticidade;
            horizonte.compressao_tipo = compressao_tipo;
            horizonte.compressao_quantidade = compressao_quantidade;
            horizonte.compressao_grau = compressao_grau;
            horizonte.friccao_quantidade = friccao_quantidade;
            horizonte.friccao_tamanho = friccao_tamanho;
            horizonte.friccao_grau = friccao_grau;
            horizonte.eflorescencia_quantidade = eflorescencia_quantidade;
            horizonte.eflorescencia_local = eflorescencia_local;
            horizonte.eflorescencia_natureza = eflorescencia_natureza;
            horizonte.poros_quantidade = poros_quantidade;
            horizonte.poros_diametro = poros_diametro;
            horizonte.raiz_tipo = raiz_tipo;
            horizonte.raiz_diametro = raiz_diametro;
            horizonte.raiz_quantidade = raiz_quantidade;
            horizonte.nodulos_e_concrecoes_quantidade = nodulos_e_concrecoes_quantidade;
            horizonte.nodulos_e_concrecoes_tamanho = nodulos_e_concrecoes_tamanho;
            horizonte.nodulos_e_concrecoes_dureza = nodulos_e_concrecoes_dureza;
            horizonte.nodulos_e_concrecoes_natureza = nodulos_e_concrecoes_natureza;
            horizonte.nodulos_e_concrecoes_forma = nodulos_e_concrecoes_forma;
            horizonte.nodulos_e_concrecoes_cor = nodulos_e_concrecoes_cor;
            horizonte.outros_coesao = outros_coesao;
            horizonte.outros_cimentacao = outros_cimentacao;
            horizonte.outros_sulfeto = outros_sulfeto;
            horizonte.outros_magnetismo = outros_magnetismo;
            horizonte.outros_manganes = outros_manganes;
            horizonte.outros_carbonato = outros_carbonato;
            horizonte.outros_textura = outros_textura;
            horizonte.outros_cascalho = outros_cascalho;
            horizonte.excluido = false;
            horizonte.tipoDoc = 'Horizonte';
            horizonte.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
        }
        await ctx.stub.putState(key, Buffer.from(JSON.stringify(horizonte)));
        console.info('============= END : Create Horizonte ===========');
        console.info('============= START :  Proveniencia ===========');
        var proveniencia = {};
        const provenienciaAsBytes = await ctx.stub.getState(horizonte.key_proveniencia);
        if (!provenienciaAsBytes || provenienciaAsBytes.length === 0) {
            proveniencia = {
                key: key_proveniencia,
                key_elemento: key,
                usuario_criador: user,                
                nome_criador: user_name,            
                usuario_alterador: user,            
                nome_alterador: user_name,          
                ip,
                geoLocalizacao_range,
                geoLocalizacao_country,
                geoLocalizacao_region,
                geoLocalizacao_eu,
                geoLocalizacao_timezone,
                geoLocalizacao_city,
                geoLocalizacao_ll,
                geoLocalizacao_metro,
                geoLocalizacao_area,
                software_version,
                software_browser,
                tipoDoc: 'Proveniencia',
                status,
                data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
            };
        } else {
            proveniencia = JSON.parse(provenienciaAsBytes.toString());
            proveniencia.key = key_proveniencia;
            proveniencia.key_elemento = key;
            proveniencia.usuario_alterador = user;
            proveniencia.nome_alterador = user_name;
            proveniencia.ip = ip;
            proveniencia.geoLocalizacao_range = geoLocalizacao_range;
            proveniencia.geoLocalizacao_country = geoLocalizacao_country;
            proveniencia.geoLocalizacao_region = geoLocalizacao_region;
            proveniencia.geoLocalizacao_eu = geoLocalizacao_eu;
            proveniencia.geoLocalizacao_timezone = geoLocalizacao_timezone;
            proveniencia.geoLocalizacao_city = geoLocalizacao_city;
            proveniencia.geoLocalizacao_ll = geoLocalizacao_ll;
            proveniencia.geoLocalizacao_metro = geoLocalizacao_metro;
            proveniencia.geoLocalizacao_area = geoLocalizacao_area;
            proveniencia.software_version = software_version;
            proveniencia.software_browser = software_browser;
            proveniencia.data_alteracao = new Date().toString('yyyy-MM-dd hh:mm:ss');
            proveniencia.status = status;
            proveniencia.excluido = false;
            proveniencia.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
        }
        await ctx.stub.putState(proveniencia.key, Buffer.from(JSON.stringify(proveniencia)));
        console.info('============= END : Proveniencia ===========');        


    }

    async incAlt_Amostra(ctx,
        key,
        key_proveniencia,
        key_horizonte,
        nome,
        comentario,
        // Proveniencia
        user,
        user_name,
        ip,
        geoLocalizacao_range,
        geoLocalizacao_country,
        geoLocalizacao_region,
        geoLocalizacao_eu,
        geoLocalizacao_timezone,
        geoLocalizacao_city,
        geoLocalizacao_ll,
        geoLocalizacao_metro,
        geoLocalizacao_area,
        software_version,
        software_browser,
        status,     
    ) {
        console.info('============= START : Amostra ===========');
        var amostra = {};
        const elementoAsBytes = await ctx.stub.getState(key); // get the car from chaincode state
        if (!elementoAsBytes || elementoAsBytes.length === 0) {

            amostra = {
                key,
                key_proveniencia,
                key_horizonte,
                nome,
                comentario,
                excluido: false,
                tipoDoc: 'Amostra',
                data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
            }
        } else {
            amostra = JSON.parse(elementoAsBytes.toString());
            // amostra.key = key;
            // amostra.key_proveniencia = key_proveniencia;
            amostra.key_horizonte = key_horizonte;
            amostra.nome = nome;
            amostra.comentario = comentario;
            amostra.excluido = false;
            amostra.tipoDoc = 'Amostra';
            amostra.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
        }
        await ctx.stub.putState(key, Buffer.from(JSON.stringify(amostra)));
        console.info('============= END :  Amostra ===========');
        console.info('============= START :  Proveniencia ===========');
        var proveniencia = {};
        const provenienciaAsBytes = await ctx.stub.getState(amostra.key_proveniencia);
        if (!provenienciaAsBytes || provenienciaAsBytes.length === 0) {
            proveniencia = {
                key: key_proveniencia,
                key_elemento: key,
                usuario_criador: user,                
                nome_criador: user_name,            
                usuario_alterador: user,            
                nome_alterador: user_name,          
                ip,
                geoLocalizacao_range,
                geoLocalizacao_country,
                geoLocalizacao_region,
                geoLocalizacao_eu,
                geoLocalizacao_timezone,
                geoLocalizacao_city,
                geoLocalizacao_ll,
                geoLocalizacao_metro,
                geoLocalizacao_area,
                software_version,
                software_browser,
                tipoDoc: 'Proveniencia',
                status,
                data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
            };
        } else {
            proveniencia = JSON.parse(provenienciaAsBytes.toString());
            proveniencia.key = key_proveniencia;
            proveniencia.key_elemento = key;
            proveniencia.usuario_alterador = user;
            proveniencia.nome_alterador = user_name;
            proveniencia.ip = ip;
            proveniencia.geoLocalizacao_range = geoLocalizacao_range;
            proveniencia.geoLocalizacao_country = geoLocalizacao_country;
            proveniencia.geoLocalizacao_region = geoLocalizacao_region;
            proveniencia.geoLocalizacao_eu = geoLocalizacao_eu;
            proveniencia.geoLocalizacao_timezone = geoLocalizacao_timezone;
            proveniencia.geoLocalizacao_city = geoLocalizacao_city;
            proveniencia.geoLocalizacao_ll = geoLocalizacao_ll;
            proveniencia.geoLocalizacao_metro = geoLocalizacao_metro;
            proveniencia.geoLocalizacao_area = geoLocalizacao_area;
            proveniencia.software_version = software_version;
            proveniencia.software_browser = software_browser;
            proveniencia.data_alteracao = new Date().toString('yyyy-MM-dd hh:mm:ss');
            proveniencia.status = status;
            proveniencia.excluido = false;
            proveniencia.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
        }
        await ctx.stub.putState(proveniencia.key, Buffer.from(JSON.stringify(proveniencia)));
        console.info('============= END : Proveniencia ===========');     
    }   
    
    async incAlt_Analise(ctx,
        key,
        key_proveniencia,
        key_amostra,
        nome,
        resultado,
        // Proveniencia
        user,
        user_name,
        ip,
        geoLocalizacao_range,
        geoLocalizacao_country,
        geoLocalizacao_region,
        geoLocalizacao_eu,
        geoLocalizacao_timezone,
        geoLocalizacao_city,
        geoLocalizacao_ll,
        geoLocalizacao_metro,
        geoLocalizacao_area,
        software_version,
        software_browser,
        status,             
    ) {
        console.info('============= START : Create Analise ===========');
        var analise = {};
        const elementoAsBytes = await ctx.stub.getState(key); // get the car from chaincode state
        if (!elementoAsBytes || elementoAsBytes.length === 0) {

            analise = {
                key,
                key_proveniencia,
                key_amostra,
                nome,
                resultado,
                excluido: false,
                tipoDoc: 'Analise',
                data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
            }
        } else {
            analise = JSON.parse(elementoAsBytes.toString());
            // analise.key = key;
            // analise.key_proveniencia = key_proveniencia;
            analise.key_amostra = key_amostra;
            analise.nome = nome;
            analise.resultado = resultado;
            analise.excluido = false;
            analise.tipoDoc = 'Analise';
            analise.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
        }
        await ctx.stub.putState(key, Buffer.from(JSON.stringify(analise)));
        console.info('============= END : Analise ===========');
        console.info('============= START : Proveniencia ===========');
        var proveniencia = {};
        const provenienciaAsBytes = await ctx.stub.getState(analise.key_proveniencia);
        if (!provenienciaAsBytes || provenienciaAsBytes.length === 0) {
            proveniencia = {
                key: key_proveniencia,
                key_elemento: key,

                usuario_criador: user,                
                nome_criador: user_name,            
                usuario_alterador: user,            
                nome_alterador: user_name,          
                ip,
                geoLocalizacao_range,
                geoLocalizacao_country,
                geoLocalizacao_region,
                geoLocalizacao_eu,
                geoLocalizacao_timezone,
                geoLocalizacao_city,
                geoLocalizacao_ll,
                geoLocalizacao_metro,
                geoLocalizacao_area,
                software_version,
                software_browser,
                tipoDoc: 'Proveniencia',
                status,
                data_criacao: new Date().toString('yyyy-MM-dd hh:mm:ss'),
            };
        } else {
            proveniencia = JSON.parse(provenienciaAsBytes.toString());
            proveniencia.key = key_proveniencia;
            proveniencia.key_elemento = key;
            proveniencia.usuario_alterador = user;
            proveniencia.nome_alterador = user_name;
            proveniencia.ip = ip;
            proveniencia.geoLocalizacao_range = geoLocalizacao_range;
            proveniencia.geoLocalizacao_country = geoLocalizacao_country;
            proveniencia.geoLocalizacao_region = geoLocalizacao_region;
            proveniencia.geoLocalizacao_eu = geoLocalizacao_eu;
            proveniencia.geoLocalizacao_timezone = geoLocalizacao_timezone;
            proveniencia.geoLocalizacao_city = geoLocalizacao_city;
            proveniencia.geoLocalizacao_ll = geoLocalizacao_ll;
            proveniencia.geoLocalizacao_metro = geoLocalizacao_metro;
            proveniencia.geoLocalizacao_area = geoLocalizacao_area;
            proveniencia.software_version = software_version;
            proveniencia.software_browser = software_browser;
            proveniencia.data_alteracao = new Date().toString('yyyy-MM-dd hh:mm:ss');
            proveniencia.status = status;
            proveniencia.excluido = false;
            proveniencia.data_criacao = new Date().toString('yyyy-MM-dd hh:mm:ss');
        }
        await ctx.stub.putState(proveniencia.key, Buffer.from(JSON.stringify(proveniencia)));
        console.info('============= END : Proveniencia ===========');             
    }   

}

module.exports = provchain;