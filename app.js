const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree = ((seconds/60)*360)+90;
    second.style.transform = `rotate(${secondDegree}deg)`;
    const minutes = now.getMinutes();
    const minuteDegree = ((minutes/60)*360) + ((seconds/60)*6) + 90;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    const hours = now.getHours();
    const hourDegree = ((hours/12)*360)+ ((minutes/60)*30) + 90;
    hour.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(setDate,1000);
setDate();