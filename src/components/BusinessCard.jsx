import React from 'react'

const BusinessCard = () => {
  return (
    <div>
      BusinessCard
      <div className='background'>
        <div className='content'>
          <div className='logoName'>
            <h2>Your Logo</h2>
            <h1>COMPANY NAME</h1>
            <p>on cost</p>
          </div>

          <div className='positionName'>
            <h1>YOUR NAME</h1>
            <h2>Your Position</h2>

            <div className='contact'>
              <ul>
                <li>+00123 456 789</li>
                <li>email address goes here</li>
                <li>website goes here</li>
                <li>address goes here</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessCard;