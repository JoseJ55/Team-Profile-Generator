const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    it('Should return the name of the engineer', () => {
        const name = "Jose";

        const engineer = new Engineer(name);
        
        expect(engineer.getName()).toEqual(name);
    });

    it('should set the id of the engineer', () => {
        const name = "Jose";
        const id = 7;

        const engineer = new Engineer(name, id)

        expect(engineer.getId()).toEqual(id)
    })

    it('should set the email of the engineer', () => {
        const name = "Jose";
        const id = 7;
        const email = "something@gmail.com"

        const engineer = new Engineer(name, id, email)

        expect(engineer.getEmail()).toEqual(email)
    })

    it('should set the github of the engineer', () => {
        const name = "Jose";
        const id = 7;
        const email = "something@gmail.com"
        const git = "engin.git";

        const engineer = new Engineer(name, id, email, git)

        expect(engineer.getGitHub()).toEqual(git)
    })


    it('should set the role as engineer', () => {
        const name = "Jose";
        const id = 7;
        const email = "something@gmail.com";
        const role = `Engineer`;

        const engineer = new Engineer(name, id, email)

        expect(engineer.getRole()).toEqual(role)
    })
})