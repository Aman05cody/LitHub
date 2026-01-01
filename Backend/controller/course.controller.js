import Course from "../model/course.model.js";

export const getCourse = async (req, res) => {
  try {
    const course = await Course.find();
    res.status(200).json(course);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};

export const getFeaturedCourses = async (req, res) => {
  try {
    const course = await Course.find({ featured: true });
    res.status(200).json(course);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};
