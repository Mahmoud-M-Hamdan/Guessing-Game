'use strict';

let nameuser=prompt('hey there , provide me with ur name please ')
alert('Hey '+ nameuser + ' i hope u fine , before let u in i will ask u 5 quistions and u should answer it with yes or no only , it is aquestions about me u should guest it , dont fear and be ready , then leet goo' );



let food=prompt('Do u think my fav food is mansaf ?').toLocaleLowerCase();
switch (food) {
    case 'yes':
    case 'y':
  alert('right answer')
 // console.log(food, 'is right answer')
      break;
      case 'no':
      case 'n':
      alert('wrong answer')
      break;
    default:
        alert('the answer should be just yes or no');
}
let field=prompt('Do u think am a doctor ?').toLocaleLowerCase();
switch (field) {
  case 'yes':
  case 'y':
  alert('wrong answer , i am Engineer')
      break;
      case 'no':
      case 'n':
      alert('right answer')
     // console.log(field, 'is right answer')
      break;
    default:
        alert('the answer should be just yes or no');
}

let x=prompt('Do u love me ?').toLocaleLowerCase();
switch (x) {
  case 'yes':
  case 'y':
  alert('right answer')
  // console.log(x, 'is right answer')
      break;
      case 'no':
      case 'n':
      alert('wrong answer, u sure love me =)')
      break;
    default:
        alert('the answer should be just yes or no');
}

let grade=prompt('am i in tenth grade').toLocaleLowerCase();
switch (grade) {
  case 'yes':
  case 'y':
  alert('wrong answer , are u kidding me !! , am ninth =)')
      break;
      case 'no':
      case 'n':
      alert('good boy , it is right')
     // console.log(grade, 'is right answer')
      break;
    default:
        alert('the answer should be just yes or no');
}

let hobby=prompt('watching anime is my fav hobby ?').toLocaleLowerCase();
switch (hobby) {
  case 'yes':
  case 'y':
  alert('right answer')
  // console.log(hobby, 'is right answer')
      break;
      case 'no':
      case 'n':
      alert('wrong answer')
      break;
    default:
        alert('the answer should be just yes or no');
}
alert('Good answers '+ nameuser+' , please join to my website ')




