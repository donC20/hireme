const userSchema = require('../models/normalUserModel')
const { authCollection } = require('../connectCollection');

// create user / user registration
const createUser = async (req, res) => {
    const { apikey } = req.params;
    const apikeyFrmCollection = await authCollection.findOne({ apiKey: apikey });
    if (apikeyFrmCollection) {
        try {
            const userData = req.body;
            await userSchema.create(userData);
            res.status(200).json({ msg: "Data inserted" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Internal Server Error ${error}` });
        }
    }
    else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}

// user login authenticate
const userAuthenticate = async (req, res) => {
    const { apikey } = req.params;
    const apikeyFrmCollection = await authCollection.findOne({ apiKey: apikey });
    if (apikeyFrmCollection) {
        try {
            const { email, password } = req.body;
            console.log(req.session);
            const result = await userSchema.find({ "email": email, "password": password });
            if (result.length !== 0) {
                req.session.USER_ID = result[0]._id;
                console.log(req.session.USER_ID);
                res.status(200).json({ msg: "valid" });
            } else {
                res.status(200).json({ msg: "invalid" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Internal Server Error ${error}` });
        }
    }
    else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}

module.exports = {
    createUser, userAuthenticate
}