import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateUser } from '../../helpers/UsersAPIs';

import './Userdetails.css';

function EditProfileModal({ userId }) {
  var currentUser = localStorage.getItem('Profile');
  const userData = JSON.parse(currentUser);

  const userRole = userData.result.role;

  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const [team, setTeam] = useState('');
  const [reportingManager, setReportingManager] = useState('');
  const [projects, setProjects] = useState('');

  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [mailingAddress, setMailingAddress] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const handleTeamInput = (e) => {
    setTeam(e.target.value);
  };
  const handleManagerInput = (e) => {
    setReportingManager(e.target.value);
  };
  const handleProjectInput = (e) => {
    setProjects(e.target.value);
  };
  const handleMobileInput = (e) => {
    setMobileNumber(e.target.value);
  };
  const handleAddressInput = (e) => {
    setAddress(e.target.value);
  };
  const handleMailingAddressInput = (e) => {
    setMailingAddress(e.target.value);
  };
  const handleBloodGroupInput = (e) => {
    setBloodGroup(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({
      team,
      reportingManager,
      projects,
      userId,
      mobileNumber,
      address,
      mailingAddress,
      bloodGroup
    }).then((res) => {
      res.status === 200 ? window.alert('User Updated Successfully') : '';
    });
  };
  return openModal ? (
    <>
      <Modal show={openModal} onHide={handleClose}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Edit user profile</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {userRole === 'admin' ? (
            <>
              <h6>Team Members:</h6>
              <input className="input-box" onChange={handleTeamInput} />
              <br />
              <br />
              <h6>Reporting Manager:</h6>
              <input className="input-box" onChange={handleManagerInput} />
              <br />
              <br />
              <h6>Current Projects:</h6>
              <input className="input-box" onChange={handleProjectInput} />
            </>
          ) : (
            <>
              <h6>Mobile Number:</h6>
              <input className="input-box" onChange={handleMobileInput} />
              <br />
              <br />
              <h6>Permanent Address:</h6>
              <input className="input-box" onChange={handleAddressInput} />
              <br />
              <br />
              <h6>Mailing Address:</h6>
              <input className="input-box" onChange={handleMailingAddressInput} />
              <br />
              <br />
              <h6>Blood Group:</h6>
              <input className="input-box" onChange={handleBloodGroupInput} />
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ) : (
    <>
      {' '}
      <Button onClick={handleClick}>Edit Profile</Button>
    </>
  );
}

export default EditProfileModal;
