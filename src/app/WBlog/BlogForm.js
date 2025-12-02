"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BlogForm() {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phoneNo: "",
    nationality: "",
    tourDetail: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://www.exportleftovers.in/api-custom-tour",
        customerDetails
      );

      if (response.data[0].status == 1) {
        toast.success(
          "Your details have been successfully submitted! Our team will be in touch with you shortly."
        );
        setCustomerDetails({
          name: "",
          email: "",
          phoneNo: "",
          nationality: "",
          tourDetail: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <form className="form-one row gutter-20" onSubmit={handleSubmit}>
      <ToastContainer />
      <div
        className="col-md-6 wow animated fadeInUp"
        data-wow-delay="0s"
        data-wow-duration="1500ms"
      >
        <div className="form-one__group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-one__input"
            value={customerDetails.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div
        className="col-md-6 wow animated fadeInUp"
        data-wow-delay="0.3s"
        data-wow-duration="1500ms"
      >
        <div className="form-one__group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-one__input"
            value={customerDetails.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div
        className="col-md-6 wow animated fadeInUp"
        data-wow-delay="0.3s"
        data-wow-duration="1500ms"
      >
        <div className="form-one__group">
          <input
            type="tel"
            name="phoneNo"
            placeholder="Contact No"
            className="form-one__input"
            value={customerDetails.phoneNo}
            onChange={handleChange}
          />
        </div>
      </div>
      <div
        className="col-md-6 wow animated fadeInUp"
        data-wow-delay="0.3s"
        data-wow-duration="1500ms"
      >
        <div className="form-one__group">
          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            className="form-one__input"
            value={customerDetails.nationality}
            onChange={handleChange}
          />
        </div>
      </div>
      <div
        className="col-12 wow animated fadeInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1500ms"
      >
        <div className="form-one__group">
          <textarea
            name="tourDetail"
            cols={30}
            rows={10}
            placeholder="Describe your details"
            className="form-one__message form-one__input"
            value={customerDetails.tourDetail}
            onChange={handleChange}
          />
        </div>
      </div>
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
            <span>Send Request</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default BlogForm;
