const Queue = require('./Queue');
const LinkedList = require('./LinkedList');
const Stack=require('./Stack');

let month = 0;
let year = 0;
let calStack1 = new Stack();
let calStack2 = new Stack();

let input = process.argv.slice(2);

if (input.length != 0) {
    month = parseInt(input[0]);
    year = parseInt(input[1])
    if (Number.isInteger(month) && Number.isInteger(year)) {
        if (month > 0 && month < 13) {
            getCalender();
            printCalender();
        } else
            console.log(`Enter correct month (1-12)`)
    } else
        console.log(`Wrong input for month or year. Please try again.`);
} else {
    console.log(`No input. Provide command-line arguments. Try again...`)
}

function getCalender() {
    let daysInMonth = getMonthDays();
    day=0;
    dayOne = firstDayOfMonth();
    let date = 1;
    let ll = new LinkedList();
    while (date <= daysInMonth) {
        while (day <= 6 && date <= daysInMonth) {
            if(day!=dayOne)
                data={weekDay:'', date:''};     //to go to 1st date. otherwise printing is not in proper format
            else{
                data = { weekDay: day, date: date };
                dayOne++;
                date++;
            }
            ll.add(data);
            day++;
        }
        calStack1.push(ll);
        ll=new LinkedList();
        day=0;dayOne=0;
    }
    implementStack2();
}

//to implement queue we need 2 stacks. create new stack just by poping stack1
function implementStack2(){
    let ll2=new LinkedList();
    while(!calStack1.isEmpty()){
        ll2=calStack1.pop();
        calStack2.push(ll2);
    }
}

//print using 2nd stack
function printCalender(){
    let monthStr = '';
    switch (month) {
        case 1: monthStr = 'JANUARY'; break;
        case 2: monthStr = 'FEBRUARY'; break;
        case 3: monthStr = 'MARCH'; break;
        case 4: monthStr = 'APRIL'; break;
        case 5: monthStr = 'MAY'; break;
        case 6: monthStr = 'JUNE'; break;
        case 7: monthStr = 'JULY'; break;
        case 8: monthStr = 'AUGUST'; break;
        case 9: monthStr = 'SEPTEMBER'; break;
        case 10: monthStr = 'OCTOBER'; break;
        case 11: monthStr = 'NOVEMBER'; break;
        case 12: monthStr = 'DECEMBER'; break;

    }
    console.log(`----------------------------------------------------\n`);
    console.log(`                  ${monthStr} ${year}\n`);
    console.log(`Sun\tMon\tTue\tWed\tThur\tFri\tSat`);

    //Queue deque and linkedList pop(0) for printing.
    let weekLL=new LinkedList();
    let str='';
    while(!calStack2.isEmpty()){
        weekLL=calStack2.pop();
        // weekLL.printList();
        while(!weekLL.isEmpty()){
            let data=weekLL.pop(0);
            str = str + data.date + "\t";
        }
        str = str + "\n";
        weekLL=new LinkedList();
    }
    console.log(str);
    console.log(`----------------------------------------------------\n`);
}

function firstDayOfMonth() {
    return new Date(`${month} 1 ${year}`).getDay();
}

function getMonthDays() {
    if (month % 2 == 0) {
        //check for Feb
        if (month == 2) {
            if (isLeapYear())
                return 29;
            else
                return 28;
        } else
            return 30;
    } else
        return 31;

    return0;
}

function isLeapYear() {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            } else
                return false;
        } else
            return true;
    } else
        return false;
}