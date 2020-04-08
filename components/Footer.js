import React, { Component } from 'react';
import frontRouter from '../Router'
import '../assets/css/footer.css'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Footer extends Component {
  render() {
    return (
            <footer>
                <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <h3>e-mail</h3>
                                <span>lmg-bouwwerken@hotmail.com</span>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <h3>volg ons</h3>
                                <div className="d-flex flex-row">
                                    <span className="mr-2"><a className="social-icons" href="https://www.instagram.com/lmgbouwwerken/"><FontAwesomeIcon icon={faInstagram} /></a></span>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="col-sm-12 text-dark py-2 small">
                            <a className="text-dark px-2" href={frontRouter.PRIVACYPOLICY}>privacy policy</a>&#x20;&#x20;
                            <a className="text-dark px-2" href={frontRouter.TERMSOFSERVICE}>terms of service</a>&#x20;&#x20;
                            <a className="text-dark px-2" href={frontRouter.DISCLAIMER}>disclaimer</a>
                            </div>
                        <div className="col-sm-12"><span>&#169; All Rights Reserved, Developed by Alfano Angelo</span>	</div>
                    </div>                
                </div>
            </footer>
    );
  }
}

export default Footer;