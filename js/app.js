
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
						</form> \
					</div>";
				
	$('.content').append(template);	
	
	$(".submitAnswer").on('click', function(event) {
		event.preventDefault();
		var ans = $(this).attr('value');
		getInputAnswer(number, ans);
	});		
}

function generateQuestion(number) {	
	var choices = "";
	var currentObj = question[number];
	
	for (var n=0; n < 4; n++) { 
		choices += "<button class='submitAnswer' name='" + currentObj['id'] + 
					"' value='" + n + "'> " +
					currentObj['choice'][n] + " </button>";
	}

	return choices;
}

function goToNextQuestion(number) {
	// Go to next question and delete the previous one
	
	if (number === question.length) {
		// Remove Queston and Answer
		$('.question').remove();
		$('.choice').remove();
		
		presentResult();
	} else {
		// Remove previous
		$(".frame").remove();		
		startQuestion(number);	
	}
}

function getInputAnswer(number, answer) {
	if (answer === undefined) {
		alert("Please select");
		return;
	} else {
		saveAnswer(number, answer);
		changeChart(number, answer);
		updateAllocation();
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
		result += "<div>"+element['id']+": "+question[element['id']-1]["choice"][element['answer']]+"</div>";
	});

	$('.frame').append(result);
	$('.frame').append("<button class='restart'> Restart </button>");
	presentFinalChart();
	$('.restart').on('click', function (event) {
		event.preventDefault();
		// Reset
		state[0].value = 50;
		state[1].value = 50;
		updateAllocation();
		goToNextQuestion(0);
	})
}

function updateAllocation() {
	updateCurrentChart();

	return;
}

$(start)
