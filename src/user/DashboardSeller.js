import React from 'react'
import DashboardNav from '../components/DashboardNav'

const DashboardSeller = () => {
  return (
    <>
        <div className='container-fluid bg-secondary p-5'>
            <h1>Dashboard</h1>
        </div>
        <div className='container-fluid'>
            <DashboardNav />
        </div>

        <div className='container'>
            <p>Show all the hotels user have posted and button to add new</p>
        </div>
    </>
  )
}

export default DashboardSeller