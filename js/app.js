
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
		getInputAnswer(number);
	});		
}

function generateQuestion(number) {	
	var choices = "";
	var currentObj = question[number];
	
	for (var n=0; n < 4; n++) {
		choices += "<input type='radio' name='" + currentObj['id'] + 
					"' value='" + n + "' /> " +
					currentObj['choice'][n] + " <br>";
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

function getInputAnswer(number) {
	// Get the user's choice
	var inputName = "input[name=" + question[number]['id'] + "]:checked"
	var thisAnswer = $(inputName, '.choice').val();
	
	if (thisAnswer === undefined) {
		alert("Please select");
		return;
	} else {
		saveAnswer(number, thisAnswer);
		changeChart(number, thisAnswer);
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
		result += "<div>"+element['id']+": "+element['answer']+"</div>";
	});

	$('.frame').append(result);
	$('.frame').append("<button class='restart'> Restart </button>");
	presentFinalChart();
	$('.restart').on('click', function (event) {
		event.preventDefault();
		// Reset
		state['stock'] = 50;
		state['bond'] = 50;
		updateAllocation();
		goToNextQuestion(0);
	})
}

function updateAllocation() {
	var thisStock = "Stock: " + state["stock"] + "%";
	var thisBond = "Bond: " + state["bond"] + "%";
	$(".stock").text(thisStock);
	$(".bond").text(thisBond);
	updateCurrentChart();

	return;
}

$(start)
