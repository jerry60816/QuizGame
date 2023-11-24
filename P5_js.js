// Questions that will be asked
const Questions = [
	{
	  q: "Who was the MVP for season 2023",
	  a: [
		{ text: "Jokic", isCorrect: true },
		{ text: "Giannis", isCorrect: false },
		{ text: "Lebron", isCorrect: false },
		{ text: "Curry", isCorrect: false }
	  ]
	},
	{
	  q: "Which team won the championship last season",
	  a: [
		{ text: "Nuggets", isCorrect: true, isSelected: false },
		{ text: "Celtics", isCorrect: false },
		{ text: "Warriors", isCorrect: false },
		{ text: "Lakers", isCorrect: false }
	  ]
	},
	{
	  q: "Which team uses Chase Center as their home court",
	  a: [
		{ text: "Warriors", isCorrect: true },
		{ text: "Wolves", isCorrect: false },
		{ text: "Wizard", isCorrect: false },
		{ text: "Magic", isCorrect: false }
	  ]
	}
  ];
  
  let currQuestion = 0;
  let score = 0;
  
  function loadQues() {
	const question = document.getElementById("ques");
	const opt = document.getElementById("opt");
  
	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = "";
  
	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
	  const choicesdiv = document.createElement("div");
	  const choice = document.createElement("input");
	  const choiceLabel = document.createElement("label");
  
	  choice.type = "radio";
	  choice.name = "answer";
	  choice.value = i;
  
	  choiceLabel.textContent = Questions[currQuestion].a[i].text;
  
	  choicesdiv.appendChild(choice);
	  choicesdiv.appendChild(choiceLabel);
	  opt.appendChild(choicesdiv);
	}
  }
  
  loadQues();
  
  function loadScore() {
	const totalScore = document.getElementById("score");
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
  }
  
  function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
	  currQuestion++;
	  loadQues();
	} else {
	  document.getElementById("opt").remove();
	  document.getElementById("ques").remove();
	  document.getElementById("btn").remove();
	  loadScore();
	}
  }
  
  function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
  
	if (Questions[currQuestion].a[selectedAns].isCorrect) {
	  score++;
	  console.log("Correct");
	  nextQuestion();
	} else {
	  nextQuestion();
	}
  }
  