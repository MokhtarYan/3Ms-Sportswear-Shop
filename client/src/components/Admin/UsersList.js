import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/actionUsers";
import userReducer from "../../redux/reducers/userReducer";
import { Button, Modal, Spinner } from "react-bootstrap";
import { Table } from "@nextui-org/react";
import UpdateUser from "./UpdateUser";

const UsersList = ({ lan }) => {
  const { usersList, loading } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    console.log(usersList);
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Table
          css={{
            height: "auto",
            minWidth: "40%",
            width: "100%",
          }}
        >
          <Table.Header>
            <Table.Column className=" title">
              {lan === "FR" ? "Nom d'utilisateur" : "User's Name"}
            </Table.Column>
            <Table.Column className=" title">
              {lan === "FR" ? "Adresse e-mail" : "E-mail adresse"}
            </Table.Column>
            <Table.Column className=" title">
              {lan === "FR" ? "Rôle" : "Role"}
            </Table.Column>
            <Table.Column className=" title">
              {lan === "FR" ? "Bloqué" : "Blocked"}
            </Table.Column>
            <Table.Column className=" title">
              {lan === "FR" ? "Modifier" : "Edit"}
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {usersList.map((el) => (
              <Table.Row key={el._id}>
                <Table.Cell>{el.fullName}</Table.Cell>
                <Table.Cell>{el.email}</Table.Cell>
                <Table.Cell>{el.userRole}</Table.Cell>
                <Table.Cell>
                  {el.blocked ? "Blocked" : "Not Blocked"}
                </Table.Cell>
                <Table.Cell>
                  <UpdateUser user={el} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </div>
  );
};

export default UsersList;
