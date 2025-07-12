const courseModel = require("../models/courseModel");

const createCourse = async (req, res) => {
  const {
    title,
    content,
    autor,
    rating,
    theoryPercent,
    modules,
    level,
    experience,
    normalPrice,
    practicalPercent,
  } = req.body;

  try {
    const url = req.file.path;
    const altText = req.file.originalname;
    const image = { url, altText };
    const courses = new courseModel({
      title,
      image,
      content,
      autor,
      rating,
      theoryPercent,
      modules,
      level,
      experience,
      practicalPercent,
      normalPrice,
    });
    await courses.save();
    return res.status(201).json({message: "Course successfully created", success: true, courses})

  } catch (error) {
    return res.status(500).json({message: "Internal server error", error: error, success: false})
  }
};
