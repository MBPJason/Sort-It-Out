import React from "react";

function Employee(props) {
  return (
    <tr id={props.id}>
      <td>
        <img
          className='mr-2'
          alt={props.fullname}
          src={props.image}
        />
      </td>
      <td>
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
