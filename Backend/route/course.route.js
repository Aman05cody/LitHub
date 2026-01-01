import express from "express";
import { getCourse, getFeaturedCourses } from "../controller/course.controller.js";

const router = express.Router();

router.get("/", getCourse);
router.get("/featured", getFeaturedCourses);

export default router;
