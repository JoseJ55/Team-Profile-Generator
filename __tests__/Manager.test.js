const Manager = require('../lib/Manager')

describe('Manager', () => {
    it('Should return the name of the manager', () => {
        const name = "Jose";

        const manager = new Manager(name);
        
        expect(manager.getName()).toEqual(name);
    });

    it('should set the id of the manager', () => {
        const name = "Jose";
        const id = 7;

        const manager = new Manager(name, id)

        expect(manager.getId()).toEqual(id)
    })

    it('should set the email of the manager', () => {
        const name = "Jose";
        const id = 7;
        const email = "something@gmail.com"

        const manager = new Manager(name, id, email)

        expect(manager.getEmail()).toEqual(email)
    })

    it('should set the email of the manager', () => {
        const name = "Jose";
        const id = 7;
        const email = "something@gmail.com"
        const office = 34;

        const manager = new Manager(name, id, email, office)

        expect(manager.officeNumber).toEqual(office)
    })


    it('should set the role as employee', () => {
        const name = "Jose";
        const id = 7;
        const email = "something@gmail.com";
        const role = `Manager`;

        const manager = new Manager(name, id, email)

        expect(manager.getRole()).toEqual(role)
    })
})