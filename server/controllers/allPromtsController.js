const { allPromtsCollection } = require("../config/db.js");

const getAllpromts = async (req, res) => {

    try {

        const allPromts = await allPromtsCollection.find({}).toArray();
        res.status(200).json(allPromts);
    } catch (error) {
        console.error("Error getting prompts:", error);
        res.status(500).json({ message: "Failed to fetch prompts", error: error.message });
    }


}
module.exports = {
    getAllpromts
}