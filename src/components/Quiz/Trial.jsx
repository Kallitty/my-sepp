import React from 'react'
// import React, { useState } from 'react';
import { resultInitialState } from '../../initials'
import Records from '../../records.json'

function Trial() {
  return (
    <div>
      {Records &&
        Records.map((record) => (
          <div key={record.id} className='quiz-container'>
            {record.isVisible ? (
              <div>
                {/* Your content goes here, for example: */}
                <p>
                  <img src={record.icon} alt='' />
                </p>
              </div>
            ) : null}
          </div>
        ))}
    </div>
  )
}

export default Trial
