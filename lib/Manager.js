const inquirer = require("inquirer")
// const template = require("./../src/")
const fs = require("fs");

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

const addHtml = (name, id, email, officeNum, member) => {
const h = `<div id="member">
    <div id="top">
        <h2>${name}</h2>
        <h3>Manager</h3>
    </div>
    <div id="bottom">
        <div id="item">
            <p id="id">ID: ${id}</p>
            <p id="email">Email: ${email}</p>
            <p id="on">Office number: ${officeNum}</p>
        </div>
    </div>
</div>`;

return h;
}

module.exports = {
    questions,
    addHtml
}
