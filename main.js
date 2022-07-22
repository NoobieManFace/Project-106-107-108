cat = 0;
bear = 0;
lion = 0;

function StartClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/azFC1lzh9/model.json", Modelready);
}
function Modelready() {
    classifier.classify(GotResults);
}
function GotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(3) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
        img = document.getElementById('Ear Piece.png');
        if (results[0].label == "Roar") {
            img.src = 'Lion.gif';
            lion = lion + 1
        } else if (results[0].label == "Growl") {
            img.src = 'Bear.gif';
           bear = bear + 1
        }
        else if (results[0].label == "Meow") {
            img.src = 'Cat.gif';
            cat = cat + 1
        }
        else {
            img.src = 'Ear Piece.png';
        }
    }
}