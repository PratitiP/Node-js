/**
 * @description   : Model for person object.
 * @author   : Pratiti S
 */

const utility = require('./Utility');
const Person = require('./Person');
const Address = require('./Address');

module.exports = class AddressBook {
    constructor() {
        this.addressBook = [];
    }

    /**
    * @description reading data from a json file.
    */
    readAddressBook(fileSaveAddress, addressBookName) {
        //clear preveous data in addressBook even if it is not saved
        var obj = utility.read(fileSaveAddress + addressBookName + '.json');
        obj.forEach(elements => {
            let person = new Person();
            let address = new Address();
            person.setFirstName(elements.firstName);
            person.setLastName(elements.lastName);
            address.setCity(elements.address.city);
            address.setState(elements.address.state);
            address.setZip(elements.address.zip);
            person.setAddress(address)
            person.setPhoneNumber(elements.phoneNumber);
            this.addressBook.push(person);
        });

    }

    /**
     * Add person to addressbook
     * @param {*} person 
     */
    add(person) {
        this.addressBook.push(person);
    }

    edit(index, person) {
        this.addressBook[index] = person;
    }

    delete(firstName) {
        let flagDelete = false;
        for (var i = 0; i < this.addressBook.length; i++) {
            if (this.addressBook[i].firstName == firstName) {
                this.addressBook.splice(i, 1);
                flagDelete = true;
            }
        }
        return flagDelete;
    }

    display() {
        console.log(`-------------------------------------------------------------------------`);
        console.log(`FirstName\tLastName\tCity , State , zip\tPhoneNumber`);
        console.log(`-------------------------------------------------------------------------`);
        this.addressBook.forEach(element => {
            console.log(element.toString());
        });
    }

    /**
     * sort addressbook based on firstName
     */
    sortName() {
        this.addressBook.sort(function (a, b) {
            return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0);
        });
    }

     /**
     * sort addressbook based on zipcode
     */
    sortZip() {
        this.addressBook.sort(function (a, b) {
            return (a.address.zip > b.address.zip) ? 1 : ((b.address.zip > a.address.zip) ? -1 : 0);
        });
    }

    save(fileSaveAddress, addressBookName) {
        utility.write(fileSaveAddress + addressBookName + '.json', this.addressBook);
    }

    saveAs(fileSaveAddress, newAddressBook) {
        utility.write(fileSaveAddress + newAddressBook + '.json', this.addressBook);
    }



}