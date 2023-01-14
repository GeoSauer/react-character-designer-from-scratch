import React, { useState } from 'react';

import './Controls.css';

export default function Controls({
  head,
  setHead,
  body,
  setBody,
  pants,
  setPants,
  setPhrases,
  setHeadCount,
  setBodyCount,
  setPantsCount,
}) {
  const [phraseInput, setPhraseInput] = useState('');

  const submitPhrase = () => {
    setPhrases((currentState) => [...currentState, phraseInput]);
    setPhraseInput('');
  };

  const newHead = (event) => {
    setHead(event.target.value);
    setHeadCount((currentState) => {
      return currentState + 1;
    });
  };
  const newBody = (event) => {
    setBody(event.target.value);
    setBodyCount((currentState) => {
      return currentState + 1;
    });
  };
  const newPants = (event) => {
    setPants(event.target.value);
    setPantsCount((currentState) => {
      return currentState + 1;
    });
  };

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
        <select value={pants} onChange={newPants}>
          <option value="bottom">Stonks</option>
          <option value="lady-legs">Strut</option>
          <option value="legs">Agile</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="catchphrase">Add a catch phrase</label>
        <input
          type="text"
          value={phraseInput}
          onChange={(event) => setPhraseInput(event.target.value)}
          required
        />
        <button onClick={submitPhrase}>ADD</button>
      </div>
    </div>
  );
}
