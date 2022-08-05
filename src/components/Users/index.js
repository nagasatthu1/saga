import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import Header from "../Header";
import { getUsers } from "./action";
import { makeSelectUsers } from "./selector";

function Users(props) {
  const { onGet, makeUsers } = props;
  console.log(props);
  const { state } = useLocation;

  useEffect(() => {
    onGet();
  }, [state]);

  console.log(makeUsers);

  return (
    <div>
      <Header />
      <h1>User Page</h1>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  makeUsers: makeSelectUsers()
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onGet: () => dispatch(getUsers())
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Users);
