const host_address_publico = "18.207.152.196";          // AWS IP Públicoem 2024
const host_address_privado = "172.31.22.6";             // AWS IP Públicoem 2024

const os = require('os');

// const ipLido = os.networkInterfaces().lo[0].address;
// console.log ("==========================================");
// console.log (os.networkInterfaces().eth0);
// console.log ("==========================================");

let port = 8080;
var addr = "";

// if (ipLido != host_address_privado) {                  // ip privado da AWS
if (os.networkInterfaces().eth0) {                  // ip privado da AWS
        addr = host_address_publico;                     
        port = 80;
} else {
        addr = "127.0.0.1";                      // localhost
        port = 8080;
}        

console.log("addr: " + addr);
console.log("==============================================");

// Carregandp Módulos

const api = require("./routes/api");
const session = require("express-session");
const flash = require("connect-flash");

const navigator = require("navigator");

const Handlebars = require ("handlebars");

var express = require('express');
var app = express();

var http = require('http');
var server = http.createServer(app);

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const handlebars = require ('express-handlebars')
// Configurações
// sessão
app.use(session({
        secret:"secretinformationxpto",
        resave: true,
        saveUninitialized: true
}))
app.use(flash())

// MiddleWare
app.use((req, res, next) => {
        //variaveis globais
        res.locals.titulo_pagina = req.flash("titulo_pagina")
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        next()
})
   
global.user = 'appUser'
global.user_name = 'Élton Carneiro Marinho'
global.software_version = 'PROVChain Version 01.01'
global.software_browser = navigator.userAgent

// Handlebars
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

Handlebars.registerHelper('ifeq', function (a, b, options) {
        if (a == b) { return options.fn(this); }
        return options.inverse(this);
});
         
Handlebars.registerHelper('ifnoteq', function (a, b, options) {
        if (a != b) { return options.fn(this); }
        return options.inverse(this);
});

Handlebars.registerHelper('json', function(context, options) {
        return JSON.stringify(context, null, 2);
});

Handlebars.registerHelper('switch', function(value, options) {
        this.switch_value = value;
        this.switch_break = false;
        return options.fn(this);
});

Handlebars.registerHelper('case', function(value, options) {
        if (value == this.switch_value) {
                this.switch_break = true;
                return options.fn(this);
        }
});

Handlebars.registerHelper('default', function(value, options) {
        if (this.switch_break == false) {
        return value;
        }
});

// Setting for Hyperledger Fabric
const { Gateway,Wallets } = require('fabric-network');
const path = require('path');
const fs = require('fs');
const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

// Public
app.use(express.static(path.join(__dirname, "public")))

const {v4:uuid} = require('uuid');
 
//***************************************************************************************************************************
// Rotas

app.get("/", async function(req, res) {
        res.render('home', {titulo_pagina: "PROVChain - Prova de Conceito"});
})

app.get("/listar/:tipoRegistro", (req, res) => {
        res.redirect ('/api/consulta/' + req.params.tipoRegistro);
})

app.get("/listar/:tipoRegistro/:key", (req, res) => {
        res.redirect ('/api/consulta/' + req.params.tipoRegistro) + '/' + req.params.key;
})

app.get("/adicionarOrgao", (req, res) => {
        res.render ('api/criar/Orgao', {uuid: uuid()})
})

app.get("/alterarOrgao", (req, res) => {
        res.render ('api/atualizar/Orgao', {uuid: uuid()})
})

app.get("/adicionarProjeto", (req, res) => {
        res.render ('api/criar/Projeto', {uuid: uuid()})
})

app.get("/alterarProjeto", (req, res) => {
        res.render ('api/atualizar/Projeto', {uuid: uuid()})
})

app.get("/adicionarObservacao/:key", async function (req, res) {
        try {
        // load the network configuration
                const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
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
                 

        let yourDate = new Date();
        const result = await contract.submitTransaction('consultar_identificador', req.params.key);
        res.render("api/criar/Observacao", {
                descrito_coletado: user_name,
                hoje: yourDate.toISOString().split('T')[0],
                projeto: JSON.parse(result),
        })
        // Disconnect from the gateway.
        await gateway.disconnect();       
        
        } catch (error) {
                let yourDate = new Date();
                req.flash("error_msg", "Houve um erro ao submeter a transação");
                console.error(`Failed to submit transaction: ${error}`);
                res.render("api/criar/Observacao" , {
                        descrito_coletado: user_name,
                        hoje: yourDate.toISOString().split('T')[0],
                        projeto: JSON.parse(result),
                });
        }        
})
                
app.get("/adicionarAmostra/:key", async function (req, res) {
        try {
        // load the network configuration
                const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
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
                 

        let yourDate = new Date();
        const result = await contract.submitTransaction('consultar_identificador', req.params.key);
        res.render("api/criar/Amostra", {
                hoje: yourDate.toISOString().split('T')[0],
                projeto: JSON.parse(result),
        })
        // Disconnect from the gateway.
        await gateway.disconnect();       
        
        } catch (error) {
                let yourDate = new Date();
                req.flash("error_msg", "Houve um erro ao submeter a transação");
                console.error(`Failed to submit transaction: ${error}`);
                res.render("api/criar/Amostra" , {
                        descrito_coletado: user_name,
                        hoje: yourDate.toISOString().split('T')[0],
                        projeto: JSON.parse(result),
                });
        }        
})
                
// ***************************************************************************************************************
// Grupos de Rotas
app.use('/api', api);  

const requestListener = function (req, res) {
        res.setHeader("Content-Type", "text/html");
    };

server.listen(port, () => {
        console.log(`Aplicativo ouvindo em http://${addr}:${port}`)
        console.log("© 2022 Copyright: Élton Carneiro Marinho")
});