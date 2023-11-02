import express from "express";
import { getAllUser, createUser } from "../controllers/userController.js";

// create a router
const router = express.Router();

//user route
router.get('/', getAllUser)
router.post('/', createUser)


// export router
export default router;