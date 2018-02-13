/*to do list for calculater:
1.  Make sure you cannot enter more than one decimal per number
2.  Make sure you cannot put more than 1 arithmetic button in a rom
3.  

---
Making separate functions for each action to be able to return multiple values
colors:
http://paletton.com/#uid=35m0x0kaVz84jP27qHbeJtFiHpX
*/

document.addEventListener('DOMContentLoaded', function () {

var ce = document.querySelector(".ce");
var c = document.querySelector(".c");
var del = document.querySelector(".del");
var divide = document.querySelector(".divide");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var multiply = document.querySelector(".multiply");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var subtract = document.querySelector(".subtract");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var add = document.querySelector(".add");
var neg_pos = document.querySelector(".neg_pos");
var zero = document.querySelector(".zero");
var decimal= document.querySelector(".decimal");
var equals= document.querySelector(".equals");

runningDisplayView=document.querySelector(".runningTotal");

runningDisplayString=0;
buttonId=0;
mainDisplay=[];
runningDisplayArray=[];

function pushRunningArray(){
    runningDisplayArray.push(buttonId.innerHTML);
    runningDisplayString=runningDisplayArray.join('');
    return runningDisplayString;
}

function activity() {
    pushRunningArray();
}

ce.addEventListener("click",function(){buttonId=ce; activity();})
c.addEventListener("click",function(){buttonId=c; activity();})
if(del) {
del.addEventListener("click",function(){buttonId=del; activity();})
}
divide.addEventListener("click",function(){buttonId=divide; activity();return buttonId;})
seven.addEventListener("click",function(){buttonId=seven; activity();return buttonId;})
eight.addEventListener("click",function(){buttonId=eight; activity();return buttonId;})
nine.addEventListener("click",function(){buttonId=nine; activity();return buttonId;})
multiply.addEventListener("click",function(){buttonId=multiply; activity();return buttonId;})
four.addEventListener("click",function(){buttonId=four; activity();return buttonId;})
five.addEventListener("click",function(){buttonId=five; activity();return buttonId;})
six.addEventListener("click",function(){buttonId=six; activity();return buttonId;})
subtract.addEventListener("click",function(){buttonId=subtract; activity();return buttonId;})
one.addEventListener("click",function(){buttonId=one; activity();return buttonId;})
two.addEventListener("click",function(){buttonId=two; activity();return buttonId;})
three.addEventListener("click",function(){buttonId=three; activity();return buttonId;})
add.addEventListener("click",function(){buttonId=add; activity();return buttonId;})
neg_pos.addEventListener("click",function(){buttonId=neg_pos; activity();return buttonId;})
zero.addEventListener("click",function(){buttonId=zero; activity();return buttonId;})
decimal.addEventListener("click",function(){buttonId=decimal; activity();return buttonId;})
equals.addEventListener("click",function(){buttonId=equals; activity();return buttonId;})



})