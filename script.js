function processText() {
    // takes in a string of lots of words and splits them by spaces
    // returns a list of strings, each being a word
    let text = document.getElementById("input-text").value;
    let textArray = text.split(" ");

    let words = ['.', ',', '!', '?']

    for (let i = 0; i < 30; i++) {
        let randElement = textArray[Math.floor(Math.random() * textArray.length)]
        words.push(randElement)
    }

    // call function to create magnets on screen
    createMagnetSpace(words)
}

let width = window.innerWidth;
let height = window.innerHeight / 2;
let stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
    draggable: false
});

let rectangleLayer = new Konva.Layer();

function createMagnetSpace(words) {
    // creates movable magnets on a space of the words processed from processText()
    // takes in an array of strs, each being a word
    // uses Konva library to make magnets dragable
    for (let word of words) {
        console.log(word)
        let rectangle = new Konva.Group({
            x: 25,
            y: 25,
            width: 130,
            height: 25,
            rotation: 0,
            draggable: true,
        });

        rectangle.add(new Konva.Rect({
            width: 130,
            height: 25,
            fill: 'lightblue'
        }));

        rectangle.add(new Konva.Text({
            text: word,
            fontSize: 18,
            fontFamily: 'Calibri',
            fill: '#000',
            width: 130,
            padding: 5,
            align: 'center'
        }));
        rectangleLayer.add(rectangle);
        stage.add(rectangleLayer);
    }
}