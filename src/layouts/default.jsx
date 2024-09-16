import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div className="container mx-auto p-4">
    <h1>Default Layout</h1>
      <Outlet />
    </div>
  )
}

export default DefaultLayout
