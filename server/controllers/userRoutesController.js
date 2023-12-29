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
                req.session.USER_DATA = result[0];
    
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

// sesssion destroy / logout
const logout = (req, res) => {
    req.session.destroy((err) => {
        try {
            if (err) {
                console.error('Error destroying session:', err);
                res.status(200).json({ output: false })
            } else {
                res.clearCookie('connect.sid');
                res.status(200).json({ output: true })
            }
        } catch (error) {
            console.log(error);
        }
    });
}



module.exports = {
    createUser, userAuthenticate, logout
}