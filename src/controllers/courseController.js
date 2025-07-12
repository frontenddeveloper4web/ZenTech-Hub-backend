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
    return res.status(201).json({message: "Course successfully created", success: true})

  } catch (error) {}
};
