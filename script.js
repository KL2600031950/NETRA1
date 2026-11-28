function updateclock() {
 // getElementById() → Finds an HTML element using its ID.
// 'clock' → ID of the HTML element.
    const clock=document.getElementById('clock');

    if(clock){
 // new data-Gets the current date and time from the computer.
// ToLocaleTimeString()-Converts the time into a readable time format.
// clock.innerHTML-
// Displays that time inside the HTML element.
// updateclock-Function to execute
// 1000-Time interval in milliseconds
        clock.innerHTML=new Date().toLocaleTimeString();
    }
} 

updateclock();
setInterval(updateclock, 1000);