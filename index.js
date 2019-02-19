'use strict';

function jediName(firstName, lastName) {
  return lastName.substring(0,3) + firstName.substring(0,2);
}

function beyond(num){
  if(!isFinite(num)){
    console.log('And beyond!');
  }
  if(isFinite(num) && num > 0){
    console.log('To infinity!');
  }
  if(isFinite(num) && num < 0){
    console.log('To negative infinity!');
  }
  if(num === 0){
    console.log('Staying home!');
  }
}
//console.log(jediName('Beyonce', 'Knowles'));


beyond(Number.NEGATIVE_INFINITY);