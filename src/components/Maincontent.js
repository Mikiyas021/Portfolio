import './Maincontent.css'
import personal from './images/personal.JPG';
import personal2 from './images/personal3.svg';

function Maincontent(){
    return(
    <div className='Maincontent'>
        <div className='about' >
            <h4> Hello, I am</h4>
            <h1>Mikiyas Gashaw</h1>
            <h3>Graphics designer | Video editor | Full Stack website developer</h3>
        </div>
        <div className='picdiv'>
         <img src={personal2}></img>
        </div>
  
</div>
    );
}
export default Maincontent;