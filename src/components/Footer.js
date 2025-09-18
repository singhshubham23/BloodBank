import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-danger text-white mt-5 p-4 text-center">
            <div className="container">
                <div className="row">
                    {/* Quick Links */}
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                            <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
                            <li><Link to="/login" className="text-white text-decoration-none">Login</Link></li>
                            <li><Link to="/register" className="text-white text-decoration-none">Register</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4 mb-3">
                        <h5>Contact Us</h5>
                        <p>Email: support@bloodbank.org</p>
                        <p>Phone: +91 98765 43210</p>
                        <p>Address: 123 Health Street, Durgapur</p>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-4 mb-3">
                        <h5>Follow Us</h5>
                        <Link to="/" className="text-white me-3">
                            <i className="bi bi-facebook"></i> Facebook
                        </Link>
                        <br />
                        <Link to="/" className="text-white me-3">
                            <i className="bi bi-instagram"></i> Instagram
                        </Link>
                        <br />
                        <Link to="/" className="text-white">
                            <i className="bi bi-twitter"></i> Twitter
                        </Link>
                    </div>
                </div>

                <hr className="bg-light" />
                <p className="mb-0">© {new Date().getFullYear()} Blood Donation. Donate Blood, Save Lives ❤️</p>
            </div>
        </footer>
    );
}

export default Footer;
