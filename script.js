function processText() {
    // takes in a string of lots of words and splits them by spaces
    // calls another function to create magnets on stage
    let text = document.getElementById("input-text").value;
    let textArray = text.split(" ");

    let words = ['.', ',', '!', '?'];

    // shuffle text
    let shuffled = textArray.sort(() => 0.5 - Math.random());

    for (let i = 0; i < 50; i++) {
        words.push(shuffled[i])
    };

    // call function to create magnets on screen
    createMagnets(words);
}

function defaultText() {
    // creates an array of words based on classic fridge poetry
    // calls another function to create magnets on stage
    let text = "& & a a a a a a about above ache ad after all am am an an and and and and apparatus are are arm as as as as ask at at at away bare be beat beauty bed beneath bitter black blood blow blue boil boy breast but but but but butt by by can chant chocolate cool could crush cry d day death delirious diamond did do do dream dress drive drool drunk eat ed ed ed ed egg elaborate enormous er es est fast feet fiddle finger fluff for forest frantic friend from from garden gir l go goddess gorgeous gown hair has have have he he head heave her her here him his his honey hot how IIII if in in in ing ing ing ing ing ing is is is is is it it it juice lake language languid lather lazy less let lick lie life light like like like live love luscious lust ly ly ly ly mad man me me me mean meat men milk mist moan moon mother music must my my my need never no no not not of of of of on on one or our over pant peach petal picture pink play please pole pound puppy purple put r r rain raw recall red repulsive rip rock rose run rust s s s s s s s s s s s sad said sausage say scream sea see shadow she she shine ship shot show sing sit skin sky sleep smear smell smooth so soar some sordid spray spring still stop storm suit summer sun sweat sweet swim symphony the the the the the their there these they those though thousand through time tiny to to to together tongue trudge TV ugly up urge us use want want was watch water wax we we were what when whisper who why will wind with with woman worship y y y y yet you you you you";
    let textArray = text.split(" ");

    let words = ['.', ',', '!', '?'];

    // shuffle text
    let shuffled = textArray.sort(() => 0.5 - Math.random());

    for (let i = 0; i < 50; i++) {
        words.push(shuffled[i])
    };

    // call function to create magnets on screen
    createMagnets(words);
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
        console.log(word.length)
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

function resetFridge() {
    stage.clear()
    stage.destroyChildren()
}