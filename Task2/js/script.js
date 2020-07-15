'use strict'

function mathSimulator () {

  const input = document.querySelector('.input');
  const taskDescription = document.querySelector('.taskDescription');
  const menu = document.querySelector('.menu');
  const simbolsList = ['+','-','*','/'];
  
  document.querySelector('.button').addEventListener('click', onClickButton);

  generatorNewTasks ();

  function generatorNewTasks () {
    const randomSimbol = simbolsList[~~(Math.random() * simbolsList.length)];
    let firstNumber;
    let secondNumber;

    switch (randomSimbol) {
      case '+':
      case '-':
      case '/':
        firstNumber = ~~(10 + Math.random() * 90);
        secondNumber = ~~(10 + Math.random() * 90);
        break;

      default:
        firstNumber = ~~(2 + Math.random() * 30);
        secondNumber = ~~(2 + Math.random() * 30);
        break;
    }

    taskDescription.textContent = `${firstNumber} ${randomSimbol} ${secondNumber} =`;

    return `${firstNumber} ${randomSimbol} ${secondNumber} =`;
  }

  let task = generatorNewTasks();
  
  function onClickButton () {
    const rezalt = calculation(task);
    console.log(+input.value + " = " + rezalt);
    
    if (+input.value == rezalt) {
      setTimeout(() => {
        task = generatorNewTasks();
        input.value ='';
      },150)
    } else {
      input.value ='';
    }
  }

  function calculation (someTask) {
    const arithmeticProblem = someTask.split(' ');
    const firstNumber = +arithmeticProblem[0];
    const mathSymbol = arithmeticProblem[1];
    const secondNumber = +arithmeticProblem[2];

    switch (mathSymbol) {
      case '+':
        return firstNumber + secondNumber;

      case '-':
        return firstNumber - secondNumber;

      case '*':        
        return firstNumber * secondNumber;
    
      default:
        return firstNumber / secondNumber;
    }
  }
}

mathSimulator();