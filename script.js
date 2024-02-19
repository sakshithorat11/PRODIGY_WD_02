const stopwatchDuration =document.getElementById("stopwatchDuration"),
start=document.getElementById("start"),
lap=document.getElementById("lap"),
stop=document.getElementById("stop"),
reset=document.getElementById("reset"),
laps=document.getElementById("laps");

let hrs=0,
    mins=0,
    sec=0,
    ms=0,
    timeinterval;

start.onclick = () =>{
    timeinterval=setInterval(()=>{
    ms++;
    if(ms==100)
    {
       sec++;
       ms=0;
    }
    if(sec==60)
    {
        mins++;
        sec=0;
    }
    if(mins==60){
        hrs++;
        mins=0;
    }

    stopwatchDuration.innerHTML= `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    },10);

    start.setAttribute("style","display:none");
    stop.setAttribute("style","display:block");
    lap.setAttribute("style","display:block");
    reset.setAttribute("style","display:none");
    lap.removeAttribute("disabled");
};

const zeroPad =(num)=>{
    return String(num).padStart(2,"0");
}

let count=0;
lap.onclick = () =>{
    count++;
    let li=document.createElement("li");
    li.innerHTML=`${"#"+count} - ${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    laps.appendChild(li);
    laps.scroll({top:laps.scrollHeight,behavior:"smooth"});
};

stop.onclick = () =>{
    clearInterval(timeinterval);

    lap.setAttribute("style","display:none");
    reset.setAttribute("style","display:block");
    start.setAttribute("style","display:block");
    start.innerHTML="Resume";
    stop.setAttribute("style","display:none");

};

reset.onclick = () =>{
    laps.innerHTML="";
    hrs=mins=sec=ms=0;
    clearInterval(timeinterval);
    stopwatchDuration.innerHTML="00:00:00:00";

    start.innerHTML="Start";
    lap.setAttribute("style","display:block");
    lap.setAttribute("disabled",true);
    reset.setAttribute("style","display:none");
    start.setAttribute("style","display:block");
    stop.setAttribute("style","display:none");
    count=0;
};


