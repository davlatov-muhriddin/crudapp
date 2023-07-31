const CardContent = require("../models/CardContentModel");

// method: get
// descr: get all content

const getAllCardContent = async (req, res) => {
  try {
    const cardContents = await CardContent.find();
    res.status(200).json({
      message: "Success",
      cardContents: await cardContents.reverse(),
    });
  } catch (error) {
    console.log(error);
  }
};

// method: post
// descr: add card content

const addCardContent = async (req, res) => {
  try {
    const { imageUrl, title, description } = req.body;

    const newCardContent = await CardContent.create({
      imageUrl,
      title,
      description,
    });

    res.status(201).json({
      message: "Success",
      newCardContent,
    });
  } catch (error) {
    console.log(error);
  }
};

// method: put
// descr: change card content width id
const changeCardContent = async (req, res) => {
  const { imageUrl, title, description } = req.body;
  try {
    const changeCardContent = await CardContent.findByIdAndUpdate(
      req.params.id,
      {
        imageUrl,
        title,
        description,
      }
    );

    res.status(200).json({
      message: "Success",
      changeCardContent,
    });
  } catch (error) {
    console.log(error);
  }
};

// methos: delete
// descr: remove card content

const removeCardContent = async (req, res) => {
  try {
    await CardContent.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Deleted",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCardContent,
  addCardContent,
  changeCardContent,
  removeCardContent,
};
