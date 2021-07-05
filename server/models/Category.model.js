const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const categorySchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        // eslint-disable-next-line prettier/prettier
    },
);

module.exports = mongoose.model('Category', categorySchema);
