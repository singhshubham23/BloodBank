
import React from "react";

function Dashboard() {
  return (
    <div className="container mt-4">
      <h2 className="text-danger">Admin Dashboard</h2>
      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card text-center shadow p-4 bg-light">
            <h4>Total Donors</h4>
            <p className="display-6 text-danger">120</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow p-4 bg-light">
            <h4>Blood Units Available</h4>
            <p className="display-6 text-success">85</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow p-4 bg-light">
            <h4>Pending Requests</h4>
            <p className="display-6 text-warning">10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
