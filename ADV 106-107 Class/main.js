function startToSort(){
    navigator.mediaDevices.getUserMedia({audio: true})
    sorter = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1N3noHscf/model.json', modelReady)
}
function modelReady(){
    sorter.classify(gotResults)
}

function gotResults(error, results){
    if (error) {
        console.error(error)
    } else {
        document.getElementById('resType').innerHTML = 'The aliens can hear a ' + results[0].label
        document.getElementById('resType').innerHTML = 'with an accuracy of ' + (results[0].confidence * 100).toFixed(2) + '%'
        
        imgR = document.getElementById('redAlien')
        imgG = document.getElementById('greenAlien')
        imgB = document.getElementById('blueAlien')

        if (results[0].label == 'Clap') {
            imgR.src = 'Red.gif'
            imgG.src = 'Green.png'
            imgB.src = 'Blue.png'
        } else if (results[0].label == 'Blow') {
            imgR.src = 'Red.png'
            imgG.src = 'Green.gif'
            imgB.src = 'Blue.png'
        } else {
            imgR.src = 'Red.png'
            imgG.src = 'Green.png'
            imgB.src = 'Blue.gif'
        }
        }
    }
