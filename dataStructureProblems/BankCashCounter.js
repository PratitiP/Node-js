const Queue = require('./Queue');

function main(){
    console.log(`Select for Bank Cash Counter : \n1.Deposit\n2.Withdraw\n3.exit`);
}

let deposit=new Queue();
let withdraw=new Queue();

// Get process.stdin as the standard input object.
const standard_input = process.stdin;

main();
standard_input.on('data', (data) => {
    let input=data.toString().trim();

    let randId='ID09'+Math.random().toString(36).substr(2, 10);
    let randAmount=Math.floor(Math.random() * (9999- 1000)) + 1000;
    if(input=='1'){
        console.log(`Your transaction id : ${randId}`);
        deposit.enqueue(randAmount);
        console.log(`Amount deposited successfully - Rs.${randAmount}`);
        main();
    }else if(input=='2'){
        console.log(`Your transaction id : ${randId}`);
        withdraw.enqueue(randAmount);
        console.log(`Amount withdrawal successful - Rs.${randAmount}`);
        main();
    }else if(input=='3'){
        showCounter();
        process.exit();1
    }
    else{
        console.log(`Wrong option selected. `);
        main();
    }

});

function showCounter(){
    let totalDeposit=0;
    let totalWithdraw=0;
    while(!deposit.isEmpty()){
        let d=deposit.dequeue();
        totalDeposit=totalDeposit+d;
        console.log(`${d}`);
    }
    console.log(`Total amount Deposited at bank counter : ${totalDeposit}`)

    while(!withdraw.isEmpty()){
        let d=withdraw.dequeue();
        totalWithdraw=totalWithdraw+d;
        console.log(`${d}`);
    }
    console.log(`Total amount Withdrawal at bank counter : ${totalWithdraw}`)

}