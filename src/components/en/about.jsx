import React from 'react'

const About = () => {
  return (
    <section className="row_about" id='about'>
        <img src="/images/Group 21.png" className='dec' alt="#"/>
        <div className="container">
            <div className="left" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <div className="main_title">
                <h3>About Us</h3>
                <div className='shape'></div>
            </div>
                <h4>
                    When we decided to establish Solid Company in 1998, the dream was to create a brand of “safety” in all the meaning of the word, safety for family from burglary, safety for factories and major projects from fires, safety for operating rooms from radiation, and the dream has turned into reality thanks to the wide range of doors that our company includes, from armored doors, ray-resistant, fire-resistant, sound-insulating and other sections that serve the safety of our community in more than one field. Safety is our commitment to our customers.
                </h4>
            </div>
            <div className="right" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <img src="/images/Group 17015.png" loading='lazy' alt="#" />
            </div>
        </div>
        <img src="/images/Ellipse 8.png" className="Ellipse" alt="#" />
    </section>
  )
}

export default About