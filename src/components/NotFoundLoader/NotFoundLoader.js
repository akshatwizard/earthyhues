import React from 'react'
import './NotFoundLoader.css'

export default function NotFoundLoader() {
    return (
        <>
            <div className="col-xl-12 col-lg-12" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",paddingTop:"10%" }}>
                <div class="loading-wave">
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                </div>
                <h1 className='display-4 title font-bernadette-rough' style={{ marginTop: "30px" }}>Not found</h1>
            </div>
        </>
    )
}
