const AIButton = document.getElementById("aicall");

AIButton.addEventListener("click", function() {
    document.getElementById("ai_log").innerHTML = "Please wait...";

    const inputdata = document.getElementById("transcribed").value;  // pull the text from the transcription box

    const form = document.getElementById("variables"); // pull the variables from the form 
    const inputs = form.querySelectorAll("input");
    let vars = Array.from(inputs).map(input => input.name).join(", ");
    

    fetch('/aianalyze?vars=' + encodeURIComponent(vars) + '&input=' + encodeURIComponent(inputdata))  // pass everything to our aianalyze route for the API call
        .then(response => response.json())
        .then(data => {
            const aiparse = JSON.stringify(data.result);
            document.getElementById("ai_log").innerHTML = aiparse  // print response
    })
    .catch(error => console.error(error));
});
