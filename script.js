function processText() {
    // takes in a string of lots of words and splits them by spaces
    // returns a list of strings, each being a word
    let text = document.getElementById("input-text").value;
    let textArray = text.split(" ");

    let words = ['.', ',', '!', '?']

    for (let i = 0; i < 40; i++) {
        let randElement = textArray[Math.floor(Math.random() * textArray.length)]
        words.push(randElement)
    }

    // call function to create magnets on screen
    createMagnets(words)
}

// Globaly create Konva stage
let width = window.innerWidth;
let height = window.innerHeight / 1.5;
let stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
    draggable: false
});

let rectangleLayer = new Konva.Layer();

function createMagnets(words) {
    // creates movable magnets of the words processed from processText() onto the Konva stage
    // takes in an array of strs, each being a word
    // uses Konva library to make magnets dragable
    let xCoord = 10
    let yCoord = 10
    for (let word of words) {
        // check if need to insert on lower line
        if (xCoord + (word.length * 20) + 10 >= window.innerWidth) {
            yCoord += 35
            xCoord = 10
        }

        // create rectangle and text and add together
        let rectangle = new Konva.Group({
            x: xCoord,
            y: yCoord,
            width: word.length * 20,
            height: 25,
            rotation: 0,
            draggable: true,
        });

        rectangle.add(new Konva.Rect({
            width: word.length * 20,
            height: 25,
            fill: '#ECEBD9'
        }));

        rectangle.add(new Konva.Text({
            text: word,
            fontSize: 18,
            fontFamily: 'Calibri',
            fill: '#000',
            width: word.length * 20,
            padding: 5,
            align: 'center'
        }));
        rectangleLayer.add(rectangle);
        stage.add(rectangleLayer);

        // adjust x coordinate for next word
        xCoord += (word.length * 20) + 10
    }
}

function downloadURI(uri, name) {
    // gets the export link for the image
    // url is the data url of the stage
    // name is the export name of the file
    let link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

// call downloadURI function whenever button is clicked
document.getElementById('save').addEventListener(
    'click',
    function () {
        let dataURL = stage.toDataURL({ pixelRatio: 3 });
        downloadURI(dataURL, 'fridgeMemo.png');
    },
    false
);