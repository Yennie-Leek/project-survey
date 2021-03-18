import React from 'react'

const DropDown = ({favorite, setFavorite}) => {
 
  
return (
  <div className='drop-down-box'>
    <p className='p-drop-down-box'>What flavor rock your boat &#38; get your brain freeze on?!</p>
    <label className='pick-favorite'>Pick your favorite:</label>
    <select className='pick-field'
    onChange={event => setFavorite(event.target.value)}
    value={favorite}
    >
      <option disabled></option>
      <option className='opt-po'value='Polka'>Polka</option>
      <option value='Pineapple'>Pineapple</option>
      <option value='Salty Licorice'>Salty Licorice</option>
      <option value='Creamy Fudge'>Creamy Fudge</option>
      <option value='Nuts &#38;Crunch'> Nuts &#38; Crunch</option>
      <option value='All of the above'>All of the above!</option>
    </select>
  </div>
)
}


export default DropDown;
