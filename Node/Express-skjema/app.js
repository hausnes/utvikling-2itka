//Vi importerer Express og path. Husk at vi må ha installert Express i prosjektet vårt ved hjelp av npm install express.

const express = require("express");
const path = require("path");

//Vi lager en instans av Express og kaller den app.
const app = express();

//Vi setter opp en mappe som inneholder statiske filer som skal serveres til klienten.
const staticMappe = path.join(__dirname, "public");
app.use(express.static(staticMappe));

//Vi setter opp en parser for å kunne lese innholdet i body i en POST-request. Denne skal vi bruke dersom vi bruker et HTML-form med metoden POST.
app.use(express.urlencoded({ extended: false }));


//Vi setter opp en route for GET-requester til rotadressen. Her sender vi tilbake index.html.
app.get("/", (request, response) => {
    response.sendFile(staticMappe + "/index.html")
});


//Vi setter opp en route for GET-requester til /skjema. Her sender vi tilbake skjema.html. Konsoll-logen er bare med for å vise hvordan vi kan hente ut data fra query-stringen i Node. Merk at adressen til skjemaet er /skjema, ikke /skjema.html eller /velkommen.html.
app.get("/skjema", (request, response) => {
    let query = request.query;
    console.log("Fornavn: " + query.fornavn);
    console.log("Etternavn: " + query.etternavn);
    console.log("Epost: " + query.epost);

    response.sendFile(staticMappe + "/velkommen.html");
});


//Vi bruker en POST-route for å kunne lese innholdet i body i en POST-request. Denne skal vi bruke dersom vi bruker et HTML-form med metoden POST. Her sender vi tilbake skjema.html. Konsoll-logen er bare med for å vise hvordan vi kan hente ut data fra body i Node. Redirect("back") sender oss et hakk tilbake i historien. I dette tilfellet fra submitForm til /, og skjemaet blir dermed tømt.
app.post("/submitForm", (request, response) => {
    let body = request.body;
    console.log(body);

    response.redirect("back")
});

// Her lar vi appen vår lytte på port 3000. Dersom vi kjører appen lokalt, kan vi nå åpne den i nettleseren på http://localhost:3000.
app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
})