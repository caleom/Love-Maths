//Run a function after DOM has finished loading

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    
    for (const button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType)
            }
        })
    }

    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer()
        }
    })
    runGame("addition");

});


/**
 * The main loop that runs the game when the DOM is loaded and a users answer has been processed
 */
function runGame(gameType) {

    document.getElementById("answer-box").focus()

    // creates 2 random numbers
    let num1 = ((Math.random() * 25) + 1) | 0;
    let num2 = ((Math.random() * 25) + 1) | 0;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else if (gameType === "multiply") {
      displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
      displaySubtractQuestion(num1, num2);
    } else if (gameType === "division") {
      displayDivisionQuestion(num1, num2);
    } else {
      alert(`Unknown game type: ${gameType}`);
      throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Will check the answer from the user
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value)
    let calculatedAnswer = calculateCorrectAnswer();

    let isCorrect = userAnswer === calculatedAnswer[0]

    if (isCorrect) {
        alert("Hey, You got it correct! :D")
        document.getElementById("answer-box").value = ""
        incrementScore();
    } else {
        alert(`awwwww, you answered ${document.getElementById("answer-box").value}, the correct answer was ${calculatedAnswer[0]}`)
        document.getElementById("answer-box").value = "";
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1])
}

/**
 * grabs the numbers and mathematical sign from the DOM and returns the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText)
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText

    if (operator === "+") {
        return [operand1 + operand2, "addition"]
    } else if (operator === "x") {
      return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
      return [operand1 - operand2, "subtract"];
    } else if (operator === "/") {
      return [operand1 / operand2, "division"];
    } else {
      alert(`Unimplemented operator ${operator}`);
      throw `Unimplemented operator ${operator}. Aborting`;
    }
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText)
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";


}

function displaySubtractQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1 > operand2 ? operand1:operand2;
  document.getElementById("operand2").textContent = operand1 > operand2 ? operand2:operand1;
  document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";
}

function displayDivisionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1*operand2;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "/";
}
