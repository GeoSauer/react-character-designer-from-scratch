import React from 'react';

import '../controls/Controls';
import './Counter.css';

export default function Counter() {
  return (
    <div className="counter">
      You have swapped the head ___ times, the body ___ times, and the pants ___ times, for a total
      of ___ abominations. And nobody can forget their feverish wails:
    </div>
  );
}
