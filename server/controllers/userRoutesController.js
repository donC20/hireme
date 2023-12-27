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
            res.status(200).json({msg:"Data inserted"});
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
    createUser
}