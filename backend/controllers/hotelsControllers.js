import Hotel from "../models/hotels.js";
import Room from "../models/rooms.js"



// ** Create
export const createNewHotel = async (req, res, next) => {
    try {
        const newHotel = await Hotel.create(req.body);

        res.status(200).json({ newHotel })

    }
    catch (err) {
        next(err)

    }
}



// ** Read
export const getAllHotels = async (req, res, next) => {
    try {
      const { featured, limit, min, max } = req.query;
      let filter = {};
      if (featured) {
          filter.featured = featured;
      }
      if (min || min === 0) {
          filter.cheapestPrice = {$gt: min};
      }
      if (max || max === 0) {
          if (!filter.cheapestPrice) {
              filter.cheapestPrice = {};
          }
          filter.cheapestPrice.$lt = max;
      }
      let hotels = await Hotel.find(filter);
  
      if (limit) {
        hotels = hotels.slice(0, limit);
      }
  
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
  };



// export const getAllHotels = async (req, res, next) => {

//     const { min, max, ...other } = req.query;

//     try {
//         const hotels = await Hotel.find({
//             ...other,
//             cheapestPrice: { $gt: min | 1, $lt: max || 999 }
//         }).limit(req.query.limit)

//         res.status(200).json(hotels)

//     }
//     catch (err) {
//         next(err)
//     }
// }



export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)

        res.status(200).json(hotel)

    }
    catch (err) {
        next(err)

    }
}



// ** Update
export const updateHotels = async (req, res, next) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true
            })

        res.status(200).json(hotel)

    }
    catch (err) {
        next(err)
    }
}



// ** DELETE
export const deleteHotels = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)

        res.status(204).json("Hotel has been deleted!")

    }
    catch (err) {
        next(err)
    }
}



export const countByCity = async (req, res, next) => {

    const cities = req.query.cities.split(",")

    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({ city: city })
        }))

        res.status(200).json(list)

    }
    catch (err) {
        next(err)
    }
}


/* ! ---> methode 01

export const countByType = async (req, res, next) => {

    const type = req.query.type.split(",")

    try {
        const lists = await Promise.all(type.map(type =>{
            return Hotel.countDocuments({type: type})
        }))

        res.status(200).json(lists)

    }
    catch (err) {
        next(err)
    }
}

*/


// ! ---> methode 02

export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "hotel" });
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
        const resortCount = await Hotel.countDocuments({ type: "resort" });
        const villaCount = await Hotel.countDocuments({ type: "villa" });
        const cabinCount = await Hotel.countDocuments({ type: "cabin" });


        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "apartment", count: apartmentCount },
            { type: "resort", count: resortCount },
            { type: "villa", count: villaCount },
            { type: "cabin", count: cabinCount }
        ])

    }
    catch (err) {
        next(err)
    }
}



export const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)

        const list = await Promise.all(hotel.rooms.map(room => {
            return Room.findById(room)
        }))

        res.status(200).json(list)

    }
    catch (err) {
        next(err)
    }
}