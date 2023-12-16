const jwt = require('jsonwebtoken');
const User = require('../userModel');

const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'secret key');
    const user = await User.findOne({ _id})