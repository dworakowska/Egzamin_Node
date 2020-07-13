const DBAccess = require("./db-access");

const addAdvert = async (advert) => {
  const advertDTO = new DBAccess.AdvertDTO(advert);
  return await advertDTO.save();
};

const removeAdvert = async (advertId) => {
  return await DBAccess.AdvertDTO.findById(advertId).remove();
};

const getAdverts = async () => {
  return await DBAccess.AdvertDTO.find();
};

const getAdvertById = async (advertId) => {
  return await DBAccess.AdvertDTO.findById(advertId);
};

const filter = async (text, priceMin, priceMax, category, dateMin, dateMax) => {
  let dict = {};
  if (text) {
    dict["text"] = new RegExp(`${text}`, "i");
  }

  if (priceMin || priceMax) {
    let params = {};
    if (priceMin) {
      params["$gte"] = priceMin;
    }
    if (priceMax) {
      params["$lte"] = priceMax;
    }
    dict["price"] = params;
  }

  if (category) {
    dict["category"] = {
      $in: `${category}`,
    };
  }

  if (dateMin || dateMax) {
    let params = {};
    if (dateMin) {
      params["$gte"] = dateMin;
    }
    if (dateMax) {
      params["$lte"] = dateMax;
    }
    dict["date"] = params;
  }

  return await DBAccess.AdvertDTO.find(dict);
};

module.exports = {
  addAdvert,
  removeAdvert,
  getAdverts,
  getAdvertById,
  filter,
};
