
const inquirer = require("inquirer")
const engineer = require("./lib/Engineer")
const { choices } = require("yargs")

const questions = [{
    type: `input`,
    name: `name`,
    message: `Enter manager name: `
},
{
    type: `input`,
    name: `id`,
    message: `Enter emplyee ID: `
},
{
    type: `input`,
    name: `email`,
    message: `Enter email: `
},
{
    type: `input`,
    name: `officeNum`,
    message: `Enter manager office number: `
},
{
    type: `list`,
    name: `member`,
    message: `Would you like to add another team member: `,
    choices: [`engineer`, `intern`, `Done`]
}]

const init = () => {
    inquirer.prompt(questions).then((answers) => {
        const {name, id, email, officeNum, member} = answers
        
        if(member == 'engineer'){ // need to find a way to ask multiple times rn it stops after adding one.
            engineer.engineerQuest()
        }
    })
}

init();