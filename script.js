let audio = new Audio('watch-ticking.mp3');
function dateDisplay(){
    let date=new Date();
    let hours=date.getHours();
    let militry= hours>12?"PM":"AM";
    hours=hours%12 || 12;
    hours=hours.toString().padStart(2,0);
    let minutes=date.getMinutes().toString().padStart(2,0);;
    let secounds=date.getSeconds().toString().padStart(2,0);;
    let finalTime=(`${hours}:${minutes}:${secounds} ${militry}`);
    document.querySelector('.clock').innerHTML=finalTime;
    audio.play(); 

    }

    dateDisplay();
    setInterval(dateDisplay,1000)
