const Product = require('../models/Product');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const { name, description, halalCertified, certificationId } = req.body;

        const product = await Product.create({
            name,
            description,
            halalCertified,
            certificationId,
            createdBy: req.user.id,
        });

        res.status(201).json({ success: true, product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all halal-certified products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({ halalCertified: true }).populate('certificationId');
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
