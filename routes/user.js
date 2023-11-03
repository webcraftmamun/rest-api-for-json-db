import express from "express";
import { getAllUser, createUser, singleUser, deleteUser, updateUser } from "../controllers/userController.js";

// create a router
const router = express.Router();

//user route
router.route('/').get(getAllUser).post(createUser);
router.route('/:id').get(singleUser).delete(deleteUser).put(updateUser).patch(updateUser)


// export router
export default router;