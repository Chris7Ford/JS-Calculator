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

bottomDisplay :{
    view:document.querySelector(".row--runningTotal"),
    array:[],
    string:0,
},

runningDisplay : {
    view:document.querySelector(".row--currentTotal"),
    array:[],
    string:0,
},

solution : 0,
decimalUsable : true,
arithmeticUsable : false

}

buttonId=0;

function clearAll() {
    board.bottomDisplay.array=[];
    board.bottomDisplay.string=0;
    board.bottomDisplay.view.innerHTML=board.bottomDisplay.string;
    board.topDisplay.array=[];
    board.topDisplay.string=0;
    board.topDisplay.view.innerHTML=board.topDisplay.string;
    return board;
}

function clearEntry() {
    board.bottomDisplay.array=[];
    board.bottomDisplay.string=0;
    board.bottomDisplay.view.innerHTML=board.bottomDisplay.string;
    return board;
}

function pushRunningDisplay(){
    board.bottomDisplay.array.push(buttonId.innerHTML);
    board.bottomDisplay.string=board.bottomDisplay.array.join('');
    board.bottomDisplay.view.innerHTML=board.bottomDisplay.string;
    board.arithmeticUsable=true;
    return board;
}

function arithmeticButton () {
    if(board.arithmeticUsable == true) {
        board.bottomDisplay.array.push(buttonId.innerHTML);
        board.bottomDisplay.string=board.bottomDisplay.array.join('');
        
        board.topDisplay.array=board.bottomDisplay.array;
        
        board.topDisplay.array.pop();
        board.topDisplay.string=board.topDisplay.array.join('')
        board.solution = eval(board.topDisplay.string, buttonId.innerHTML, board.bottomDisplay.string);
        board.topDisplay.view.innerHTML=board.solution;

        board.bottomDisplay.view.innerHTML=board.bottomDisplay.string;
        board.bottomDisplay.array=[];
        return board;
        //need to pop the last arithmetic button to evaluate,
    }
}

function deleteButton() {
    board.bottomDisplay.array.pop();
    board.bottomDisplay.string=board.bottomDisplay.array.join('');
    board.bottomDisplay.view.innerHTML=board.bottomDisplay.string;
    if (board.bottomDisplay.array.length==0) {
        board.bottomDisplay.view.innerHTML=0;
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
equals.addEventListener("click",function(){buttonId=equals; pushRunningDisplay();return buttonId;})
})