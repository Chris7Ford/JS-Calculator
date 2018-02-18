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


board = {

display :{
    view:document.querySelector(".total"),
    array:[],
    string:0,
},
previousResult : 0,
solution : 0,
decimalUsable : true,
arithmeticUsable : false

}

buttonId=0;

function clearAll() {
    board.display.array=[];
    board.display.string=0;
    board.display.view.innerHTML=board.display.string;
    return board;
}

function clearEntry() {
    board.display.array=[];
    board.display.string=0;
    board.display.view.innerHTML=previousResult;
    return board;
}

function pushRunningDisplay(){
    board.display.array.push(buttonId.innerHTML);
    board.display.string=board.display.array.join('');
    board.display.view.innerHTML=board.display.string;
    board.arithmeticUsable=true;
    return board;
}

function arithmeticButton () {
    if (isNaN(board.display.array[board.display.array.length-1])==false) {
        board.display.array.push(buttonId.innerHTML);
        board.display.string=board.display.array.join('');
        board.display.view.innerHTML=board.display.string;
    }
    else {
        board.display.array.splice(-1,1);
        board.display.array.push(buttonId.innerHTML);
        board.display.string=board.display.array.join('');
        board.display.view.innerHTML=board.display.string;
    }
}    

function equalsButton () {
    /*if (isNaN(board.display.array[board.display.array.length-1])) {
        board.display.array.splice(-1,1);
    }*/
    board.solution=eval(board.display.string);
}

function deleteButton() {
    board.display.array.pop();
    board.display.string=board.display.array.join('');
    board.display.view.innerHTML=board.display.string;
    if (board.display.array.length==0) {
        board.display.view.innerHTML=0;
    }
}

ce.addEventListener("click",function(){buttonId=ce; clearEntry();})
c.addEventListener("click",function(){buttonId=c; clearAll();})
del.addEventListener("click",function(){buttonId=del; deleteButton();})
divide.addEventListener("click",function(){buttonId=divide; arithmeticButton();return buttonId;})
seven.addEventListener("click",function(){buttonId=seven; pushRunningDisplay();return buttonId;})
eight.addEventListener("click",function(){buttonId=eight; pushRunningDisplay();return buttonId;})
nine.addEventListener("click",function(){buttonId=nine; pushRunningDisplay();return buttonId;})
multiply.addEventListener("click",function(){buttonId=multiply; arithmeticButton();return buttonId;})
four.addEventListener("click",function(){buttonId=four; pushRunningDisplay();return buttonId;})
five.addEventListener("click",function(){buttonId=five; pushRunningDisplay();return buttonId;})
six.addEventListener("click",function(){buttonId=six; pushRunningDisplay();return buttonId;})
subtract.addEventListener("click",function(){buttonId=subtract; arithmeticButton();return buttonId;})
one.addEventListener("click",function(){buttonId=one; pushRunningDisplay();return buttonId;})
two.addEventListener("click",function(){buttonId=two; pushRunningDisplay();return buttonId;})
three.addEventListener("click",function(){buttonId=three; pushRunningDisplay();return buttonId;})
add.addEventListener("click",function(){buttonId=add; arithmeticButton();return buttonId;})
neg_pos.addEventListener("click",function(){buttonId=neg_pos; pushRunningDisplay();return buttonId;})
zero.addEventListener("click",function(){buttonId=zero; pushRunningDisplay();return buttonId;})
decimal.addEventListener("click",function(){buttonId=decimal; pushRunningDisplay();return buttonId;})
equals.addEventListener("click",function(){buttonId=equals; equalsButton ();return buttonId;})
})