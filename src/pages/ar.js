import React from 'react'
import NavBar from '../components/ar/navBar'
import Main from '../components/ar/main'
import About from '../components/ar/about'
import WhyUs from '../components/ar/why'
import Products from '../components/ar/products'
import Client from '../components/ar/client'
import Portfolio from '../components/ar/Portfolio'
import Acc from "../components/ar/acc";
import Contact from '../components/ar/contact'
import Footer from '../components/ar/footer'
import { Helmet } from "react-helmet-async";
const ar = () => {
  return (
    <>
      <Helmet>
        <title>سوليد للتوكيلات التجارية</title>
        <meta name="description" content="" />
        <style type="text/css">{`
        body {
              direction: rtl;
        }
    `}</style>
      </Helmet>
      <div className="bottom_icons">
        <a href="https://wa.me/+201221932532">
          <img src="images/whatsapp.png" alt="#" />
        </a>
        <a href="#home">
          <img src="images/up-arrow.png" alt="#" className="up" />
        </a>
      </div>
      <NavBar />
      <Main />
      <About />
      <WhyUs />
      <Products />
      <Acc />
      <Portfolio />
      <Client />
      <Contact />
      <Footer />
    </>
  );
}
export default ar
