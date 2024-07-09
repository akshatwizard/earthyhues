'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedBack = (location) => {
  const [formData, setFormData] = useState(null);



  useEffect(() => {
    // Retrieve data from local storage
    const storedData = JSON.parse(localStorage.getItem('searchFormData'));

    // Set the retrieved data in the component state
    setFormData(storedData && storedData.length > 0 ? storedData[0] : null);
  }, []); // Empty dependency array to run this effect only once when the component mounts

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Form data to be sent
    const formDataToSend = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      feedbackLocation: e.target.feedbackLocation.value,
      searchId: formData.search_id,
      FeedBackFormFinalSubmit: "FeedBackFormFinalSubmit"
    };

    e.target.reset();
    // Send data using Axios
    axios.post('https://www.banarasialoopapad.in/search-form-submit', formDataToSend)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
        // alert(JSON.stringify(response.data));
        toast.success('Form Submitted', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
        // Optionally, you can store the response data in local storage
        localStorage.setItem('responseFormData', JSON.stringify(response.data));

        // Optionally, you can redirect to another page after storing the data
        // window.location.href = '/Feedback'; 
      })
      .catch((error) => {
        console.error('Error sending data:', error);
        toast.error('Error submitting form. Please try again.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <>
        <section className="page-header">
          <div className="page-header__bg" />
          {/* /.page-header__bg */}
          <div className="container">
            
            <div className="page-header__breadcrumb-box">
              {/* <ul className="trevlo-breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Contact</li>
        </ul> */}
              {/* /.trevlo-breadcrumb */}
            </div>
            {/* /.page-header__breadcrumb-box */}
          </div>
          {/* /.container */}
        </section>
        {/* /.page-header */}
      </>

      <section className="contact-page section-space-top">
        <div className="container">
        <h3
              className="offer-one__heading sec-title__heading text-left headingdest"
              style={{
                // marginTop: "-62px",
                paddingLeft: '200',
                fontSize: "25px!important",
                marginBottom:"25px"
              }}>
              <span className="font-bernadette-rough display-4">
                Give Feedback
              </span>
            </h3>
          <div className="sec-title text-center">
            {formData ? (
              <div>
                {/* Display the retrieved data */}
                <h2>Thanks for showing interest in EarthyHues Adventure Travels</h2>
                {/* <p><strong>Location:</strong> {formData.location}</p>
                    <p><strong>Passion</strong>: {formData.passion}</p>
                    <p><strong>Date</strong>: {formatDate(formData.date)}</p>
                    <p><strong>No. of Travelers</strong>: {formData.num_of_travellers}</p> */}
                <div className="container my-5">
                  <div className="row">
                    {/* First row for the image */}
                    {/* <div className="col-12 col-md-6">
          <img src='assets/earthyhues-image/praslin-3555706 (1)_0.jpg' alt="Image" className="img-fluid" />
        </div> */}

                    {/* Second row for the data */}
                    <div className="col-12 col-md-12 blogdetail ">
                      <div className="row ">
                        <div className="col-12 col-sm-3 ">
                          <div className='shadowBox' style={{ padding: '10px' }}>
                            <i className="icon-location-2" style={{ fontSize: '26px' }} />
                            <h4>Location</h4>
                            <p style={{ marginBottom: '0px' }}>{formData.location}</p>
                          </div>
                        </div>
                        <div className="col-12 col-sm-3 ">
                          <div className='shadowBox' style={{ padding: '10px' }}>
                            <i className="icon-hiking" style={{ fontSize: '30px' }} />
                            <h4>Passion</h4>
                            <p style={{ marginBottom: '0px' }}> {formData.passion}</p>
                          </div>
                        </div>
                        <div className="col-12 col-sm-3 ">
                          <div className='shadowBox' style={{ padding: '10px' }}>
                            <i className="icon-calendar-5" style={{ fontSize: '26px' }} />
                            <h4>Date</h4>
                            <p style={{ marginBottom: '0px' }}>{formatDate(formData.date)}</p>
                          </div>
                        </div>
                        <div className="col-12 col-sm-3 ">
                          <div className='shadowBox' style={{ padding: '10px' }}>
                            <i className="icon-satisfied" style={{ fontSize: '30px' }} />
                            <h4>No. of Travelers</h4>
                            <p style={{ marginBottom: '0px' }}> {formData.num_of_travellers}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <p>SearchID: {formData.search_id}</p> */}
              </div>
            ) : (
              <p>No search form data found.</p>
            )}

            {/* <h3 className="sec-title__title">Please Provide further details,<br/> so that we can get in touch with you</h3> */}
            <h3>Please Provide further details,<br /> so that we can get in touch with you</h3>
            {/* /.sec-title__title */}
          </div>
          <form
            onSubmit={handleSubmit}
            className="contact-page__form form-one row gutter-20 contact-form-validated"
          >
            <div
              className="col-md-6 wow animated fadeInUp"
              data-wow-delay="0s"
              data-wow-duration="1500ms"
            >
              <div className="form-one__group">
                <input
                  type="text"
                  name="name"
                  id="form-one-name-input"
                  placeholder="Your Name"
                  className="form-one__input"
                  required
                />
              </div>
              {/* /.form-one__group */}
            </div>
            {/* /.col-md-6 */}
            <div
              className="col-md-6 wow animated fadeInUp"
              data-wow-delay="0.3s"
              data-wow-duration="1500ms"
            >
              <div className="form-one__group">
                <input
                  type="email"
                  name="email"
                  id="form-one-email-input"
                  placeholder="Email Address"
                  className="form-one__input"
                  required
                />
              </div>
              {/* /.form-one__group */}
            </div>
            {/* /.col-md-6 */}
            <div
              className="col-md-6 wow animated fadeInUp"
              data-wow-delay="0s"
              data-wow-duration="1500ms"
            >
              <div className="form-one__group">
                <input
                  type="tel"
                  name="phone"
                  id="form-one-phone-input"
                  placeholder="Phone"
                  className="form-one__input"
                  required
                />
              </div>
              {/* /.form-one__group */}
            </div>
            {/* /.col-md-6 */}
            <div
              className="col-md-6 wow animated fadeInUp"
              data-wow-delay="0.3s"
              data-wow-duration="1500ms"
            >
              <div className="form-one__group">
                <input
                  type="text"
                  name="feedbackLocation"
                  id="form-one-subject-input"
                  placeholder="Location"
                  required
                  className="form-one__input" />

              </div>
              {/* /.form-one__group */}
            </div>
            {/* /.col-md-6 */}


            {/* /.col-12*/}
            <div
              className="col-12 wow animated fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1500ms"
            >
              <div className="form-one__btn-box">
                <button
                  type="submit"
                  className="form-one__btn trevlo-btn trevlo-btn--base"
                >
                  <span>Send Message</span>
                </button>
              </div>
              {/* /.form-one__btn-box */}
            </div>
            {/* /.col-12*/}
          </form>
          {/* /.row */}
          <div className="result" />
          {/* /.result */}
        </div>
        {/* /.container */}

      </section>
      <ToastContainer />
    </div>
  )
}

export default FeedBack

