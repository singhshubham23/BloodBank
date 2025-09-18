import React from "react";

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-danger mb-3">Welcome to Blood Bank</h1>
      <p className="lead">Donate blood, save lives ❤️</p>
      <img
        src="https://img.freepik.com/premium-vector/poster-blood-donation-with-inspirational-quotes_882884-205.jpg"
        alt="Blood Donation"
        className="img-fluid rounded mt-3"
        style={{ maxHeight: "300px" }}
      />

      <div className="mt-5">
        <h2 className="text-danger">Why Donate Blood?</h2>
        <p className="px-5">
          Every 2 seconds, someone in the world needs blood. By donating just
          one unit of blood, you can save up to <strong>3 lives</strong>.
          Donating blood is safe, simple, and helps people suffering from
          accidents, surgeries, cancer, and blood disorders.
        </p>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h4 className="text-danger">Safe & Secure</h4>
              <p>
                The donation process is completely safe, with sterile needles
                and equipment used only once.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h4 className="text-danger">Quick Process</h4>
              <p>
                Blood donation takes only 10-15 minutes, while the entire visit
                lasts less than an hour.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h4 className="text-danger">Save Lives</h4>
              <p>
                Your donation can be a lifeline for patients in need of
                emergency surgery, transfusions, and treatments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-danger">Who Can Donate?</h2>
        <ul className="list-group w-50 mx-auto text-start">
          <li className="list-group-item">✔️ Healthy individuals aged 18–65</li>
          <li className="list-group-item">✔️ Minimum weight of 50kg</li>
          <li className="list-group-item">
            ✔️ No major illness in the past 6 months
          </li>
          <li className="list-group-item">✔️ Hemoglobin levels within normal range</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
