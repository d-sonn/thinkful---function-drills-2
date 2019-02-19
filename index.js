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

function decode(encodedWord) {
    switch(encodedWord.substring(0,1)) {
    case 'a':
      return encodedWord.substring(1,2);
    case 'b':
      return encodedWord.substring(2,3);
    case 'c':
      return encodedWord.substring(3,4);
    case 'd':
      return encodedWord.substring(4,5);
    default:
      return ' '
  }
}

let testString = 'craft block argon meter bells brown croon droop';
let testArray = testString.split(' ');
let answer = '';

for (var i = 0; i < testArray.length; i++) {
  answer += decode(testArray[i]);
}

console.log(answer);

//console.log(jediName('Beyonce', 'Knowles'));

// beyond(Number.NEGATIVE_INFINITY);

