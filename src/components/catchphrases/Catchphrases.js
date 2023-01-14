import React from 'react';

import '../controls/Controls';
import './Catchphrases.css';

export default function Catchphrases({ phrases }) {
  return (
    <div className="catchphrases-container">
      <ul className="catchphrases">
        {phrases.map((phrase) => {
          return <li key={phrase}>{phrase}</li>;
        })}
      </ul>
    </div>
  );
}
