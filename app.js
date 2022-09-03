var btnTranslate = document.querySelector('#translation-button');
var txtInput = document.querySelector('#translation-input')
var output = document.querySelector('#translated-output')

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("Error occured:", error)
    alert("Something wrong with the server! Please try again after some time")
}

function clickHandler(){
    var inputText = txtInput.value

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then((response) => response.json())
        .then((json) => {
            var translatedTxt = json.contents.translated
            output.innerText = translatedTxt
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)