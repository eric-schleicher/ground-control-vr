import React from 'react'
import Clock from 'react-countdown-clock'

const CountDown = (props) => (
    <div className='clock'>
       <Clock color='white' size={130} seconds={300} />
    </div>
  )

export default CountDown
