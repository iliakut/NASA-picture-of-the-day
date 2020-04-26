import React, {Fragment} from "react";

const HeaderDateInput = () => {
  const now = new Date();
  const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`;
  return (
    <Fragment>
      <input
        type="date"
        className="form-control"
        id="pictureDateInput"
        value="2020-03-03"
      />
    </Fragment>
  );
};

export default HeaderDateInput;
