import React from 'react'
import Button from '../Common/Button'
import './mainComponent.css'
import gradient from '../../Assets/gradient.png'
import iphone from '../../Assets/iphone.png'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const MainComponent = () => {
  return (
    <div className='mainComponent'>
      <div className='left'>
        <motion.h1 className='track-crypto-heading'
          initial = {{opacity: 0, y: 50}}
          animate = {{opacity: 1, y: 0, delay: 0.5 }}
          transition = {{duration: 1}}
        > 
          Track Crypto 
        </motion.h1>

        <motion.h1 className='real-time-heading'
          initial= {{opacity: 0, x:50}}
          animate = {{opacity: 1, x:0}}
          transition = {{duration: 1, delay: 0.5}}
        > 
          Real Time. 
        </motion.h1>

        <motion.p className='info'
          initial= {{opacity: 0}}
          animate = {{opacity: 1}}
          transition = {{duration: 0.5, delay: 0.8}}
        > 
          Track Crypto through a public api in real time. Visit the dashboard to do so! 
        </motion.p>

        <motion.div className="main-btn"
          initial= {{opacity: 0, x:50}}
          animate = {{opacity: 1, x:0}}
          transition = {{duration: 0.5, delay: 1}}
        >
          <Link to="/dashboard"> <Button text={"Dashboard"} /> </Link>
          <Link> <Button text={"Share App"}  outlined={true} /> </Link>
        </motion.div>
       
      </div>

      <div className="right"> 
        <motion.img src={iphone} className='iphone'
          initial= {{y: -10}}
          animate = {{y: 10}}
          transition = {{duration:2, type:"smooth", repeatType:"mirror", repeat:Infinity}}
        />
        <img src={gradient} className='gradient'/>
      </div>
    </div>
  )
}

export default MainComponent
