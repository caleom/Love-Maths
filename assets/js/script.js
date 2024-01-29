//Run a function after DOM has finished loading

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    
    for (const button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!")
            } else {
                let gameType = this.getAttribute("data-type");
                    alert("You clicked " + gameType + "!")
            }
        })
    }
});


/**
 * The main loop that runs the game when the DOM is loaded and a users answer has been processed
 */
function runGame() {
    // creates 2 random numbers
    let num1 = ((Math.random() * 25) + 1) | 0;
    let num2 = ((Math.random() * 25) + 1) | 0;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplayerQuestion() {

}
