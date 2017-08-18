const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('button.operator');
const clear = document.querySelector('#clear');
const outPut = document.querySelector('#outputBox');
const container = document.querySelector('#container');

let leftside = '';
let rightside = '';
let operator = '';
let evaluation = '';

container.addEventListener('click', function(evt){

  let input = evt.target.innerText;

  outPut.textContent += input;


  if(input === "/" || input === "x" || input === "-" || input === "+") {
      operator += input;
    }else if(operator !== ''){
      rightside += input;
      rightside = parseInt(rightside);
    }else {
      leftside += input;
      leftside = parseInt(leftside);
  };

  if(input === "=") {
    clearInput();
    console.log(input);
    outPut.textContent = evaluation;
  };

  if(input === "C") {
    clearInput();
    evaluation = '';
    input = '';
    outPut.textContent = '';
  };

  if(operator === '/') {
    evaluation = (leftside / rightside);
   }else if(operator === 'x') {
     evaluation = (leftside * rightside);
   }else if(operator === '+' ) {
     evaluation = (leftside + rightside);
   }else {
     evaluation = (leftside - rightside)
  };
});

function clearInput() {
  leftside = '';
  rightside = '';
  operator = '';
  input = '';
};






























//study evt.target.innerText (((found within the anon function on the event listeners)))
