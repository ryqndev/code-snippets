function submitCode() {
	let questionSetCode = document.getElementById('code-input').value;

	// get questions from server with inputted code
	fetch('http://localhost:5000/get-questions/' + questionSetCode)
		.then(function (res) {
			return res.json();
		})
		.then(function (response) {
			document.getElementById('display-questions').innerHTML =
				displayQuestions(response);
		});
}

function displayQuestions(questions) {
	let displayedHTML = questions.map(
		(question, index) => `
        <div>
            ${question}
            <input type="text" id="answer-${index}" />
        </div>
    `
	);
	displayedHTML += `<button onclick="submitAnswers(${questions.length});">Submit</button>`;
	return displayedHTML;
}

function submitAnswers(totalNumberOfQuestions) {
	let questionSetCode = document.getElementById('code-input').value;

	let userAnswers = [];
	for (let i = 0; i < totalNumberOfQuestions; i++) {
		userAnswers.push(document.getElementById('answer-' + i).value);
	}
	fetch('http://localhost:5000/check-answers/' + questionSetCode, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ answers: userAnswers }),
	})
		.then(function (res) {
			return res.json();
		})
		.then(function (response) {
			document.getElementById(
				'result'
			).innerHTML = `<h1>Your score: ${response.score}</h1>`;
		});
}
