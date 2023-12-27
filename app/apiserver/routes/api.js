const express = require("express")
const router = express.Router()

// Solução - inicio - Elton 
router.use(express.urlencoded({ extended: true }))
router.use(express.json())
// Solução - termino - Elton

// Setting for Hyperledger Fabric
const { Gateway, Wallets } = require('fabric-network');
const path = require('path');
const fs = require('fs');
const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

const Handlebars = require("handlebars");
const { userInfo } = require("os");
const { v4: uuid } = require('uuid');
const { json } = require("body-parser");

const navigator = require("navigator");
console.log("User-agent header: " + navigator.userAgent);

const ip = require("ip");
console.log("ip.address(): " + ip.address());


// ==============================================
const geoip = require('geoip-lite');
//console.log(geoip.lookup(ip.address()));
const geoLocalizacao = geoip.lookup("146.164.24.48");
//const geoLocalizacao = geoip.lookup(ip.address());

//===============================================

// Define the helper
Handlebars.registerHelper('json', function (context, options) {
        return JSON.stringify(context, null, 2);
});

Handlebars.registerHelper('switch', function (value, options) {
        this.switch_value = value;
        this.switch_break = false;
        return options.fn(this);
});

Handlebars.registerHelper('case', function (value, options) {
        if (value == this.switch_value) {
                this.switch_break = true;
                return options.fn(this);
        }
});

Handlebars.registerHelper('default', function (value, options) {
        if (this.switch_break == false) {
                return value;
        }
});

// ***************************************************************************************************************
// Consultas 
router.get('/busca/:key', async function (req, res) {
        console.log("===> /api/busca/" + req.params.key);
        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }

                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');


                // Evaluate the specified transaction.
                const result = await contract.evaluateTransaction('consultar_identificador', req.params.key);

                res.render('api/exibeBusca', {
                        result: result,
                })

        } catch (error) {
                console.log("FAIL: " + error);
                req.flash('error_msg', `Não foi possível acessar a rotina 0. Erro - ${error}`);
                res.redirect('home');
        }
});

router.get('/consulta', async function (req, res) {
        req.flash("error_msg", "Esta funcionalidade necessita de mais um parâmetro.")
        res.redirect('/');
});

router.get('/consulta/blockchain', async function (req, res) {
        console.log("===> /api/consulta/blockchain");
        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }
                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');
                // Evaluate the specified transaction.
                console.log("01");
                const result = await contract.evaluateTransaction("listar_tudo");
//                console.log ("JSON.parse(result): " + JSON.parse(result))
                console.log("02");

                res.render('api/detalhes/Listar', {
                        lista: JSON.parse(result)//.sort('desc'),// 'result.Record.data_criacao', 'desc')),
                });
        } catch (error) {
                console.log('Não foi possível acessar a rotina 32: ' + error);
                req.flash('error_msg', 'Não foi possível acessar a rotina 32');
                res.render('home', { titulo_pagina: "PROVChain - Prova de Conceito" });
        }

});

router.get('/consulta/:tipoRegistro', async function (req, res) {
        console.log("===> /api/consulta/" + req.params.tipoRegistro);
        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }
                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');

                // Ajustando titulo
                switch (req.params.tipoRegistro) {
                        case 'Orgao': titulo_pagina = 'Lista os Orgãos Executores';
                                break;
                        case 'Projeto': titulo_pagina = 'Lista os Projetos cadastrados';
                                break;
                        case 'Observacao': titulo_pagina = 'Lista os Observações cadastrados';
                                break;
                        case 'Horizonte': titulo_pagina = 'Lista os Horizontes cadastrados para a Observação selecionada';
                                break;
                        case 'Amostra': titulo_pagina = 'Lista os Amostras cadastrados para o Horizonte selecionado';
                                break;
                        case 'Analise': titulo_pagina = 'Lista os Analises cadastrados para a Amostra selecionado';
                                break;
                        case 'Proveniencia': titulo_pagina = 'Proveniência do Registro';
                                break;
                        default: {
                                req.flash("error_msg", "Esta funcionalidade não foi acionada de forma correta.")
                                res.redirect('/');
                        }
                }
                // Evaluate the specified transaction.
                const result = await contract.evaluateTransaction("listar_entidade", req.params.tipoRegistro, "", "");

                res.render('home', {
                        titulo_pagina: titulo_pagina,
                        tipoRegistro: req.params.tipoRegistro,
                        parametros: req.params,
                        lista: JSON.parse(result),
                });
        } catch (error) {
                console.log('Não foi possível acessar a rotina 0: ' + error);
                req.flash('error_msg', 'Não foi possível acessar a rotina 0');
                res.render('home', { titulo_pagina: "PROVChain - Prova de Conceito" });
        }

});

router.get('/consulta/:tipoRegistro/:key', async function (req, res) {
        console.log("===> /api/consulta/" + req.params.tipoRegistro + "/" + req.params.key);
        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }

                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');


                // Evaluate the specified transaction.
                const result = await contract.evaluateTransaction('consultar_identificador', req.params.key);
                if (JSON.parse(result).tipoDoc != undefined) {
                        switch (req.params.tipoRegistro) {
                                case 'Orgao': {
                                        const resultproveniencia = await contract.evaluateTransaction('consultar_identificador', JSON.parse(result).key_proveniencia);
                                        res.render('api/detalhes/Orgao', {
                                                result: JSON.parse(result),
                                                resultkey: req.params.key,
                                                proveniencia: JSON.parse(resultproveniencia),
                                        })
                                        break;
                                }
                                case 'Projeto': {
                                        const resultproveniencia = await contract.evaluateTransaction('consultar_identificador', JSON.parse(result).key_proveniencia);
                                        res.render('api/detalhes/Projeto', {
                                                result: JSON.parse(result),
                                                resultkey: req.params.key,
                                                proveniencia: JSON.parse(resultproveniencia),
                                        })
                                        break;
                                }
                                case 'Observacao': {
                                        const resultproveniencia = await contract.evaluateTransaction('consultar_identificador', JSON.parse(result).key_proveniencia);
                                        const resultprojeto = await contract.evaluateTransaction('consultar_identificador', JSON.parse(result).key_projeto);
                                        res.render('api/detalhes/Observacao', {
                                                result: JSON.parse(result),
                                                resultkey: req.params.key,
                                                proveniencia: JSON.parse(resultproveniencia),
                                                projeto: JSON.parse(resultprojeto),
                                        })
                                        break;
                                }
                                case 'Horizonte': {
                                        if (JSON.parse(result).tipoDoc === 'Horizonte') {
                                                const resultObservacao = await contract.evaluateTransaction("consultar_identificador", JSON.parse(result).key_observacao);
                                                const resultproveniencia = await contract.evaluateTransaction('consultar_identificador', JSON.parse(result).key_proveniencia);
                                                console.log ("resultObservacao" + resultObservacao)

                                                res.render('api/detalhes/Horizonte', {
                                                        tipoRegistro: 'Horizonte',
                                                        titulo_pagina: "Detalhes de Horizonte",
                                                        result: JSON.parse(result),
                                                        resultKey: req.params.key,
                                                        observacao: JSON.parse(resultObservacao),
                                                        proveniencia: JSON.parse(resultproveniencia),
                                                });
                                        } else {
                                                const resultHorizontes = await contract.evaluateTransaction('consultar_dadosAssociados', req.params.key, 'Horizonte'); 
                                                res.render('home', {
                                                        tipoRegistro: 'Horizonte',
                                                        titulo_pagina: "Lista os Horizontes cadastrados",
                                                        result: JSON.parse(result), // Dados da Observacao 
                                                        resultKey: req.params.key,
                                                        resultHorizonte: JSON.parse(resultHorizontes), // Lista de Horizontes do Observacao 
                                                });
                                        }
                                        break;
                                }
                                case 'Proveniencia': {
                                        const result_elemento = await contract.evaluateTransaction('consultar_identificador', JSON.parse(result).key_elemento);
                                        res.render('api/proveniencia/' + JSON.parse(result_elemento).tipoDoc, {
                                                result: JSON.parse(result),
                                                elemento: JSON.parse(result_elemento),
                                                resultkey: req.params.key,
                                        })
                                        break;
                                }
                                default: {
                                        req.flash("error_msg", "Esta funcionalidade não foi acionada de forma correta.")
                                        res.redirect('/');
                                }

                        }
                } else {
                        req.flash('error_msg', req.params.tipoRegistro + ' ( ' + req.params.key + ' ) inválido.')
                        res.redirect('/');
                }
        } catch (error) {
                console.log("FAIL: " + error);
                req.flash("error_msg", req.params.tipoRegistro + " (x " + req.params.key + " ) inválido.")
                res.redirect('/api/consulta/' + req.params.tipoRegistro);
        }
});

router.get('/registros_excluidos', async function (req, res) {
        console.log("===> /api/registros_excluidos/");
        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);

                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }

                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');

                // Evaluate the specified transaction.
                const resultExc = await contract.evaluateTransaction("registros_excluidos");

                //               console.log("JSON.parse(resultExc): " + JSON.parse(resultExc))                
                //               console.log("resultExc: " + resultExc)                

                res.render('api/detalhes/Excluidos', {
                        resultExcluidos: JSON.parse(resultExc),
                });
        } catch (error) {
                console.log('Não foi possível acessar a rotina 0: ' + error);
                req.flash('error_msg', 'Não foi possível acessar a rotina 0');
                res.render('home', { titulo_pagina: "PROVChain - Prova de Conceito" });
        }

});

router.get('/excluidos', async function (req, res) {
        console.log("===> /api/excluidos/");
        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);

                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }

                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');

                // Evaluate the specified transaction.
                const resultProv = await contract.evaluateTransaction("listar_excluidos");

                console.log("===============================================================================================")
                console.log("resultProv: " + resultProv)
                console.log("===============================================================================================")
                console.log("JSON.parse(resultProv): " + JSON.parse(resultProv))
                console.log("===============================================================================================")

                res.render('api/detalhes/Excluidos', {
                        resultProveniencia: JSON.parse(resultProv),
                });
        } catch (error) {
                console.log('Não foi possível acessar a rotina 0: ' + error);
                req.flash('error_msg', 'Não foi possível acessar a rotina 0');
                res.render('home', { titulo_pagina: "PROVChain - Prova de Conceito" });
        }

});

router.get('/listar_observacoes/:key', async function (req, res) {
        console.log("===> /api/listar_observacoes/" + req.params.key);
        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);

                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }

                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');

                // Evaluate the specified transaction.
                const result = await contract.evaluateTransaction('consultar_identificador', req.params.key);
                if (JSON.parse(result).tipoDoc != undefined) {

                        const resultobservacoes = await contract.evaluateTransaction("listar_entidade", "Observacao", "key_projeto", req.params.key);
                        titulo_pagina = 'Lista as observações cadastradas';

                        res.render('home', {
                                lista: JSON.parse(resultobservacoes),
                                tipoRegistro: 'Observacao',
                                titulo_pagina: titulo_pagina,
                                key_projeto: req.params.key,
                        });
                } else {
                        req.flash("error_msg", ' Observação ( ' + req.params.key + " ) inválido.")
                        res.redirect('/');
                }

        } catch (error) {
                console.log("FAIL: " + error);
                req.flash("error_msg", ' Observacao ( ' + req.params.key + " ) inválido.")
                res.render('home', { titulo_pagina: "PROVChain - Prova de Conceito" });
        }
});

router.get('/listar_observacoes', async function (req, res) {
        req.flash("error_msg", "Esta funcionalidade necessita de mais um parâmetro.")
        res.redirect('/');
});

router.get('/historico/:key', async function (req, res) {
        console.log('===> /api/historico/' + req.params.key);
        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }

                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');

                // Evaluate the specified transaction.
                console.log("antes");
                const historico = await contract.evaluateTransaction('historico', req.params.key);
                console.log("depois");
                console.log("historico: " + historico)         

                res.render('api/historico/Excluidos', {
                        result: JSON.parse(historico),
                });


        } catch (error) {
                console.error(`Failed to evaluate transaction: ${error}`);
                res.status(500).json({ error: error });
                process.exit(1);
        }
});

router.get('/historico/:tipoRegistro/:key', async function (req, res) {
        console.log('===> /api/historico/' + req.params.tipoRegistro + '/' + req.params.key);
        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }

                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');

                // Evaluate the specified transaction.
                console.log ('consultar_identificador: '+ req.params.key)
                const result = (await contract.evaluateTransaction('consultar_identificador', req.params.key));
                if (JSON.parse(result).tipoDoc != undefined) {
                        const historico = await contract.evaluateTransaction('historico', req.params.key);
                        const historicoProv = await contract.evaluateTransaction('historico', JSON.parse(result).key_proveniencia);
                        switch (req.params.tipoRegistro) {
                                case 'Orgao': {
                                        req.flash("success_msg", "Histórico de " + req.params.key)
                                        res.render('api/historico/Orgao', {
                                                tipoRegistro: req.params.tipoRegistro,
                                                result: JSON.parse(historico),
                                                resultProv: JSON.parse(historicoProv),
                                                parametros: req.params,
                                        })
                                        break;
                                }

                                case 'Projeto': {
                                        req.flash("success_msg", "Histórico de " + req.params.key)
                                        res.render('api/historico/Projeto', {
                                                tipoRegistro: req.params.tipoRegistro,
                                                result: JSON.parse(historico),
                                                resultProv: JSON.parse(historicoProv),
                                        })
                                        break;
                                }
                                case 'Associacao': {
                                        const projeto = await contract.evaluateTransaction('consultar_identificador', JSON.parse(result).key_projeto);
                                        const orgao = await contract.evaluateTransaction('consultar_identificador', JSON.parse(result).key_orgao);
                                        req.flash("success_msg", "Histórico de " + req.params.key)
                                        res.render('api/historico/Associacao', {
                                                result: JSON.parse(historico),
                                                resultProv: JSON.parse(historicoProv),
                                                resultProjeto: JSON.parse(projeto),
                                                resultOrgao: JSON.parse(projeto),
                                                resultkey: req.params.key,
                                        })
                                        break;
                                }
                                case 'Observacao': {
                                        const projeto = await contract.evaluateTransaction('consultar_identificador', JSON.parse(result).key_projeto);
                                        req.flash("success_msg", "Histórico de " + req.params.key)
                                        res.render('api/historico/Observacao', {
                                                result: JSON.parse(historico),
                                                resultProv: JSON.parse(historicoProv),
                                                resultProj: JSON.parse(projeto),
                                                resultkey: req.params.key,
                                        })
                                        break;
                                }

                                case 'Horizonte': {
                                        const historicoObservacao = await contract.evaluateTransaction("consultar_identificador", JSON.parse(result).key_observacao);
                                        req.flash("success_msg", "Histórico de " + req.params.key)
                                        res.render('api/historico/Horizonte', {
                                                tipoRegistro: req.params.tipoRegistro,
                                                result: JSON.parse(historico),
                                                resultProv: JSON.parse(historicoProv),
                                                resultObservacao: JSON.parse(historicoObservacao),
                                                parametros: req.params,
                                        })
                                        break;
                                }

                                case 'Proveniencia': {
                                        res.render('api/historico/Proveniencia', {
                                                tipoRegistro: req.params.tipoRegistro,
                                                result: JSON.parse(historico),
                                                parametros: req.params,
                                        })
                                        req.flash("success_msg", "Histórico de " + req.params.key)
                                        break;
                                }
                                default: {
                                        req.flash("error_msg", req.params.tipoRegistro + ' ( ' + req.params.key + " ) inválido.")
                                        res.redirect('/');
                                }
                        }
                } else {
                        req.flash("error_msg", req.params.tipoRegistro + ' ( ' + req.params.key + " ) inválido.")
                        res.redirect('/');
                }
        } catch (error) {
                console.error(`Failed to evaluate transaction: ${error}`);
                res.status(500).json({ error: error });
                process.exit(1);
        }
});

// ***************************************************************************************************************
// Inclusão
router.post('/criar_Orgao', async function (req, res) {
        console.log("===> /api/criar_Orgao/");
        var erros = []

        if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
                erros.push({ texto: "Nome inválido" })
        }

        if (!req.body.referencia || typeof req.body.referencia == undefined || req.body.referencia == null) {
                erros.push({ texto: "Referência inválida" })
        }

        if (req.body.nome.length < 2) {
                erros.push({ texto: "Nome com tamanho muito pequeno" })
        }

        if (erros.length > 0) {
                res.render("api/criar/Orgao", { erros: erros })
        } else {

                try {
                        // load the network configuration
                        const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                        let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

                        // Create a new file system based wallet for managing identities.
                        const walletPath = path.join(process.cwd(), 'wallet');
                        const wallet = await Wallets.newFileSystemWallet(walletPath);
                        console.log(`Wallet path: ${walletPath}`);

                        // Check to see if we've already enrolled the user.
                        const identity = await wallet.get('appUser');
                        if (!identity) {
                                console.log('An identity for the user "appUser" does not exist in the wallet');
                                console.log('Run the registerUser.js application before retrying');
                                return;
                        }

                        // Create a new gateway for connecting to our peer node.
                        const gateway = new Gateway();
                        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                        // Get the network (channel) our contract is deployed to.
                        const network = await gateway.getNetwork('mychannel');

                        // Get the contract from the network.
                        const contract = network.getContract('provchain');

                        // Submit the specified transaction.
                        // console.log('********************* Valores a serem passados para a chaincode *****************')
                        req.body.key_orgao = uuid()
                        req.body.key_proveniencia = uuid();

                        const result = await contract.submitTransaction('incAlt_Orgao',
                                req.body.key_orgao,
                                req.body.key_proveniencia,
                                req.body.nome,
                                req.body.referencia,
                                req.body.ano,
                                req.body.tipo_problema,
                                req.body.nivel_levantamento,
                                req.body.contato_nome,
                                req.body.contato_email,
                                req.body.contato_telefone,
                                req.body.motivo,
                                req.body.tipo_instituicao,
                                req.body.abrangencia,
                        );

                        const resultProv = await contract.submitTransaction('proveniencia_Orgao',
                                req.body.key_proveniencia,
                                req.body.key_orgao,
                                user,               // usuario ativo                           
                                user_name,          // nome do usuario ativo  
                                ip.address(),
                                geoLocalizacao.range,
                                geoLocalizacao.country,
                                geoLocalizacao.region,
                                geoLocalizacao.eu,
                                geoLocalizacao.timezone,
                                geoLocalizacao.city,
                                geoLocalizacao.ll,
                                geoLocalizacao.metro,
                                geoLocalizacao.area,
                                software_version,
                                navigator.userAgent,
                                'Registro incluído',
                        );

                        console.log('Transaction has been submitted');
                        req.flash("success_msg", req.body.nome + " criado com sucesso")
                        res.redirect('/api/consulta/Orgao');
                        // Disconnect from the gateway.
                        await gateway.disconnect();

                } catch (error) {
                        req.flash("error_msg", "Houve um erro ao submeter a transação");
                        console.error(`Failed to submit transaction: ${error}`);
                        res.redirect("/api/consulta/Orgao");
                }
        }
});

router.post('/criar_Projeto', async function (req, res) {
        console.log("===> /api/criar_Projeto/");

        var erros = []
        //#TODO - validar demais campos
        if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
                erros.push({ texto: "Nome inválido" })
        }

        if (!req.body.sigla || typeof req.body.sigla == undefined || req.body.sigla == null) {
                erros.push({ texto: "Sigla inválida" })
        }

        if (req.body.nome.length < 2) {
                erros.push({ texto: "Nome com tamanho muito pequeno" })
        }

        if (erros.length > 0) {
                res.render("api/criar/Projeto", { erros: erros })
        } else {

                try {
                        // load the network configuration
                        const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                        let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

                        // Create a new file system based wallet for managing identities.
                        const walletPath = path.join(process.cwd(), 'wallet');
                        const wallet = await Wallets.newFileSystemWallet(walletPath);
                        console.log(`Wallet path: ${walletPath}`);

                        // Check to see if we've already enrolled the user.
                        const identity = await wallet.get('appUser');
                        if (!identity) {
                                console.log('An identity for the user "appUser" does not exist in the wallet');
                                console.log('Run the registerUser.js application before retrying');
                                return;
                        }

                        // Create a new gateway for connecting to our peer node.
                        const gateway = new Gateway();
                        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                        // Get the network (channel) our contract is deployed to.
                        const network = await gateway.getNetwork('mychannel');

                        // Get the contract from the network.
                        const contract = network.getContract('provchain');

                        // Submit the specified transaction.
                        //console.log('********************* Valores a serem passados para a chaincode *****************')
                        req.body.key_projeto = uuid()
                        req.body.key_proveniencia = uuid();

                        const result = await contract.submitTransaction('incAlt_Projeto',
                                req.body.key_projeto,
                                req.body.key_proveniencia,
                                req.body.nome,
                                req.body.sigla,
                                req.body.pais,
                                req.body.estado,
                                req.body.municipio,
                                req.body.aberto,
                                req.body.abrangencia,
                        );

                        const resultProv = await contract.submitTransaction('proveniencia_Projeto',
                                req.body.key_proveniencia,
                                req.body.key_projeto,
                                user,
                                user_name,
                                ip.address(),
                                geoLocalizacao.range,
                                geoLocalizacao.country,
                                geoLocalizacao.region,
                                geoLocalizacao.eu,
                                geoLocalizacao.timezone,
                                geoLocalizacao.city,
                                geoLocalizacao.ll,
                                geoLocalizacao.metro,
                                geoLocalizacao.area,
                                software_version,
                                navigator.userAgent,
                                'Registro incluído',
                        );

                        console.log('Transaction has been submitted');
                        req.flash("success_msg", req.body.nome + " criado com sucesso")
                        res.redirect('/api/consulta/Projeto');
                        // Disconnect from the gateway.
                        await gateway.disconnect();

                } catch (error) {
                        req.flash("error_msg", "Houve um erro ao submeter a transação");
                        console.error(`Failed to submit transaction: ${error}`);
                        res.redirect("/api/consulta/Projeto");
                }
        }
});

router.post('/criar_Observacao', async function (req, res) {
        console.log("===> /api/criar_Observacao/");
        try {
                // load the network configuration
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }
                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');

                // Submit the specified transaction.
                //    console.log('********************* Valores a serem passados para a chaincode *****************')

                req.body.key_observacao = uuid();
                req.body.key_proveniencia = uuid();

                const resultObservacao = await contract.submitTransaction('incAlt_Observacao',
                        req.body.key_observacao,
                        req.body.key_proveniencia,
                        req.body.key_projeto,
                        req.body.nome,
                        req.body.data_coleta = new Date().toString('yyyy-MM-dd hh:mm:ss'),
                        req.body.tipo_observacao,
                        req.body.latitude,
                        req.body.longitude,
                        req.body.altitude,
                        req.body.relacaoBA,
                        req.body.datum,
                        req.body.estado,
                        req.body.municipio,
                        req.body.pedregosidade,
                        req.body.rochosidade,
                        req.body.drenagem,
                        req.body.situacao_declive,
                        req.body.vegetacao_primaria,
                        req.body.uso_atual,
                        req.body.koppen,
                        req.body.formacao_geologica,
                        req.body.litologia,
                        req.body.unidade_mapeamento,
                        req.body.movimento_de_massa,
                        req.body.cronologia,
                        req.body.material_originario,
                        req.body.sibcs_antigo,
                        req.body.wrb,
                        req.body.soil_taxonomy,
                        req.body.localizacao,
                        req.body.gilgai,
                        req.body.classificacao_taxonomica,
                        req.body.relevo_local,
                        req.body.relevo_regional,
                        req.body.observacao,
                        req.body.agente_causador1,
                        req.body.forma1,
                        req.body.classe1,
                        req.body.frequencia_sulcos1,
                        req.body.profundidade_sulcos1,
                        req.body.agente_causador2,
                        req.body.forma2,
                        req.body.classe2,
                        req.body.frequencia_sulcos2,
                        req.body.profundidade_sulcos2,
                        req.body.descrito_coletado_por,
                );

                const resultProv = await contract.submitTransaction('proveniencia_Observacao',
                        req.body.key_proveniencia,
                        req.body.key_observacao,
                        user,
                        user_name,
                        ip.address(),
                        geoLocalizacao.range,
                        geoLocalizacao.country,
                        geoLocalizacao.region,
                        geoLocalizacao.eu,
                        geoLocalizacao.timezone,
                        geoLocalizacao.city,
                        geoLocalizacao.ll,
                        geoLocalizacao.metro,
                        geoLocalizacao.area,
                        software_version,
                        navigator.userAgent,
                        'Registro incluído',
                );

                console.log('Transaction has been submitted');
                req.flash("success_msg", req.body.nome + " criado com sucesso")
                res.redirect('/api/consulta/Observacao');

                // Disconnect from the gateway.
                await gateway.disconnect();

        } catch (error) {
                req.flash("error_msg", "Houve um erro ao submeter a transação");
                console.error(`Failed to submit transaction: ${error}`);
                res.render("/api/consulta/Observacao");
        }
});

router.post('/criar_Horizonte', async function (req, res) {
        console.log("===> /api/criar_Horizonte/");
        try {
                // load the network configuration
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);
                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }

                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');
                // Submit the specified transaction.

                req.body.key_horizonte = uuid();
                req.body.key_proveniencia = uuid();

                if (req.body.selectbasic) {
                        req.body.cor_matiz1 = req.body.selectbasic[0];
                        req.body.cor_valor1 = req.body.selectbasic[1];
                        req.body.cor_croma1 = req.body.selectbasic[2];
                        req.body.cor_umidade1 = 'seco';
                        req.body.cor_matiz2 = req.body.selectbasic[5];
                        req.body.cor_valor2 = req.body.selectbasic[6];
                        req.body.cor_croma2 = req.body.selectbasic[7];
                        req.body.cor_umidade2 = 'umido';
                } else {
                        req.body.cor_matiz1 = "";
                        req.body.cor_valor1 = "";
                        req.body.cor_croma1 = "";
                        req.body.cor_umidade1 = 'seco';
                        req.body.cor_matiz2 = "";
                        req.body.cor_valor2 = "";
                        req.body.cor_croma2 = "";
                        req.body.cor_umidade2 = 'umido';
                }

                if (req.body.selectEstrutura) {
                        req.body.estrutura_tipo = req.body.selectEstrutura[0];
                        req.body.estrutura_grau = req.body.selectEstrutura[1];
                        req.body.estrutura_tamanho = req.body.selectEstrutura[2];
                        req.body.estrutura_forma = req.body.selectEstrutura[3];
                }

                if (!req.body.estrutura_tipo) { req.body.estrutura_tipo = ""; };
                if (!req.body.estrutura_grau) { req.body.estrutura_grau = ""; };
                if (!req.body.estrutura_tamanho) { req.body.estrutura_tamanho = ""; };
                if (!req.body.estrutura_forma) { req.body.estrutura_forma = ""; };

                if (!req.body.eflorescencia_quantidade) {
                        req.body.e
                        if (!req.body.limites_metodo) { req.body.limites_metodo = ""; };
                        if (!req.body.limite_inferior) { req.body.limite_inferior = ""; };
                        if (!req.body.limite_superior) { req.body.limite_superior = ""; };
                        if (!req.body.inferior_transicao) { req.body.inferior_transicao = ""; };
                        if (!req.body.superior_transicao) { req.body.superior_transicao = ""; };
                        if (!req.body.espessura) { req.body.espessura = ""; };
                        if (!req.body.tipo_cor) { req.body.tipo_cor = ""; };
                        if (!req.body.selectbasic) { req.body.selectbasic = ""; };
                        if (!req.body.tipo_estrutura) { req.body.tipo_estrutura = ""; };
                        if (!req.body.grau_estrutura) { req.body.grau_estrutura = ""; };
                        if (!req.body.tamanho_estrutura) { req.body.tamanho_estrutura = ""; };
                        if (!req.body.forma_estrutura) { req.body.forma_estrutura = ""; };
                        florescencia_quantidade = "";
                };
                if (!req.body.eflorescencia_local) { req.body.eflorescencia_local = ""; };
                if (!req.body.eflorescencia_natureza) { req.body.eflorescencia_natureza = ""; };

                if (!req.body.limites_metodo) { req.body.limites_metodo = ""; };
                if (!req.body.limite_inferior) { req.body.limite_inferior = ""; };
                if (!req.body.limite_superior) { req.body.limite_superior = ""; };
                if (!req.body.transicao_inferior) { req.body.transicao_inferior = ""; };
                if (!req.body.transicao_superior) { req.body.transicao_superior = ""; };
                if (!req.body.espessura) { req.body.espessura = ""; };

                // Dados do Horizonte                
                const resultHorizonte = await contract.submitTransaction('incAlt_Horizonte',
                        req.body.key_horizonte,
                        req.body.key_proveniencia,
                        req.body.key_observacao,
                        req.body.nome,
                        req.body.transicao_topografia,
                        req.body.transicao_nitidez,
                        req.body.limites_metodo,
                        req.body.limite_inferior,
                        req.body.limite_superior,
                        req.body.transicao_inferior,
                        req.body.transicao_superior,
                        req.body.espessura,
                        req.body.cerosidade_grau,
                        req.body.cerosidade_quantidade,
                        req.body.cor_tipo,
                        req.body.cor_matiz1,
                        req.body.cor_valor1,
                        req.body.cor_croma1,
                        req.body.cor_umidade1,
                        req.body.cor_matiz2,
                        req.body.cor_valor2,
                        req.body.cor_croma2,
                        req.body.cor_umidade2,
                        req.body.estrutura_tipo,
                        req.body.estrutura_grau,
                        req.body.estrutura_tamanho,
                        req.body.estrutura_forma,
                        req.body.consistencia_seco,
                        req.body.consistencia_umido,
                        req.body.consistencia_molhada_pegajosidade,
                        req.body.consistencia_molhada_plasticidade,
                        req.body.compressao_tipo,
                        req.body.compressao_quantidade,
                        req.body.compressao_grau,
                        req.body.friccao_quantidade,
                        req.body.friccao_tamanho,
                        req.body.friccao_grau,
                        req.body.eflorescencia_quantidade,
                        req.body.eflorescencia_local,
                        req.body.eflorescencia_natureza,
                        req.body.poros_quantidade,
                        req.body.poros_diametro,
                        req.body.raiz_tipo,
                        req.body.raiz_diametro,
                        req.body.raiz_quantidade,
                        req.body.nodulos_e_concrecoes_quantidade,
                        req.body.nodulos_e_concrecoes_tamanho,
                        req.body.nodulos_e_concrecoes_dureza,
                        req.body.nodulos_e_concrecoes_natureza,
                        req.body.nodulos_e_concrecoes_forma,
                        req.body.nodulos_e_concrecoes_cor,
                        req.body.outros_coesao,
                        req.body.outros_cimentacao,
                        req.body.outros_sulfeto,
                        req.body.outros_magnetismo,
                        req.body.outros_manganes,
                        req.body.outros_carbonato,
                        req.body.outros_textura,
                        req.body.outros_cascalho,
                        req.body.observacao,
                );

                const resultProv = await contract.submitTransaction('proveniencia_Observacao',
                        req.body.key_proveniencia,
                        req.body.key_horizonte,
                        user,
                        user_name,
                        ip.address(),
                        geoLocalizacao.range,
                        geoLocalizacao.country,
                        geoLocalizacao.region,
                        geoLocalizacao.eu,
                        geoLocalizacao.timezone,
                        geoLocalizacao.city,
                        geoLocalizacao.ll,
                        geoLocalizacao.metro,
                        geoLocalizacao.area,
                        software_version,
                        navigator.userAgent,
                        'Registro incluído',
                );

                // res.render('emConstrucao', {req: req.body});
                console.log('Transaction has been submitted');
                req.flash("success_msg", req.body.nome + " criado com sucesso")
                // res.redirect('/api/consulta/Horizonte/'+req.body.key_horizonte);
                res.redirect("/api/consulta/Horizonte/" + req.body.key_observacao);

                // Disconnect from the gateway.
                await gateway.disconnect();

        } catch (error) {
                req.flash("error_msg", "Houve um erro ao submeter a transação - horizonte");
                console.error(`Failed to submit transaction: ${error}`);
                res.redirect("/api/consulta/Horizonte/" + req.body.key_observacao);
        }
});

router.get('/criar/Horizonte/:key', async function (req, res) {
        console.log("===> /api/criar/Horizonte/" + req.params.key);
        try {
                // load the network configuration
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }
                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');

                // Submit the specified transaction.
                const result = await contract.submitTransaction('consultar_identificador', req.params.key);
                res.render('api/criar/Horizonte', {
                        result: JSON.parse(result),
                        key_observacao: req.params.key,
                })

                // Disconnect from the gateway.
                await gateway.disconnect();

        } catch (error) {
                req.flash("error_msg", "Houve um erro ao submeter a transação");
                console.error(`Failed to submit transaction: ${error}`);
                res.render("/api/consulta/Observacao");
        }
});

// ***************************************************************************************************************
// Alteração
router.post('/alterar_Orgao', async function (req, res) {
        console.log("===> /alterar_Orgao");
        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }
                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');

                // Submit the specified transaction.
                const resultOrgao = await contract.evaluateTransaction('consultar_identificador', req.body.key_orgao);
                const rOrgao = JSON.parse(resultOrgao);
                const resultProveniencia = await contract.evaluateTransaction('consultar_identificador', rOrgao.key_proveniencia);
                req.body.key_proveniencia = JSON.parse(resultProveniencia).key;

                await contract.submitTransaction('incAlt_Orgao',
                        req.body.key_orgao,
                        req.body.key_proveniencia,
                        req.body.nome,
                        req.body.referencia,
                        req.body.ano,
                        req.body.tipo_problema,
                        req.body.nivel_levantamento,
                        req.body.contato_nome,
                        req.body.contato_email,
                        req.body.contato_telefone,
                        req.body.motivo,
                        req.body.tipo_instituicao,
                        req.body.abrangencia,
                );

                const resultProv = await contract.submitTransaction('proveniencia_Orgao',
                        req.body.key_proveniencia,
                        req.body.key_orgao,
                        user,
                        user_name,
                        ip.address(),
                        geoLocalizacao.range,
                        geoLocalizacao.country,
                        geoLocalizacao.region,
                        geoLocalizacao.eu,
                        geoLocalizacao.timezone,
                        geoLocalizacao.city,
                        geoLocalizacao.ll,
                        geoLocalizacao.metro,
                        geoLocalizacao.area,
                        software_version,
                        navigator.userAgent,
                        'Registro alterado',
                );

                console.log('Transaction has been submitted');
                req.flash("success_msg", req.body.nome + " alterado com sucesso")
                res.redirect('/api/consulta/Orgao/');
                // Disconnect from the gateway.
                await gateway.disconnect();
        } catch (error) {
                req.flash("error_msg", "Houve um erro ao submeter a transação 1");
                console.error(`Failed to submit transaction: ${error}`);
                res.redirect("/api/consulta/Orgao");
        }
});

router.post('/alterar_Projeto', async function (req, res) {
        console.log("===> /alterar_Projeto");
        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }
                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');

                // Submit the specified transaction.

                const r = await contract.submitTransaction('consultar_identificador', req.body.key_projeto);
                req.body.key_proveniencia = JSON.parse(r).key_proveniencia

                await contract.submitTransaction('incAlt_Projeto',
                        req.body.key_projeto,
                        req.body.key_proveniencia,
                        req.body.nome,
                        req.body.sigla,
                        req.body.pais,
                        req.body.estado,
                        req.body.municipio,
                        req.body.aberto,
                        req.body.abrangencia,
                );

                const resultProv = await contract.submitTransaction('proveniencia_Projeto',
                        req.body.key_proveniencia,
                        req.body.key_projeto,
                        user,
                        user_name,
                        ip.address(),
                        geoLocalizacao.range,
                        geoLocalizacao.country,
                        geoLocalizacao.region,
                        geoLocalizacao.eu,
                        geoLocalizacao.timezone,
                        geoLocalizacao.city,
                        geoLocalizacao.ll,
                        geoLocalizacao.metro,
                        geoLocalizacao.area,
                        software_version,
                        navigator.userAgent,
                        'Registro alterado',
                );

                console.log('Transaction has been submitted');
                req.flash("success_msg", req.body.nome + " alterado com sucesso")
                res.redirect('/api/consulta/Projeto/' + req.body.key_projeto);
                // Disconnect from the gateway.
                await gateway.disconnect();
        } catch (error) {
                req.flash("error_msg", "Houve um erro ao submeter a transação 2");
                console.error(`Failed to submit transaction: ${error}`);
                res.redirect("/api/consulta/Projeto");
        }
});

router.post('/alterar_Observacao', async function (req, res) {
        console.log("===> /alterar_Observacao");
        try {
                // load the network configuration
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }

                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');

                // Submit the specified transaction.
                //console.log('********************* Valores a serem passados para a chaincode *****************')
                const r = await contract.submitTransaction('consultar_identificador', req.body.key_observacao);
                req.body.key_proveniencia = JSON.parse(r).key_proveniencia;

                const resultObservacao = await contract.submitTransaction('incAlt_Observacao',
                        req.body.key_observacao,
                        req.body.key_proveniencia,
                        req.body.key_projeto,
                        req.body.nome,
                        req.body.data_coleta,
                        req.body.tipo_observacao,
                        req.body.latitude,
                        req.body.longitude,
                        req.body.altitude,
                        req.body.relacaoBA,
                        req.body.datum,
                        req.body.estado,
                        req.body.municipio,
                        req.body.pedregosidade,
                        req.body.rochosidade,
                        req.body.drenagem,
                        req.body.situacao_declive,
                        req.body.vegetacao_primaria,
                        req.body.uso_atual,
                        req.body.koppen,
                        req.body.formacao_geologica,
                        req.body.litologia,
                        req.body.unidade_mapeamento,
                        req.body.movimento_de_massa,
                        req.body.cronologia,
                        req.body.material_originario,
                        req.body.sibcs_antigo,
                        req.body.wrb,
                        req.body.soil_taxonomy,
                        req.body.localizacao,
                        req.body.gilgai,
                        req.body.classificacao_taxonomica,
                        req.body.relevo_local,
                        req.body.relevo_regional,
                        req.body.observacao,
                        req.body.agente_causador1,
                        req.body.forma1,
                        req.body.classe1,
                        req.body.frequencia_sulcos1,
                        req.body.profundidade_sulcos1,
                        req.body.agente_causador2,
                        req.body.forma2,
                        req.body.classe2,
                        req.body.frequencia_sulcos2,
                        req.body.profundidade_sulcos2,
                        req.body.descrito_coletado_por,
                );

                const resultProv = await contract.submitTransaction('proveniencia_Observacao',
                        req.body.key_proveniencia,
                        req.body.key_observacao,
                        user,
                        user_name,
                        ip.address(),
                        geoLocalizacao.range,
                        geoLocalizacao.country,
                        geoLocalizacao.region,
                        geoLocalizacao.eu,
                        geoLocalizacao.timezone,
                        geoLocalizacao.city,
                        geoLocalizacao.ll,
                        geoLocalizacao.metro,
                        geoLocalizacao.area,
                        software_version,
                        navigator.userAgent,
                        'Registro alterado',
                );

                console.log('Transaction has been submitted');
                req.flash("success_msg", req.body.nome + " alterado com sucesso")
                res.redirect('/api/consulta/Observacao');

                // Disconnect from the gateway.
                console.log('/alterar_Observacao');


                await gateway.disconnect();

        } catch (error) {
                req.flash("error_msg", "Houve um erro ao submeter a transação");
                console.error(`Failed to submit transaction: ${error}`);
                res.render("/api/consulta/Observacao");
        }
});

router.post('/alterar_Horizonte', async function (req, res) {
        console.log("===> /alterar_Projeto");
        console.log('/alterar_Horizonte');

        try {
                // load the network configuration
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }

                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');

                // Submit the specified transaction.
                //    console.log('********************* Valores a serem passados para a chaincode *****************')
                const resultProveniencia = await contract.evaluateTransaction('consultar_identificador', req.body.key_horizonte);
                req.body.key_proveniencia = JSON.parse(resultProveniencia).key_proveniencia;

                if (req.body.selectbasic) {
                        req.body.cor_matiz1 = req.body.selectbasic[0];
                        req.body.cor_valor1 = req.body.selectbasic[1];
                        req.body.cor_croma1 = req.body.selectbasic[2];
                        req.body.cor_umidade1 = 'seco';
                        req.body.cor_matiz2 = req.body.selectbasic[5];
                        req.body.cor_valor2 = req.body.selectbasic[6];
                        req.body.cor_croma2 = req.body.selectbasic[7];
                        req.body.cor_umidade2 = 'umido';
                } else {
                        req.body.cor_matiz1 = "";
                        req.body.cor_valor1 = "";
                        req.body.cor_croma1 = "";
                        req.body.cor_umidade1 = 'seco';
                        req.body.cor_matiz2 = "";
                        req.body.cor_valor2 = "";
                        req.body.cor_croma2 = "";
                        req.body.cor_umidade2 = 'umido';
                }

                if (req.body.selectEstrutura) {
                        req.body.estrutura_tipo = req.body.selectEstrutura[0];
                        req.body.estrutura_grau = req.body.selectEstrutura[1];
                        req.body.estrutura_tamanho = req.body.selectEstrutura[2];
                        req.body.estrutura_forma = req.body.selectEstrutura[3];
                }

                if (!req.body.estrutura_tipo) { req.body.estrutura_tipo = ""; };
                if (!req.body.estrutura_grau) { req.body.estrutura_grau = ""; };
                if (!req.body.estrutura_tamanho) { req.body.estrutura_tamanho = ""; };
                if (!req.body.estrutura_forma) { req.body.estrutura_forma = ""; };

                if (!req.body.eflorescencia_quantidade) { req.body.eflorescencia_quantidade = ""; };
                if (!req.body.eflorescencia_local) { req.body.eflorescencia_local = ""; };
                if (!req.body.eflorescencia_natureza) { req.body.eflorescencia_natureza = ""; };

                if (!req.body.limites_metodo) { req.body.limites_metodo = ""; };
                if (!req.body.limite_inferior) { req.body.limite_inferior = ""; };
                if (!req.body.limite_superior) { req.body.limite_superior = ""; };
                if (!req.body.transicao_inferior) { req.body.transicao_inferior = ""; };
                if (!req.body.transicao_superior) { req.body.transicao_superior = ""; };
                if (!req.body.espessura) { req.body.espessura = ""; };

                const resultObservacao = await contract.submitTransaction('incAlt_Horizonte',
                        req.body.key_horizonte,
                        req.body.key_proveniencia,
                        req.body.key_observacao,
                        req.body.nome,
                        req.body.transicao_topografia,
                        req.body.transicao_nitidez,
                        req.body.limites_metodo,
                        req.body.limite_inferior,
                        req.body.limite_superior,
                        req.body.transicao_inferior,
                        req.body.transicao_superior,
                        req.body.espessura,
                        req.body.cerosidade_grau,
                        req.body.cerosidade_quantidade,
                        req.body.cor_tipo,
                        req.body.cor_matiz1,
                        req.body.cor_valor1,
                        req.body.cor_croma1,
                        req.body.cor_umidade1,
                        req.body.cor_matiz2,
                        req.body.cor_valor2,
                        req.body.cor_croma2,
                        req.body.cor_umidade2,
                        req.body.estrutura_tipo,
                        req.body.estrutura_grau,
                        req.body.estrutura_tamanho,
                        req.body.estrutura_forma,
                        req.body.consistencia_seco,
                        req.body.consistencia_umido,
                        req.body.consistencia_molhada_pegajosidade,
                        req.body.consistencia_molhada_plasticidade,
                        req.body.compressao_tipo,
                        req.body.compressao_quantidade,
                        req.body.compressao_grau,
                        req.body.friccao_quantidade,
                        req.body.friccao_tamanho,
                        req.body.friccao_grau,
                        req.body.eflorescencia_quantidade,
                        req.body.eflorescencia_local,
                        req.body.eflorescencia_natureza,
                        req.body.poros_quantidade,
                        req.body.poros_diametro,
                        req.body.raiz_tipo,
                        req.body.raiz_diametro,
                        req.body.raiz_quantidade,
                        req.body.nodulos_e_concrecoes_quantidade,
                        req.body.nodulos_e_concrecoes_tamanho,
                        req.body.nodulos_e_concrecoes_dureza,
                        req.body.nodulos_e_concrecoes_natureza,
                        req.body.nodulos_e_concrecoes_forma,
                        req.body.nodulos_e_concrecoes_cor,
                        req.body.outros_coesao,
                        req.body.outros_cimentacao,
                        req.body.outros_sulfeto,
                        req.body.outros_magnetismo,
                        req.body.outros_manganes,
                        req.body.outros_carbonato,
                        req.body.outros_textura,
                        req.body.outros_cascalho,
                        req.body.observacao,
                );

                const resultProv = await contract.submitTransaction('proveniencia_Horizonte',
                        req.body.key_proveniencia,
                        req.body.key_horizonte,
                        user,
                        user_name,
                        ip.address(),
                        geoLocalizacao.range,
                        geoLocalizacao.country,
                        geoLocalizacao.region,
                        geoLocalizacao.eu,
                        geoLocalizacao.timezone,
                        geoLocalizacao.city,
                        geoLocalizacao.ll,
                        geoLocalizacao.metro,
                        geoLocalizacao.area,
                        software_version,
                        navigator.userAgent,
                        'Registro alterado',
                );
                console.log('Transaction has been submitted');
                req.flash("success_msg", req.body.nome + " alterado com sucesso")
                res.redirect('/api/consulta/Horizonte/' + req.body.key_observacao);

                // Disconnect from the gateway.
                await gateway.disconnect();

        } catch (error) {
                req.flash("error_msg", "Houve um erro ao submeter a transação");
                console.error(`Failed to submit transaction: ${error}`);
                res.render("/api/consulta/Horizonte/" + req.body.key_observacao);
        }
});

router.get('/alterar/:tipoRegistro', async function (req, res) {
        req.flash("error_msg", req.params.tipoRegistro + " necessita de mais um parâmetro, ou foi declarado equivocadamente.")
        res.redirect('/');
});

router.get('/alterar/:tipoRegistro/:key', async function (req, res) {
        console.log("===> /api/alterar/" + req.params.tipoRegistro + "/" + req.params.key);
        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }
                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');
                // Evaluate the specified transaction.

                let yourDate = new Date();
                const resultprojetos = await contract.evaluateTransaction("listar_entidade", "Projeto", "", "");
                const result = await contract.evaluateTransaction('consultar_identificador', req.params.key);
                if (JSON.parse(result).tipoDoc != undefined) {
                        // Tratamento de alteração de observacao 
                        switch (req.params.tipoRegistro) {
                                case 'Orgao':
                                        res.render(`api/atualizar/${req.params.tipoRegistro}`, {
                                                result: JSON.parse(result),                             // result com dados do item parametro indicado
                                                resultKey: req.params.key,                              // caso observacao esteja sendo alterado usar esta variavel    
                                                tipoRegistro: req.params.tipoRegistro,                  //
                                                descrito_coletado: user_name,                           //
                                                projetos: JSON.parse(resultprojetos),                   // lista de projetos
                                                //projeto: JSON.parse(dataProjeto),                       // observacao - dados do projeto 

                                        })
                                        break;
                                case 'Observacao':
                                        dataProjeto = await contract.evaluateTransaction("consultar_identificador", JSON.parse(result).key_projeto);//.sort('key_observacao', 'desc');

                                        res.render(`api/atualizar/${req.params.tipoRegistro}`, {
                                                result: JSON.parse(result),                             // result com dados do item parametro indicado
                                                resultKey: req.params.key,                              // caso observacao esteja sendo alterado usar esta variavel    
                                                tipoRegistro: req.params.tipoRegistro,                  //
                                                descrito_coletado: user_name,                           //
                                                projetos: JSON.parse(resultprojetos),                   // lista de projetos
                                                projeto: JSON.parse(dataProjeto),                       // observacao - dados do projeto 
                                        })
                                        break;
                                case 'Horizonte':
                                        dataObservacao = await contract.evaluateTransaction("consultar_identificador", JSON.parse(result).key_observacao);

                                        res.render(`api/atualizar/${req.params.tipoRegistro}`, {
                                                result: JSON.parse(result),                             // result com dados do item parametro indicado
                                                resultKey: req.params.key,                              // caso observacao esteja sendo alterado usar esta variavel    
                                                tipoRegistro: req.params.tipoRegistro,                  //
                                                dataObservacao: JSON.parse(dataObservacao),
                                        })

                                        break;
                                case 'Projeto':
                                        const prov = await contract.evaluateTransaction('consultar_identificador', JSON.parse(result).key_proveniencia);
                                        res.render(`api/atualizar/${req.params.tipoRegistro}`, {
                                                result: JSON.parse(result),                             // result com dados do item parametro indicado
                                                resultKey: req.params.key,                              // caso observacao esteja sendo alterado usar esta variavel    
                                                tipoRegistro: req.params.tipoRegistro,                  //
                                                proveniencia: JSON.parse(prov),
                                        })
                                        break;
                                default: {
                                        req.flash("error_msg", req.params.tipoRegistro + " necessita de mais um parâmetro, ou foi declarado equivocadamente.")
                                        res.redirect('/');
                                }
                        }
                } else {
                        req.flash('error_msg', req.params.tipoRegistro + ' ( ' + req.params.key + ' ) inválido.')
                        res.redirect('/');
                }


        } catch (error) {
                console.log("FAIL: " + error);
                req.flash('error_msg', req.params.tipoRegistro + ' não localizado.')
                //req.flash('error_msg', `Não foi possível acessar a rotina 3. Erro - ${error}`);
                if (req.params.tipoRegistro == "Horizonte") {
                        res.redirect('/api/consulta/' + req.params.tipoRegistro + "/" + req.params.key);
                } else {
                        res.redirect('/api/consulta/' + req.params.tipoRegistro);
                }
        }
});
// ***************************************************************************************************************
// Exclusão
router.get('/excluir/:tipoRegistro/:key', async function (req, res) {
        console.log("===> /api/excluir/" + req.params.key);

        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                //                const identity = await wallet.get('appUser');
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }
                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                //                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');
                // Submit the specified transaction.
                // console.log(req.params)
                const result = await contract.submitTransaction('consultar_identificador', req.params.key);
                if (JSON.parse(result).tipoDoc != undefined) {
                        const exc = await contract.submitTransaction('excluir',
                                req.params.key,
                                user,
                                user_name,
                                ip.address(),
                                geoLocalizacao.range,
                                geoLocalizacao.country,
                                geoLocalizacao.region,
                                geoLocalizacao.eu,
                                geoLocalizacao.timezone,
                                geoLocalizacao.city,
                                geoLocalizacao.ll,
                                geoLocalizacao.metro,
                                geoLocalizacao.area,
                                software_version,
                                navigator.userAgent,
                        );

                        // console.log('Transaction has been submitted');      
                        req.flash("success_msg", req.params.key + " excluido com sucesso")

                        switch (JSON.parse(result).tipoDoc) {
                                case 'Horizonte':
                                        res.redirect('/api/consulta/' + req.params.tipoRegistro + "/" + JSON.parse(result).key_observacao);
                                        break;
                                case 'AssociacaoOrgaoProjeto':
                                        res.redirect('/api/associar/OrgaoProjeto/' + JSON.parse(result).key_projeto);
                                        break;
                                default:
                                        res.redirect('/api/consulta/' + req.params.tipoRegistro);
                                        break;
                        }
                } else {
                        req.flash("error_msg", req.params.tipoRegistro + " ( " + req.params.key + " ) inválido.")
                        res.redirect('/')
                }
                // Disconnect from the gateway.
                await gateway.disconnect();
        } catch (error) {
                console.error(`Failed to submit transaction: ${error}`);
                process.exit(1);
        }
});

// ***************************************************************************************************************
// Associações
router.post('/associar/OrgaoProjeto', async function (req, res) {
        console.log('/associar/OrgaoProjeto')
        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }
                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');

                // Submit the specified transaction.

                req.body.key_associacao = uuid()
                req.body.key_proveniencia = uuid();
                await contract.submitTransaction('associar_Orgao_Projeto',
                        req.body.key_associacao,
                        req.body.key_orgao,
                        req.body.key_projeto,
                        req.body.key_proveniencia,
                );

                const resultProv = await contract.submitTransaction('criarProveniencia_Orgao_Projeto',
                        req.body.key_proveniencia,
                        req.body.key_associacao,

                        user,
                        user_name,
                        ip.address(),
                        geoLocalizacao.range,
                        geoLocalizacao.country,
                        geoLocalizacao.region,
                        geoLocalizacao.eu,
                        geoLocalizacao.timezone,
                        geoLocalizacao.city,
                        geoLocalizacao.ll,
                        geoLocalizacao.metro,
                        geoLocalizacao.area,
                        software_version,
                        navigator.userAgent,
                        'Registro incluído',
                );

                console.log('Transaction has been submitted');
                res.redirect('/api/associar/OrgaoProjeto/' + req.body.key_projeto);
                // Disconnect from the gateway.
                await gateway.disconnect();
        } catch (error) {
                console.error(`Failed to submit transaction: ${error}`);
                process.exit(1);
        }
});

router.get('/associar/OrgaoProjeto/:chave', async function (req, res) {
        console.log("===> /api/associar/OrgaoProjeto/" + req.params.chave);

        try {
                const ccpPath = path.resolve(__dirname, '..', '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
                const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
                // Create a new file system based wallet for managing identities.
                const walletPath = path.join(process.cwd(), 'wallet');
                const wallet = await Wallets.newFileSystemWallet(walletPath);
                console.log(`Wallet path: ${walletPath}`);

                // Check to see if we've already enrolled the user.
                const identity = await wallet.get('appUser');
                if (!identity) {
                        console.log('An identity for the user "appUser" does not exist in the wallet');
                        console.log('Run the registerUser.js application before retrying');
                        return;
                }
                // Create a new gateway for connecting to our peer node.
                const gateway = new Gateway();
                await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

                // Get the network (channel) our contract is deployed to.
                const network = await gateway.getNetwork('mychannel');

                // Get the contract from the network.
                const contract = network.getContract('provchain');
                // Evaluate the specified transaction.

                const orgaos = await contract.evaluateTransaction("listar_entidade", 'Orgao', "", "");//.sort('key_observacao', 'desc');
                const projetos = await contract.evaluateTransaction("listar_entidade", 'Projeto', "", "");//.sort('key_observacao', 'desc');
                const associacoes = await contract.evaluateTransaction("listar_entidade", 'AssociacaoOrgaoProjeto', "", "");//.sort('key_observacao', 'desc');

                let i = 0;

                var lista = [];
                var item = [];
                while (i < JSON.parse(associacoes).length) {
                        var iorg = 0;
                        var iprj = 0;
                        var sorg;
                        var sprj;
                        while (iorg < JSON.parse(orgaos).length) {
                                if (JSON.parse(orgaos)[iorg].Key == JSON.parse(associacoes)[i].Record.key_orgao) {
                                        sorg = JSON.parse(orgaos)[iorg].Record.nome;
                                }
                                iorg++;
                        }
                        while (iprj < JSON.parse(projetos).length) {
                                if (JSON.parse(projetos)[iprj].Key == JSON.parse(associacoes)[i].Record.key_projeto) {
                                        sprj = JSON.parse(projetos)[iprj].Record.nome;
                                }
                                iprj++;
                        }
                        item = [JSON.parse(associacoes)[i].Key, sorg, sprj, JSON.parse(associacoes)[i].Record.excluido];
                        lista.push(item);
                        i++;
                }

                res.render('api/orgaoProjeto', {
                        orgaos: JSON.parse(orgaos),
                        projetos: JSON.parse(projetos),
                        associacao: lista,
                        chave: req.params.chave,
                });
        } catch (error) {
                console.log("FAIL: " + error);
                req.flash('error_msg', `Não foi possível acessar a rotina 4. Erro - ${error}`);
                res.redirect('/api/consulta/' + req.params.tipoRegistro);
        }
});

module.exports = router