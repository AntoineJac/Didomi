// CommonJS
const fetch = require('node-fetch');
const utils = require('./utils');
const fs = require('fs');

let filename = './query.json'; 
const jsonFile = require(filename); 

const users = [{id:'user0'},{id:'user1'}, {id:'user2'}, {id:'user3'}, {id:'user4'}, 
{id:'user5'}, {id:'user6'}, {id:'user7'}, {id:'user8'}, {id:'user9'}];

let login = {};
let responseUserStatus = [];
let responseUsersConsents;

const startPoint = () => {
    const readline = require("readline");
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question("What Is your Client Login?", function(clientId) {
        rl.question("What Is your Client Secret?", function(clientSecret) {
            login = {id: clientId, secret: clientSecret}

            utils.getAuth(login.id, login.secret)
            .then(resp => {
                Startchoice()
            })
            .catch(err => {
                console.log("Error during authentication "+err);
                rl.close();
                startPoint();
            })
        })
    })
};

const Startchoice = () => {
    const readline = require("readline");
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
    const token = 
    rl.question("What Is your Choice: 1 for postConsent, 2 getConsent or 3 for UpdateConsent, exit 4?", function(choice) {
        
        if (choice == 4) {
            rl.close();
        } else if (choice == 1) {
            users.forEach(user => {
                const jsonFile = require(filename); 
                jsonFile.id = user.id;

                utils.postConsent(token, jsonFile)
                .then(resp => {
                    responseUserStatus.push(resp);
                })
                .catch(err => {
                    console.log('Error during PostConsent: '+err);
                })
            });
            console.log(responseUserStatus);
            responseUserStatus = [];
            rl.close();
            Startchoice();
        } else if (choice == 2)  {
            utils.getUsersConsent(token)
            .then(resp => {
                responseUsersConsents = resp;
            })
            .catch(err => {
                console.log('Error during getUserConsent: '+err);
            })
            console.log(responseUsersConsents);
            rl.close();
            Startchoice();
        } else if (choice == 3)  {
            users.every(user => {
                utils.updateConsent(user.id)
                .then(resp => {
                    responseUserStatus.push(resp);
                })
                .catch(err => {
                    console.log('Error during updateConsent: '+err);
                    return false
                })
            });
            rl.close();
            Startchoice();
        } else {
            rl.close();
            Startchoice();
        }
    })
};

startPoint();





