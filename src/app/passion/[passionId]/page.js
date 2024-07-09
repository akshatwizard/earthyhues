
import React from 'react'
import Passion from './passion'
import axios from 'axios';

function page({params}) {
  return (
    <Passion dest={params.passionId}/>
  )
}

export async function generateMetadata({ params }) {
  const response = await axios.get(`https://www.banarasialoopapad.in/passions/${params.passionId}`);
    const data = response.data
    // console.log(data.passion_name);
    return {
      title: `Explore ${data.passion_name} : Nature Travel Experience by EarthyHues`,
    }
}


export default page
