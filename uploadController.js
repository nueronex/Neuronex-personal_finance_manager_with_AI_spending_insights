const path = require("path");
const fs = require("fs");

exports.uploadFiles = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const files = req.files.map(file => ({
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      path: file.path,
    }));

    res.status(200).json({
      message: "Files uploaded successfully",
      files,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUploadedFiles = async (req, res) => {
  try {
    const uploadDir = path.join(__dirname, "..", "uploads");
    if (!fs.existsSync(uploadDir)) {
      return res.json([]);
    }

    const files = fs.readdirSync(uploadDir).map(filename => {
      const filePath = path.join(uploadDir, filename);
      const stats = fs.statSync(filePath);

      return {
        filename,
        size: stats.size,
        uploadedAt: stats.birthtime,
      };
    });

    res.json(files);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
