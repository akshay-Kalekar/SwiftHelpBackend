const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  UserID: {
      type: String,
      required: true,
      primaryKey: true 
      
  },
  FullName: {
      type: String,
      default: ''
  },
  Email: {
      type: String,
      default: ''
  },
  ContactNo: {
      type: String,
      default: ''
  },
  Job: {
      type: String,
      default: ''
  },
  Age: {
      type: Number,
      default: ''
  },
  DOB: {
      type: Date,
      default: ''
  },
  BloodGrp: {
      type: String,
      default: ''
  },
  Address: {
      type: String,
      default: ''
  },
  City: {
      type: String,
      default: ''
  },
  State: {
      type: String,
      default: ''
  },
  ZipCode: {
      type: String,
      default: ''
  },
  DonationHistory: {
      type: String,
      default: ''
  },
  MedicalHistory: {
      type: String,
      default: ''
  },
  Notify: {
      type: Boolean,
      default: false
  },
  SOSNotify: {
      type: Boolean,
      default: false
  }
});


const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
