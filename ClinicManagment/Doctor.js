/**
 * @descriptoion : Model for doctor object inherited Human class
 *
 * @author   : pratiti
 * @version  : 1.0
 * @date    : 22/1/2020
 */

const Human = require('./Human');

module.exports = class Doctor extends Human{
    constructor(name, id, specialization, availability, numberOfPatients) {
        super(name,id);
        this.specialization = specialization;
        this.availability = availability;
        this.numberOfPatients = numberOfPatients;
    }
    
    getSpecialization() {
        return this.specialization;
    }
    setSpecialization(specialization) {
        this.specialization = specialization;
    }
    getAvailability() {
        return this.availability;
    }
    setAvailability() {
        this.availability = availability;
    }
    getNumberOfPatients(){
        return this.numberOfPatients;
    }
    setNumberOfPatients(numberOfPatients){
        this.numberOfPatients = numberOfPatients;
    }
    toString(){
        return '\n\tName\t\t:\t'+this.name+'\n\tID\t\t:\t'+this.id+'\n\tSpecialization\t:\t'+this.specialization+'\n\tAvailability\t:\t'+this.availability;
    }
}