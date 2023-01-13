// import { React, useState } from 'react';

import Character from '../character/Character';
import Controls from '../controls/Controls';
import Counter from '../counter/Counter';
import Catchphrases from '../catchphrases/Catchphrases';

import './Main.css';

export default function Main() {
  return (
    <main>
      <section className="container">
        <div className="left">
          <Controls />
          <Counter />
          <Catchphrases />
        </div>
        <div className="right">
          <Character />
        </div>
      </section>
    </main>
  );
}
