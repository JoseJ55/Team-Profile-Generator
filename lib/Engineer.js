// maybe change things a bit.
const inquirer = require("inquirer")
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
    name: `github`,
    message: `Enter engineer GitHub: `
},
{
    type: `list`,
    name: `member`,
    message: `Would you like to add another team member: `,
    choices: [`engineer`, `intern`, `Done`]
}]

const engineerQuest = () => {
    inquirer.prompt(questions).then((answers) => {
        const {name, id, email, github, member} = answers

        return [name, id, email, github, member];
    }).catch(error => {
        if(error.isTtyError){
            console.log(error)
        }
    })
}

module.exports = {
    engineerQuest
}