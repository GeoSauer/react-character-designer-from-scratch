import React from 'react';

import '../controls/Controls';
import './Catchphrases.css';

export default function Catchphrases({ phrase }) {
  return (
    <div className="catchphrases-container">
      <ul className="catchphrases">
        {phrase.map((phrases) => {
          return <li key={phrases}>{phrases}</li>;
        })}
      </ul>
    </div>
  );
}
