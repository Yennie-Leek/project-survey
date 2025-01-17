import React from 'react'

const timeIntervals = [
  'Every day',
  'Every week',
  'Every month',
  'When beeing angry & sad'
]

const RadioButtons = ({timeInterval, setTimeInterval}) => {
  

return (
  <div className='button-container'>
    <h3 className='p-button-box'tabIndex='0'>How often do you crave the cream?</h3> 

    <div className='button-small-box'>
      {timeIntervals.map(interval => (
        <label tabIndex='0' key={interval} className='button-box'>
        <input 
        name='interval'
        type='radio'  
        value={interval}
        onChange={(event) => setTimeInterval(event.target.value)}
        checked={timeInterval === interval}
        tabIndex='0'
        aria-label='Select a button'
        required
        />
         <span className='checkmark'></span> 
        {interval}
        </label>
        
      ))}
      
    </div>
  </div>
  
)
}

export default RadioButtons;