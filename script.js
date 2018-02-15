/*to do list for calculater:
1.  Make sure you cannot enter more than one decimal per number
2.  Make sure you cannot put more than 1 arithmetic button in a rom
3.  

---

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

currentDisplay =
{   view:document.querySelector(".row--currentTotal"),
    array:[],
    string:0,
}

runningDisplay = {
    view:document.querySelector(".row--runningTotal"),
    array:[],
    string:0,
}

buttonId=0;
mainDisplay=[];

function clearAll() {
    runningDisplay.array=[];
    runningDisplay.string=0;
    runningDisplay.view.innerHTML=runningDisplay.string;
    currentDisplay.array=[];
    currentDisplay.string=0;
    currentDisplay.view.innerHTML=currentDisplay.string;
}

function pushRunningDisplay(){
    runningDisplay.array.push(buttonId.innerHTML);
    runningDisplay.string=runningDisplay.array.join('');
    runningDisplay.view.innerHTML=runningDisplay.string;
    return runningDisplay;
}

ce.addEventListener("click",function(){buttonId=ce; pushRunningDisplay();})
c.addEventListener("click",function(){buttonId=c; clearAll();})
del.addEventListener("click",function(){buttonId=del; pushRunningDisplay();})
divide.addEventListener("click",function(){buttonId=divide; pushRunningDisplay();return buttonId;})
seven.addEventListener("click",function(){buttonId=seven; pushRunningDisplay();return buttonId;})
eight.addEventListener("click",function(){buttonId=eight; pushRunningDisplay();return buttonId;})
nine.addEventListener("click",function(){buttonId=nine; pushRunningDisplay();return buttonId;})
multiply.addEventListener("click",function(){buttonId=multiply; pushRunningDisplay();return buttonId;})
four.addEventListener("click",function(){buttonId=four; pushRunningDisplay();return buttonId;})
five.addEventListener("click",function(){buttonId=five; pushRunningDisplay();return buttonId;})
six.addEventListener("click",function(){buttonId=six; pushRunningDisplay();return buttonId;})
subtract.addEventListener("click",function(){buttonId=subtract; pushRunningDisplay();return buttonId;})
one.addEventListener("click",function(){buttonId=one; pushRunningDisplay();return buttonId;})
two.addEventListener("click",function(){buttonId=two; pushRunningDisplay();return buttonId;})
three.addEventListener("click",function(){buttonId=three; pushRunningDisplay();return buttonId;})
add.addEventListener("click",function(){buttonId=add; pushRunningDisplay();return buttonId;})
neg_pos.addEventListener("click",function(){buttonId=neg_pos; pushRunningDisplay();return buttonId;})
zero.addEventListener("click",function(){buttonId=zero; pushRunningDisplay();return buttonId;})
decimal.addEventListener("click",function(){buttonId=decimal; pushRunningDisplay();return buttonId;})
equals.addEventListener("click",function(){buttonId=equals; pushRunningDisplay();return buttonId;})
})