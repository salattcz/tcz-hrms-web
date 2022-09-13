import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateUser } from '../../helpers/UsersAPIs';

import './Userdetails.css';

function EditProfileModal({ userId }) {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const [team, setTeam] = useState('');
  const [reportingManager, setReportingManager] = useState('');
  const [projects, setProjects] = useState('');

  const handleTeamInput = (e) => {
    setTeam(e.target.value);
  };
  const handleManagerInput = (e) => {
    setReportingManager(e.target.value);
  };
  const handleProjectInput = (e) => {
    setProjects(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ team, reportingManager, projects, userId }).then((res) => {
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
