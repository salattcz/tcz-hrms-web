import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditProfileModal() {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return openModal ? (
    <>
      <Modal show={openModal} onHide={handleClose}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
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
