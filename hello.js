var offButton = document.querySelector("#offButton"),
onButton = document.querySelector("#offButton"),
phone = document.querySelector("#phone"),
password = document.querySelector("#password"),
game1 = document.querySelector("#game1"),
game2 = document.querySelector("#game2"),
game3 = document.querySelector("#game3"),
game4 = document.querySelector("#game4"),
game5 = document.querySelector("#game5"),
clock = document.querySelector("#clock"),
tetris = document.querySelector("#tetris1"),
calc = document.querySelector("#calc"),
p1 = document.querySelector("#p1"),
p2 = document.querySelector("#p2"),
p3 = document.querySelector("#p3"),
p4 = document.querySelector("#p4"),
p5 = document.querySelector("#p5"),
p6 = document.querySelector("#p6"),
p7 = document.querySelector("#p7"),
p8 = document.querySelector("#p8"),
p9 = document.querySelector("#p9"),
p0 = document.querySelector("#p0"),
p = 5;


        function off(){
    phone.style.background = 'black';
    password.style.visibility = 'hidden';
    game1.style.visibility = 'hidden';
    game2.style.visibility = 'hidden';
    game3.style.visibility = 'hidden';
    game4.style.visibility = 'hidden';
    game5.style.visibility = 'hidden';
    video.style.visibility = 'hidden';
    clock.style.visibility = 'hidden';
    tetris.style.visibility = 'hidden';
    p = 5;
}

       
        function on(){
   
   
     if(video.style.visibility == 'visible' || clock.style.visibility == 'visible' || tetris.style.visibility == 'visible' || calc.style.visibility == 'visible'){
    calc.style.visibility = 'hidden';
    video.style.visibility = 'hidden';
    tetris.style.visibility = 'hidden';
    game1.style.visibility = 'visible';
    game2.style.visibility = 'visible';
    game3.style.visibility = 'visible';
    game4.style.visibility = 'visible';
    game5.style.visibility = 'visible';
    clock.style.visibility = 'hidden';
    }else{
    video.style.visibility = 'hidden';
    tetris.style.visibility = 'hidden';
    phone.style.background = 'transparent';
    password.style.visibility = 'visible';
    game1.style.visibility = 'hidden';
    game2.style.visibility = 'hidden';
    game3.style.visibility = 'hidden';
    game4.style.visibility = 'hidden';
    game5.style.visibility = 'hidden';
    }
}

        p1.onclick = ('click', function () {
            p += 1;
        });
       
        p2.onclick = ('click', function () {
            p /= 2;
        });
       
        p3.onclick = ('click', function () {
            p *= 3;
        });
       
        p4.onclick = ('click', function () {
            p += 4;
        });
       
       
        p5.onclick = ('click', function () {
        });
       
 
       
       
        function checkPass(){
            if(p == 13){
                password.style.visibility = 'hidden';
                game1.style.visibility = 'visible';
                game2.style.visibility = 'visible';
                game3.style.visibility = 'visible';
                game4.style.visibility = 'visible';
                game5.style.visibility = 'visible';
                
                p = 5;
            }
           
        }
setInterval(checkPass, 1);
       
    game3.style.cursor = 'pointer';
    game3.onclick = function() {
    window.open("https://www.youtube.com/");
};



var video = document.querySelector("#video");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
        game2.onclick = function camera(){
            
                video.style.visibility = 'visible';
                game1.style.visibility = 'hidden';
                game2.style.visibility = 'hidden';
                game3.style.visibility = 'hidden';
                game4.style.visibility = 'hidden';
                game5.style.visibility = 'hidden';
           
           
           
        };
       
        game1.onclick = function time(){
                clock.style.visibility = 'visible';
                game1.style.visibility = 'hidden';
                game2.style.visibility = 'hidden';
                game3.style.visibility = 'hidden';
                game4.style.visibility = 'hidden';
                game5.style.visibility = 'hidden';
            
           
        };
        
        game4.onclick = function openTetris(){

                tetris.style.visibility = 'visible';
                clock.style.visibility = 'hidden';
                game1.style.visibility = 'hidden';
                game2.style.visibility = 'hidden';
                game3.style.visibility = 'hidden';
                game4.style.visibility = 'hidden';
                game5.style.visibility = 'hidden';
            
          
          
        };
        
        game5.onclick = function openCalc(){
            
                calc.style.visibility = 'visible';
                clock.style.visibility = 'hidden';
                game1.style.visibility = 'hidden';
                game2.style.visibility = 'hidden';
                game3.style.visibility = 'hidden';
                game4.style.visibility = 'hidden';
                game5.style.visibility = 'hidden'
          
          
        }
       
       
        function showTime(){
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var date = d.getDate();
var day =d.getDay();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();

switch(month){
case 1:
month="January";
break;
case 2:
month="February";
break;
case 3:
month="March";
break;
case 4:
month="April";
break;
case 5:
month="May"
break;
case 6:
month="June"
break;
case 7:
month="July"
break;
case 8:
month="August"
break;
case 9:
month="September"
break;
case 10:
month="October"
break;
case 11:
month="November"
break;
case 12:
month="December"
break;
default:
}

switch(day){
case 1:
day="Monday";
break;
case 2:
day="Tuesday";
break;
case 3:
day="Wednesday";
break;
case 4:
day="Thursday";
break;
case 5:
day="Friday";
break;
case 6:
day="Saturday";
break;
case 7:
day="Sunday";
break;
default:
}

var MV = "AM";
if(hour == 12){
MV = "PM";
}
if(hour > 12){
hour = hour % 12;
MV = "PM";
}

document.getElementById("clock").innerHTML = day+" "+date+"th "+month+" "+year+", "+hour+":"+min+":"+sec+" "+MV;

hour = ("0" + hour).slice(-2);
min = ("0" + min).slice(-2);
sec = ("0" + sec).slice(-2);

}
setInterval(showTime,1000);


