import React, {Fragment} from "react";

const HeaderDateInput = () => {
  const now = new Date();
  const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`;
  console.log(date)
  return (
    <Fragment>
      <input
        type="date"
        className="form-control"
        id="pictureDateInput"
        value="2020-03-03"
      />
      <label className="col-form-label text-primary"
             htmlFor="pictureDateInput">
        Enter Date
      </label>
    </Fragment>
  );
};

export default HeaderDateInput;
