import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  name: String,
  description: String,
  category: String,
  instructor: String,
  duration: String,
  level: String,
  isFree: {
    type: Boolean,
    default: true,
  },
  image: String,
  featured: {
    type: Boolean,
    default: false,
  },
  bookIds: [String],
  lessons: Number,
  rating: Number,
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
