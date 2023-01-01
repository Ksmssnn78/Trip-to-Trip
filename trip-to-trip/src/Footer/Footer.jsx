import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h4>Mohammed Ashrafujjaman</h4>
                        <ul className='list-unstyled'>
                            <li>01866331540</li>
                            <li>mashraf9881@gmail.com</li>
                        </ul>
                    </div>

                    <div className='col'>
                        <h4>Mohammad Sakib Chowdhury</h4>
                        <ul className='list-unstyled'>
                            <li>01760886380</li>
                            <li>mdsakibchy071@gmail.com</li>
                        </ul>
                    </div>

                    <div className='col'>
                        <h4>Tonmoy Roy</h4>
                        <ul className='list-unstyled'>
                            <li>01877889872</li>
                            <li>tonmoyroy@gmail.com</li>
                        </ul>
                    </div>

                </div>
                <div className='row'>
                    <p className='col-sm'>
                    © 2023 Trip to Trip | All right reserved by Team Geekbytes | Terms of Service | Privacy

                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;