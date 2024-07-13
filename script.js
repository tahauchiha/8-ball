let qButton = document.getElementById("questionButton");

let mouseClick = qButton.addEventListener("click", openPrompt);

let answer = document.getElementById("answer");

let ball = document.getElementById("8ball");

function openPrompt() {
  let question = prompt("Ask me any YES/NO question");
  
  let magic8Ball = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

  randomIndex = Math.floor((Math.random())*4)

  ball.src =
    "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png";
  if ((question == null)||(question == '')) {
    answer.innerText = "There's no question to answer :(";
    const anotherTimeout = setTimeout(reset ,4000);
  }
  else{
    answer.innerText = magic8Ball[randomIndex];
    const anotherTimeout = setTimeout(reset ,4000);
  }
}

const myTimeout = setTimeout(mouseClick, 500);

function reset(){
  ball.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png";
  answer.innerText = "";
}