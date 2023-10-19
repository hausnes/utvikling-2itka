const express = require("express");

const path = require("path");

const app = express();



const staticMappe = path.join(__dirname, "public");
app.use(express.static(staticMappe));
app.use(express.urlencoded({ extended: false }));

app.get("/", (request, response) => {
    response.sendFile(staticMappe + "/index.html")
});

app.get("/skjema", (request, response) => {
    let query = request.query;
    console.log("Fornavn: " + query.fornavn);
    console.log("Etternavn: " + query.etternavn);
    console.log("Epost: " + query.epost);

    response.sendFile(staticMappe + "/velkommen.html");
});

app.post("/submitForm", (request, response) => {
    let body = request.body;
    console.log(body);

    response.redirect("back")
});


app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
})