import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { addCount, resetCount, subtractCount } from "./action";
import { makeSelectCount } from "./selector";

function CounterApp(props) {
  const { onAdd, onSubtract, onReset, makeCount } = props;
  console.log(props);

  return (
    <>
      <h1>Counter App</h1>
      <MDBBtn outline rounded size="sm">
        Add
      </MDBBtn>
      <MDBBtn outline size="sm" rounded>
        Subtract
      </MDBBtn>
      <MDBBtn outline rounded size="sm">
        Reset
      </MDBBtn>
      <input type="text" value="0" />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  makeCount: makeSelectCount()
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => {
      dispatch(addCount);
    },
    onSubtract: () => {
      dispatch(subtractCount);
    },
    onReset: () => {
      dispatch(resetCount);
    }
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CounterApp);
