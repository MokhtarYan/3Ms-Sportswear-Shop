import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { editedUser } from "../../redux/actions/actionUsers";

const UpdateUser = ({ user }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [blocked, setBlocked] = useState(user.blocked);
  const [role, setRole] = useState(user.userRole);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      password: user.password,
      blocked: blocked,

      userRole: role,
      isActive: user.isActive,
      activationCode: user.activationCode,
    };

    dispatch(editedUser(updatedUser));
  };
  return (
    <div>
      {" "}
      <button onClick={handleShow}>
        <AiOutlineEdit />
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "120px",
            }}
          >
            <label htmlFor="">Block:</label>
            <select
              name=""
              id=""
              style={{ width: "80px" }}
              onChange={(e) => setBlocked(e.target.value)}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "120px",
            }}
          >
            <label htmlFor="">Role:</label>
            <select
              name=""
              id=""
              style={{ width: "80px" }}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateUser;
