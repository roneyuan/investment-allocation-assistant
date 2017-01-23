var question = [
	{
		id: 1,
		question: '1. What is your investment goal?',
		choice: ["Retirement ","Safety Net ","College Saving","General Investing "]
	},
	{
		id: 2,
		question: '2. What is your age?',
		choice: ["18 - 25"," 26 - 35 ","36 - 45","46+"]
	},
	{
		id: 3,
		question: 'What is your annaul income?',
		choice: ["15000 - 30000","30001 - 50000","50001 - 100000","100001+"]
	},
	{
		id: 4,
		question: 'What is your total net?',
		choice: ["Below 10000 ","10001 - 100000 ","100001 - 999999","Over 1 million"]
	},
	{
		id: 5,
		question: 'What is yuor investment style?',
		choice: ["Aggressive Growth","Steady Growth ","Moderate Growth","Loss Avoidance"]
	},
	{
		id: 6,
		question: 'If your stock lost 10% of its value, what would you do?',
		choice: ["Sell all of the investment","Sell some","Keep all","Buy more"]
	},
	{
		id: 7,
		question: 'Which portfolio would make you most comfortable?',
		choice: ["Gain 14% a year, with high risk","Gain 10% a year, with medium risk","Gain 7% a year, with low risk","Gain 3% a year, with miminal risk"]
	},
	{
		id: 8,
		question: 'You are betting on a coin flip, which bet would you take?',
		choice: ["If heads: win 10. If tails: lose 0","If heads: win $50. If tails: lose $20","If heads: win $100. If tails: lose $50","If heads: Show hand and win double. If tails: lose all"]
	},
	{
		id: 9,
		question: 'You are playing a poker. You have Black heart K and A and two people show hand but lower than you total money. What would you do?',
		choice: ["Bet ","Fold","Raise 20% more ","Show hand"]
	},
	{
		id: 10,
		question: 'TBD',
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

var state = {
	stock: 50,
	bond: 50
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

	$('.content').append(result);
	presentFinalChart();
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
