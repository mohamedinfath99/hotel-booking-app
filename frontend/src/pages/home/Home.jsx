
import React from 'react'
import './home.css'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailSection from '../../components/mailComponent/MailSection'
import Footer from '../../components/footer/Footer'

function home() {
  return (
    <div>
      <NavBar />
      <Header />

      <div className="homeContainer">
        <Featured />
        
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList />

        <h1 className='homeTitle'>Homes guests love</h1>
        <FeaturedProperties />
        <MailSection />
        <Footer />
      </div>
    </div>
  )
}

export default home
