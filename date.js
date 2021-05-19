function DigitalClock(){
    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let AMPM = hours >= 12 ? "PM" : "AM" ;
    
    document.getElementById("template").innerHTML = `${hours} : ${minutes} : ${seconds} ${AMPM}`
}
setInterval(()=>{
    DigitalClock();
}, 1000);





// setTimeout(()=>{
//     console.log("please execute after 10 seconds");
// }, 10000);//it executes only once

// setInterval(()=>{
//     console.log("keep updating never stops ");
// }, 1000);//it is running continuously