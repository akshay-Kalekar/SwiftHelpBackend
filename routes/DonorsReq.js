const express = require('express');
const router = express.Router();
const DonorReqModel = require('../models/DonorReqModel.js');

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const newRequest = {
            requester: req.body.FullName,
            email: req.body.Email,
            contactNo: req.body.ContactNo,
            bloodGrp: req.body.BloodGrp,
            medicalHistory: req.body.MedicalHistory,
            city: req.body.City,
            state: req.body.State,
            zipCode: req.body.ZipCode,
        };
        const users = await DonorReqModel.create(newRequest);
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.get('/search', async (req, res) => {
    try {
        const bloodGrp = req.query.bloodGrp; // Extracting bloodGrp from query parameters
        const users = await DonorReqModel.find({ bloodGrp: bloodGrp }); // Querying the database for users with the specified blood group
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
