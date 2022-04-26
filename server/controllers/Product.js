import ProductModel from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
  ProductModel.find({ unsold: true }, (error, result) => {
    if (error) {
      res.send(error);
    }
    res.send(result);
  });
};

export const getUProducts = async (req, res) => {
  ProductModel.find({ email: req.params.email }, (error, result) => {
    if (error) {
      res.send(error);
    }
    res.send(result);
  });
};

export const addProducts = async (req, res) => {
  const product = new ProductModel({
    name: req.params.name,
    email: req.params.email,
    price: req.params.price,
    unsold: true,
  });
  try {
    await product.save();
    res.send("data inserted");
  } catch (error) {
    console.log(error);
  }
};

export const markAsSold = async (req, res) => {
  const _id = req.params.id;

  ProductModel.findByIdAndUpdate(_id, { unsold: false }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.send( "marked as sold")
    }
  });
};
