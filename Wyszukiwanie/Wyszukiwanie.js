const DataSource = require("../data-source");

const Wyszukiwanie = async (req, res) => {
  const { text, priceMin, priceMax, category, dateMin, dateMax } = req.query;

  try {
    res.json(
      await DataSource.filter(
        text,
        priceMin,
        priceMax,
        category,
        dateMin,
        dateMax
      )
    );
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    //błąd serwera
  }
};

module.exports = Wyszukiwanie;
