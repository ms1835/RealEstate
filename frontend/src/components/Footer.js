import React from 'react'
import './css/Footer.css'
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer class="footer bg-dark">

            <div class="Footercontainer">
                <div class="Footerrow">
                    <div class="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><p>HomeBazaar@gmail.com</p></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a target="_blank" href="https://www.linkedin.com/in/mayank-singh-3a6379128/" class="social-li"> <i class="fab fa-linkedin-in"></i></a>
                            <a target="_blank" href="https://github.com/ms1835" class="social-github"> <i class="fa-brands fa-github"></i></a>
                            <a target="_blank" href="https://www.facebook.com/Mritunjay70" class="social-fb"> <i class="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer