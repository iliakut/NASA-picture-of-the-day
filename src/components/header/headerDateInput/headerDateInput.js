import React, {Fragment} from "react";

const HeaderDateInput = ({date, onDateChange}) => {
  return (
    <Fragment>
      <input
        type="date"
        className="form-control"
        id="pictureDateInput"
        value={date}
        onChange={onDateChange}
      />
    </Fragment>
  );
};

export default HeaderDateInput;
