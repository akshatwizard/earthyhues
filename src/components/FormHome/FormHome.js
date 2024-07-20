'use client'
import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const FormHome = () => {

  const [formData, setFormData] = useState({
    location: "",
    date: "",
    email: "",
    contactNo: ""
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  // console.log(formData);

  async function handleSubmit(event){
    event.preventDefault()
    // const response = await axios.post('/api/formdata',formData)
    await axios.post('https://www.banarasialoopapad.in/search-form-submit', formData)
    localStorage.setItem('searchFormData', JSON.stringify(response.data));
    setFormData({
      location:"",
      date:"",
      email:"",
      contactNo:""
    })
    window.location.href = '/feedback';
  }
  return (
    <div>

      <div className="banner-form wow fadeInUp" data-wow-delay="300ms">
        <div className="container">
          <form className="banner-form__wrapper" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-4">
                <div className="banner-form__control">

                  {/* <select name="location" className="selectpicker1 w-75 mt-2 border-bottom" id="location">
                <option value="Anywhere">Anywhere</option>
                {destinations.map((destination) => (
                  <option key={destination.destination_id} value={destination.destination_name}>
                    {destination.destination_name}
                  </option>
                ))}
              </select> */}
                  <label htmlFor="location" >Location</label>
                  <input
                    type="text"
                    name='location'
                    placeholder='Your Dream Destination'
                    className='formInputs'
                    value={formData.location} 
                    onChange={handleChange}
                    />
                  <i className="icon-location-2" />
                </div>
              </div>

              <div className="col-lg-2">
                <div className="banner-form__control">

                  {/* <DatePicker
                    selected={selectedMonth}
                    onChange={handleChange}
                    onMonthChange={(date) => setSelectedMonth(date)}
                    dateFormat="MMMM yyyy" // Format to display only month and year
                    showMonthYearPicker // Show only the month and year picker
                    placeholder='Select Month' // Placeholder text
                    filterDate={filterDate} // Filter dates to allow only the next 12 months
                    minDate={nextMonth} // Minimum selectable date
                    maxDate={twelveMonthsLater} // Maximum selectable date
                    required
                    className='border-bottom'
                  /> */}
                  <label htmlFor="date">When?</label>
                  <input type="date" name="date" id="date" className='formInputs' value={formData.date} onChange={handleChange} />
                  <i className="icon-calendar-5" />
                </div>
              </div>

              <div className="col-lg-2">
                <div className="banner-form__control">
                  {/* <select name="passion" className="selectpicker1 w-75 mt-2 border-bottom" id="passion"> 
                <option value="Not decided">Not decided</option>
                {passions.map((item) => (
                  <option key={item.passion_id} value={item.passion_name}>{item.passion_name}</option>
                  ))}
                  </select> */}
                  <label htmlFor="email">Email</label>
                  <input value={formData.email} type="email" name="email" id="email" placeholder='Your Email' className='formInputs' onChange={handleChange} />
                  {/* <i className="icon-hiking" style={{ fontSize: '26px' }} /> */}
                </div>
              </div>



              <div className="col-lg-3">
                <div className="banner-form__control borleft">
                  <label htmlFor="contactNo">Contact No.</label>
                  <input value={formData.contactNo} type="number" name="contactNo" id="contactNo" placeholder='Your Contact No.' className='formInputs' onChange={handleChange} />
                </div>
              </div>
              <div className="col-lg-1">
                <div className="banner-form__btn">
                  {/* <div className="banner-form__filter">
                <span className="icon-filter" />
              </div> */}
                  {/* <Link to='/feedback'> */}
                  <button type="submit" aria-label="search submit" className="trevlo-btn trevlo-btn--base">
                    <span>
                      <i className="icon-search" />
                    </span>
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormHome
