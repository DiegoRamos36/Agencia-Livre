
import BalanceIcon from '@mui/icons-material/Balance';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { SvgIcon } from '@mui/material';

const Header = () => {

return (
  <nav className='navbar navbar-expand-lg shadow-sm bg-primary sticky-md-top p-2'>
    <div className="container-fluid">
    <h1 className="navbar-brand ms-4 mb-0 titulo text-white"> <SvgIcon component={BalanceIcon} inheritViewBox /> Agência Livre</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className='navbar-nav ms-auto me-4 '>
      <li className='nav-item'><a className='nav-link text-white' href="#"><SvgIcon component={CallIcon} inheritViewBox /> +55 21 99999-9999</a></li>
      <div className="vr"></div>
      <li className='nav-item'><a className='nav-link text-white' href="#"><SvgIcon component={WatchLaterIcon} inheritViewBox /> Seg - Sex: 08h às 18h</a></li>
      <div className="vr"></div>
      <li className='nav-item'><a className='nav-link text-white' href="#"><SvgIcon component={EmailIcon} inheritViewBox /> contato@agencialivre</a></li>
      <li className='nav-item'><button  className='btn btn-outline-dark text-white'>CONSULTORIA</button></li>
    </ul>
    </div>
    </div>

   
  </nav>
)
}

export default Header;