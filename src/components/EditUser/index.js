import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { useNavigate, useParams } from "react-router-dom";
import { makeSelectAPILocalState, makeSelectAPILocalData } from "./selector";
import { editUser, getEditUser, mergeData, postUser } from "./action";

function EditUser(props) {
  const navigate = useNavigate();
  const params = useParams();
  const { onGet, onPost, onPut, onMergeData, localState, localData } = props;
  console.log(props);

  const { postSuccess } = localState;
  const id = params.id;

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    let newData = { ...localData };
    newData[name] = value;
    onMergeData(localState, newData);
  }

  useEffect(() => {
    if (postSuccess) {
      navigate(-1);
    }
  }, [postSuccess]);

  useEffect(() => {
    return () => {
      onMergeData({}, {});
    };
  }, []);

  useEffect(() => {
    if (id !== "add") {
      onGet(id);
    }
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Avatar</th>
            <th>Birthday</th>
            <th>
              <button
                onClick={() => {
                  if (id !== "add") {
                    onPut(localData);
                  } else {
                    onPost(localData);
                  }
                }}
              >
                {id !== "add" ? "Put" : "Post"}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                value={localData.name}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                name="address"
                value={localData.address}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                name="avatar"
                value={localData.avatar}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                name="birthday"
                value={localData.birthday}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  localState: makeSelectAPILocalState(),
  localData: makeSelectAPILocalData()
});

const mapDispatchToProps = (dispatch) => {
  return {
    onPost: (data) => {
      dispatch(postUser(data));
    },
    onMergeData: (localState, localData) => {
      dispatch(mergeData(localState, localData));
    },
    onPut: (data) => {
      dispatch(editUser(data));
    },
    onGet: (data) => {
      dispatch(getEditUser(data));
    }
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(EditUser);
