import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ContactUs() {
    return (
      <>
<section className="contact-section">
<div className="map-container">
    <h2>Our Location</h2>
    <div ><iframe width="100%" height="520"  src="https://maps.google.com/maps?width=100%25&amp;height=520&amp;hl=en&amp;q=%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D9%85+(%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D9%85)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>
    
</div>
<div className="contact-info" id="contact">
    <h2>اتصل بنا </h2>
    <p>لاي استفسار ،لاتتردد بالاتصال بنا </p>
            
    <p><a href="tel:+1234567890" className="phone-number" >+1 (234) 567-890</a></p>
    <p>Email us at: <a href="mailto:info@example.com">info@example.com</a></p>
</div>
</section>
</>
  );
}

export default ContactUs;

