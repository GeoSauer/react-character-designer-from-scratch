import React from 'react';

import './Character.css';

export default function Character({ head, body, pants }) {
  return (
    <div className="character">
      <div className="display head">
        <img src={`/Head/${head}.png`} />
      </div>
      <div className="display body">
        <img src={`/Body/${body}.png`} />
      </div>
      <div className="display pants">
        <img src={`/Pants/${pants}.png`} />
      </div>
    </div>
  );
}
