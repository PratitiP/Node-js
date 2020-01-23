/**
 * @description   : Address Book via object oriented, creating new address book,  
 * adding, removing, editing address objects,
 * deleting, sorting and saving objects in json. 
 * @author   : Pratiti S
 * @version 1.0
 * @date : 21/1/2020
 */
const Person = require('./Person');
const Address = require('./Address');
const utility = require('./Utility');
const AddressBook=require('./AddressBook');

let person = new Person();
let address = new Address();
let input = utility.userInput();
let adrBook = new AddressBook();
let filesArray = [];
let addressBookCount = 0;
let newAddressBookCount = 0;
let fileSaveAddress = './';
let addressBookName = '';
let pattern = {
    name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    zip: /^\d{6}/,
    ph: /^\d{10}/,
    fileName:/^[^. ]+$/
}

/**
 * @description Main menu for address book.
 */
menu = () => {

    input.question('1. New Address Book\n2. Open existing Address Book\n3. Exit \n', (choice) => {
        if (choice == '1') {
            console.log();
            adrBook = new AddressBook();
            let fileStr='';
            filesArray.forEach((fileName)=>{
                let name=fileName.split('.')
                fileStr=fileStr+'\t'+name[0]+'\n';
            });
            console.log(`Existing Address Books  : \n${fileStr}`);
            
            input.question('\nEnter the name of new address book : ', (newAddressBook) => {
                addressBookName = newAddressBook;
                newAddressBookCount = 0;

                if(!pattern.fileName.test(newAddressBook)){
                    console.log(`Invalid filename for new Address book. Try again...`);
                    menu();return;
                }else{
                filesArray.forEach(element => {
                    if (element == newAddressBook + '.json') {
                        newAddressBookCount++;
                    }
                });
                if (newAddressBookCount == 0) {
                    utility.write(fileSaveAddress + newAddressBook + '.json', adrBook.addressBook);
                    menu();
                } else {
                    console.log('Address book named ' + newAddressBook + '.json already exists');
                    menu();
                }
            }
            })
        } else if (choice == '2') {
            checkingFiles();
            adrBook = new AddressBook();
            if (filesArray.length==0){
                console.log(`No Address books yet . Create new one `);
                menu();
            }
            else {
                let fileStr=''
                filesArray.forEach((fileName)=>{
                    let name=fileName.split('.')
                    fileStr=fileStr+'\t'+name[0]+'\n';
                });
                console.log(`Existing Address Books  :  \n${fileStr}`);
                input.question('Enter the name of the address book : ', (newAddressBookName) => {
                    addressBookCount = 0;
                    addressBookName = newAddressBookName;
                    filesArray.forEach(element => {
                        if (element == addressBookName + '.json') {
                            addressBookCount++;
                        }
                    });
                    if (addressBookCount > 0) {
                        var output = adrBook.readAddressBook(fileSaveAddress, addressBookName);
                        innerMenu();
                    } else {
                        console.log('Address Book named ' + addressBookName + " doesn't exists");
                        menu();
                    }
                })
            }
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
 * @description Inner menu of address book after opening an address book.
 */
innerMenu = () => {
    input.question('1. Add\n2. Edit\n3. Delete\n4. Display\n5. Sort by Name\n6. Sort by zip\n7. Save\n8. Save as\n9. Exit\n', (innerChoice) => {
        if (innerChoice == '1') {
            console.log('add');
            person = new Person();
            address = new Address();
            input.question('Enter first name : ', (firstName) => {
                if (!pattern.name.test(firstName)) {invalid('firstName');return;}
                input.question('Enter last name : ', (lastName) => {
                    if (!pattern.name.test(lastName)) {invalid('lastName');return;}
                    input.question('Enter city : ', (city) => {
                        if (!pattern.name.test(city)) {invalid('city');return;}
                        input.question('Enter state : ', (state) => {
                            if (!pattern.name.test(state)) {invalid('state');return;}
                            input.question('Enter zip : ', (zip) => {
                                if (!pattern.zip.test(zip)) {invalid('zip');return;}
                                input.question('Enter phone number : ', (phoneNumber) => {
                                    if (!pattern.ph.test(phoneNumber)) {invalid('phoneNumber');return;}
                                    person.setFirstName(firstName);
                                    person.setLastName(lastName);
                                    person.setPhoneNumber(phoneNumber);
                                    address.setCity(city);
                                    address.setState(state);
                                    address.setZip(zip);
                                    person.setAddress(address);
                                    adrBook.add(person);
                                    console.log(person.toString());
                                    console.log(`Save before exit. Otherwise data will be lost`);
                                    innerMenu();
                                })

                            })
                        })
                    })
                })
            })

        } else if (innerChoice == '2') {
            input.question('Enter the first name of person for editing : ', (name) => {
                var count = 0;
               
                adrBook.addressBook.forEach((element, index) => {
                    if (element.firstName == name) {
                        input.question('1. Edit last name\n2. Edit Address\n3. Edit phone number\n ', (editChoice) => {
                            if (editChoice == '1') {
                                input.question('Enter new last name : ', (lastName) => {
                                    if (!pattern.name.test(lastName)) {invalid('lastName');return;}
                                    element.setLastName(lastName);
                                    adrBook.edit(index,element);
                                    console.log(`Save before exit. Otherwise data will be lost`);
                                    innerMenu();
                                    
                                })
                            } else if (editChoice == '2') {
                                input.question('Enter city : ', (city) => {
                                    if (!pattern.name.test(city)) {invalid('city');return;}
                                    input.question('Enter state : ', (state) => {
                                        if (!pattern.name.test(state)) {invalid('state');return;}
                                        input.question('Enter zip : ', (zip) => {
                                            if (!pattern.zip.test(zip)) {invalid('zip');return;}
                                            element.address.setCity(city);
                                            element.address.setState(state);
                                            element.address.setZip(zip);
                                            adrBook.edit(index,element);
                                            console.log(`Save before exit. Otherwise data will be lost`);
                                            innerMenu();
                                        })
                                    })
                                })
                            } else if (editChoice == '3') {
                                input.question('Enter phone number : ', (phoneNumber) => {
                                    if (!pattern.ph.test(phoneNumber)) {invalid();return;}
                                    element.setPhoneNumber(phoneNumber);
                                    adrBook.edit(index,element);
                                    console.log(`Save before exit. Otherwise data will be lost`);
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
            if (adrBook.addressBook.length != 0) {
                input.question('Enter the first name to delete : ', (name) => {
                    let flagDelete = adrBook.delete(name);
                    if (flagDelete)
                        console.log(`Save before exit. Otherwise data will be lost`);
                    else
                        console.log(`No such record to delete.`);
                    innerMenu();
                })
            } else {
                console.log('No records to delete');
                innerMenu();
            }

        } else if (innerChoice == '4') {
            if (adrBook.addressBook.length == 0){
                console.log(`No records found `);
                innerMenu();
            }
            else{
                adrBook.display();
                innerMenu();
            }
        } else if (innerChoice == '5') {
            adrBook.sortName();
            adrBook.display();
            innerMenu();
        } else if (innerChoice == '6') {
            adrBook.sortZip();
            adrBook.display();
            innerMenu();
        } else if (innerChoice == '7') {
            console.log('save');
            adrBook.save(fileSaveAddress, addressBookName);
            innerMenu();
        } else if (innerChoice == '8') {
            input.question('Enter the new file name ', (newAddressBook) => {
            adrBook.saveAs(fileSaveAddress, newAddressBook);
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

/**
 * @description reading all the json files or different address books.
 */
checkingFiles = () => {
    filesArray = utility.readdir();
    // console.log(filesArray);
}

/**
 * To console value for field is invalid
 * call innerMenu 
 * @param {*} field
 */
function invalid(field) {
    console.log(`Invalid Input for ${field} . Try again`);
    innerMenu();
}

checkingFiles();
menu();