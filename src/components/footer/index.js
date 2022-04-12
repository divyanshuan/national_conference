import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import '../../styles/footer.css';


const Footer = () =>{
    return(
        <>
          <div className="footer-main">
             <div className="footer">
               <div className="box contact-box">
                 <h1>SSTEPS- 2022</h1>
                 <p>Department of Electrical Engineering<br/>
                    Central University of Haryana<br/>
                 </p>
               </div>
               <div className="box">
                 <h2>Contact</h2>
                 <p>Tel: +911234567890</p>
                 <p>Email: info@contact.com</p>
                 {/* <p> <a href="/contact">Book a consultation</a></p> */}
                 <div className="social-media">
                    <a className='icon' href='/'><FaFacebook/></a>
                    <a className='icon' href='/'><FaInstagram/></a>
                    <a className='icon' href='/'><FaYoutube/></a>
                 </div>
               </div>
               <div className="box newsletter">
                 <p>Important Dates</p>
                 {/* <form>
                   <input type="text" placeholder="Enter your email here*" className="input" />
                   <button type="submit" className="join-button">Join</button>
                 </form> */}
                 <ul>
                 <li>Submission paper:</li> 
<li>Paper Submission Deadline: 31 Aug. 2022</li>
<li>Paper Acceptance Notification: 28 Sep. 2022</li>
<li>Submission of camera ready paper: 15 Oct. 2022</li>
<li>Early bird registration: 18 Oct. 2022</li>
<li>Standard registration: 30 Oct. 2022</li>
                 </ul>
               </div>
             </div>
             <div className="copyright">
                <p>Copyright @ 2022</p>
             </div>
          </div>
        </>
    )
}

export default Footer;