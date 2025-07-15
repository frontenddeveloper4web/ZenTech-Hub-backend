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


const getCourses =  async (_req, res) => {
    try {
      const courses = courseModel.find({}).sort({timestamps});
      if(!courses){
        return res.status(401).json({message: "Courses not found", success: false});
      };
      return res.status(200).json({message: "Courses successfully fetched", success: true, courses});
    } catch (error) {
      console.log("There's an error here, please try again later")
        return res.status(500).json({message: "Internal server error", error: error, success: false});
    }
};
module.exports = {createCourse, getCourses};
