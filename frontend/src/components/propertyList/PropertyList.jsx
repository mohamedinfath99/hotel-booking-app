import React from 'react'
import useFetch from '../../hooks/useFetch';
import './propertyList.css'


const PropertyList = () => {
    const { data, loading, error } = useFetch("/hotels/countByType")
    // console.log(data);

    const images = [
        "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
        "https://teja12.kuikr.com/is/a/c/880x425/public/images/apartments/original_img/k9yqlp.gif",
        "https://cf.bstatic.com/xdata/images/xphoto/max1440/48360698.jpg?k=1949036cc17d7e11e914390f1d3958823e8620aa6ed69e2b3f217794b603dbc5&o=",
        "https://media-cdn.tripadvisor.com/media/vr-splice-j/09/1f/7e/d1.jpg",
        "https://cabinsathickoryridge.com/media/The-Lodge-Spring.jpg"
    ];

    return (
        <div className="pList">

            {loading ? (
                "Loading Please Wait"
            ) : (
                <>
                    {data &&
                        images.map((img, index) => (
                            <div className="pListItem" key={index}>
                                <img src={img} alt="image1" className="pListImg" />
                                <div className="pListTitles">
                                    <h1>{data[index]?.type}</h1>
                                    <h2>{data[index]?.count} {data[index]?.type}</h2>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    )
}

export default PropertyList
