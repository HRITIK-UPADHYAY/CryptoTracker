import React, { useState } from 'react'
import './Style/coinInfo.css'

const CoinInfo = ({heading, description}) => {
    const [flag, setFlag] = useState(true);

    const shortDesc = description.slice(0, 200) + " <span style='color: var(--grey)'> Read More... </span>";
    const longDesc = description + " <span style='color: var(--grey)'> Read Less... </span>";
  return (
    <div className='coinInfo'>
      <h2 className='coin-info-heading'> {heading} </h2>
      { description.length > 300 ?  <p className='coin-info-description' 
                                        dangerouslySetInnerHTML={{__html: flag ? shortDesc: longDesc}} 
                                        onClick={() => setFlag(!flag)}
                                    />
         : <p className='coin-info-description' dangerouslySetInnerHTML={{__html: description}} />
      }
    </div>
  )
}

export default CoinInfo
