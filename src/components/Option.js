import React from 'react';

const Option = (props) => (
  <li>
    <h4>
      {props.optionText}
      <button
        onClick={() => props.handleDeleteOption(props.optionText)}
      >
        Remove
      </button>
    </h4>
  </li>
);

export default Option;
