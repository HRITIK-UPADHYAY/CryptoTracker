import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import './Style/footer.css'


const Footer = () => {
  return (
    <div className='footer'>
        <h3> CryptoTracker.</h3>
        <div className="social-media">
            <FacebookIcon />
            <EmailIcon />
            <TwitterIcon />
            <InstagramIcon />
        </div>
    </div>
  )
}

export default Footer
