import React from 'react'

const OurStory = () => {
  return (
    <div>
      <section className="page-header">
            <div className="page-header__bg" />
            <div className="container">
                <div className="page-header__breadcrumb-box">
                    {/* <ul className="trevlo-breadcrumb">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>{data.heading_name}</li>
                    </ul> */}
                </div>
            </div>
        </section>
        <section className="tour-listing-details tour-listing-details-right mt-5">
            <div className="container">
                <div className="tour-listing-details__row row">
               
                <div className="col-xl-8">
                <div
                                className="wow animated fadeIn"
                                data-wow-delay="0.1s"
                                data-wow-duration="1500ms"
                            >
                                <h1 className="tour-listing-details__title tour-listing-details__overview-title">
                                    Our Story
                                </h1>
                                
                            </div>
                <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">Busy in our corporate lives we were like any other individual - running the mad race of financial security, professional growth, social recognition, secure and happy family… but always had the knack for traveling, exploring the offbeat destinations… Whenever we managed to take time of our busy schedules… used to travel to the mighty mountains in the Himanchal/Uttaranchal or the gleaming dunes of Rajasthan and soaked up every single experience, however small and discreet and rejuvenated our spirits.</p>

                                <h3 className='my-3'>Rightly said by Lord Byron,</h3>

                <p className="tour-listing-details__overview-text wow animated fadeInUp " data-wow-delay="0.1s" data-wow-duration="1500ms"><strong>There is a pleasure in the pathless woods, there's a rapture on the lonely shore</strong>,</p>
                <p className="tour-listing-details__overview-text wow animated fadeInUp " data-wow-delay="0.1s" data-wow-duration="1500ms"><strong>There is society where none intrudes, by the deep Sea, and music in its roar,</strong></p>
                <p className="tour-listing-details__overview-text wow animated fadeInUp " data-wow-delay="0.1s" data-wow-duration="1500ms"><strong>I love not Man the less, but Nature more…</strong></p>

                <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">Then in 2012 we the nature lovers; happened to move to the Mystical Wilderness of the African Continent…it all started here - what we used to watch on Discovery/ Animal Planet/ Nat Geo/BBC in our childhood - giraffes, zebras, gazelles, cheetahs, lions were right there in front of us - few feet away in the glistening Savannah was totally unbelievable. Nature’s jewels- the brilliance of sunset, the roar of waterfall, the symphony of sounds that you hear in the heart of the forest, or the vastness of space and its countless stars is spectacular.</p>
                <p className="tour-listing-details__overview-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">Awestruck by the whispering winds, white sandy beaches, music of the sea, rhythm of the falling rain, hiking in the mountains, dancing around the bonfire, camping by the lake, exhilarating adventures…when we shared our stories with the friends and families, it urged them to venture into those locations. It dawned upon me, why not give it a shape of a profession and yet be close to your passion. This is how we got closely associated with Mau - our travel planner, mentor, guiding force, a veteran in the Industry and started planning the vacations for friends and acquaintances. So here we are today, at Earthy Hues with a passionate team of travel enthusiasts who would love to share their experiences and plan a memorable one for you…  <strong>Come - Explore the vibrant colors of nature like a free soul with us!!</strong></p>
                <p className="tour-listing-details__overview-text wow animated fadeInUp mt-5" ><em>Bhavana <br/>Your Travel Partner</em></p>
                </div>
                 <div className="col-xl-4">
                            <aside className="tour-listing-details__sidebar">
                              <div className="tour-listing-details__sidebar-book-tours tour-listing-details__sidebar-single wow animated fadeInUp text-center "
                                    data-wow-delay="0.1s" data-wow-duration="1500ms">
                                <div>
                                    <img src='./assets/earthyhues-image/IMG_2742_0.jpg' alt="image" className='w-100'/>
                                    <div className="result" />
                                </div>
                            </div>
                              
                              <div className="tour-listing-details__sidebar-book-tours tour-listing-details__sidebar-single wow animated fadeInUp text-center "
                                    data-wow-delay="0.1s" data-wow-duration="1500ms">
                                <div>
                                    <img src='./assets//earthyhues-image/Old3.jpg' alt="image" className='w-100'/>
                                    <div className="result" />
                                </div>
                            </div>
                                  
                            </aside>
                        </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default OurStory

export const metadata = {
    title: 'Our Story | Earthy Hues',
    description: 'Team of travel enthusiasts with extensive knowledge of wildlife & nature tourism',
}