const reorderAnswers = () => {

};
reorderAnswers();

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function containsElt(stringToCheck, substringsArray) {
  var numWords = substringsArray.length;
  while (numWords--) {
    if (stringToCheck.indexOf(substringsArray[numWords]) != -1) {
      return true;
    }
  }
  return false;
}

console.log('Reordered Posts by Top Voted');

var posts = [];

function replaceNode(oldNode, newNode) {
  oldNode.parentNode.replaceChild(newNode, oldNode);
}


// Execution
const answers = getAllAnswers();

const getNumberOfVotesFromAnswer = function (answer: HTMLElement) {
  return answer.getElementsByClassName("vote-count-post");
}

var wrapperSection = document.getElementById("list-view-2");

/**
 * Utility Functions
 */
function removeChildren(domNode) {
  while (domNode.firstChild) {
    domNode.removeChild(domNode.firstChild);
  }
}

