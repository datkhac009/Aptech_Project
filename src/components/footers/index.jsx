import { faCarSide, faFaceLaugh, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_help">
                <p className="car"><span><FontAwesomeIcon icon={faCarSide} /> </span>FREE Shipping on orders of $25+</p>
                <p className="phone"> <span><FontAwesomeIcon icon={faPhone} /></span> Questions? Call us toll-free at <a href="#"><span className="underline ">0327356623</span></a></p>
                <p className="laugh"> <span><FontAwesomeIcon icon={faFaceLaugh} /></span> 100% Satisfaction Guaranteed!</p>
            </div>

            <div className="footer__container">
                <div className="footer__info">
                    <div className="info">
                        <h3>Customer Care</h3>
                        <p>Shipping & Packaging</p>
                        <p>Recipes</p>
                        <p>Gift Certificates</p>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                    </div>
                    <div className="info">
                        <h3>Our Company</h3>
                        <p>About Us</p>
                        <p>Private Label</p>
                        <p>Testimonials</p>
                        <p>Affiliate Program</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="info">
                        <h3>Shop the Store</h3>
                        <p>Spices</p>
                        <p>Seasonings</p>
                        <p>Dehydrated Fruits & Vegetables</p>
                        <p>Gourmet Salts</p>
                        <p>Organic</p>
                        <p>Gifts & Sets</p>
                        <p>Member Exclusives</p>
                    </div>
                    <div className="info">
                        <h3>Connect With Us</h3>
                        <div className="info__social">
                        <FontAwesomeIcon icon={faPhone} />
                        <FontAwesomeIcon icon={faPhone} />
                        <FontAwesomeIcon icon={faPhone} />
                        <FontAwesomeIcon icon={faPhone} />
                        </div>
                    </div>
                    <div className="info">
                        <h3>Subscribe & Save!</h3>
                        <p>Get a 10% off coupon when you sign up for our email newsletter.</p>
                        <div className="info__contact">
                            <input type="text" placeholder="Your email address"/>
                            <button className="bg-[#333] border-[#333] pb-1 pt-1 pl-[20px] pr-[20px] text-[#fff] uppercase text-[12px] ml-3">Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
