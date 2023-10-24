import express from "express";
import {registerController , loginController , testController} from "../controllers/authController.js";
import { isAdmin, requireSingIn } from "../middlewares/authMiddleware.js";
//router object

const router = express.Router()


//routing


//register and method is port

router.post ('/register' , registerController)


//LOGIN || POST

router.post('/login' , loginController)

//test routes

router.get( "/test" ,requireSingIn, isAdmin , testController)

export default router;

