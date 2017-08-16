window.onload = function() {

  // NOTE: it's note 100% the original html since SO has a "<a name="32351302"></a>" anchor element
  // above the answer which is thrown away. Shouldn't matter too much though.

  const answersWrapper = document.getElementById('answers');
  const answers = document.getElementsByClassName('answer');
  const originalAnswers: Element[] = [];
  const extendedAnswers: ExtendedAnswer[] = [];

  for (let i = 0; i < answers.length; i++) {
    const answer = answers.item(i);
    const voteCountHtml = answer.getElementsByClassName('vote-count-post');
    const voteCount = parseInt(voteCountHtml.item(0).innerHTML);
    extendedAnswers.push({
      answer: answer,
      voteCount: voteCount
    });
  }
  const reorderedAnswers: ExtendedAnswer[] = extendedAnswers.sort((a, b) =>  b.voteCount - a.voteCount);

  // build new answers div
  const newAnswersWrapper = document.createElement("DIV");
  newAnswersWrapper.setAttribute('id', 'answers');
  reorderedAnswers.forEach(answer => {
    newAnswersWrapper.appendChild(answer.answer);
  });

  // replace old answers div
  answersWrapper.parentNode.replaceChild(newAnswersWrapper, answersWrapper);

};

interface ExtendedAnswer {
  answer: Element;
  voteCount: number;
}
