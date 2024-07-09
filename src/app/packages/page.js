import React from 'react'
import Packages from './mainPage'

function page() {
  return (
    <Packages/>
  )
}

export async function generateMetadata() {
    return {
      title: "Travel Package by EarthyHues",
    }
  }

export default page
