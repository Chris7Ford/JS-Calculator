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
    board.previousResult=0;
    return board;
}

function clearEntry() {
    board.display.array=[board.previousResult];
    board.display.string=board.display.array.join('');
    board.display.view.innerHTML=board.display.string;
    return board;
}

function toggleNegative () {
    board.display.array = [eval(0-board.previousResult)];
    board.display.string=board.display.array.join('');
    board.display.view.innerHTML=board.display.string;
    board.previousResult = board.display.string;
    return board;
}

function pushRunningDisplay(num){
    board.display.array.push(num);
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
    else if (board.display.array.length==0){
        if (buttonId.innerText == '-') {
        board.display.array.push(buttonId.innerHTML);
        board.display.string=board.display.array.join('');
        board.display.view.innerHTML=board.display.string;
        }
    }
    else {
        board.display.array.splice(-1,1);
        board.display.array.push(buttonId.innerHTML);
        board.display.string=board.display.array.join('');
        board.display.view.innerHTML=board.display.string;
    }
    board.decimalUsable=true;
}    



function decimalButton () {
    if (isNaN(board.display.array[board.display.array.length-1])==false && board.decimalUsable == true) {
        board.display.array.push('.');
        board.display.string=board.display.array.join('');
        board.display.view.innerHTML=board.display.string;
        board.decimalUsable=false;
        return board;
    }
}
function equalsButton () {
    /*if (isNaN(board.display.array[board.display.array.length-1])) {
        board.display.array.splice(-1,1);
    }*/
    board.solution=eval(board.display.string);
    board.display.view.innerHTML=board.solution;
    board.display.array=[board.solution];
    board.previousResult=board.solution;
    return board;
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
seven.addEventListener("click",function(){buttonId=seven; pushRunningDisplay(7);return buttonId;})
eight.addEventListener("click",function(){buttonId=eight; pushRunningDisplay(8);return buttonId;})
nine.addEventListener("click",function(){buttonId=nine; pushRunningDisplay(9);return buttonId;})
multiply.addEventListener("click",function(){buttonId=multiply; arithmeticButton();return buttonId;})
four.addEventListener("click",function(){buttonId=four; pushRunningDisplay(4);return buttonId;})
five.addEventListener("click",function(){buttonId=five; pushRunningDisplay(5);return buttonId;})
six.addEventListener("click",function(){buttonId=six; pushRunningDisplay(6);return buttonId;})
subtract.addEventListener("click",function(){buttonId=subtract; arithmeticButton();return buttonId;})
one.addEventListener("click",function(){buttonId=one; pushRunningDisplay(1);return buttonId;})
two.addEventListener("click",function(){buttonId=two; pushRunningDisplay(2);return buttonId;})
three.addEventListener("click",function(){buttonId=three; pushRunningDisplay(3);return buttonId;})
add.addEventListener("click",function(){buttonId=add; arithmeticButton();return buttonId;})
neg_pos.addEventListener("click",function(){buttonId=neg_pos; toggleNegative ();return buttonId;})
zero.addEventListener("click",function(){buttonId=zero; pushRunningDisplay(0);return buttonId;})
decimal.addEventListener("click",function(){buttonId=decimal;decimalButton ();return buttonId;})
equals.addEventListener("click",function(){buttonId=equals; equalsButton ();return buttonId;})
})