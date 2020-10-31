import React from "react";

function Employee(props) {
  return (
    <tr id={props.id}>
      <td className="align-text-bottom">
        <img className="float-left mr-2" alt={props.fullname} src={props.image} />
        <p>{props.fullname}</p>
      </td>
      <td>
        <p>{props.email}</p>
      </td>
      <td>
          <p>Generic Phone Number</p>
      </td>
    </tr>
  );
}

export default Employee;
