import express from "express";
import { } from "../controllers/teacherController.js";

// create a router
const router = express.Router();

//user route
router.route('/').get();


// export router
export default router;