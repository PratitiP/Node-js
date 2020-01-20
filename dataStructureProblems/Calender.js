// Get process.stdin as the standard input object.
const standard_input = process.stdin;


let inputArr = [];
let month = 0;
let year = 0;
let cal = [[]];
console.log(`\nEnter Month(1-12) year(yyyy) : `);
standard_input.on('data', (data) => {
    let input = data.toString().trim();

    if (input.length != 0) {
        inputArr = input.split(' ');
        month = parseInt(inputArr[0]);
        year = parseInt(inputArr[1])
        if (Number.isInteger(month) && Number.isInteger(year)) {
            if (month > 0 && month < 13) {
                getCalender();
                printCalender();
                process.exit();
            } else
                console.log(`Enter correct month (1-12)`)
        } else
            console.log(`Wrong input for month or year. Please try again.`);
    } else {
        console.log(`No input. try again...`)
    }
});

function getCalender() {
    let daysInMonth = getMonthDays();
    day = firstDayOfMonth();
    let week = [];       //4-5 weeks array in 2D cal array
    date = 1;           //1-30
    while (date <= daysInMonth) {
        while (day <= 6 && date <= daysInMonth) {
            week[day] = date;
            date++;
            day++;
        }
        cal.push(week);
        week = [];
        day = 0;
    }
}

function printCalender() {
    let monthStr='';
    switch (month) {
        case 1:monthStr='JANUARY';break;
        case 2:monthStr='FEBRUARY';break;
        case 3:monthStr='MARCH';break;
        case 4:monthStr='APRIL';break;
        case 5:monthStr='MAY';break;
        case 6:monthStr='JUNE';break;
        case 7:monthStr='JULY';break;
        case 8:monthStr='AUGUST';break;
        case 9:monthStr='SEPTEMBER';break;
        case 10:monthStr='OCTOBER';break;
        case 11:monthStr='NOVEMBER';break;
        case 12:monthStr='DECEMBER';break;

    }
    console.log(`----------------------------------------------------\n`);
    console.log(`                  ${monthStr} ${year}\n`);
    console.log(`Sun\tMon\tTue\tWed\tThur\tFri\tSat`);
    week = 0;
    let str = '';
    while (week < cal.length) {

        for (i = 0; i <= 6; i++) {
            if (cal[week][i] == undefined)
                str = str + "" + '\t'
            else
                str = str + cal[week][i] + '\t'
        }
        str = str + '\n'
        week++;
    }
    console.log(str);
    console.log(`----------------------------------------------------\n`);

}

function firstDayOfMonth() {
    let y0 = year - Math.floor((14 - month) / 12);
    let x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
    let m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
    let d0 = (1 + x + Math.floor((31 * m0) / 12)) % 7;
    return d0;
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