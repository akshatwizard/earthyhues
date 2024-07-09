import React from 'react'


const VideoHome = () => {
  return (
    <div>
      <section className="video-one">
        <div className="video-one__bg jarallax" data-jarallax="" data-speed="0.3" data-imgposition="50% -100%" style={{ backgroundImage: "url(assets/images/backgrounds/video-bg-1.jpg)" }} />
        <div className="container">
          <div className="video-one__content wow fadeInUp" data-wow-delay="100ms">
            <div className="row">
              <div className="col-lg-6" >
                  <iframe src="https://www.youtube.com/embed/oBWjAZrhO3k?autoplay=1&mute=1&loop=1&playlist=oBWjAZrhO3k" title="video section" loading="lazy" className='youtubeVideo'/>
                </div>
                <div className="col-lg-6" >
                  <iframe src="https://www.youtube.com/embed/H_ZVax0-ZtA?autoplay=1&mute=1&loop=1&playlist=H_ZVax0-ZtA" title="video section" loading="lazy" className='youtubeVideo' />
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VideoHome
