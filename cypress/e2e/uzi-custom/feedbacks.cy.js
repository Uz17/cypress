
import { Login, AddUser, UpdateEmp, SearchEmp, DeleteEmp } from "./../../PageObjects/SampleObjects";


describe('End-to-End Tests', () => {

    // In Before block
    describe('Before', () => {
        it('visitAndLogin', () => {
            Login.visitLoginPage();
            Login.login('Admin', 'admin123');
        });

    });

    // Create employee
    describe('Add Employee', () => {
        it('addAnEmployee', () => {
            Login.visitLoginPage();
            Login.login('Admin', 'admin123');
            AddUser.addUser('uzaiz', 'hossan', 'sumit')
        });
    });

    // Update employee
    describe('Update Employee', () => {
        it('should update an employee', () => {
            Login.visitLoginPage();
            Login.login('Admin', 'admin123');
            AddUser.addUser('uzaiz', 'hossan', 'sumit')
            UpdateEmp.updateUser()
        });
    });

    // Search employee
    describe('Search Employee', () => {
        it('ssearch and delete', () => {
            Login.visitLoginPage();
            Login.login('Admin', 'admin123');
            SearchEmp.searchEmp(1111)
            DeleteEmp.deleteEmp()
        });
    });

})