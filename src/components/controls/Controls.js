import React from 'react';

import './Controls.css';

export default function Controls({ head, setHead, body, setBody }) {
  const newHead = (event) => setHead(event.target.value);
  const newBody = (event) => setBody(event.target.value);

  return (
    <div className="editor">
      <div className="form-control">
        <label htmlFor="head">Head</label>
        <select value={head} onChange={newHead}>
          <option value="chewbacca">Dog</option>
          <option value="shrek">Onion</option>
          <option value="sonic">Pangolin</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="body">Body</label>
        <select value={body} onChange={newBody}>
          <option value="hawaiian-shirt">Classy</option>
          <option value="torso">Sophisticated</option>
          <option value="trunk">Pristine</option>
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
