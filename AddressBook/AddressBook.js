/**
 * Purpose   : Address Book via object oriented, creating new address book,  
 * adding, removing, editing address objects,
 * deleting, sorting and saving objects in json. 
 * @author   : Pratiti S
 */
const fs = require("fs");
const Person = require('./Person');
const Address = require('./Address');
const utility = require('./Utility');

let person = new Person();
let address = new Address();
let input = utility.userInput();
let array = [];
let filesArray = [];
let addressBookCount = 0;
let newAddressBookCount = 0;
let fileSaveAddress = './'
let addressBookName = '';

/**
 * @description Main menu for address book.
 */
menu = () => {
    input.question('1. New Address Book\n2. Open existing Address Book\n3. Exit ', (choice) => {
        if (choice == '1') {
            console.log();
            array = [];
            filesArray.forEach(element => {
                console.log(element);
            });
            input.question('\nEnter the name of new address book ', (newAddressBook) => {
                addressBookName = newAddressBook;
                newAddressBookCount = 0;
                filesArray.forEach(element => {

                    if (element == newAddressBook + '.json') {
                        newAddressBookCount++;
                    }
                });
                if (newAddressBookCount == 0) {
                    utility.write(fileSaveAddress + newAddressBook + '.json', array);
                    menu();
                } else {
                    console.log('Address book named ' + newAddressBook + '.json already exists');
                    menu();
                }
            })
            menu();
        } else if (choice == '2') {
            checkingFiles();
            input.question('Enter the name of the address book ', (newAddressBookName) => {
                addressBookCount = 0;
                addressBookName = newAddressBookName;
                filesArray.forEach(element => {
                    if (element == addressBookName + '.json') {
                        addressBookCount++;
                    }
                });
                if (addressBookCount > 0) {
                    var output = readData(addressBookName);
                    innerMenu();
                } else {
                    console.log('Address Book named ' + addressBookName + " doesn't exists");
                    menu();
                }
            })
            menu();
        } else if (choice == '3') {
            console.log('Closing');
            input.close();
            process.exit();
        } else {
            console.log('Something went wrong !');
            input.close();
            process.exit();
        }
    })

}

/**
 * @description reading all the json files or different address books.
 */
checkingFiles = () => {
   
}

/**
 * @description reading data from a json file.
 */
readData = (addressBookName) => {
    var obj = utility.read(fileSaveAddress + addressBookName + '.json');
    obj.forEach(elements => {
        person = new Person();
        address = new Address();
        person.setFirstName(elements.firstName);
        person.setLastName(elements.lastName);
        address.setCity(elements.address.city);
        address.setState(elements.address.state);
        address.setZip(elements.address.zip);
        person.setAddress(address)
        person.setPhoneNumber(elements.phoneNumber);
        array.push(person);

    });
    return true;
}

/**
 * @description Inner menu of address book after opening an address book.
 */
innerMenu = () => {
    input.question('1. Add\n2. Edit\n3. Delete\n4. Display\n5. Sort by Name\n6. Sort by zip\n7. Save\n8. Save as\n9. Exit\n', (innerChoice) => {
        if (innerChoice == '1') {
            console.log('add');
            person = new Person();
            address = new Address();
            input.question('Enter first name ', (firstName) => {
                input.question('Enter last name ', (lastName) => {
                    input.question('Enter city ', (city) => {
                        input.question('Enter state ', (state) => {
                            input.question('Enter zip ', (zip) => {
                                input.question('Enter phone number ', (phoneNumber) => {
                                    person.setFirstName(firstName);
                                    person.setLastName(lastName);
                                    person.setPhoneNumber(phoneNumber);
                                    address.setCity(city);
                                    address.setState(state);
                                    address.setZip(zip);
                                    person.setAddress(address);
                                    array.push(person);
                                    console.log(person.toString());
                                    innerMenu();
                                })
                            })
                        })
                    })
                })
            })

        } else if (innerChoice == '2') {
            input.question('Enter the first name of person for editing ', (name) => {
                var count = 0;
                array.forEach(element => {
                    if (element.firstName == name) {
                        input.question('1. Edit last name\n2. Edit Address\n3. Edit phone number ', (editChoice) => {
                            if (editChoice == '1') {
                                input.question('Enter new last name ', (lastName) => {
                                    element.setLastName(lastName);
                                    innerMenu();
                                })
                            } else if (editChoice == '2') {
                                input.question('Enter city ', (city) => {
                                    input.question('Enter state ', (state) => {
                                        input.question('Enter zip ', (zip) => {
                                            element.address.setCity(city);
                                            element.address.setState(state);
                                            element.address.setZip(zip);
                                            innerMenu();
                                        })
                                    })
                                })
                            } else if (editChoice == '3') {
                                input.question('Enter phone number ', (phoneNumber) => {
                                    element.setPhoneNumber(phoneNumber);
                                    innerMenu();
                                })
                            }
                        })
                    }
                });
                if (count == 0) {
                    console.log('No records found for the name entered');
                    innerMenu();
                }
            })

        } else if (innerChoice == '3') {
            if (array.length != 0) {
                input.question('Enter the first name to delete ', (name) => {
                    for (var i = 0; i < array.length; i++) {
                        if (array[i].firstName == name) {
                            array.splice(i, 1);
                        }
                    }
                    innerMenu();
                })
            } else {
                console.log('No records found to delete');
                innerMenu();
            }

        } else if (innerChoice == '4') {
            array.forEach(element => {
                console.log(element.toString());
            });
            innerMenu();
        } else if (innerChoice == '5') {
            array.sort(function (a, b) {
                return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0);
            });
            innerMenu();
        } else if (innerChoice == '6') {
            array.sort(function (a, b) {
                return (a.address.zip > b.address.zip) ? 1 : ((b.address.zip > a.address.zip) ? -1 : 0);
            });
            innerMenu();
        } else if (innerChoice == '7') {
            console.log('save');
            utility.write(fileSaveAddress + addressBookName + '.json', array);
            innerMenu();
        } else if (innerChoice == '8') {
            input.question('Enter the new file name ', (newAddressBook) => {
                utility.write(fileSaveAddress + newAddressBook + '.json', array);
                innerMenu();
            })


        } else if (innerChoice == '9') {
            console.log('exit');
            menu();
        } else {
            console.log('Something went wrong!');
            process.exit();

        }
    })
}
checkingFiles();
menu();