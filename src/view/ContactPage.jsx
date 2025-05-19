import React from 'react'
import Footer from '../components/common/Footer'
import ContactHeader from '../components/ContactHeader'
import ContactLinks from '../components/ContactLinks'
import { Outlet } from 'react-router-dom'

const ContactPage = () => {
  return (
    <>
      <ContactHeader />
      <ContactLinks />
      <Outlet/>
      <Footer />
    </>
  )
}

export default ContactPage