// Get process.stdin as the standard input object.
const standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

let startTime, stopTime, running;
let duration=0;
let totalDuration=0;

console.log("StopWatch");
console.log("Start - s\nStop - e\nreset - r\nExit - exit");

// When user input data and click enter key.
standard_input.on('data', function (data) {

    // User input exit.
    if(data.toString().trim() === 'exit'){
        // Program exit.
        console.log("program exit.");
        process.exit();
    }else if(data.toString().trim() === 's')
    {
        if(running === 1){
            //throw new Error("Stopwatch Already Started");
            console.log("Stopwatch Already Started");
        }
        else{
            startTime=new Date();
            console.log('Start Time : ' + startTime);
            running=1;
        }
    }else if(data.toString().trim() === 'e'){
        if(running === 0){
            console.log("first start the stopwatch");
        }
        else{
            stopTime=new Date();
            console.log('Stop time : ' + stopTime);
            duration=(stopTime.getTime()-startTime.getTime())/1000;
            console.log(`duration = ${duration.toFixed(3)}`);
            totalDuration+=duration;
            running=0;
        }
    }else if(data.toString().trim() === 'r')
    {
        console.log(`total elaps time till reset = ${totalDuration.toFixed(3)}`)
        startTime=null;
        stopTime=null;
        duration=0;
        running=0;
    }
});
