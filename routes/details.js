const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const details = require("../model/detail.mongoose");
require("dotenv").config();
const URL = process.env.DB;

mongoose.connect(URL);

router.post("/create-students", async (req, res) => {
  try {
    const students = new details({
      name: req.body.name,
      age: req.body.age,
      mobile: req.body.mobile,
      fathers: req.body.fathers,
      mothers: req.body.mothers,
      class: req.body.class,
      image: req.body.image,
    });

    const savedetails = await students.save();
    await res.status(200).send(savedetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});

router.get("/get-all-students", async (req, res) => {
  try {
    const alldetails = await details.find();
    res.status(200).send(alldetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});

router.get("/get-one-students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const onedetails = await details.findById(id);
    res.status(200).send(onedetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});

router.put("/edit-students", async (req, res) => {
  try {
    const { id } = req.params;
    const edit = {
      name: req.body.name,
      age: req.body.age,
      mobile: req.body.mobile,
      fathers: req.body.fathers,
      mothers: req.body.mothers,
      class: req.body.class,
      image: req.body.image,
    };

    const editdetails = await details.findByIdAndUpdate(edit, id);
    res.status(200).send(editdetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});

router.delete("/delete-students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedetails = await details.findByIdAndDelete(id);
    res.status(200).send(deletedetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});

module.exports = router;
