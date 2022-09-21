var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv =  document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTransalationURL(input){
       return serverUrl+"?" + "text=" + input
}

function errorHandler(error){
       console.log("error occured"+ error);
       alert("Something wrong with server! Try again after sometime.");
}

function clickHandler() {
       var inputText =  txtInput.value ; //taking input

       if(inputText === ''){
              outputDiv.innerText = "Please enter some text!"
              outputDiv.style.color = 'red'
       }
       else{
              //calling server for processing
              fetch(getTransalationURL(inputText))
              .then(response => response.json())
              .then(json => {
                     var translatedText = json.contents.translated;
                     outputDiv.innerText = translatedText;
                     outputDiv.style.color = 'black'
                     })
              .catch(errorHandler)
       }
};


btnTranslate.addEventListener("click", clickHandler)
