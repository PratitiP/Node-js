/**
 * @description : Model for patient object inherited Human class
 * 
 * @author   : pratiti
 * @version  : 1.0
 * @since    : 22/1/2020
 */

const Human = require('./Human');

module.exports = class Patient extends Human{
    constructor(name, id, phoneNumber, age){
        super(name,id);
        this.phoneNumber = phoneNumber;
        this.age = age;
    }
    
    getPhoneNumber(){
        return this.phoneNumber;
    }
    setPhoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    getAge(){
        return this.age;
    }
    setAge(age){
        this.age = age;
    }
    toString(){
        return '\n\tName\t\t:\t'+this.name+'\n\tID\t\t:\t'+this.id+'\n\tPhone No.\t:\t'+this.phoneNumber+'\n\tAge\t\t:\t'+this.age;
    }
}