/*to do list for calculater:
1.  Make sure you cannot enter more than one decimal per number
2.  Make sure you cannot put more than 1 arithmetic button in a rom
3.  


colors:
http://paletton.com/#uid=35m0x0kaVz84jP27qHbeJtFiHpX
*/

window.onload=function(){

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
var neg_pos = document.querySelector(".toggle_neg_pos");
var zero = document.querySelector(".zero");
var decimal= document.querySelector(".decimal");
var equals= document.querySelector(".equals");

var buttonId=0;
var mainDisplay=[];
var runningDisplay=[];

function pushRunning(){
    runningDisplay.push(buttonId.innerHTML);
    console.log("hello");
}


ce.addEventListener("click",function(){buttonId=ce; pushRunning();})
c.addEventListener("click",function(){buttonId=c; pushRunning();})
if(del) {
del.addEventListener("click",function(){buttonId=del; pushRunning();})
}
divide.addEventListener("click",function(){buttonId=divide; pushRunning();return cellId;})
seven.addEventListener("click",function(){buttonId=seven; pushRunning();return cellId;})
eight.addEventListener("click",function(){buttonId=eight; pushRunning();return cellId;})
nine.addEventListener("click",function(){buttonId=nine; pushRunning();return cellId;})
multiply.addEventListener("click",function(){buttonId=multiply; pushRunning();return cellId;})
four.addEventListener("click",function(){buttonId=four; pushRunning();return cellId;})
five.addEventListener("click",function(){buttonId=five; pushRunning();return cellId;})
six.addEventListener("click",function(){buttonId=six; pushRunning();return cellId;})
subtract.addEventListener("click",function(){buttonId=subtract; pushRunning();return cellId;})
one.addEventListener("click",function(){buttonId=one; pushRunning();return cellId;})
two.addEventListener("click",function(){buttonId=two; pushRunning();return cellId;})
three.addEventListener("click",function(){buttonId=three; pushRunning();return cellId;})
add.addEventListener("click",function(){buttonId=add; pushRunning();return cellId;})
neg_pos.addEventListener("click",function(){buttonId=neg_pos; pushRunning();return cellId;})
zero.addEventListener("click",function(){buttonId=zero; pushRunning();return cellId;})
decimal.addEventListener("click",function(){buttonId=decimal; pushRunning();return cellId;})
equals.addEventListener("click",function(){buttonId=equals; pushRunning();return cellId;})



}