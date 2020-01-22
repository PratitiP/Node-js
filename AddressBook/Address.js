/**
 * Purpose   : Model class for address object.
 * @author   : Pratiti S
 */
module.exports = class Address{
    constructor(city, state, zip){
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
    getCity(){
        return this.city;
    }
    setCity(city){
        this.city = city;
    }
    getState(){
        return this.state;
    }
    setState(state){
        this.state = state;
    }
    getZip(){
        return this.zip
    }
    setZip(zip){
        this.zip = zip;
    }
    toString(){
        return (this.city+' , '+this.state+' , '+this.zip+'\t');
    }
}