const express = require("express");
const bodyParser = require("body-parser");
const Modyfikowanie = require("./Modyfikowanie/Modyfikowanie");
const Dodawanie = require("./Dodawanie/Dodawanie");
const Usuwanie = require("./Usuwanie/Usuwanie");
const WyswietlanieWszystkich = require("./WyświetlanieWszystkich/WyświetlanieWszystkich");
const WyswietlanieKonkretnego = require("./WyświetlanieKonkretnego/WyświetlanieKonkretnego");
const Wyszukiwanie = require("./Wyszukiwanie/Wyszukiwanie");

const app = express();

const token = "alamakota";

app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

const customMiddleware = (req, res, next) => {
  const method = req.method;
  let auth = req.headers.authorization;

  if (["POST", "PUT", "DELETE"].includes(method)) {
    if (auth === token) {
      //pozwalamy, zeby rzadanie przeszlo dalej
      return next();
    }
    return res.status(403).send("Access denied");
  } else {
    next();
  }
};

//routing

app.use(customMiddleware);

app.post("/advert", Dodawanie);

app.delete("/advert/:id", Usuwanie);

app.put("/advert/:id", Modyfikowanie);

app.get("/adverts", WyswietlanieWszystkich);

app.get("/advert/:id", WyswietlanieKonkretnego);

app.get("/filter", Wyszukiwanie);

app.listen(3000, () => console.log("start server"));
