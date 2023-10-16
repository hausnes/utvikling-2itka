// Lag en Express-app som sørver Valgomat-prosjektet ditt. Du velger om du vil bruke ruter eller static-middleware for å vise filene (eller en kombinasjon, f.esk rute til html-en og bilder og script i static-mappen).

const express = require("express");
const path = require("path");

const app = express();

const staticMappe = path.join(__dirname, "public");
app.use(express.static(staticMappe));

app.get("/", (request, response) => {
    response.sendFile(staticMappe + "/index.html")
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})