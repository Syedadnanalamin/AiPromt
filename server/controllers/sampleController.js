// @desc    Get a greeting message
// @route   GET /api/hello
// @access  Public
const getHello = async (req, res) => {
  res.json("working api");
};

module.exports = {
  getHello,
};
