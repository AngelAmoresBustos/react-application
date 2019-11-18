import React from "react";

// Styles
import "./style.scss";

// Images
import PlaceholderImg from "../../img/placeholder-user.jpg";
import SortIcon from "../../img/sort-icon.png";

function DataTable(props) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th></th>
          <th
            onClick={() => {
              props.onSortChange("name");
            }}
          >
            <span className="column-sort">
              First Name
              <img src={SortIcon} alt="First Name" />
            </span>
          </th>
          <th
            onClick={() => {
              props.onSortChange("surname");
            }}
          >
            <span className="column-sort">
              Last Name
              <img src={SortIcon} alt="Last Name" />
            </span>
          </th>
          <th
            onClick={() => {
              props.onSortChange("email");
            }}
          >
            <span className="column-sort">
              E-Mail
              <img src={SortIcon} alt="E-Mail" />
            </span>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users &&
          props.users.map(user => (
            <tr key={user.id}>
              <td className="field-avatar">
                <img
                  src={user.avatar ? user.avatar : PlaceholderImg}
                  alt={user.first_name}
                />
              </td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td className="field-actions">
                <button
                  className="field-actions__update"
                  onClick={() => {
                    props.updateRow(user);
                  }}
                >
                  Update
                </button>
                <button
                  className="field-actions__delete"
                  onClick={() => props.deleteRow(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default DataTable;