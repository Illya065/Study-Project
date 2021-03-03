import React, { useEffect, useState } from "react";

const ProfileStatusHook = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivatedEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className="status">
      {!editMode && (
        <div className="status__data">
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
      )}

      {editMode && (
        <div className="status__input">
          <input
            onChange={onChangeStatus}
            autoFocus={true}
            onBlur={deactivatedEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusHook;
