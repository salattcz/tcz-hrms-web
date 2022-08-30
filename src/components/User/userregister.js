import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { addSingleUserApi } from '../../helpers/UsersAPIs';
import './userregister.css';
function User() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [username, setUsername] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [role, setRole] = useState('');

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleDobInput = (e) => {
    setDob(e.target.value);
  };
  const handleGenderInput = (e) => {
    setGender(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handleDepartmentInput = (e) => {
    setDepartment(e.target.value);
  };
  const handleMobileNumberInput = (e) => {
    setMobileNumber(e.target.value);
  };
  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };
  const handleJobTitleInput = (e) => {
    setJobTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name &&
      !dob &&
      !gender &&
      !email &&
      !department &&
      !mobileNumber &&
      !username &&
      !jobTitle &&
      !role
    ) {
      window.alert('Please fill all the details');
    } else {
      addSingleUserApi({
        name,
        dob,
        gender,
        email,
        department,
        mobileNumber,
        username,
        jobTitle,
        role
      }).then((res) => {
        if (res.status === 200) {
          window.alert('User added successfully');
          navigate('/Admin');
        } else if (res.status === 400) {
          window.alert('User already exists');
        }
      });
    }
  };

  return (
    <div>
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">User Register</h3>
                <form>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="firstName">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="form-control form-control-lg"
                          required
                          onChange={handleNameInput}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <label className="control-label" htmlFor="date">
                          Date Of Birth
                        </label>
                        <input
                          className="form-control"
                          id="date"
                          name="date"
                          placeholder="MM/DD/YYY"
                          type="date"
                          required
                          onChange={handleDobInput}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Gender: </h6>

                      <div
                        className="form-check form-check-inline"
                        value={gender}
                        onChange={handleGenderInput}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="female"
                        />
                        <label className="form-check-label" htmlFor="femaleGender">
                          Female
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="male"
                          required
                        />
                        <label className="form-check-label" htmlFor="maleGender">
                          Male
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="otherGender"
                          value="other"
                          required
                        />
                        <label className="form-check-label" htmlFor="otherGender">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="emailAddress">
                          Email
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
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="phoneNumber">
                          Department
                        </label>
                        <input
                          type="text"
                          id="Department"
                          className="form-control form-control-lg"
                          required
                          onChange={handleDepartmentInput}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="phoneNumber">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          className="form-control form-control-lg"
                          required
                          onChange={handleMobileNumberInput}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="phoneNumber">
                          Username
                        </label>
                        <input
                          type="text"
                          id="Username"
                          className="form-control form-control-lg"
                          required
                          onChange={handleUsernameInput}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="phoneNumber">
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="Job Title"
                          className="form-control form-control-lg"
                          required
                          onChange={handleJobTitleInput}
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

                  <div className="row">
                    <div className="col-12">
                      <select
                        value={role}
                        className="select form-control-lg"
                        onChange={(e) => setRole(e.target.value)}>
                        <option value="" hidden>
                          Role
                        </option>
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option>
                      </select>
                      <label className="form-label select-label">Role</label>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <input
                      className="btn btn-primary btn-lg"
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
    </div>
  );
}

export default User;
