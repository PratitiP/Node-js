/**
 * Purpose   : Model for person object.
 * @author   : Pratiti S
 */
module.exports = class Person{
    constructor(firstName, lastName, address, phoneNumber){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
    getFirstName(){
        return this.firstName;
    }
    setFirstName(firstName){
        this.firstName = firstName;
    }
    getLastName(){
        return this.lastName
    }
    setLastName(lastName){
        this.lastName = lastName;
    }
    getAddress(){
        return this.address;
    }
    setAddress(address){
        this.address= address;
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }
    setPhoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    toString(){
        return (this.firstName+' '+this.lastName+'\t'+this.address+this.phoneNumber+'\n');
        // return ('\n\tFirst Name\t:\t'+this.firstName+'\n\tLast Name\t:\t'+this.lastName+'\n\tAddress\t\t'+this.address+'\n\tPhone Number\t:\t'+this.phoneNumber);
    }
}