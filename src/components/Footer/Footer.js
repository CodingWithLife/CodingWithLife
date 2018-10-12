
import React from 'react';
import './Footer.css'

const Footer = () => {
      return (
        <div>
        <footer class="footer-distributed">
            <div class="footer-left">
                <h3>HOLA<span>CODE</span></h3>
                <p class="footer-links">
                    <a href="Home">Home</a>
                    ·
                    <a href="Survey">Survey</a>
                    ·
                    <a href="Chat">Chat</a>
                    ·
                    <a href="Profiles">Profiles</a>
                </p>
                <p class="footer-company-name">Thesis Project &copy; 2018</p>
            </div>
            <div class="footer-center">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>Toledo 39,Juarez</span> CDMX, Mexico</p>
                </div>
                <div>
                    <i class="fa fa-phone"></i>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">ohhYeahMr.Pancho</a></p>
                </div>
            </div>
            <div class="footer-right">
                <p class="footer-company-about">
                    <span>codingWithLife</span>
                    Proud holaCode Students
                </p>
                <div class="footer-icons">
                    <a href="URL-FACEBOOK" target="_blank"><img alt="siguenos en facebook" height="40" src="http://3.bp.blogspot.com/-MQuocq7OzfU/UiXwUY81yQI/AAAAAAAAB0Q/h6-R_R2-buI/s1600/face.png" title="Follow us on facebook" width="40" /></a>
                  <a href="URL-Likedin" target="_blank"><img alt="Sígueme en Likedin" height="40" src="http://2.bp.blogspot.com/-pAL6ZbCO2js/UiX1Yn-MYdI/AAAAAAAAB7g/o2r-7swzeLc/s1600/linkedin_logo_ok.png" title="Follow us on Likedin" width="40" /></a>
                    <a href="URL-youtube" target="_blank"><img alt="Canal de youtube" height="40" src="http://4.bp.blogspot.com/-NFK4YtYPiXw/UiX1X0rq9pI/AAAAAAAAB7w/l_cIRw8Cij0/s1600/Youtube+alt+2.png" title="Follow us on youtube" width="40" /></a>
                    <a href="URL-Correo" target="_blank"><img alt="sígueme por Correo" height="40" src="http://3.bp.blogspot.com/-Z0xiuqQb0T0/Uid1Y2XehzI/AAAAAAAACB8/kv7gmWMvbq0/s1600/correo.png" title="Follow us on Email" width="40" /></a>
                </div>
            </div>
        </footer>
        </div>
      );
}

export default Footer;
