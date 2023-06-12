const Post = require("../models/postmodel");
exports.createpost = async (req, res) => {
  try {
    const post = new Post({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    await post.save();
    res.status(200).json({
      message: "success",
    });
  } catch (err) {
    res.json({
      message: "error",
    });
    console.log(err);
  }
};

exports.download = async (req, res) => {
  try {
    const filePath = __dirname + "/cv/resume.docx";
    res.download(filePath);
  } catch (err) {
    console.log(err);
  }
};
