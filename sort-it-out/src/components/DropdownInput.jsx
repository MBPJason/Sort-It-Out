import React from "react";

export default function DropdownInput({
  title,
  value,
  onChange,
  option1,
  option2,
  sort1,
  sort2
}) {
  return (
    <div className='input-group'>
      <div className='input-group-prepend'>
        <div className='dropdown'>
          <button
            type='button'
            className='btn btn-secondary dropdown-toggle'
            id={`dropdownMenu${title}`}
            data-toggle='dropdown'
          >
            {title}
          </button>
          <div className='dropdown-menu'>
            <p className='dropdown-item' onClick={sort1}>
              {option1}
            </p>
            <p className='dropdown-item' onClick={sort2}>
              {option2}
            </p>
          </div>
        </div>
      </div>
      <input
        type='text'
        className='form-control'
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}
