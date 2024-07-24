'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Modal from 'react-modal';
import Loading from '@/components/Loading/Loading';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'justify', // Text justification
        maxWidth: '80%', // Limiting maximum width to 80% of viewport
        maxHeight: '80vh', // Limiting maximum height to 80% of viewport height
        overflowY: 'auto', // Enable vertical scrolling if content exceeds modal height
    },
};

const Destinations = ({ dest }) => {
    const destination_id = dest;
    const [data, setData] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [loading, setLoading] = useState(true);

    const openModal = (location) => {
        setSelectedLocation(location);
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedLocation(null);
        setIsOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.banarasialoopapad.in/destinations/${destination_id}`);
                // console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching destination:', error.response.data);
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };

        fetchData();
    }, [destination_id]);

    // if (loading) {
    //     return <Loading />;
    // }
    // console.log(data.destination?.[0]?.destination_image.length);
    return (
        <div>

            <section className="page-header" >
                {/* <div className="page-header__bg" /> */}
                <div className="container">
                </div>
            </section>

            {loading ? <Loading /> :
                <section className="destination-details section-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="destination-details__card">
                                    <div className="destination-details__card-content">
                                        <h3
                                            className="offer-one__heading sec-title__heading text-left headingdest"
                                            style={{
                                                // marginTop: "-62px",  
                                                paddingLeft: '200',
                                                fontSize: "25px!important",
                                                marginBottom: "20px"
                                            }}>
                                            <span className="font-bernadette-rough display-4">
                                                {data.destination?.[0]?.destination_name}
                                            </span>
                                        </h3>

                                        <p className="destination-details__card-text wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms" dangerouslySetInnerHTML={{ __html: data.destination?.[0]?.destination_content }}>
                                            { }
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <h1 className='pageHeading animated fadeInUp'>Explore {data.destination?.[0]?.destination_name} : Nature Travel Experience by EarthyHues.</h1>
                                        {data.location?.map((location) => (
                                            <div className="col-xl-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms" onClick={() => openModal(location)}>
                                                <div key={location.location_id} className="tour-listing__card">
                                                    <a onClick={() => openModal(location)} className="tour-listing__card-image-box">
                                                        <img src={location.location_img_small} alt="assets/images/tours/tour-3-1.jpg" className="tour-listing__card-image" style={{ aspectRatio: '3/2' }} />
                                                        <div className="tour-listing__card-image-overlay" />
                                                    </a>
                                                    {/* <a onClick={() => openModal(location)} className="tour-listing__card-wishlist">
                                                    <span className="icon-heart" />
                                                </a> */}
                                                    <div className="tour-listing__card-content p-4">
                                                        <div className="tour-listing__card-camera-group">

                                                        </div>
                                                        <h3 className="tour-listing__card-title">
                                                            <a onClick={() => openModal(location)}>
                                                                {/* Turkey Balloons flying */}
                                                                {location.location_name}
                                                            </a>
                                                        </h3>
                                                        <p className="tour-listing__card-text text-small" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: location.location_details.substring(0, 250) }}>

                                                        </p>
                                                        <p className='trevlo-btn trevlo-btn--base text-white' style={{ padding: '10px 20px', cursor: "pointer" }} >
                                                            <span onClick={() => openModal(location)}>Read more</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        contentLabel="Location Details"
                                        style={customStyles}
                                    >
                                        {selectedLocation && (
                                            <>
                                                <h2 className='text-center'>{selectedLocation.location_name}</h2>
                                                <p dangerouslySetInnerHTML={{ __html: selectedLocation.location_details }}></p>
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <button className='trevlo-btn trevlo-btn--base text-white' style={{ padding: '10px 20px' }} onClick={closeModal}>
                                                        <span>Close</span>
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </Modal>
                                </div>
                            </div>
                            {/* /.col-xl-8 col-lg-7 */}
                            <div className="col-xl-4 col-lg-5">
                                {data.destination?.[0]?.destination_image?.length ? (
                                    <div className="destImageContainer">
                                        <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                            <div className="carousel-inner">
                                                {data.destination[0].destination_image.map((image, index) => (
                                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="1800">
                                                        <img src={image} alt={`Slide ${index + 1}`} />
                                                    </div>
                                                ))}
                                            </div>
                                            {data.destination[0].destination_image.length > 1 && (
                                                <>
                                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Next</span>
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ) : null}


                                <aside className="destination-sidebar">
                                    <div className="destination-sidebar__tour destination-sidebar__single">
                                        <h3 className="destination-sidebar__tour-top-title">Packages</h3>
                                        <div className="destination-sidebar__tour-box">
                                            {data.packages?.map((packageItem) => (
                                                <div key={packageItem.package_id} className="destination-sidebar__tour-item">
                                                    <div className="destination-sidebar__tour-img mt-2">
                                                        <img src={packageItem.package_img} loading="lazy" alt="destination-tour" style={{ aspectRatio: '3/2' }} />
                                                    </div>
                                                    <div className="destination-sidebar__tour-content">
                                                        <h4 className="destination-sidebar__tour-title">
                                                            <a href={`/packages/${packageItem.package_url}`}>
                                                                {packageItem.package_title}
                                                            </a>
                                                        </h4>
                                                        <p className="destination-sidebar__tour-location-text text-small">
                                                            {packageItem.package_intro.substring(0, 70)}...
                                                            <Link href={`/packages/${packageItem.package_url}`}>Read more</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>}
        </div>
    );
};

export default Destinations;
