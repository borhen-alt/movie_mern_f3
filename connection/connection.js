const mongoose = require("mongoose");
const connection = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://wassimBouchlema:wass123456@cluster0.8zhmc.mongodb.net/movieApp?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );

        console.log("Connected");
    } catch (err) {
        console.log(err);
    }
};
module.exports = connection;
