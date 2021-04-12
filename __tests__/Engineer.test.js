// Need to find a way for this to work. For now it doesn't do anything.
const { test, expect, it } = require('@jest/globals');
const { describe } = require('yargs');
const engineer = require('./../lib/Engineer');

describe('it ask question and returns the answers', () => {
    let ans = {name: 'jeff', id: '1', email: '@gmail.com', github: 'vgon', member: 'None'};
    const inquirer = {prompt: () => Promise.resolve(ans)}

    it("should equal ans", () => {
        engineer({inquirer}).then(answers => {
            answers.name.should.equal('jeff');
            answers.id.should.equal('1');
            answers.email.should.equal('@gmail.com');
            answers.github.should.equal('vgon');
            answers.member.should.equal('None');
        })
    })
})

// "echo \"Error: no test specified\" && exit 1"