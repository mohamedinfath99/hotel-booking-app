import bcrypt from "bcrypt"; // ! ---> use for hide password
import User from "../models/users.js"
import { createError } from "../utils/error.js";
import jwt from 'jsonwebtoken';


// ** register Function
export const Register = async (req, res, next) => {
    try {

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hash
        });

        await newUser.save()
        res.status(200).send("user has been created")

    }
    catch (err) {
        next(err)
    }
}



// ** Login Function
export const Login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) return next(createError(404, "Username is not found!"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "Wrong username or password!"))


        
        const { password, isAdmin, ...otherDetails } = user._doc

        // JWT with Cookie
        const token = jwt.sign({ 
            id: user._id, 
            isAdmin: user.isAdmin 
        }, process.env.JWT);

        res.cookie("access_Token", token, { httpOnly: true }).status(200).json({ details:{...otherDetails}, isAdmin })

    }
    catch (err) {
        next(err)
    }

}