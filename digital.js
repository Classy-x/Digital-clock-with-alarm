

let uhr=document.getElementById("uhr")
let umin=document.getElementById("umin")
let usec=document.getElementById("usec")
let uam=document.getElementById("uam")

let h3=document.getElementById("h3")
let drop = document.getElementById("drop");
let inte;
inte =setInterval(time12, 1000);

drop.addEventListener("change", (obj) => {
    let opt = drop.value;
   clearInterval(inte)
    if (opt == 24) {
      inte=  setInterval(time24, 1000);
    } else {
       inte= setInterval(time12, 1000);
    }
});
function time24(){
   let time = document.getElementById("main")
   time.style.marginLeft = "50px";

   


   let obj = new Date();
   let h = obj.getHours();
   if(h<10){
      uhr.textContent="0"+h;
   }
   else{
      uhr.textContent=h;
   }


   if (drop.value == 12) {
   } else {
       uam.textContent = "";
   }

   let m=obj.getMinutes()
   if(m<10){
      umin.textContent="0"+m;
   }else{
      umin.textContent=m;
   }

   let s=obj.getSeconds()
   if(s<10){
      usec.textContent="0"+s;
   }
   else{
      usec.textContent=s;
   }

   let arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   h3.textContent = arr[obj.getMonth()] + " " + obj.getDate() + ", " + obj.getFullYear();

   let d = document.getElementById("day");
   let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   d.textContent = day[obj.getDay()] + ",";

   let cl=document.getElementById("clock");
    let al=document.getElementById("alerm"); 
    let sp=document.getElementById("sp")
    al.style.display="none"

    cl.addEventListener("click",(obj)=>{
      al.style.display="none"

      obj.stopPropagation()
      if(sp.style.display="none")
      {
         sp.style.display="inline"
      }
      else{
       sp.style.display="none"
      }
       let b=document.getElementById("clock")
        b.addEventListener("click",(obj)=>{
        sp.style.display="none";
 })
    })
     
   }
      
function time12(){

   let time = document.getElementById("main")
   time.style.marginLeft = "0px";
   let obj=new Date();

   let h=obj.getHours();

   if(h>=12){
      h =h-12;
      uhr.textContent=h
      uam.textContent="PM"
   }
   else{
    uhr.textContent=h
    uam.textContent="AM"
   }
   if(h<10){
      uhr.textContent="0"+h
   }
   if(h==0){
       uhr.textContent=12;
   }


   let m=obj.getMinutes()
   if(m<10){
      umin.textContent="0"+m;
   }else{
      umin.textContent=m;
   }


   let s=obj.getSeconds()
   if(s<10){
      usec.textContent="0"+s+" :";
   }
   else{
      usec.textContent= s+" :";
   }


    let arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
   for(i=obj.getMonth();i<arr.length;i++){
      h3.textContent=arr[i]+" "+obj.getDate()+", "+obj.getFullYear();
      break;
   }

      let d=document.getElementById("day")
      let day=["Sunday","Monday","Tuesday","Webnesday","thersday","Friday","Saturday"]
       for(i=obj.getDay();i<day.length;i++){
           d.textContent=day[i]+",";
           break;
         }
         let sp=document.getElementById("sp");
         sp.style.display="none"
         let at = document.getElementById("at");
         let ahr=obj.getHours();
         let amin=obj.getMinutes();
         
         let selectedHour = parseInt(at.value.split(":")[0]);
         let selectedMinute = parseInt(at.value.split(":")[1]);

         let selectedAmPm = at.value.split(" ")[1];
         
        if (ahr===selectedHour&&amin===selectedMinute&&undefined===selectedAmPm) {
            sp.style.display="none"
            let existingAudio = document.getElementById("audioPlayer");
            
            if (!existingAudio) {
                let au = document.createElement("audio");
                au.id = "audioPlayer"; 
                document.body.appendChild(au);
                au.src = "ringtone-58761.mp3";
                au.autoplay = true;
                au.loop=true;
                let off=document.getElementById("off")
                off.style.display="inline"
                off.addEventListener("click",()=>{
                     au.pause();
                     au.autoplay=false;
                     au.loop=false;
                     off.style.display="none"
                     
                })
                
            }
  }
      
    let cl=document.getElementById("clock");
    let al=document.getElementById("alerm"); 
    cl.addEventListener("click",(obj)=>{
      sp.style.display="none"
        obj.stopPropagation()
        if(al.style.display="none")
        {
           al.style.display="inline"
        }
        else{
         al.style.display="none"
        }
         let b=document.getElementById("clock")
          b.addEventListener("click",(obj)=>{
          al.style.display="none";
   })
    })
   
}





