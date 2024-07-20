'use client'
import React, { useState } from 'react'

function SocialMedia() {
    const [show, setShow] = useState(false)

    function handleClick() {
        setShow(!show);
    }
    return (
        <>
            <div className={`showIcon ${show && "hideBtn"} `} onClick={handleClick}> <p>&#9001;</p> </div>
            <div class={`icon-bar ${show && "hideIcon"} `}>
                <a href="https://www.facebook.com/pg/EarthyHuesTours/" target='_blank' class="facebook"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/earthyhuestours/" class="instagram" target='_blank'><i class="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UCFVeeklGY_eomA5bMkrfOJw" class="youtube" target='_blank'><i class="fab fa-youtube"></i></a>
                <a href="tel:+918904278007" class="whatsapp" target='_blank'><i class="fab fa-whatsapp"></i></a>
                <a href="https://www.tripadvisor.in/Attraction_Review-g297628-d23538126-Reviews-EarthyHues-Bengaluru_Bangalore_District_Karnataka.html" class="tripadvisor" target='_blank'><i class="fa fa-tripadvisor" aria-hidden="true"></i></a>
            </div>
        </>
    )
}

export default SocialMedia
