import express from "express"; 
import { getAllUsers, getUser, updateUser, deleteUser } from "../controllers/userControllers.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

/*

router.get('/checkAuthentication', verifyToken, (req, res, next) => {
    res.send(`Hello ${req.body.username}. Your are logged in`)
})

router.get('/checkUser/:id', verifyUser, (req, res, next) => {
    res.send(`Hello ${req.body.username}. Your are logged in. you can delete your account`)
})


router.get('/checkAdmin/:id', verifyAdmin, (req, res, next) => {
    res.send(`Hello ${req.body.username}. Your are logged in. you can delete all account`)
})

*/



// Read
router.get('/', verifyAdmin, getAllUsers)

router.get('/:id', getUser)

// Upadte
router.patch('/:id', verifyAdmin, updateUser)

// Delete
router.delete('/:id', verifyAdmin, deleteUser)


export default router;