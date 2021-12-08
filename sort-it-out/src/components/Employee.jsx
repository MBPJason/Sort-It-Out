import React from "react";

function Employee(props) {
  return (
    <tr id={props.id}>
      <td>
        <img
          style={{ height: "auto", width: 72 }}
          className='mx-auto d-block'
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
        <p>{props.phone}</p>
      </td>
    </tr>
  );
}

export default Employee;
