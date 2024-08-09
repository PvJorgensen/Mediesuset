import React from 'react'
import { Slide } from 'react-slideshow-image';
import slide1 from '../../assets/Images/header-images/slide1.png'
import slide2 from '../../assets/Images/header-images/slide2.png'
import slide3 from '../../assets/Images/header-images/slide3.png'

export const SlideShow = () => {

    const slideImages = [
        {
            url: slide1,
            caption: 'Slide 1',
        },
        {
            url: slide2,
            caption: 'Slide 2',
        },
        {
            url: slide3,
            caption: 'Slide 3',
        }

    ]

  return (
    <>
        <div>
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div></div>
                    </div>
                ))}
            </Slide>
        </div>
    </>
  )
}
