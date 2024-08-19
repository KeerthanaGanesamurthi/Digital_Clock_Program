

function updateclock()
{
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ?  "PM" :"AM";
    hours = hours %12 ||12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridian} `;
    document.getElementById("clock").textContent = timeString;

    const date = now.getDate().toString().padStart(2,0);
    const month = now.getMonth()+1;
    const year = now.getFullYear().toString().padStart(2,0);
    const corrmonth = month.toString().padStart(2,0);
    const dateString = `${date}-${corrmonth}-${year}`;


    document.getElementById("date").textContent = dateString;
}

updateclock();
setInterval(updateclock,1000);