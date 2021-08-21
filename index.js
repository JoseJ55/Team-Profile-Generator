const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const express = require("express");
const app = express()
const path = require('path');

const teamArray = []; 
const items = [];
var html = "";
var page = '/dist/index.html';

// Function calls two functions one for the questions to be ask to the user 
// and the other to start the express server.
const startMenu = () => {
    frontStart();
    createManager();
}

// This function aks questions with inquirer and get the data about the manager.
const createManager = () => {
    const quests = [
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
            validate: answer => {
                if(answer !== ''){
                    return true;
                }
                return "Pleas enter at least one character."
        }
        },
        {
            type: "input",
            name: "managerEmail",
            message:"What is the manager's email?",
            validate: answer => {
                if(answer.includes('@') && answer.includes('.com')){
                    return true
                }
                return "Please enter a valid email address."
            }
        },
        {
            type: "input",
            name: "managerId",
            message:"What is the manager's ID?",
            validate: answer => {
                if(answer !== ''){
                    return true;
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "managerOffice",
            message:"What is the manager's Office Number?",
            validate: answer => {
                if(answer !== ''){
                    return true;
                }
                return "Please enter at least one character."
            }
        }]

    // This is where the questions are asked and stored.
    console.log("Build your team");
    inquirer.prompt(quests).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)        
        teamArray.push(manager)
        // Calls addHtml() and give the info enter by the user to make the HTML.
        addHtml(manager.getRole(), manager.getName(), manager.getId(), manager.getEmail(), manager.getOfficeNumber());
        // This function is to continue askign questions.
        createTeam();
    })
}

// This function aks questions with inquirer and get the data about the engineer.
const createEngineer = () => {
    const quests = [
        {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?",
        validate: answer => {
            if(answer !== ''){
                return true;
            }
            return "Pleas enter at least one character."
        }
        },
        {
            type: "input",
            name: "engineerEmail",
            message:"What is the engineer's email?",
            validate: answer => {
                if(answer.includes('@') && answer.includes('.com')){
                    return true
                }
                return "Please enter a valid email address."
            }
        },
        {
            type: "input",
            name: "engineerId",
            message:"What is the engineer's ID?",
            validate: answer => {
                if(answer !== ''){
                    return true;
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message:"What is the engineer's GitHub?",
            validate: answer => {
                if(answer !== ''){
                    return true;
                }
                return "Please enter at least one character."
            }
        }]

        // This is where the questions are asked and stored.
        inquirer.prompt(quests).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        teamArray.push(engineer);
        // Calls addHtml() and give the info enter by the user to make the HTML.
        addHtml(engineer.getRole(), engineer.getName(), engineer.getId(), engineer.getEmail(), engineer.getGitHub());
        // This function is to continue askign questions.
        createTeam();
    })
}

// This function aks questions with inquirer and get the data about the intern.
const createIntern = () => {
    console.log("working")
    const quests = [
        {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
        validate: answer => {
            if(answer !== ''){
                return true;
            }
            return "Please enter at least one character."
        }
        },
        {
            type: "input",
            name: "internEmail",
            message:"What is the intern's email?",
            validate: answer => {
                if(answer.includes('@') && answer.includes('.com')){
                    return true
                }
                return "Please enter a valid email address."
            }
        },
        {
            type: "input",
            name: "internId",
            message:"What is the intern's ID?",
            validate: answer => {
                if(answer !== ''){
                    return true;
                }
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "internSchool",
            message:"What is the intern's school?",
            validate: answer => {
                if(answer !== ''){
                    return true;
                }
                return "Please enter at least one character."
            }
        }]

        // This is where the questions are asked and stored.
        inquirer.prompt(quests).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        teamArray.push(intern);
        // Calls addHtml() and give the info enter by the user to make the HTML.
        addHtml(intern.getRole(), intern.getName(), intern.getId(), intern.getEmail(), intern.getSchool());
        // This function is to continue askign questions.
        createTeam();
    })
}

// This function puts all the data and html together by writing to a new html file.
const createHtml = () =>{
const data =`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Profile Generator</title>
        <link rel="stylesheet" href="style.css">
        <style>
            *{
                padding: 0;
                margin: 0;
            }
            
            :root {
                --headerBackground: rgb(0, 204, 255);
                --cardColor: #999;
            }
            
            body{
                font-family: Arial, Helvetica, sans-serif;
            }
            
            header {
                background-color: var(--headerBackground);
                display: flex;
                justify-content: center;
                padding: 10vh 0;
            }
            
            #team {
                display: flex;
                flex-wrap: wrap;
                padding: 1vh 0;
                width: 90%;
                margin: auto;
                justify-content: center;
            }
            
            #member {
                width: 28%;
                /* margin: auto; */
                border: grey .1rem solid;
                margin: 1vh 2vw;
            }
            
            #top {
                background-color: var(--cardColor);
                padding: 1vh 1vw;
            }
            
            #top h2{
                padding: 1vh 0;
            }
            
            #top h3{
                padding: 1vh 0;
            }
            
            #bottom{
                padding: 1vh 1vw;
            }
            
            #id {
                border: grey .1rem solid;
                padding: 1vh 1vw;
            }
            
            #email {
                border-left: grey .1rem solid;
                border-right: grey .1rem solid;
                padding: 1vh 1vw;
            }
            
            #on {
                border: grey .1rem solid;
                padding: 1vh 1vw;
            }
            
            #github {
                border: grey .1rem solid;
                padding: 1vh 1vw;
            }
            
            #school {
                border: grey .1rem solid;
                padding: 1vh 1vw;
            }
        </style>
    </head>
    <body style="font-family: Arial, Helvetica, sans-serif;">
        <header>
            <h1>My Team</h1>
        </header>
        <section id="team"> `;

    html = html + data;
    for(var i = 0; i < items.length; i++){
        html = html + items[i];
    }

        
const dataEnd =  `</section>
        <script src="../index.js"></script>
    </body>
</html>`
    html = html + dataEnd

    fs.writeFile("./src/team.html", html, (err) => {if(err) throw err;})
}

// This function gets data and then puts it into a string which is stored in an array.
const addHtml = (role, name, id, email, uniqe) => {
    let item = ``;
    // A switch stament to check what string to use and where to put data.
    switch(role){
        case "Manager":
            item = `
            <div id="member">
                <div id="top">
                    <h2>${name}</h2>
                    <h3>${role}</h3>
                </div>
                <div id="bottom">
                    <div id="item">
                        <p id="id">ID: ${id}</p>
                        <p id="email">Email: <a href="mailto: ${email}" target="_blank">${email}</a></p>
                        <p id="on">Office number: ${uniqe}</p>
                    </div>
                </div>
            </div>
            `
            break;
        case "Engineer":
            item = `
            <div id="member">
                <div id="top">
                    <h2>${name}</h2>
                    <h3>${role}</h3>
                </div>
                <div id="bottom">
                    <div id="item">
                        <p id="id">ID: ${id}</p>
                        <p id="email">Email: <a href="mailto:${email}">${email}</a></p>
                        <p id="on">GitHub: <a href="https://www.github.com/${uniqe}">${uniqe}</a></p>
                    </div>
                </div>
            </div>
            `
            break;
        case "Intern":
            item = `
            <div id="member">
                <div id="top">
                    <h2>${name}</h2>
                    <h3>${role}</h3>
                </div>
                <div id="bottom">
                    <div id="item">
                        <p id="id">ID: ${id}</p>
                        <p id="email">Email: <a href="mailto:${email}">${email}</a></p>
                        <p id="on">School: ${uniqe}</p>
                    </div>
                </div>
            </div>
            `
            break;

    
    }
    // Pushs data to an array.
    items.push(item);
}

// changes the main HTML to the HTML with the data entered.
const update = () => {
    page = '/src/team.html';
    // app.use('/', (req, res) => {
    //     res.sendFile(path.join(__dirname + page))
    // })
}

// This function contiues the questions by asking to add more data and calling
// another function with questions.
const createTeam = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "teamMember",
            choices: ["Engineer", "Intern", "Done"]
        }
    ]).then(choice => {
        switch(choice.teamMember){
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            case "Done":
                createHtml();
                update();
                break;
        }
    })
}

// The main function for express where the port and path are made with the listener.
const frontStart = () => {
    const PORT = 3001
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + page));
    })

    app.get('/style.css', (req, res) => {
        res.sendFile(__dirname + "/dist/style.css");
    })

    app.listen(PORT)
}

startMenu();

