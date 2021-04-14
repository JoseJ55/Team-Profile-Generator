
const inquirer = require("inquirer");
// const engineer = require("./lib/Engineer")
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const html = require("html")
const path = require("path")

const express = require('express');
const app = express();

let q = manager.questions;
const init = (i) => {
    inquirer.prompt(i).then((answers) => {
        const {name, id, email, officeNum, member} = answers
        if(i === manager.questions){
            manager.addHtml(name, id, email, officeNum, member);
        }

        switch(member){
            case "engineer":
                quests = engineer.questions;
                console.log("working")
                init(quests)
                break;
            case "intern":
                console.log("intern")
                break;
            case "Done":
                console.log("working")
                break;
        }
        // console.log(name, id, email, officeNum, member)
    })
}

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})

init(q);
