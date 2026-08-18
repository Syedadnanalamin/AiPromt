// @desc    Get a greeting message
// @route   GET /api/hello
// @access  Public
export const getHello = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Hello from the Express server with MongoDB connection configured!',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};
