import React from 'react'
import Destinations from './destination'
import axios from 'axios';


function page({ params }) {
  return (
    <Destinations dest={params.id} />
  )
}
export async function generateMetadata({ params }) {
  const response = await axios.get(`https://www.banarasialoopapad.in/destinations/${params.id}`);
  const data = response.data
  const title = data.destination?.[0]?.destination_name;
  return {
    title: `Explore ${title} : Nature Travel Experience by EarthyHues`,
  }
}


export default page

