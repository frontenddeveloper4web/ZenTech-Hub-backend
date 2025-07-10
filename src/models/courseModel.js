const { default: mongoose } = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    image: {
      url: { type: String, trim: true, require: true },
      altText: { type: String, trim: true, require: true },
    },
    title: { type: String, trim: true, require: true },
    content: { type: String, trim: true, require: true },
    autor: { type: String, trim: true, require: true },
    rating: { type: number, trim: true, require: true, default: 0 },
    theoryPercent: { type: number, trim: true, require: true, default: 0 },
    practicalPercent: { type: number, trim: true, require: true, default: 0 },
    modules: { type: number, trim: true, require: true, default: 0 },
    level: { type: String, trim: true, require: true },
    experience: { type: String, trim: true, require: true },
    normalPrice: { type: String, trim: true, require: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("course_tb", courseSchema);
