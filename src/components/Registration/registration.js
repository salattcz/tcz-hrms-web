import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { companyRegisterAPI } from '../../helpers/CompanyAPIs';
import { addBulkUsers } from '../../helpers/UsersAPIs';
// import { addBulkUsers } from '../../helpers/UsersAPIs';
import './registration.css';

function userregister() {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyContact, setCompanyContact] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [companyAdmin, setCompanyAdmin] = useState('');
  const [file, setFile] = useState();

  const handleNameInput = (e) => {
    setCompanyName(e.target.value);
  };
  const handleEmailInput = (e) => {
    setCompanyEmail(e.target.value);
  };
  const handleContactInput = (e) => {
    setCompanyContact(e.target.value);
  };
  const handleDescriptionInput = (e) => {
    setCompanyDescription(e.target.value);
  };
  const handleAdminInput = (e) => {
    setCompanyAdmin(e.target.value);
  };
  const handleFile = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    companyRegisterAPI({
      name: companyName,
      email: companyEmail,
      contactNumber: companyContact,
      description: companyDescription,
      admins: companyAdmin,
      subscPeriod: '1month',
      subscType: 'temporary'
    }).then(
      file !== undefined
        ? addBulkUsers(formData).then((res) => {
            if (res.status === 200) {
              window.alert('Company registered successfully!');
              navigate('/');
            }
          })
        : (window.alert('Company registered successfully!'), navigate('/'))
    );
  };

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
                        onChange={handleNameInput}
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
                        onChange={handleEmailInput}
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
                        onChange={handleContactInput}
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
                        onChange={handleDescriptionInput}
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
                        onChange={handleAdminInput}
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
                        onChange={handleFile}
                      />
                      <br />
                      {/* <button className="btn btn-dark" onClick={handleFileSubmit}>
                        Go
                      </button> */}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-2">
                  <input
                    className="btn btn-dark btn-lg"
                    type="submit"
                    value="Submit"
                    onClick={handleSubmit}
                  />
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
