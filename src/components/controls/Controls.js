import React from 'react';

import './Controls.css';

export default function Controls() {
  return (
    <div className="editor">
      <div className="form-control">
        <label htmlFor="head">Head</label>
        <select>
          <option>Head 1</option>
          <option>Head 2</option>
          <option>Head 3</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="body">Body</label>
        <select>
          <option>Body 1</option>
          <option>Body 2</option>
          <option>Body 3</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="pants">Pants</label>
        <select>
          <option>Pants 1</option>
          <option>Pants 2</option>
          <option>Pants 3</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="catchphrase">Add a catch phrase</label>
        <input type="text" />
        <button>ADD</button>
      </div>
    </div>
  );
}
