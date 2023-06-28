document.addEventListener('DOMContentLoaded', ()=>{
// тут в нужно оказать дату отсчета
const deadline = "2023-09-12";

 function getTimeRemaining(endTime){
   
   let days,hours,minutes,seconds;
   const t = Date.parse(endTime) - Date.parse(new Date());
   if(t<=0){
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0
   }else{
    days = Math.floor(t/(1000*60*60*24)),
    hours = Math.floor((t/1000*60*60)%24),
    minutes = Math.floor((t/1000/60)%60),
    seconds = Math.floor((t/1000)%60);
   }
        
 
 return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds':seconds
 };

}
 function setClock(selector,endTime){
   const timer = document.querySelector(selector),
         days  = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds'),
         timeInterval = setInterval(updateClock, 1000);
       function updateClock(){
         const t = getTimeRemaining(endTime);
 
         days.innerHTML = t.days;
         hours.innerHTML = t.hours;
         minutes.innerHTML = t.minutes;
         seconds.innerHTML = t.seconds;
 
         if (t.total<= 0){
           clearInterval(timeInterval);
         }
       }
   }
 
 setClock('.timer',deadline);
  });