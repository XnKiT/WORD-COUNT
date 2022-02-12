function getWordCount(arr) {
  return arr.reduce((prev, nxt) => {
    prev[nxt] = (prev[nxt] + 1) || 1;
    return prev;
  }, {});
}

function displayWordCount() {
  document.getElementById("word-count").value = "";
  var textInput = document.getElementById("text-input").value;
  var formattedText = textInput.replace(/[\W_]+/g," ").trim().toLowerCase();
  var wordsArr = formattedText.split(" ");
  
  var wordObj = getWordCount(wordsArr);
  var words = Object.entries(wordObj);
  words.map(x => {
    return document.getElementById("word-count").value += `${x[0]}: ${x[1]} \n`
  })
}
