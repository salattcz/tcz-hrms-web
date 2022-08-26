import React from 'react';
import './registration.css';
function Registration() {
  return (
    <div className="container py-5 h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow-2-strong card-registration">
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Register</h3>
              <form>
                <div className="row">
                  <div className="col-md-12 mb-12">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="firstName">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="CompanyName"
                        className="form-control form-control-lg"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="emailAddress">
                        Company Email
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        className="form-control form-control-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="phoneNumber">
                        Company contact
                      </label>
                      <input
                        type="tel"
                        id="Company contact"
                        className="form-control form-control-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="phoneNumber">
                        company Description
                      </label>
                      <input
                        type="tel"
                        id="company Description"
                        className="form-control form-control-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="phoneNumber">
                        Admin Mails
                      </label>
                      <input
                        type="text"
                        id="Admin Mails"
                        className="form-control form-control-lg"
                        required
                      />
                      <br />
                      <input
                        type="text"
                        id="Admin Mails"
                        className="form-control form-control-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="upload">
                        Bulk upload
                      </label>
                      <input
                        type="file"
                        id="Bulk upload"
                        className="form-control form-control-lg"
                        multiple
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-2">
                  <input className="btn btn-dark btn-lg" type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
