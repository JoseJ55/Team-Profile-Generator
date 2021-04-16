const Employee = require('../lib/Employee')

describe('Employee', () => {
    it('Should return the name of the employee', () => {
        const name = "Jose";

        const employee = new Employee(name);
        
        expect(employee.getName()).toEqual(name);
    });

    it('should set the id of the employee', () => {
        const name = "Jose";
        const id = 7;

        const employee = new Employee(name, id)

        expect(employee.getId()).toEqual(id)
    })

    it('should set the email of the employee', () => {
        const name = "Jose";
        const id = 7;
        const email = "something@gmail.com"

        const employee = new Employee(name, id, email)

        expect(employee.getEmail()).toEqual(email)
    })

    it('should set the role as employee', () => {
        const name = "Jose";
        const id = 7;
        const email = "something@gmail.com";
        const role = `Employee`;

        const employee = new Employee(name, id, email)

        expect(employee.getRole()).toEqual(role)
    })
})