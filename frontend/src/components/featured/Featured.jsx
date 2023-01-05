import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featured.css'


const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=colombo,galle,kandy")
    // console.log(data);

    return (
        <div className="featured">
            { loading ? (
                "Loading Please Wait"
            ) : (
                <>
                    <div className="featuredItem">
                        <img src='http://island.lk/wp-content/uploads/2022/09/Lotus_Tower.png' alt='Image1' className='featuredImg' />
                        <div className='featuredTitles'>
                            <h1>Colombo</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src='https://thirdeyetraveller.com/wp-content/uploads/COCONUTHILL-1-of-12-scaled-689x517.jpg' alt='Image6' className='featuredImg' />
                        <div className='featuredTitles'>
                            <h1>Galle</h1>
                            <h2>{data[1]} properties</h2>
                        </div>

                    </div>

                    <div className="featuredItem">
                        <img src='https://exploresrilanka.lk/wp-content/uploads/2019/12/1-768x576-1.webp' alt='Image3' className='featuredImg' />
                        <div className='featuredTitles'>
                            <h1>Kandy</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                </>)
            }
        </div>
    )
}

export default Featured

