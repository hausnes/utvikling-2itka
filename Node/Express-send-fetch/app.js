const express = require("express");
const { request } = require("http");
const path = require("path");

const app = express();

const staticMappe = path.join(__dirname, "public");
app.use(express.static(staticMappe));
app.use(express.urlencoded({ extended: false }));

// Her skal vi lagre data appen samler inn. Dette blir bare lagret som en variabel, og nullstilles derfor hver gang appen startes på nytt.
const data = [];

app.post("/collectData", (request, response) => {
    // Vi tar i mot dataene fra formen
    let body = request.body;

    // Formen pushes til data-arrayet
    data.push(body);

    // Vi dobbeltsjekker hva vi har fått
    console.log(data)

    // Vi sender brukeren tilbake til skjemaet
    response.redirect("back")
});


// Vi setter opp en route for GET-requester til /getData. Her sender vi tilbake data-arrayet som JSON.
app.get("/getData", (request, response) => {
    response.send(data);
});

// Her setter vi opp appen og lar den lytte på port 3000. 
app.listen(3000, () => { 
    console.log("Server is running on port http://localhost:3000");
})
