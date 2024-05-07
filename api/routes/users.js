import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  createUsers,
  removeCurrentBookingFromUser,
  getUserHistoryBokings,
  addHistoryBookingToUser,
  getUserCurrentBokings,
  addCurrentBookingToUser,
  getUserReviews,
  addReviewToUser
} from "../controllers/user.js";

import User from "../models/User.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
//const user = require("../models/User.js")
const router = express.Router();

router.post("/register", createUsers);


// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);


//ADD REVIEW
router.post("/:id/reviews", addReviewToUser)

// Define route to get all reviews of a specific user
router.get('/:id/reviews', getUserReviews);

router.post("/:id/currentbookings",addCurrentBookingToUser);
router.delete("/:id/currentbookings",removeCurrentBookingFromUser);
router.get('/:id/currentBookings', getUserCurrentBokings);

router.post("/:id/historybookings",addHistoryBookingToUser);
router.get("/:id/historybookings",getUserHistoryBokings);


export default router;
