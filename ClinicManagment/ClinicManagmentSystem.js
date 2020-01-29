/**
 * Purpose   : Clinic management system object oriented, adding doctors, patients taking appointments, displaying data and saving in json file.
 * 
 * @author   : Pratiti S
 * @version  : 1.0
 * @since    : 28/1/2020
 */
var utility = require('/home/admin1/ps/week2/node-js/AddressBook/Utility.js');
var Patient = require('./Patient');
var Doctor = require('./Doctor');
var Appointment = require('./Appointment');
var patient = new Patient();
var doctor = new Doctor();
var appointment = new Appointment();
var patientArray = [];
var doctorArray = [];
var appointmentArray = [];
var input = utility.userInput();

/**
 * @description Main menu of clinic management system.
 */
menu = () => {
    input.question('\n------------------\n\tMenu\n1. Add new entries\n2. Take appointment\n3. Display\n4. Save\n5. Exit\n------------------\n', (choice) => {
        if (choice == '1') {
            add();
        } else if (choice == '2') {
            takeAppointment();
        } else if (choice == '3') {
            display();
        } else if (choice == '4') {
            save();
        } else if (choice == '5') {
            console.log('Closing Clinic');
            input.close();
            process.exit();
        } else {
            console.log('Something went wrong!\nSystem Closed!');
            input.close();
            process.close();
        }
    })
}
/**
 * @description Add menu
 */
add = () => {
    input.question('\n------------------\n     Add Menu\n1. Patient\n2. Doctor\n3. Exit\n------------------\n', (addChoice) => {
        if (addChoice == '1') {
            input.question('Enter name ', (name) => {
                input.question('Enter id ', (id) => {
                    input.question('Enter phone number ', (phoneNumber) => {
                        input.question('Enter age ', (age) => {
                            patient = new Patient(name, id, phoneNumber, age);
                            patientArray.push(patient);
                            add();
                        })
                    })
                })
            })
        } else if (addChoice == '2') {
            input.question('Enter name ', (name) => {
                input.question('Enter id ', (id) => {
                    input.question('Enter specialization ', (specialization) => {
                        input.question('Enter availability ', (availability) => {
                            doctor = new Doctor(name, id, specialization, availability, Number(0));
                            doctorArray.push(doctor);
                            add();
                        })
                    })
                })
            })
        } else if (addChoice == '3') {
            console.log('Closing add menu');
            menu();
        } else {
            console.log('Something went wrong!');
            menu();
        }
    })
}

/**
 * @description Function for taking appointment.
 */
takeAppointment = () => {
    var patientCount = 0;
    var doctorCount = 0;
    input.question('Enter name of patient ', (name) => {
        input.question('Enter id of patient ', (id) => {
            patientArray.forEach(patientElement => {
                if (patientElement.name == name) {
                    if (patientElement.id == id) {
                        patientCount++;
                        input.question('Enter name of doctor ', (docName) => {
                            input.question('Enter id of doctor ', (docId) => {
                                doctorArray.forEach(docElement => {
                                    if (docElement.name == docName) {
                                        if (docElement.id == docId) {
                                            doctorCount++;
                                            var numberOfPatients = docElement.getNumberOfPatients();
                                            if (numberOfPatients < 6) {
                                                var date = new Date();
                                                appointment = new Appointment(patientElement, docElement, date);
                                                appointmentArray.push(appointment);
                                                console.log(numberOfPatients);
                                                numberOfPatients++;
                                                docElement.setNumberOfPatients(numberOfPatients);
                                            } else {
                                                console.log('Patient limit for the doctor reached');
                                            }
                                            menu();
                                        }
                                    }
                                });
                            })
                        })
                    }
                }

            });

        })
    })
}

/**
 * @description Display menu.
 */
display = () => {
    input.question('\n-------------------------\n      Display Menu \n1. Doctors\n2. Patients\n3. Appointment\n4. Doctor Availability\n5. Popular Specialization\n6. Popular Doctor\n7. Exit\n-------------------------\n', (displayChoice) => {
        if (displayChoice == '1') {
            doctorArray.forEach(element => {
                console.log(element.toString());
            });
        } else if (displayChoice == '2') {
            patientArray.forEach(element => {
                console.log(element.toString());
            });
        } else if (displayChoice == '3') {
            appointmentArray.forEach(element => {
                console.log(element.toString());
            });
        } else if (displayChoice == '4') {
            input.question('\n1. AM\t\t2. PM\t\t3. both\n', (availabilityChoice) => {
                if (availabilityChoice == '1') {
                    doctorArray.forEach(element => {
                        if (element.availability == 'AM') {
                            console.log(element.toString());
                        }
                    });
                } else if (availabilityChoice == '2') {
                    doctorArray.forEach(element => {
                        if (element.availability == 'PM') {
                            console.log(element.toString());
                        }
                    });
                } else if (availabilityChoice == '3') {
                    doctorArray.forEach(element => {
                        if (element.availability == 'both') {
                            console.log(element.toString());
                        }
                    });
                } else{
                    console.log('Enter within the given range');
                }
                display();
            })
        } else if (displayChoice == '5') {
            doctorArray.forEach(element => {
                if (element.numberOfPatients == 5) {
                    console.log(element.specialization + ' is popular');
                }
            })
        } else if (displayChoice == '6') {
            doctorArray.forEach(element => {
                if (element.numberOfPatients == 5) {
                    console.log('Dr. ' + element.name + ' is popular');
                }
            })
        } else if (displayChoice == '7') {
            console.log('Exiting Display Menu');
            menu();
        } else {
            console.log('Something went wrong!\nExiting Display Menu');
            menu();
        }
        display();
    })
}

/**
 * @description Save menu.
 */
save = () => {
    input.question('\n--------------------\n      Save Menu\n1. Save Doctors\n2. Save Patients\n3. Save Appointments\n4. Exit\n--------------------\n', (saveChoice) => {
        if (saveChoice == '1') {
            utility.write('./doctors.json', doctorArray);
        } else if (saveChoice == '2') {
            utility.write('./patients.json', patientArray);
        } else if (saveChoice == '3') {
            utility.write('./appointment.json', appointmentArray);
        } else if (saveChoice == '4') {
            console.log('Exiting Save Menu');
            menu();
        } else {
            console.log('Something went wrong!\nExiting Save Menu');
            menu();
        }
        save();
    })
}

/**
 * @description reading doctors data from json file.
 */
readDoctors = () => {
    var obj = utility.read('./doctors.json');
    obj.forEach(element => {
        doctor = new Doctor(element.name, element.id, element.specialization, element.availability, element.numberOfPatients);
        doctorArray.push(doctor);
    })
}

/**
 * @description reading patient data from json file.
 */
readPatients = () => {
    var obj = utility.read('./patients.json');
    obj.forEach(element => {
        patient = new Patient(element.name, element.id, element.phoneNumber, element.age);
        patientArray.push(patient);
    })
}

/**
 * @description reading appointment data from json file.
 */
readAppointment = () => {
    var obj = utility.read('./appointment.json')
    obj.forEach(element => {
        patient = new Patient(element.patient.name, element.patient.id, element.patient.phoneNumber, element.patient.age);
        doctor = new Doctor(element.doctor.name, element.doctor.id, element.doctor.specialization, element.doctor.availability, element.doctor.numberOfPatients);
        appointment = new Appointment(patient, doctor, element.date);
        appointmentArray.push(appointment);
    })
}

readDoctors();

readPatients();

readAppointment();

menu()