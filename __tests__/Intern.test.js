const Intern = require('../lib/Intern')

describe('Intern', () => {
    it('Should return the name of the intern', () => {
        const name = "Jose";

        const intern = new Intern(name);
        
        expect(intern.getName()).toEqual(name);
    });

    it('should set the id of the intern', () => {
        const name = "Jose";
        const id = 7;

        const intern = new Intern(name, id)

        expect(intern.getId()).toEqual(id)
    })

    it('should set the email of the intern', () => {
        const name = "Jose";
        const id = 7;
        const email = "something@gmail.com"

        const intern = new Intern(name, id, email)

        expect(intern.getEmail()).toEqual(email)
    })

    it('should set the school of the intern', () => {
        const name = "Jose";
        const id = 7;
        const email = "something@gmail.com"
        const school = "UCR";

        const intern = new Intern(name, id, email, school)

        expect(intern.getSchool()).toEqual(school)
    })


    it('should set the role as intern', () => {
        const name = "Jose";
        const id = 7;
        const email = "something@gmail.com";
        const school = "UCR"
        const role = `Intern`;

        const intern = new Intern(name, id, email, school)

        expect(intern.getRole()).toEqual(role)
    })
})