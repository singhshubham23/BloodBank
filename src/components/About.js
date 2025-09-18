import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="shadow p-4 bg-white rounded">
        <h2 className="text-danger mb-3 text-center">About Us</h2>
        <p className="text-center fs-5">
          Our mission is to create a digital platform that connects <strong>blood donors</strong> 
          with <strong>hospitals, blood banks, and patients</strong> in need.  
          Blood donation is a noble cause that saves millions of lives worldwide.  
          Through this Blood Bank Management System, we make the donation process
          faster, smarter, and more reliable.
        </p>

        <h4 className="text-danger mt-4">Why Blood Bank Management System?</h4>
        <p>
          Traditional blood donation systems often suffer from lack of information, delays, 
          and difficulty in matching donors with recipients.  
          Our system solves these problems by providing a centralized platform for:
        </p>
        <ul>
          <li>✔️ Maintaining an updated database of blood donors and recipients</li>
          <li>✔️ Tracking availability of blood units in different blood banks</li>
          <li>✔️ Quick search based on blood group, city, and urgency</li>
          <li>✔️ Secure login and registration for donors and hospitals</li>
          <li>✔️ Transparent communication between patients and donors</li>
        </ul>

        <h4 className="text-danger mt-4">Key Features</h4>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card p-3 h-100 shadow-sm">
              <h5 className="text-danger">Donor Management</h5>
              <p>
                Register, update, and manage donor details such as name, contact, 
                blood group, and donation history.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 h-100 shadow-sm">
              <h5 className="text-danger">Blood Stock Monitoring</h5>
              <p>
                Track available blood units in real-time and get instant updates about shortages.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 h-100 shadow-sm">
              <h5 className="text-danger">Hospital Integration</h5>
              <p>
                Hospitals and blood banks can easily request and manage blood units 
                through the system.
              </p>
            </div>
          </div>
        </div>

        <h4 className="text-danger mt-4">Our Vision</h4>
        <p>
          We envision a world where <strong>no patient loses life due to lack of blood</strong>.  
          By building a strong network of donors, hospitals, and organizations, 
          we aim to ensure that blood is available anytime, anywhere.
        </p>

        <div className="alert alert-danger mt-4 text-center fw-bold">
          💉 Donate Blood, Save Lives – Be Someone’s Hero Today!
        </div>
      </div>
    </div>
  );
}

export default About;
