window.onload = function() {

  const answersWrapper = document.getElementById('answers');
  const answersHeader = document.getElementById('answers-header');
  const answers = document.getElementsByClassName('answer');
  const originalAnswers: Element[] = [];
  const extendedAnswers: ExtendedAnswer[] = [];

  for (let i = 0; i < answers.length; i++) {
    const answer = answers.item(i);
    originalAnswers.push(answer);
    const voteCountHtml = answer.getElementsByClassName('js-vote-count');
    const voteCount = parseInt(voteCountHtml.item(0).innerHTML);
    extendedAnswers.push({
      answer: answer,
      voteCount: voteCount
    });
  }
  const reorderedAnswers: ExtendedAnswer[] = extendedAnswers.sort((a, b) =>  b.voteCount - a.voteCount);

  originalAnswers.forEach((answer, idx) => {
    answersWrapper.replaceChild(reorderedAnswers[idx].answer.cloneNode(true), answer);
  });

  // TODO: anchor tags above answers don't get reordered yet


};

interface ExtendedAnswer {
  answer: Element;
  voteCount: number;
}
