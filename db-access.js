const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:alamakota123@cluster0-w76ge.mongodb.net/adverts?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const AdvertDTO = mongoose.model("adverts", {
  id: String,
  text: String,
  author: String,
  date: Date,
  price: Number,
  category: Array,
});

module.exports = { AdvertDTO, mongoose };
