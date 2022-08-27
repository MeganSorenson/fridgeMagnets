function processText() {
    // takes in a string of lots of words and splits them by spaces
    // returns a list of strings, each being a word
    let text = document.getElementById("input-text").value;
    const textArray = text.split(" ");
    console.log(textArray);
}

function sendEmail() {
    // sends an email to a given email input of the fridge memo created
}