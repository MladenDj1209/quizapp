
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const ScoreModal = ({showModal, score, totalCount}) => {
  const [show, setShow] = useState(showModal);

  let history = useHistory();

  const handleClose = () => {
    setShow(show);
    history.push("/");
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Overall Score</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {score == totalCount ? <span><b>Congratiulations! </b>Your overall score is: {score}/{totalCount}</span> : <span>Your overall score is: {score}/{totalCount}</span> }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ScoreModal;