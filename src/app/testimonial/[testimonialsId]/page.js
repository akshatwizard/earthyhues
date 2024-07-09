import React from 'react'
import TestimonialDetail from './testimonials'
import axios from 'axios';

function page({params}) {
  return (
    <TestimonialDetail dest={params.testimonialsId} />
  )
}

export async function generateMetadata({ params }) {
    const response = await axios.get(`https://www.banarasialoopapad.in/api-testimonials/${params.testimonialsId}`);
    const data = response.data
    return {
      title: `${data[0].testimonials_name}`,
    }
  }

export default page
