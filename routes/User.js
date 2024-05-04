const express = require('express');
const router = express.Router();
const userModel = require('../models/UserModel');

router.get('/', async (req, res) => {
  try {
    const getAllUsers = await userModel.find();
    res.status(200).json(getAllUsers);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    console.log(JSON.stringify(req.body.formData));
    const newUser = new userModel({
      UserID: req.body.formData.UserID,
      FullName: req.body.formData.FullName,
      Email: req.body.formData.Email,
      ContactNo: req.body.formData.ContactNo,
      Job: req.body.formData.Job,
      Age: req.body.formData.Age,
      DOB: req.body.formData.DOB,
      BloodGrp: req.body.formData.BloodGrp,
      Address: req.body.formData.Address,
      City: req.body.formData.City,
      State: req.body.formData.State,
      ZipCode: req.body.formData.ZipCode,
      DonationHistory: req.body.formData.DonationHistory,
      MedicalHistory: req.body.formData.MedicalHistory,
      Notify: req.body.formData.Notify,
      SOSNotify: req.body.formData.SOSNotify,
    });
    const savedUser = await newUser.save();
    res.status(201).json({ message: 'Added entry successfully', user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    console.log(req.params);
    const user = await userModel.find({ UserID : req.params.id });
    console.log("User -- ",user);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:userID', async (req, res) => {
  try {
    console.log(req.params);
    const updatedUser = await userModel.findOneAndUpdate({ UserID: req.params.userID }, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
