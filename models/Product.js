const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    halalCertified: {
        type: Boolean,
        required: true,
        default: false,
    },
    certificationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Certification',
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Product', productSchema);
