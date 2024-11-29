import './footer.css'
import { Instagram,Facebook,Telegram } from '@mui/icons-material'

export const Footer = ()=>{
    return <div className="footer">
       <div className='footer-title'>
        <h3>NIYA SPORT WEAR</h3>
       </div>
          <p>Your Number One Quality Sport Wear Provider</p>
          <div className='social-media'>
            <Instagram/>
            <Facebook/>
            <Telegram/>
          </div>
          <hr/>
          <div className='footer-cpy'>
            <p>copywrite 2023 alright reserved</p>
          </div>
    </div>
}