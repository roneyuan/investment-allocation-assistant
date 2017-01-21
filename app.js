var question = [
	{
		id: 1,
		question: '1. This is the first',
		choice: ["1. ","2. ","3. ","4. "]
	},
	{
		id: 2,
		question: '2. ',
		choice: ["1. ","2. ","3. ","4. "]
	},
	{
		id: 3,
		question: '3. ',
		choice: ["1. ","2. ","3. ","4. "]
	},
	{
		id: 4,
		question: '4. ',
		choice: ["1. ","2. ","3. ","4. "]
	},
	{
		id: 5,
		question: '5. ',
		choice: ["1. ","2. ","3. ","4. "]
	},
	{
		id: 6,
		question: '6. This is the first',
		choice: ["1. ","2. ","3. ","4. "]
	},
	{
		id: 7,
		question: '7. ',
		choice: ["1. ","2. ","3. ","4. "]
	},
	{
		id: 8,
		question: '8. ',
		choice: ["1. ","2. ","3. ","4. "]
	},
	{
		id: 9,
		question: '9. ',
		choice: ["1. ","2. ","3. ","4. "]
	},
	{
		id: 10,
		question: '10. ',
		choice: ["1. ","2. ","3. ","4. "]
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

var allocation = {
	s: 50,
	b: 50
}
		
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
	
	// Remove previous
	$(".frame").remove();
	
	if (number === question.length) {
		presentResult();
	} else {
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
	
	//var displayedNumber = calcResult();
	//presentChart(displayedNumber);
	presentChart();
}
/*
function calcResult() {
	var defaultSAllocation = 50;
	
	answer.forEach(function(element) {
		switch (element['id']) {
			case 1:
				switch (element['answer']) {
					case "0":
						defaultSAllocation -= 10;		
						break;
					case "1":
						defaultSAllocation -= 5;
						break;
					case "2":
						defaultSAllocation += 5;
						break;
					case "3":
						defaultSAllocation += 10;
						break;
					default:			
						break;
				}
				break;
			case 2:
				break;
			case 3:
				switch (element['answer']) {
					case "0":
						defaultSAllocation -= 10;		
						break;
					case "1":
						defaultSAllocation -= 5;
						break;
					case "2":
						defaultSAllocation += 5;
						break;
					case "3":
						defaultSAllocation += 10;
						break;
					default:			
						break;
				}
				break;			
			case 4:
				break;
			case 5:
				switch (element['answer']) {
					case "0":
						defaultSAllocation -= 10;		
						break;
					case "1":
						defaultSAllocation -= 5;
						break;
					case "2":
						defaultSAllocation += 5;
						break;
					case "3":
						defaultSAllocation += 10;
						break;
					default:			
						break;
				}
				break;			
			case 6:
				break;
			case 7:
				switch (element['answer']) {
					case "0":
						defaultSAllocation -= 10;		
						break;
					case "1":
						defaultSAllocation -= 5;
						break;
					case "2":
						defaultSAllocation += 5;
						break;
					case "3":
						defaultSAllocation += 10;
						break;
					default:			
						break;
				}
				break;			
			case 8:
				break;
			case 9:
				switch (element['answer']) {
					case "0":
						defaultSAllocation -= 10;		
						break;
					case "1":
						defaultSAllocation -= 5;
						break;
					case "2":
						defaultSAllocation += 5;
						break;
					case "3":
						defaultSAllocation += 10;
						break;
					default:			
						break;
				}
				break;			
			case 10:
				break;
			default:
				break;
		}
	});
	
	return defaultSAllocation;
}*/

function presentChart() {
	// D3.js here
	// P here
	
	// But b first
	console.log(allocation['s']);
	console.log(allocation['b']);
	
}

function changeChart(thisQuestion, thisAnswer) {
	// TODO
	
	var defaultSAllocation = allocation['s'];
	switch (thisQuestion) {
		case 1:
			switch (thisAnswer) {
				case "0":
					defaultSAllocation -= 10;		
					break;
				case "1":
					defaultSAllocation -= 5;
					break;
				case "2":
					defaultSAllocation += 5;
					break;
				case "3":
					defaultSAllocation += 10;
					break;
				default:			
					break;
			}
			break;
		case 2:
			break;
		case 3:
			switch (thisAnswer) {
				case "0":
					defaultSAllocation -= 10;		
					break;
				case "1":
					defaultSAllocation -= 5;
					break;
				case "2":
					defaultSAllocation += 5;
					break;
				case "3":
					defaultSAllocation += 10;
					break;
				default:			
					break;
			}
			break;			
		case 4:
			break;
		case 5:
			switch (thisAnswer) {
				case "0":
					defaultSAllocation -= 10;		
					break;
				case "1":
					defaultSAllocation -= 5;
					break;
				case "2":
					defaultSAllocation += 5;
					break;
				case "3":
					defaultSAllocation += 10;
					break;
				default:			
					break;
			}
			break;			
		case 6:
			break;
		case 7:
			switch (thisAnswer) {
				case "0":
					defaultSAllocation -= 10;		
					break;
				case "1":
					defaultSAllocation -= 5;
					break;
				case "2":
					defaultSAllocation += 5;
					break;
				case "3":
					defaultSAllocation += 10;
					break;
				default:			
					break;
			}
			break;			
		case 8:
			break;
		case 9:
			switch (thisAnswer) {
				case "0":
					defaultSAllocation -= 10;		
					break;
				case "1":
					defaultSAllocation -= 5;
					break;
				case "2":
					defaultSAllocation += 5;
					break;
				case "3":
					defaultSAllocation += 10;
					break;
				default:			
					break;
			}
			break;			
		case 10:
			break;
		default:
			break;
	}	
	
	
	var b = 100 - defaultSAllocation;
	
	allocation['s'] = defaultSAllocation;
	allocation['b'] = b;
	// Update here...
	
	return;
}

$(start)
