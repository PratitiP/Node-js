const util = require("./Util");

// Get process.stdin as the standard input object.
const standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');
let problem = 0;
let part = 0;
let dictElapseTime = {};
let dictKey = '';
let inputArr = [];

main();

function main() {
    console.log("Select from following : ");
    console.log(`1.Binary Search for integers\n2.Binary serach for Strings\n3.Insersion Sort for numbers\n4.Inserson Sort for Strings\n5.Bubble Sort for numbers\n6.Bubble sort for Strings\n7.Exit`);

}
standard_input.on('data', (data) => {
    let input = data.toString().trim();

    //binary Serach Number
    if (problem == 1 && part == 2) {
        if (Number((input) || Number(input) == 0) && input.length != 0) {
            let startTime = new Date();
            console.log(startTime.getTime());
            let result = util.binarySearch(inputArr, Number(input));
            if (result)
                console.log(`${Number(input)} Present in the list`);
            else
                console.log(`${Number(input)} not in the list`);
            problem = 0; part = 0; inputArr = [];

            let stopTime = new Date();
            console.log(stopTime.getTime())
            let elapseTime = stopTime.getTime() - startTime.getTime();
            console.log(`Elapsed time : ${elapseTime}ms`)
            dictElapseTime['BS_Number'] = elapseTime;

            main();
            return;
        }
        else {
            console.log("Enter valid number for binary Search");
            return;
        }
    } else if (problem == 1) {
        inputArr = input.split(' ');
        //remove extra spaces bcoz they are getting converted to 0 for numbers and for string blanks
        while(inputArr.indexOf('')!=-1){
            inputArr.splice(inputArr.indexOf(''),1);
        }
        let valid = validateNumberArray(inputArr);
        if (valid) {
            console.log("Enter number to serach in above list:");
            part = 2;
            return;
        } else {
            console.log("Something wrong in input list. Enter numbers seperated by space");
            inputArr = [];
            return;
        }
    }
    //Binary Search for Strings
    if (problem == 2 && part == 2) {
        if (input.length != 0) {
            let startTime = new Date();
            console.log(startTime.getTime());

            let result = util.binarySearch(inputArr, input);

            if (result)
                console.log(`${input} Present in the list`);
            else
                console.log(`${input} not in the list`);
            problem = 0; part = 0; inputArr = [];

            let stopTime = new Date();
            console.log(stopTime.getTime())
            let elapseTime = stopTime.getTime() - startTime.getTime();
            console.log(`Elapsed time : ${elapseTime}ms`)
            dictElapseTime['BS_String'] = elapseTime;

            main();
            return;
        }
    } else if (problem == 2) {
        inputArr = input.split(' ');
        console.log("Enter String to serach in above list:");
        part = 2;
        return;
    }

    if (problem == 3 || problem == 4) {
        if (input.length == 0) {
            console.log(`Empty List. Please Enter Numbers seperated by space`);
            return;
        } else {
            inputArr = input.split(' ');
            //remove extra spaces bcoz they are getting converted to 0 for numbers and for string blanks
            while(inputArr.indexOf('')!=-1){
                inputArr.splice(inputArr.indexOf(''),1);
            }
            let valid = validateNumberArray(inputArr);
            if (problem == 4) {
                valid = true;  //for strings insertion sort no need to validate.
                dictKey = 'INSERTION_SORT_S'
            } else
                dictKey = 'INSERTION_SORT_N'
            if (valid) {
                let startTime = new Date();
                console.log(startTime.getTime());

                util.insersionSort(inputArr);
                //sorted list by reference
                console.log(`Sorted List using Insertion sort : ${inputArr}`);
                problem = 0; part = 0; inputArr = [];

                let stopTime = new Date();
                console.log(stopTime.getTime())
                let elapseTime = stopTime.getTime() - startTime.getTime();
                console.log(`Elapsed time : ${elapseTime}ms`)
                dictElapseTime[dictKey] = elapseTime;

                main();
                return;
            } else {
                console.log("Something wrong in input list. Enter numbers seperated by space");
                inputArr = [];
                return;
            }
        }
    }

    if (problem == 5 || problem == 6) {
        if (input.length == 0) {
            console.log(`Empty List. Please Enter Numbers seperated by space`);
            return;
        } else {
            inputArr = input.split(' ');
            //remove extra spaces bcoz they are getting converted to 0 for numbers and for string blanks
            while(inputArr.indexOf('')!=-1){
                inputArr.splice(inputArr.indexOf(''),1);
            }
            console.log(inputArr);
            let valid = validateNumberArray(inputArr);
            if (problem == 6) {
                valid = true;  //for strings bubble sort no need to validate.
                dictKey = 'BUBBLE_SORT_S'
            } else
                dictKey = 'BUBBLE_SORT_N'
            if (valid) {
                let startTime = new Date();
                console.log(startTime.getTime());

                util.bubbleSort(inputArr);
                //sorted list by reference
                console.log(`Sorted List using Bubble sort : ${inputArr}`);
                problem = 0; part = 0; inputArr = [];

                let stopTime = new Date();
                console.log(stopTime.getTime())
                let elapseTime = stopTime.getTime() - startTime.getTime();
                console.log(`Elapsed time : ${elapseTime}ms`)
                dictElapseTime[dictKey] = elapseTime;

                main();
                return;
            } else {
                console.log("Something wrong in input list. Enter numbers seperated by space");
                inputArr = [];
                return;
            }
        }
    }

    switch (Number(input)) {
        case 1:
            console.log(`binary Search Numbers : `);
            problem = 1;
            console.log("Enter numbers sepereted by space for binary search : ");
            return;
        case 2:
            console.log(`Binary Search Strings`);
            problem = 2;
            console.log("Enter Strings sepereted by space for binary search : ");
            return;
        case 3:
            console.log(`Insertion sort for Integer`);
            problem = 3;
            console.log("Enter Numbers sepereted by space for Insertion Sort : ");
            return;
        case 4:
            console.log(`Insertion sort for Strings`);
            problem = 4;
            console.log("Enter Strings sepereted by space for Insertion Sort : ");
            return;
        case 5:
            console.log(`Bubble Sort for Numbers`);
            problem = 5;
            console.log("Enter Numbers sepereted by space for Bubble Sort : ");
            return;
        case 6:
            console.log(`Insertion sort for Strings`);
            problem = 6;
            console.log("Enter Strings sepereted by space for Bubble Sort : ");
            return;
        case 7:
            console.log(`Elapsed times : ${JSON.stringify(dictElapseTime)}`);
            sortDict(dictElapseTime);
            process.exit();
        default:
            console.log("Select Valid option");
    }

});

//validate input array for numbers and convert to integer array.
function validateNumberArray(inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
        if (Number(inputArr[i]) || Number(inputArr[i]) == 0)
            inputArr[i] = Number(inputArr[i]);
        else
            return false;
    }
    return true;
}

function sortDict(obj){
    // convert object into array
	var sortable=[];
	for(var key in obj)
		if(obj.hasOwnProperty(key))
			sortable.push([key, obj[key]]); // each item is an array in format [key, value]
	
	// sort items by value
	sortable.sort((a, b)=> b[1]-a[1]);
    console.log(`Sorted Elapsed times in descending order: ${sortable}`);      // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}