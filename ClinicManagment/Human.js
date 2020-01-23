/**
 * @descriptoion : Model for Human object Parent class
 *
 * @author   : pratiti
 * @version  : 1.0
 * @date    : 22/1/2020
 */
module.exports = class Human {
    constructor(name, id, specialization, availability, numberOfPatients) {
        this.name = name;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}