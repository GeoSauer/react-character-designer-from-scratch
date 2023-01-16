import React from 'react';

import '../controls/Controls';
import './Counter.css';

export default function Counter({ headCount, bodyCount, pantsCount, phrases }) {
  return (
    <div className="catchphrases-container">
      <div className="counter">
        You have swapped the head {headCount} times, the body {bodyCount} times, and the pants{' '}
        {pantsCount} times, for a total of {headCount + bodyCount + pantsCount} abominations. And
        nobody can forget their feverish wails:
      </div>
      <ul className="catchphrases">
        {phrases.map((phrase) => {
          return <li key={phrase}>{phrase}</li>;
        })}
      </ul>
    </div>
  );
}
