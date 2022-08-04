import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { addCount, resetCount, subtractCount } from "./action";
import { makeSelectCount } from "./selector";
import Header from "../Header";

function CounterApp(props) {
  const { onAdd, onSubtract, onReset, makeCount } = props;
  console.log(props);

  return (
    <>
      <Header />
      <h1>Counter App</h1>
      <MDBBtn
        size="sm"
        onClick={() => {
          onAdd();
        }}
      >
        Add
      </MDBBtn>
      <MDBBtn
        size="sm"
        onClick={() => {
          onSubtract();
        }}
      >
        Subtract
      </MDBBtn>
      <MDBBtn
        size="sm"
        onClick={() => {
          onReset();
        }}
      >
        Reset
      </MDBBtn>
      <input type="text" value={makeCount} />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  makeCount: makeSelectCount()
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => {
      dispatch(addCount());
    },
    onSubtract: () => {
      dispatch(subtractCount());
    },
    onReset: () => {
      dispatch(resetCount());
    }
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CounterApp);
