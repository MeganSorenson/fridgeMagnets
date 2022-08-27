function processText() {
    // takes in a string of lots of words and splits them by spaces
    // returns a list of strings, each being a word
    let text = document.getElementById("input-text").value;
    var textArray = text.split(" ");

    let words = ['.', ',', '!', '?']

    for (let i = 0; i < 30; i++) {
        let randElement = textArray[Math.floor(Math.random() * textArray.length)]
        words.push(randElement)
    }

    console.log(words);
}
