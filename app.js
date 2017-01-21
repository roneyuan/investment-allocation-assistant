var question = [
	{
		id: 1,
		question: '1. This is the first',
		choice: [1,2,3,4]
	},
	{
		id: 2,
		question: '2. ',
		choice: [1,2,3,4]
	},
	{
		id: 3,
		question: '3. ',
		choice: [1,2,3,4]
	},
	{
		id: 4,
		question: '4. ',
		choice: [1,2,3,4]
	},
	{
		id: 5,
		question: '5. ',
		choice: [1,2,3,4]
	},
	{
		id: 6,
		question: '6. This is the first',
		choice: [1,2,3,4]
	},
	{
		id: 7,
		question: '7. ',
		choice: [1,2,3,4]
	},
	{
		id: 8,
		question: '8. ',
		choice: [1,2,3,4]
	},
	{
		id: 9,
		question: '9. ',
		choice: [1,2,3,4]
	},
	{
		id: 10,
		question: '10. ',
		choice: [1,2,3,4]
	}	
];

var answer = [
	{
		id: 1,
		answer: "" 
	},
	{
		id: 2,
		answer: ""
	},
	{
		id: 3,
		answer: ""
	},
	{
		id: 4,
		answer: ""
	},
	{
		id: 5,
		answer: ""
	},
	{
		id: 6,
		answer: "" 
	},
	{
		id: 7,
		answer: ""
	},
	{
		id: 8,
		answer: ""
	},
	{
		id: 9,
		answer: ""
	},
	{
		id: 10,
		answer: ""
	}	
];

// Listner for the user's choice

// DOM Manipulation
// var template = "<div class='frame'> \
					// <div class='question'>Ask</div> \
					// <form class='choice'> \
						// <button class='submit'>Submit</button> \
					// </form> \
				// </div>";

				
				
function start() {
	$('.begin').on('click', function(event) {
		event.preventDefault();
		$(this).closest('div').remove();
		
		startQuestion(0);	
	});
} 

function startQuestion(number) {
	var getChoices = generateQuestion(number);
	var template = "<div class='frame'> \
						<div class='question'>" 
						+ question[number]['question'] + "</div> \
						<form class='choice'>" 
						+ getChoices + "\
						<button class='submit'>Submit</button> \
						</form> \
					</div>";
				
	$('.content').append(template);	
	
	$(".submit").on('click', function(event) {
		event.preventDefault();
		getAnswer(number);
	});		
}

function generateQuestion(number) {	
	var choices = "";
	var currentObj = question[number];
	
	for (var n=0; n < 4; n++) {
		choices += "<input type='radio' name='" + currentObj['id'] + 
					"' value='" + currentObj['choice'][n] + "' /> " +
					currentObj['choice'][n] + " <br>";
	}

	return choices;
}

function goToNextQuestion(number) {
	// Go to next question and delete the previous one
	
	// Remove previous
	$(".frame").remove();
	
	if (number === question.length) {
		presentResult();
	} else {
		startQuestion(number);	
	}
	
}

function getAnswer(number) {
	// Get the user's choice
	var inputName = "input[name=" + question[number]['id'] + "]:checked"
	var thisAnswer = $(inputName, '.choice').val();
	
	if (thisAnswer === undefined) {
		alert("Please select");
		return;
	} else {
		saveAnswer(number, thisAnswer);
		var next = number + 1;
		goToNextQuestion(next);	
	}
}

function saveAnswer(number, thisAnswer) {
	// Save to the object for future calculation
	answer[number]['answer'] = thisAnswer;
	return;
}

// Answer calculation
function presentResult() {
	var result = "";
	answer.forEach(function(element) {
		result += "<div>"+element['id']+": "+element['answer']+"</div>";
	});
	$('.content').append(result);
	
	// D3.js here
}

function changeChart() {
	// TODO
	
	return;
}

$(start)
