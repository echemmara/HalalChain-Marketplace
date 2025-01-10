const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.isAuthenticated = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Invalid token.' });
    }
};

exports.isVendor = (req, res, next) => {
    if (req.user.role !== 'vendor') {
        return res.status(403).json({ success: false, message: 'Access restricted to vendors only.' });
    }
    next();
};
