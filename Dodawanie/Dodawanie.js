const DataSource = require("../data-source");

const Dodawanie = async (req, res) => {
  let { text, author, price, category } = JSON.parse(req.body);

  const date = new Date();
  const cat = Array.isArray(category) ? category : [category];
  //zwraca true jesli obiekt jest tablica
  //tworzenie tablicy z ogloszeniami z danej kategorii

  if (!category || cat.length === 0) {
    res.status(400).send("Brak podanej kategorii");
    return;
  }

  const dict = {
    text,
    author,
    date,
    price,
    category: cat,
  };

  res.json(await DataSource.addAdvert(dict));
};

module.exports = Dodawanie;
