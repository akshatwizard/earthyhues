'use client'
import React,{useState,useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const FormHome = () => {


    const [destinations, setDestinations] = useState([]);
    const [passions, setPassions] = useState([]);
    const [numTravelers, setNumTravelers] = useState(1);
    const [selectedMonth, setSelectedMonth] = useState(null);

    const currentDate = new Date();
    // Calculate the first day of the next month
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

    // Calculate the date 12 months from now
    const twelveMonthsLater = new Date(currentDate.getFullYear() + 1, currentDate.getMonth());

    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem('formHomeData'));
      if (storedData && !isDataExpired(storedData.timestamp)) {
          setDestinations(storedData.destinations);
          setPassions(storedData.passions);
      } else {
          console.error('data is not expire')
      }
  }, []);


    const handleChange = (date) => {
        setSelectedMonth(date);
    };

    const filterDate = (date) => {
        // Disable dates before the next month and after 12 months
        return date >= nextMonth && date <= twelveMonthsLater;
    };

    useEffect(() => {
        axios.get('https://www.banarasialoopapad.in/home-menu')
        .then((response) => {
            if (response.data && Array.isArray(response.data)) {
            // setData(response.data);
            if (Array.isArray(response.data[0].destination)) {
                setDestinations(response.data[0].destination);
            } else {
                console.error("Invalid destination data format");
            }
            if (Array.isArray(response.data[0].passion)) {
                setPassions(response.data[0].passion);
            } else {
                console.error("Invalid passion data format");
            }
            } else {
            console.error("Invalid response format or insufficient data");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    },[]);

    passions.sort((a, b) => a.passion_name.localeCompare(b.passion_name));
    destinations.sort((a, b) => a.destination_name.localeCompare(b.destination_name));
    
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission
      
      if (!selectedMonth) {
        alert("Please select a date.");
        return; // Do not proceed with form submission
      }

      const formattedDate = selectedMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    
      const formData = {
          location: e.target.location.value,
          passion: e.target.passion.value,
          date: formattedDate, // Use the formatted date
          numTravelers: numTravelers
      };
      // alert(JSON.stringify(formData));
      axios.post('https://www.banarasialoopapad.in/search-form-submit', formData)
          .then((response) => {
              // console.log('Data sent successfully:', response.data);
              // alert(JSON.stringify(response.data))
              // Store response data in local storage
              localStorage.setItem('searchFormData', JSON.stringify(response.data));
              // Optionally, you can redirect to another page after storing the data
              window.location.href = '/feedback'; // Replace 'result-page' with the actual URL
          })
          .catch((error) => {
              console.error('Error sending data:', error);
          });
  };
  
  const isDataExpired = (timestamp) => {
    const currentTime = new Date().getTime();
    return (currentTime - timestamp) > (10 * 60 * 1000); // 10 minutes in milliseconds
  };

  
  return (
    <div>
      
  <div className="banner-form wow fadeInUp" data-wow-delay="300ms">
    <div className="container">
      <form className="banner-form__wrapper" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <div className="banner-form__control">
              <label htmlFor="location" >Location
              </label>
              <select name="location" className="selectpicker1 w-75 mt-2 border-bottom" id="location">
                <option value="Anywhere">Anywhere</option>
                {destinations.map((destination) => (
                  <option key={destination.destination_id} value={destination.destination_name}>
                    {destination.destination_name}
                  </option>
                ))}
              </select>
              <i className="icon-location-2" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="banner-form__control">
              <label htmlFor="passion">Type of Vacation</label>
              <select name="passion" className="selectpicker1 w-75 mt-2 border-bottom" id="passion"> 
                <option value="Not decided">Not decided</option>
                {passions.map((item) => (
                  <option key={item.passion_id} value={item.passion_name}>{item.passion_name}</option>
                ))}
              </select>
              <i className="icon-hiking" style={{fontSize: '26px'}}/>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="banner-form__control">
              <label htmlFor="date">When?</label>
              <DatePicker
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
              />
              <i className="icon-calendar-5" />
            </div>
          </div>

          <div className="col-lg-3">
            <div className="banner-form__control borleft">
              <label htmlFor="guests">No. of Travelers</label>
              <button type="button" className="banner-form__qty-minus sub mt-4" onClick={() => numTravelers>1 ?setNumTravelers(numTravelers - 1): 0}>
                <i className="icon-minus-3" />
              </button>
              <input
                type="number" value={numTravelers} name="guests" min={1} className='border-bottom'
                onChange={(e) => {
                  const newValue = parseInt(e.target.value, 10);
                  if (newValue >= 1) { // Ensure minimum of 1 traveler
                    setNumTravelers(newValue);
                  }
                }}
              />
              <button type="button" className="banner-form__qty-plus add mt-4" onClick={() => setNumTravelers(numTravelers + 1)}>
                <i className="icon-plus-3" />
              </button>
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
