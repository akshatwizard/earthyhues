import React from 'react'
import './CardLoader.css'
export default function CardLoader() {
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 wow fadeInUp mb-5'>
            <div className='cardLoader'>
            <div className="loaderImageContainer"></div>
            <div className="loaderBtnContainer">
                <div className="loaderBtn"></div>
                <div className="loaderBtn"></div>
                <div className="loaderBtn"></div>
                <div className="loaderBtn"></div>
                <div className="loaderBtn"></div>
            </div>
            <d7v className='loaderContentContainer'>
                <div className="loaderContent"></div>
                <div className="loaderContent" style={{width:"80%"}}></div>
                <div className="loaderContent" style={{width:"70%"}}></div>
            </d7v>
        </div>
        </div>
    )
}
