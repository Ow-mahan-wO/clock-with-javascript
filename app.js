let $=document;
let Minutehand=$.getElementById('minute');
let Secoundhand=$.getElementById('secound');
let Hourshand=$.getElementById('hours');
let Digital_clock_Elem=$.querySelector('.time');

let deg=7;
let hourFixd=85;
let minuteFixd=73;

let digitalDate=new Date()
let hoursDigital=digitalDate.getHours();
let minuteDigital=digitalDate.getMinutes();
let secoundDigital=digitalDate.getSeconds();
console.log(minuteDigital);
setInterval(() => {
secoundDigital++
let newDate=new Date();
let hoursDate=newDate.getHours()*30;
let minuteDate=newDate.getMinutes()*deg;
let secoundDate=newDate.getSeconds()*deg;


Hourshand.style.transform=`rotate(${(hoursDate)+(minuteDate/12)+hourFixd}deg)`;
Minutehand.style.transform=`rotate(${minuteDate+minuteFixd}deg)`;
Secoundhand.style.transform=`rotate(${secoundDate}deg)`;
if(secoundDigital>=60){
    secoundDigital=0
}
if(secoundDigital<10){
    Digital_clock_Elem.innerHTML=hoursDigital+':'+minuteDigital+':0'+secoundDigital
}
else if(minuteDigital<10){
    Digital_clock_Elem.innerHTML=hoursDigital+':0'+minuteDigital+':'+secoundDigital
}
else if(hoursDigital<10){
    Digital_clock_Elem.innerHTML='0'+hoursDigital+':'+minuteDigital+':'+secoundDigital
} else{
    Digital_clock_Elem.innerHTML=hoursDigital+':'+minuteDigital+':'+secoundDigital
}
},1000);


