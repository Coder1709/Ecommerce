import { comparePassword, hashPassword } from "../helper/authHelper.js"
import userModel from "../models/userModel.js"
import JWT from "jsonwebtoken"

export const registerController = async (req, res) => {

    try {
        const { name, email, password, phone, address } = req.body
        //validation 
        if (!name) {
            return res.send({ error: " Name is required" })
        }
        if (!email) {
            return res.send({ error: " Email is required" })
        }
        if (!password) {
            return res.send({ error: " password is required" })
        }
        if (!phone) {
            return res.send({ error: " Phone is required" })
        }
        if (!address) {
            return res.send({ error: " address is required" })
        }

        //check user

        const existingUser = await userModel.findOne({ email })

        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already Register Please Login',
                user,
            })
        }

        //register User

        const hashedPassword = await hashPassword(password)

        //save

        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword
        }).save();


        res.status(201).send({
            success: true,
            message: " User Registered Successfully",
            user,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: " Error in Registration",
            error,
        });


    }

};


//POST LOGIN

export const loginController = async (req, res) => {


    try {
        const { email, password } = req.body;

        //validation 

        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: " Invalid email and password",

            })
        }

        //check user ( ki hai kinhi)

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registerd'

            });
        }



        //Matching id and pass

        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password"
            });

        }
        //creating tokens

        const token = await JWT.sign({ id: user._id }, process.env.JWT_SECRET, {

            expiresIn: "7d",
        });
        res.status(200).send ( {
            success : true,
            message : 'login successfully',
            user : { 
                name : user.name,
                email : user.email,
                address : user.email,
                phone: user.email

            },
            token,

        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error
        })

    }

};

//test Controller

export const testController = (req , res) => {
    console.log("proctected Routes");

}




