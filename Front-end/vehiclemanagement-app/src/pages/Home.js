import React, { useState } from "react";

export default function Home() {
  const [vehicleCount,setVehicleCount ] = useState(10);
  return (
    <div>
      <div _ngcontent-nfx-c4="" className="row mt-2 mx-2">
      <div className="col-xl-3 col-md-6 position-relative">
      <sb-card-view-details background="bg-primary" link="/dashboard">
        <div className="card text-white mb-4 bg-primary">
          <div className="card-body">
            Vehicle Faults
            {/* Circular Badge */}
            {vehicleCount >= 0 && (
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',  // This creates a circle
                  backgroundColor: 'black',  // Background color of the badge
                  color: 'white',  // Text color
                  display: 'flex',  // Use flexbox for centering
                  alignItems: 'center',  // Vertically center text
                  justifyContent: 'center',  // Horizontally center text
                  fontSize: '14px',  // Font size for the count
                  fontWeight: 'bold',  // Make the count bold
                  zIndex: 1,  // Ensure the badge is on top
                }}
              >
                {vehicleCount}
              </div>
            )}
          </div>
          <div className="card-footer d-flex align-items-center justify-content-between">
            <a className="small text-white stretched-link" href="/dashboard">
              View Details
            </a>
            <div className="small text-white">
              <fa-icon className="ng-fa-icon">
                <svg
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-right"
                  className="svg-inline--fa fa-angle-right fa-w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  ></path>
                </svg>
              </fa-icon>
            </div>
          </div>
        </div>
      </sb-card-view-details>
    </div>
        <div _ngcontent-nfx-c4="" className="col-xl-3 col-md-6">
          <sb-card-view-details
            _ngcontent-nfx-c4=""
            background="bg-warning"
            link="/dashboard"
            _nghost-nfx-c11=""
          >
            <div
              _ngcontent-nfx-c11=""
              className="card text-white mb-4 bg-warning"
            >
              <div _ngcontent-nfx-c4="" className="card-body">
                Journey
              </div>
              <div
                _ngcontent-nfx-c11=""
                className="card-footer d-flex align-items-center justify-content-between"
              >
                <a
                  _ngcontent-nfx-c11=""
                  className="small text-white stretched-link"
                  href="/dashboard"
                >
                  View Details
                </a>
                <div _ngcontent-nfx-c11="" className="small text-white">
                  <fa-icon _ngcontent-nfx-c11="" className="ng-fa-icon">
                    <svg
                      role="img"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-right"
                      className="svg-inline--fa fa-angle-right fa-w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                      ></path>
                    </svg>
                  </fa-icon>
                </div>
              </div>
            </div>
          </sb-card-view-details>
        </div>
        <div _ngcontent-nfx-c4="" className="col-xl-3 col-md-6">
          <sb-card-view-details
            _ngcontent-nfx-c4=""
            background="bg-success"
            link="/dashboard"
            _nghost-nfx-c11=""
          >
            <div
              _ngcontent-nfx-c11=""
              className="card text-white mb-4 bg-success"
            >
              <div _ngcontent-nfx-c4="" className="card-body">
                Legal Issues
              </div>
              <div
                _ngcontent-nfx-c11=""
                className="card-footer d-flex align-items-center justify-content-between"
              >
                <a
                  _ngcontent-nfx-c11=""
                  className="small text-white stretched-link"
                  href="/dashboard"
                >
                  View Details
                </a>
                <div _ngcontent-nfx-c11="" className="small text-white">
                  <fa-icon _ngcontent-nfx-c11="" className="ng-fa-icon">
                    <svg
                      role="img"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-right"
                      className="svg-inline--fa fa-angle-right fa-w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                      ></path>
                    </svg>
                  </fa-icon>
                </div>
              </div>
            </div>
          </sb-card-view-details>
        </div>
        <div _ngcontent-nfx-c4="" className="col-xl-3 col-md-6">
          <sb-card-view-details
            _ngcontent-nfx-c4=""
            background="bg-danger"
            link="/dashboard"
            _nghost-nfx-c11=""
          >
            <div
              _ngcontent-nfx-c11=""
              className="card text-white mb-4 bg-danger"
            >
              <div _ngcontent-nfx-c4="" className="card-body">
                Danger Card
              </div>
              <div
                _ngcontent-nfx-c11=""
                className="card-footer d-flex align-items-center justify-content-between"
              >
                <a
                  _ngcontent-nfx-c11=""
                  className="small text-white stretched-link"
                  href="/dashboard"
                >
                  View Details
                </a>
                <div _ngcontent-nfx-c11="" className="small text-white">
                  <fa-icon _ngcontent-nfx-c11="" className="ng-fa-icon">
                    <svg
                      role="img"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-right"
                      className="svg-inline--fa fa-angle-right fa-w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                      ></path>
                    </svg>
                  </fa-icon>
                </div>
              </div>
            </div>
          </sb-card-view-details>
        </div>
      </div>
    </div>
  );
}
