import React from 'react';
import  './Style/error.css';

const Error = ({err}) => {
  return (
    <div className='error'>
      <h3> There is some {err} While making the API Hit </h3>
      <p> Please Try After Sometime or Refresh The Page. </p>
    </div>
  )
}

export default Error
