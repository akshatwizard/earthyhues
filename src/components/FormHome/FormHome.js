"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const FormHome = () => {
  const [formData, setFormData] = useState({
    location: "",
    date: "",
    email: "",
    contactNo: "",
  });
  const [monthOptions, setMonthOptions] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  useEffect(() => {
    const generateMonthOptions = () => {
      const options = [];
      const currentDate = new Date();

      for (let i = 0; i <= 24; i++) {
        const futureDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + i
        );
        const month = futureDate.toLocaleString("default", { month: "short" }); 
        const year = futureDate.getFullYear();
        const value = `${month} - ${year}`;
        options.push(value);
      }

      setMonthOptions(options);
    };

    generateMonthOptions();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    // const response = await axios.post('/api/formdata',formData)
    const response = await axios.post(
      "https://www.earthyhues.co.in/search-form-submit",
      formData
    );
    // console.log(response.data);
    localStorage.setItem("searchFormData", JSON.stringify(response.data));
    setFormData({
      location: "",
      date: "",
      email: "",
      contactNo: "",
    });
    window.location.href = "/feedback";
  }
  return (
    <div>
      <div className="banner-form wow fadeInUp" data-wow-delay="300ms">
        <div className="container">
          <form className="banner-form__wrapper" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-4">
                <div className="banner-form__control">
                  <input
                    type="text"
                    name="location"
                    placeholder="Desired Destination"
                    className="formInputs"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  {/* <i className="icon-location-2" /> */}
                </div>
              </div>

              <div className="col-lg-2">
                <div className="banner-form__control">
                  <select
                    name="date"
                    id="date"
                    className="formInputs"
                    value={formData.date}
                    onChange={handleChange}
                  >
                    <option value="">Month of Travel</option>
                    {monthOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="banner-form__control">
                  <input
                    value={formData.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="formInputs"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="banner-form__control borleft">
                  <input
                    value={formData.contactNo}
                    type="number"
                    name="contactNo"
                    id="contactNo"
                    placeholder="Your Contact No."
                    className="formInputs"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-1">
                <div className="banner-form__btn">
                  <button
                    type="submit"
                    aria-label="search submit"
                    className="trevlo-btn trevlo-btn--base"
                  >
                    <span>
                      <i className="icon-search" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormHome;
