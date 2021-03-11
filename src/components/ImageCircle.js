import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import Profile from '../img/Profile/cute2.png'
import { DeviceSize } from '../common/Sizes'
import '../common/Animation.css'
import AOS from 'aos'
import 'aos/dist/aos.css'



const ImgContainer = styled.figure`
  display: flex;
  justify-content: flex-end;
  margin-right: 20%;
  z-index: 0;
  position: relative;
`

// How to deal with the img 

const Img = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 200px;
  // margin: -9em 2em;
  @media ${DeviceSize.tablet} {
    width: 18em;
    height: 18em;
  }
`

const Html = styled.img`
  border-radius: 200px;
`

export const ImageCircle = () => {
  useEffect(() => {
    AOS.init({
      // duration: 500,
      // easing: "ease-out-quart",
      // once: true
    })
    AOS.refresh()
  })
  return (
      <div>
        {/* <ImgContainer data-percent="100"> */}

        <figure class="chart" >
            <Img 
            data-aos="fade-up"
            data-aos-duration="30000"
            data-aos-delay="1000" 
            src={Profile} />    
          <svg width="200" height="200">
            <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
          </svg>
        </figure>
          <Img 
            data-aos="fade-up"
            data-aos-duration="30000"
            data-aos-delay="1000" 
            src={Profile} />
          {/* <div class="circle__box">
            <div class="circle__wrapper circle__wrapper--right">
              <div class="circle__whole circle__right"></div>
            </div>
            <div class="circle__wrapper circle__wrapper--left">
              <div class="circle__whole circle__left"></div>
            </div>
          </div> */}
          <section class="container"
          data-aos-delay="15000" 
          >
  
            {/* <!-- HTML Chart --> */}
            <figure 
            data-aos-delay="15000" 
            class="chart" data-percent="100">

              <Html 
                data-aos="fade-up"
                data-aos-duration="30000"
                data-aos-delay="1000" 
                src={Profile} 
                className="html"
                />               
                <svg 
                data-aos="fade-up"
                data-aos-duration="30000"
                data-aos-delay="15000" 
                width="200" height="200">
                <circle 
                  data-aos="fade-up"
                  data-aos-duration="30000"
                  data-aos-delay="150000" 
                class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
              </svg>
            </figure>
          </section>
        </div>
  )
}