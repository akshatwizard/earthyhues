import React from 'react'
import PackageDetail from './package'
import axios from 'axios';

function page({params}) {
  return (
    <PackageDetail dest={params.packageId} />
  )
}

export async function generateMetadata({ params }) {
    const response = await axios.get(`https://www.banarasialoopapad.in/apipackages/${params.packageId}`)
    const dt = response.data[0]
    return {
      title: `${dt.package_title} Travel Package by EarthyHues`,
    }
}

export default page
