import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/footer_logo.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import instagram_icon from "../Assets/instagram_icon.jpg";
import pinterest_icon from "../Assets/pinterest_icon.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reversed.</p>
            </div>
        </div>
    );
}

export default Footer;