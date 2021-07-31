'use strict';

var ra=0;

function namefun(h){
var nameuser=prompt(h);
alert('Hey '+ nameuser + ' i hope u fine , before let u in i will ask u 5 quistions and u should answer it with yes or no only , it is aquestions about me u should guest it , dont fear and be ready , then leet goo' );
return nameuser;
}


function foodFun(c){
let food=prompt(c).toLocaleLowerCase();
switch (food) {
    case 'yes':
    case 'y':
  alert('right answer');
  ra++;

 
      break;
      case 'no':
      case 'n':
      alert('wrong answer')
      break;
    default:
        alert('the answer should be just yes or no');
}
}
function fieldFun(d){
let field=prompt(d).toLocaleLowerCase();
switch (field) {
  case 'yes':
  case 'y':
  alert('wrong answer , i am Engineer')
      break;
      case 'no':
      case 'n':
      alert('right answer')
      ra++;
     
      break;
    default:
        alert('the answer should be just yes or no');
}
}
function askFun(e){
let xm=prompt(e).toLocaleLowerCase();
switch (xm) {
  case 'yes':
  case 'y':
  alert('right answer')
  ra++;
  
      break;
      case 'no':
      case 'n':
      alert('wrong answer, u sure love me =)')
      break;
    default:
        alert('the answer should be just yes or no');
}
}
function gradeFun(f){
let grade=prompt(f).toLocaleLowerCase();
switch (grade) {
  case 'yes':
  case 'y':
  alert('wrong answer , are u kidding me !! , am ninth =)')
      break;
      case 'no':
      case 'n':
      alert('good boy , it is right')
      ra++;

      break;
    default:
        alert('the answer should be just yes or no');
}
}

function hoobyFun(g){
let hobby=prompt(g).toLocaleLowerCase();
switch (hobby) {
  case 'yes':
  case 'y':
  alert('right answer')
  ra++;

      break;
      case 'no':
      case 'n':
      alert('wrong answer')
      break;
    default:
        alert('the answer should be just yes or no');
}
}

function gueesnumFun(a){
for ( let i=0 ; i<4 ; i++){
let num=Number(prompt(a));
if (num <8){
alert('too low');

}
 else if (num >8)
{
alert('too high');
}
else{
  alert('Correct Answer =)');
  ra++;
  i=4;
}

}
}

function guessarrayFun(b){
alert('the Correct Answer is 8');

for(let y=0 ; y<6 ; y++){
  let guessNum=Number(prompt(b));
  let x=[3,9,15,20,100,150,1];
  switch(guessNum)
  {
    case x[0]:
    case x[1]:
    case x[2]:
    case x[3]:
    case x[4]:
    case x[5]:
    case x[6]:
      alert('correct answer');
      alert('all the correct answers are : '+ x );
      ra++;
      y=6;
      break;
    default:
    alert('wrong answer');
  }
}

}
let anyName= namefun('hey there , provide me with ur name please ')
foodFun('Do u think my fav food is mansaf ?');
fieldFun('Do u think am a doctor ?');
askFun('Do u love me ?');
gradeFun('am i in tenth grade');
hoobyFun('is my fav hobby wathing anime ');
gueesnumFun('U should guess a number between 0 and 20 , u just have 4 attempt to gues the right number');
guessarrayFun('U should guess one of the right numbers , u just have 6 attempt to gues the right number');


alert('Good answers ' +anyName+ ' , your correct answers are ' + ra);






