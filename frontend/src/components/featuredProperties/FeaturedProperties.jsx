import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featuredProperties.css'

const FeaturedProperties = () => {

    const { data, loading, error } = useFetch("/hotels/guest?featured=true&limit=3")
    console.log(data);

    return (
        <div className="FeaturedProperties">
            {loading ? (
                "Loading Please wait"
            ) : (
                <>
                    {data.map((item) => (
                        <div className="FeaturedPropertiesItem" key={item._id}>
                            <img src={item.photos[0]} alt='image1' className='FeaturedPropertiesImg' />
                            <span className="FeaturedPropertiesName">{item.name}</span>
                            <span className="FeaturedPropertiesCity">{item.city}</span>
                            <span className="FeaturedPropertiesPrice">Starting from ${item.cheapestPrice}</span>
                            {item.rating && <div className="FeaturedPropertiesRating">
                                <button>{item.rating}</button>
                                <span>Excellent</span>
                            </div>}
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default FeaturedProperties
