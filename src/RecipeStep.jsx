import React, { useState } from 'react';

export default function RecipeStep({ stepText }) {
  /**
   * TODO #5:
   * 1. Add state for tracking if step is completed
   * 2. Update styles based on state
   */
  // Creating state to store whether or not the state is completed
  // Initialize to false since it is not submitted
  const [isComplete, setComplete] = useState(false);

  return (
    <li>
      {/* using double curlies because we are in js */}
      <label
        style={{
          textDecoration: isComplete ? 'line-through' : 'none',
        }}
      >
        {stepText}
      </label>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => setComplete(!isComplete)}
      ></input>
    </li>
  );
}
