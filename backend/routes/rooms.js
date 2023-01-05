import express from "express"; 
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom, updateRoomAvailability } from "../controllers/roomControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

// create
router.post('/:hotelid', verifyAdmin, createRoom)

// Read
router.get('/', getAllRooms)

router.get('/:id/:hotelid', getRoom)

// Upadte
router.patch('/:id/:hotelid', verifyAdmin, updateRoom);
router.patch('/availability/:id', updateRoomAvailability)

// Delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)


export default router;