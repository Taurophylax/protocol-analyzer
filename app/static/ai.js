const AIButton = document.getElementById("aicall");
const inputdata = document.getElementById("transcribed").value;

AIButton.addEventListener("click", function() {
    fetch('/aianalyze?input=' + inputdata)
        .then(response => response.json())
        .then(data => {
            const aiparse = JSON.stringify(data.result);
            document.getElementById("ai_log").innerHTML = aiparse
    })
    .catch(error => console.error(error));
});
