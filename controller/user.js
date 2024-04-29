import User from "../models/UserModel.js";

export const updateuser = async (req, res, next) =>{
    const {id} = req.params;
    const {UserName, Email, Password} = req.body;
    try {
        const updateduser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json(updateduser);
}catch(err){
    res.status(500).json('Internal Server Error');
    next(err);
}};

export const deleteuser = async (req, res, next) =>{
    const {id} = req.params;
    const {Username, Email, Password} = req.body;
    try {
        const deleteuser = await User.findByIdAndDelete(id);
        res.status(200).json(deleteuser);
}catch(err){
    res.status(500).json('Internal Server Error');
    next(err);
}};

export const getuser = async (req, res, next) =>{
    const {id} = req.params;
    const {username, email, password} = req.body;
    try {
        const getuser = await User.findById(id);
        res.status(200).json(getuser);
}catch(err){
    res.status(500).json('Internal Server Error');
    next(err);
}};

export const getalluser = async (req, res, next) =>{
    try {
        const getalluser = await User.find({}).select("-password");
        res.status(200).json(getalluser);
}catch(err){
    res.status(500).json('Internal Server Error');
    console.log(err);
}};