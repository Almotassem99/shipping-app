
const Footer: React.FC = () => {
    return (
        <footer className="footer bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    
                     {/* Contact Info */}
                    <div className="col-md-4">
                        <h5 className="footer-title">للتواصل </h5>
                        <p>طرابلس، ليبيا <br />
                            Email: <a href="mailto:info@shippingco.com">info@shippingco.com</a><br />
                            Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </p>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5 className="footer-title">Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                    
                  
                    {/* Company Info */}
                     <div className="col-md-4 mb-3 mb-md-0">
                        <h5 className="footer-title">شركة البريق الدائم</h5>
                        <p>لخدمات شحن مبتكره مصممة خصيصا لتلبية احتياجاتك </p>
                        <p>&copy; {new Date().getFullYear()} Shipping Co. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;