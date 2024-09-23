import React from 'react'
import Profile from '../../components/UserProfile/Profile'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const UserProfile = () => {
  return (
    <div>
       <Navbar/> 
        <Profile/>
        <Footer/>
    </div>
  )
}

export default UserProfile