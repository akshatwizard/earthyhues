'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedBack = (location) => {
  const [formData, setFormData] = useState({});
  const [newData, setNewData] = useState({
    name: "",
    travelKind: "",
    noOfTravellers: "",
    noOfDays: ""
  })

  function handleChange(event) {
    const { name, value } = event.target
    setNewData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('searchFormData'));
    if (storedData && storedData.data) {
      setFormData(storedData.data);
      // console.log(storedData.data);
    }
  }, []);




  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      ...formData,
      ...newData,
    };

    try {
      // const response = await axios.post('/api/fulldata', { newData, formData });
      await axios.post('https://www.banarasialoopapad.in/search-form-submit', formDataToSend);

      setNewData({
        name: "",
        travelKind: "",
        noOfTravellers: "",
        noOfDays: ""
      });

      toast.success('Feedback submitted successfully!');
      // console.log(response.data.data);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error('Failed to submit feedback.');
    }
  };

  return (
    <div>
      <>
        <section className="page-header">
          <div className="page-header__bg" />
          <div className="container">

            <div className="page-header__breadcrumb-box">
            </div>
          </div>
        </section>
      </>

      <section className="contact-page section-space-top">
        <div className="container">
          <h3
            className="offer-one__heading sec-title__heading text-left headingdest"
            style={{
              paddingLeft: '200',
              fontSize: "25px!important",
              marginBottom: "25px"
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
                <div className="container my-5">
                  <div className="row">

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
                            <i className="icon-calendar-5" style={{ fontSize: '26px' }} />
                            <h4>Date</h4>
                            <p style={{ marginBottom: '0px' }}>{formData.date}</p>
                          </div>
                        </div>
                        <div className="col-12 col-sm-3 ">
                          <div className='shadowBox' style={{ padding: '10px' }}>
                            <i className="icon-hiking" style={{ fontSize: '30px' }} />
                            <h4>Email</h4>
                            <p style={{ marginBottom: '0px' }}> {formData.email}</p>
                          </div>
                        </div>
                        <div className="col-12 col-sm-3 ">
                          <div className='shadowBox' style={{ padding: '10px' }}>
                            <i className="icon-satisfied" style={{ fontSize: '30px' }} />
                            <h4>Contacl No.</h4>
                            <p style={{ marginBottom: '0px' }}> {formData.contactNo}</p>
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
                value={newData.name}
                  type="text"
                  name="name"
                  id="form-one-name-input"
                  placeholder="Your Name"
                  className="form-one__input"
                  onChange={handleChange}
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
                value={newData.travelKind}
                  type="text"
                  name="travelKind"
                  id="form-one-email-input"
                  placeholder="Kind of Travel"
                  className="form-one__input"
                  onChange={handleChange}
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
                value={newData.noOfTravellers}
                  type="number"
                  name="noOfTravellers"
                  id="form-one-phone-input"
                  placeholder="No Of Travellers"
                  className="form-one__input"
                  onChange={handleChange}
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
                value={newData.noOfDays}
                  type="number"
                  name="noOfDays"
                  id="form-one-subject-input"
                  placeholder="No Of Days"
                  onChange={handleChange}
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

