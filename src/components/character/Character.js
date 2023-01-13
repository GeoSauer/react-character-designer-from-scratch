import React from 'react';

import './Character.css';

export default function Character({ head }) {
  return (
    <div className="character">
      <div className="display head">
        <img src={`/Head/${head}.png`} />
      </div>
      <div className="display body"></div>
      <div className="display pants"></div>
    </div>
  );
}
