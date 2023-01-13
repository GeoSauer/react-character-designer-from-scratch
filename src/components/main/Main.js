import { React, useState } from 'react';

import Character from '../character/Character';
import Controls from '../controls/Controls';
import Counter from '../counter/Counter';
import Catchphrases from '../catchphrases/Catchphrases';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('chewbacca');

  return (
    <main>
      <section className="container">
        <div className="left">
          <Controls {...{ head, setHead }} />
          <Counter />
          <Catchphrases />
        </div>
        <div className="right">
          <Character {...{ head }} />
        </div>
      </section>
    </main>
  );
}
