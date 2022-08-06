import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import Header from "../Header";
import { deleteUser, getUsers } from "./action";
import { makeSelectUsers } from "./selector";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdb-react-ui-kit";

function Users(props) {
  const { onGet, onDelete, makeUsers } = props;
  console.log(props);
  const { state } = useLocation;
  const navigate = useNavigate();

  useEffect(() => {
    onGet();
  }, [state]);

  return (
    <>
      <Header />
      <h1>Users</h1>
      <MDBTable bordered>
        <MDBTableHead style={{ fontSize: 20 }}>
          <tr>
            <th scope="col">#Id</th>
            <th scope="col">Name</th>
            <th scope="col">Avatar</th>
            <th scope="col">Address</th>
            <th scope="col">Birthday</th>
            <th scope="col">
              <MDBBtn>Add</MDBBtn>
            </th>
          </tr>
        </MDBTableHead>
        {makeUsers.map((item, index) => {
          return (
            <MDBTableBody key={index}>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.avatar}</td>
                <td>{item.address}</td>
                <td>{item.birthday}</td>
                <td>
                  <MDBBtn
                    color="secondary"
                    onClick={() => {
                      navigate(`../editUser/${item.id}`);
                    }}
                  >
                    Edit
                  </MDBBtn>
                  <MDBBtn
                    color="danger"
                    onClick={() => {
                      onDelete(item.id);
                      navigate("../users");
                    }}
                  >
                    Delete
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          );
        })}
      </MDBTable>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  makeUsers: makeSelectUsers()
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onGet: () => dispatch(getUsers()),
    onDelete: (data) => dispatch(deleteUser(data))
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Users);
