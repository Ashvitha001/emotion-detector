function RunSentimentAnalysis() {

    let text = document.getElementById("textToAnalyze").value;

    let url = "/emotionDetector?textToAnalyze=" + text;

    fetch(url)
    .then(response => response.text())
    .then(data => {
        document.getElementById("system_response").innerHTML = data;
    });
}
