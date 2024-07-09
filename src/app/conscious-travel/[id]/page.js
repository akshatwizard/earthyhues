import React from 'react'
import ConsciousDetail from './conscious'
import axios from 'axios';

function page({params}) {
  return (
    <ConsciousDetail dest={params.id}  />
  )
}


export async function generateMetadata({ params }) {
  const response = await axios.get(`https://www.banarasialoopapad.in/api-conscious-travel/${params.id}`);
  const data = response.data
  return {
    title: `${data[0].title}`,
  }
}

export default page


