function score() {
  let allocation = [
    {type: "stock", value: 50},
    {type: "bond", value: 50}
  ];

  let answerList = [];

  return function getScore(question, answer) {
    let answer = {
      id: question,
      answer
    }

    answerList.push(answer);

      allocation[0].value += score;
  state[1].value = 100 - state[0].value;

    
  }
} 