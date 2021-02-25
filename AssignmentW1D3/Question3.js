const prompt = require ("prompt-sync")();
let cost = parseInt(prompt("enter the cost of the house"));

if( cost < 50000){
    console.log("Downpayment will be $"+(cost*0.05));
}
else if( cost < 100000){
    console.log("Downpayment will be $"+(1000 + 0.10*(cost-50000)));
}
else if(cost < 200000){
    console.log("Downpayment will be $" +(2000+0.15*(cost-100000)))
}
else{
    console.log("Downpayment will be $" +(5000+0.10*(cost-200000)))
}
 