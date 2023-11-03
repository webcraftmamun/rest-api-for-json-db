import express from "express";
import { createTeacher, getTeachers } from "../controllers/teacherController.js";

// create a router
const router = express.Router();

//user route
router.route('/').get(getTeachers).post(createTeacher);


// export router
export default router;