const { ObjectId } = require("mongodb");
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


const getSinglePromt = async (req, res) => {
    const id = req.params.id;


    try {
        const singlePromt = await allPromtsCollection.findOne({ _id: new ObjectId(id) });
        res.status(200).json(singlePromt);
    } catch (error) {
        console.error("Error getting prompt:", error);
        res.status(500).json({ message: "Failed to fetch prompt", error: error.message });
    }
}


module.exports = {
    getAllpromts,
    getSinglePromt
}