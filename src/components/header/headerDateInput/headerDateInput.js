import React, {Fragment} from "react";

const HeaderDateInput = ({date}) => {
  return (
    <Fragment>
      <input
        type="date"
        className="form-control"
        id="pictureDateInput"
        value={date}
      />
    </Fragment>
  );
};

export default HeaderDateInput;
