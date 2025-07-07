import './footer.css'
import { Instagram, Facebook, Telegram } from '@mui/icons-material'

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className='footer-title'>
        <h3>NIYA SPORT WEAR</h3>
      </div>
      
      <p>Your Number One Quality Sport Wear Provider</p>
      
      <div className='social-media'>
        <a href='https://www.instagram.com/niyasportswear/'> <Instagram sx={{ color: 'white' }} /> </a>
        <a href='https://www.instagram.com/niyasportswear/'><Facebook sx={{ color: 'white' }}/></a>
        <a href='https://www.instagram.com/niya_sport_wear/'><Telegram sx={{ color: 'white' }}/></a>        
      </div>
      
      <hr />
      
      <div className='footer-cpy'>
        <p>&copy; {year} All rights reserved</p>
      </div>
    </div>
  );
}
