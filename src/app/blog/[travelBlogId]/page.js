import React from 'react'
import TravelBlogDetail from './blog'
import axios from 'axios';

function page({params}) {
  return (
    <TravelBlogDetail dest={params.travelBlogId} />
  )
}

export async function generateMetadata({ params }) {
    const response = await axios.get(`https://www.banarasialoopapad.in/api-travel-blog/${params.travelBlogId}`);
    const data = response.data
    return {
      title: `${data[0].heading_name}`,
    }
  }

export default page
