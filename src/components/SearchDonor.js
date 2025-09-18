// src/components/SearchDonor.js
import React, { useState } from "react";

function SearchDonor() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");
  const [results, setResults] = useState([]);

  const dummyDonors = [
    { name: "Rahul Sharma", bloodGroup: "A+", city: "Delhi", phone: "9876543210" },
    { name: "Priya Verma", bloodGroup: "O-", city: "Mumbai", phone: "9123456780" },
    { name: "Amit Kumar", bloodGroup: "B+", city: "Delhi", phone: "9988776655" },
    { name: "Shaswat Kashyap", bloodGroup: "O+", city: "Durgapur", phone: "9988666655" },
    { name: "Ankit Gupta", bloodGroup: "B-", city: "Durgapur", phone: "5588776655" },
    { name: "Shubham Kumar", bloodGroup: "B+", city: "Durgapur", phone: "3344556677" },
  ];

  const handleSearch = () => {
    const filtered = dummyDonors.filter(
      (d) =>
        (bloodGroup === "" || d.bloodGroup === bloodGroup) &&
        (city === "" || d.city.toLowerCase() === city.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-danger text-center">🔍 Search Donors</h2>
      <div className="card shadow p-4 mt-3">
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">Blood Group</label>
            <select
              className="form-select"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option value="">All</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city"
            />
          </div>

          <div className="col-md-4 d-flex align-items-end">
            <button
              className="btn btn-danger btn-lg w-100"
              onClick={handleSearch}
            >
              🔍 Search Donor
            </button>
          </div>
        </div>

        <h5>Results:</h5>
        {results.length > 0 ? (
          <ul className="list-group">
            {results.map((donor, idx) => (
              <li key={idx} className="list-group-item">
                <strong>{donor.name}</strong> ({donor.bloodGroup}) - {donor.city}  
                📞 {donor.phone}
              </li>
            ))}
          </ul>
        ) : (
          <p>No donors found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchDonor;
