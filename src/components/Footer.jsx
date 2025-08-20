import React from 'react'

import './Footer.css'

import unionIconYellow from '../assets/icons/Union-yellow.png';
import unionIconRed from '../assets/icons/Union-red.png';
import copyrightIcon from '../assets/icons/copyright.png';

const Footer = () => {
    return (
        <footer>
            <div className='footer-top'>
                <div className='footer-top-container'>
                    <img src={unionIconYellow} alt="" />
                    <img src={unionIconRed} alt="" />
                </div>
            </div>

            <div class="container footer-container">

                {/* <!-- Brand + Description --> */}
                <div class="footer-section brand">
                    <div class="logo">Cyber.AI - Cyber Punk Website</div>
                    <p class="description">
                        Explore the high-tech, low-life world where the lines between humanity
                    </p>
                </div>

                {/* <!-- Information --> */}
                <div class="footer-section info">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="#">Press Centre</a></li>
                        <li><a href="#">Our Blog</a></li>
                        <li><a href="#">Term and Condition</a></li>
                    </ul>
                </div>

                {/* <!-- Menu --> */}
                <div class="footer-section menu">
                    <h4>Menu</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                {/* <!-- Contact --> */}
                <div class="footer-section contact">
                    <h4>Contact</h4>
                    <ul>
                        <li>Phone : +123 456 789</li>
                        <li>Email   : @example.com</li>
                        <li>Address Line 01</li>
                    </ul>
                </div>
            </div>

            <div class="container footer-bottom">
                {/* <!-- Copyright --> */}
                <div class="footer-left copyright">
                    <span class="copyright-icon">
                        <img src={copyrightIcon} alt="Copyright" />
                    </span>
                    Cyber.AI - Cyber Punk 2024. All rights reserved.
                </div>

                {/* <!-- Navigation --> */}
                <nav class="footer-nav">
                    <ul>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Cookies</a></li>
                    </ul>
                </nav>

                {/* <!-- Socail Icons --> */}
                <div class="footer-icons">
                    <a href="#">
                        <div className='icon-circle'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.07041 4.7541C4.22924 4.7541 5.16865 3.81469 5.16865 2.65586C5.16865 1.49703 4.22924 0.557617 3.07041 0.557617C1.91158 0.557617 0.972168 1.49703 0.972168 2.65586C0.972168 3.81469 1.91158 4.7541 3.07041 4.7541Z" fill="white" />
                                <path d="M4.81882 6.15576H1.32175C1.12871 6.15576 0.972046 6.31243 0.972046 6.50547V16.9967C0.972046 17.1897 1.12871 17.3464 1.32175 17.3464H4.81882C5.01186 17.3464 5.16853 17.1897 5.16853 16.9967V6.50547C5.16853 6.31243 5.01186 6.15576 4.81882 6.15576Z" fill="white" />
                                <path d="M15.24 5.57352C13.7453 5.06155 11.8758 5.51127 10.7546 6.31769C10.7162 6.16732 10.5791 6.05541 10.4161 6.05541H6.91904C6.726 6.05541 6.56934 6.21208 6.56934 6.40512V16.8963C6.56934 17.0894 6.726 17.246 6.91904 17.246H10.4161C10.6092 17.246 10.7658 17.0894 10.7658 16.8963V9.35665C11.3309 8.86985 12.059 8.71458 12.6549 8.96777C13.2327 9.21187 13.5635 9.80777 13.5635 10.6016V16.8963C13.5635 17.0894 13.7201 17.246 13.9132 17.246H17.4103C17.6033 17.246 17.76 17.0894 17.76 16.8963V9.89729C17.7201 7.0234 16.3681 5.95959 15.24 5.57352Z" fill="white" />
                            </svg>
                        </div>
                    </a>
                    <a href="#">
                        <div className='icon-circle'>
                            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.72121 3.41569H9.996C10.2053 3.41569 10.3751 3.25564 10.3751 3.05843V0.914876C10.3751 0.717669 10.2053 0.557617 9.996 0.557617H7.72121C5.42215 0.557617 3.55076 2.32033 3.55076 4.48747V6.98828H0.896832C0.687551 6.98828 0.5177 7.14833 0.5177 7.34554V9.48909C0.5177 9.6863 0.687551 9.84635 0.896832 9.84635H3.55076V17.3488C3.55076 17.546 3.72061 17.7061 3.92989 17.7061H6.20468C6.41396 17.7061 6.58381 17.546 6.58381 17.3488V9.84635H9.23774C9.40076 9.84635 9.54559 9.74775 9.59791 9.60199L10.3562 7.45843C10.3948 7.34983 10.3751 7.22979 10.3039 7.13619C10.2318 7.0433 10.1181 6.98828 9.996 6.98828H6.58381V4.48747C6.58381 3.89656 7.09412 3.41569 7.72121 3.41569Z" fill="white" />
                            </svg>

                        </div>
                    </a>
                    <a href="#">
                        <div className='icon-circle'>
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2751 2.17492C17.1602 2.0451 16.9751 2.01245 16.8232 2.09252C16.7287 2.14227 16.5511 2.20756 16.3402 2.27208C16.6063 1.90829 16.8201 1.50097 16.9146 1.13484C16.9554 0.977047 16.8957 0.810697 16.7657 0.71664C16.6357 0.62336 16.4627 0.62336 16.3327 0.71664C16.1279 0.863556 15.1394 1.30508 14.5144 1.44811C13.1019 0.175617 11.4582 0.0434708 9.74944 1.06955C8.36039 1.90363 8.05809 3.59977 8.11704 4.63362C4.93764 4.3188 2.96139 2.59157 1.84894 1.16205C1.7711 1.06178 1.64564 1.00892 1.52775 1.01669C1.40381 1.02602 1.29196 1.09676 1.22848 1.20636C0.702482 2.11972 0.556624 3.12948 0.808285 4.1268C0.94583 4.67093 1.18615 5.15054 1.46502 5.53921C1.33126 5.47158 1.20203 5.38685 1.08035 5.2858C0.968502 5.19096 0.812064 5.17308 0.679809 5.23605C0.548311 5.30057 0.464424 5.43738 0.464424 5.5874C0.464424 7.29987 1.50583 8.44254 2.47847 9.03953C2.32127 9.0201 2.15728 8.98434 1.99177 8.93226C1.84969 8.88795 1.69552 8.93226 1.59728 9.04731C1.49903 9.16158 1.4756 9.32482 1.53682 9.46396C2.08322 10.7069 3.11858 11.562 4.39956 11.8721C3.28106 12.5476 1.78394 12.8788 0.413034 12.7163C0.235435 12.6907 0.0661492 12.8065 0.0102245 12.9822C-0.0457002 13.1578 0.0276065 13.3506 0.184045 13.4408C2.26384 14.6418 4.14412 15.0709 5.76896 15.0709C8.13367 15.0709 9.95878 14.1629 11.0697 13.4035C14.0647 11.3591 15.9314 7.68853 15.6714 4.4043C16.1513 4.03973 16.8693 3.36657 17.3144 2.64287C17.4066 2.49673 17.39 2.30395 17.2751 2.17492Z" fill="white" />
                            </svg>

                        </div>
                    </a>
                </div>
            </div>


        </footer>
    )
}

export default Footer