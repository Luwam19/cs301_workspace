const prompt=require ("prompt-sync")();
let age  = prompt("enter the age of child ");
let season= prompt("enter the season");

if(age<5){
    if(season==="summer" || season==="fall"){
        console.log("bed time will be 8:30PM")
    }else{
        console.log("bed time will be 8:00PM")
    }
}
else if(age<12){
    if(season==="summer"){
        console.log("bed time will be 9:30PM")
    }else{
        console.log("bed time will be 8:00PM")
    }
}
else{
    if(season==="summer" ){
        console.log("bed time will be 10:30PM")
    }else{
        console.log("bed time will be 9:30PM")
    }
}