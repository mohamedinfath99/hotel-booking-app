
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useState } from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import './hotel.css'
import MailSection from '../../components/mailComponent/MailSection'
import Footer from '../../components/footer/Footer'
import useFetch from '../../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'
import Reserve from '../../components/reserve/Reserve'

function Hotel() {

  const location = useLocation()
  const id = location.pathname.split("/")[2]

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)


  const { data, loading, error } = useFetch(`/hotels/find/${id}`)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const { dates, options } = useContext(SearchContext)
  // console.log(dates);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays
  }


  const days = (dayDifference(dates[0].endDate, dates[0].startDate
  ));

  const handleOpen = (index) => {
    setSlideNumber(index)
    setOpen(true)
  }


  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    }
    else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }


  const handleClick = () => {
    if (user) {
      setOpenModal(true)

    } else {
      navigate('/login')
    }
  }


  return (
    <div>
      <NavBar />
      <Header type="list" />

      {loading ? (
        "Loading"
      ) : (
        <div className="hotelContainer">

          {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
            <div className="slideWrapper">
              <img src={data.photos[slideNumber]} className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
          </div>}

          <div className="hotelWarapper">
            <button className='bookNow'>Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>

            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>

            <span className='hotelDistance'>Excellent Location - {data.distance}m from center</span>
            <span className='hotelPrice'>Book a stay ${data.cheapestPrice} at this property and get a free airpot taxi</span>

            <div className="hotelImages">
              {
                data.photos?.slice(1).map((data, index) => (
                  <div className="hotelImgWarraper" key={index}>
                    <img src={data} className="hotelImg" onClick={() => handleOpen(index)} />
                  </div>
                ))
              }
            </div>

            <div className="hotelDetails">

              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className='hotelDesc'>{data.desc}</p>
              </div>

              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>Located in the real heart of karakow, this propthy has an excellent location score of 9.8</span>
                <h2><b>${days * data.cheapestPrice * options.room}</b>({days})</h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailSection />
          <Footer />
        </div>)}
        {openModal &&  <Reserve  setOpen={setOpenModal} hotelId={id}/>}
    </div>
  )
}

export default Hotel
