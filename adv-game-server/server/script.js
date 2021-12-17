const express = require('express');
const app = express();

var completeQuestionSet = {
	d73eb3: [
		{
			question: 'What is 5 + 6?',
			answer: '11',
		},
		{
			question: 'What is 5 * 6?',
			answer: '30',
		},
		{
			question: 'What is 6 - 6?',
			answer: '0',
		},
	],
};

app.use(express.json());
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.get('/get-questions/:code', function (req, res) {
	var code = req.params.code; // whatever the user types into the code box, should be d73eb3

	// @TODO: using the passed in code, get the question set
	// @TODO: after getting question set, get the questions only as an array(i.e. no answers)
	// @TODO: result should look like questions variable below.

	// this below is hardcoded so replace this with your own logic
	var questions = ['What is 5 + 6?', 'What is 5 * 6?', 'What is 6 - 6?'];

	res.send(questions);
});

app.post('/check-answers/:code', function (req, res) {
	var code = req.params.code;
	var answers = req.body.answers;

	console.log('user answers: ', answers, 'question set code: ', code);
	// answers is an array of user answers
	// code is a unique string that equals 'd73eb3' (the question set code)
	// @TODO: check that user answers match question set answers
	// @TODO: add one point to score for every correct answer
	// @TODO: return the score below

	var score = 3; // hardcoded 3 value for now
	res.send({ score: score });
});

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.listen(5000);
