const mongoose = require('mongoose');

const dbUri = process.env.MONGO_URI;
if (!dbUri) {
    console.error('Mongo uri not set in env file');
}

mongoose.connect(
    dbUri,
    {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    (err) => {
        if (err) {
            console.error('Failed to connect with mongoose', err);
        } else {
            console.log('Connected to db server');
        }
        // eslint-disable-next-line comma-dangle
    }
);
