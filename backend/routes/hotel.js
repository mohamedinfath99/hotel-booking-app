import express from "express"; 
import { createNewHotel, getHotelRooms, getAllHotels, getHotel, updateHotels, deleteHotels, countByCity, countByType } from '../controllers/hotelsControllers.js'
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


// create
router.post('/', verifyAdmin, createNewHotel)

// Read
router.get('/', getAllHotels)

router.get('/find/:id', getHotel)

// Upadte
router.patch('/:id', verifyAdmin, updateHotels)

// Delete
router.delete('/:id', verifyAdmin, deleteHotels)


// Count By Hotel
router.get("/countByCity", countByCity)

// Count By Type
router.get("/countByType", countByType)

router.get("/room/:id", getHotelRooms)


export default router;