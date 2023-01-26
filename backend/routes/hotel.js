import express from "express"; 
import { createNewHotel, getHotelRooms, getAllHotels, getHotel, updateHotels, deleteHotels, countByCity, getAllHotelss ,countByType } from '../controllers/hotelsControllers.js'
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();



router.post('/', verifyAdmin, createNewHotel)
router.patch('/:id', verifyAdmin, updateHotels)
router.delete('/:id', verifyAdmin, deleteHotels)
router.get('/find/:id', getHotel)

router.get('/', getAllHotels)
router.get('/guest', getAllHotelss)

router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)


export default router;