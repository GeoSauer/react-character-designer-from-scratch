import React from 'react';

import '../controls/Controls';
import './Counter.css';

export default function Counter({ headCount, bodyCount, pantsCount }) {
  return (
    <div className="counter">
      You have swapped the head {headCount} times, the body {bodyCount} times, and the pants{' '}
      {pantsCount} times, for a total of {headCount + bodyCount + pantsCount} abominations. And
      nobody can forget their feverish wails:
    </div>
  );
}
