import React from "react";

const InputSelectUser = ({ value, values, placeholder, action }) => {
  return (
    <div className="form-group">
      <select onChange={action} className="form-control" value={value}>
        <option value="">{placeholder}</option>
        {values &&
          values.map((_, i) => (
            <option key={_._id} hidden={_.disable} value={_._id}>
              {_.firstName} {_.lastName} - (
              {_.role === 0
                ? "administrateur"
                : _.role === 1
                ? "Distributeur"
                : "Vendeur"}
              )
            </option>
          ))}
      </select>
    </div>
  );
};

export default InputSelectUser;
