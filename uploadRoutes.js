const express = require("express");
const { uploadFiles, getUploadedFiles } = require("../controllers/uploadController");
const auth = require("../middleware/auth");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", auth, upload.array("files", 10), uploadFiles);

router.get("/", auth, getUploadedFiles);

module.exports = router;
