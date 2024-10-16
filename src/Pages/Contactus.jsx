import React from 'react';
import Layout from '../Components/Layout/Layout';

const Contactus = () => {
  return (
    <Layout>
      <div id="wrapper">
        {/* Page Title Section */}
        <section className="section db p120" style={{ padding: '180px 0', backgroundColor:"#3F497F" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="tagline-message page-title text-center">
                  <h3>Get In Touch</h3>
                  <ul className="breadcrumb">
                    <li><a href="#" style={{ color: "#F7C04A" }}>WisePl</a></li>
                    <li className="active">Get in touch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section gb nopadtop" style={{ padding: '60px 0' }}>
          <div className="container">
            <div className="boxed boxedp4">
              <div className="row contactv2 text-center">
                {/* Contact Info */}
                <div className="col-md-4">
                  <div className="small-box">
                    <i className="flaticon-email wow fadeIn" style={{ color: "#F7C04A" }}/>
                    <h4>Contact us today</h4>
                    <h4 className='fw-bolder'> +65-8945 6089</h4>
                    <h4>+65-6272 7061</h4>
                    {/* <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p> */}
                  </div>
                </div>

                {/* Office Location */}
                <div className="col-md-4">
                  <div className="small-box">
                    <i className="flaticon-map-with-position-marker wow fadeIn" style={{ color: "#F7C04A" }}/>
                    <h4>Visit Our Office</h4>
                    <h4>Block 121, Bukit Merah Lane 1 </h4>
                    <h4> #01-12, Singapore 150121</h4>
                    {/* <p><a href="#">View on Google Map</a></p> */}
                  </div>
                </div>

                {/* Social Links */}
                <div className="col-md-4">
                  <div className="small-box">
                    <i className="flaticon-share wow fadeIn" style={{ color: "#F7C04A" }}/>
                    <h4>Follow Us</h4>
                    <h4>Twitter: @yourhandle</h4>
                    <h4>Facebook: facebook.com/yourhandle</h4>
                    {/* <p><a href="#">Email Newsletter</a></p> */}
                  </div>
                </div>
              </div>
<div style={{width: '100%'}}><iframe width="100%" height={600} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=121%20Bukit%20Merah%20View,%20Singapore%20151121+(wisePl)&t=&z=14&ie=UTF8&iwloc=B&output=embed">&lt;a href="https://www.gps.ie/"&gt;gps tracker sport&lt;/a&gt;</iframe></div>
            </div>
          </div>
        </section>

       
     
      </div>
    </Layout>
  );
};

export default Contactus;
