import { React, useState } from 'react';

import Character from '../character/Character';
import Controls from '../controls/Controls';
import Counter from '../counter/Counter';
import Catchphrases from '../catchphrases/Catchphrases';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('chewbacca');
  const [body, setBody] = useState('hawaiian-shirt');
  const [pants, setPants] = useState('bottom');
  const [phrase, setPhrase] = useState([]);

  return (
    <main>
      <section className="container">
        <div className="left">
          <Controls {...{ head, setHead, body, setBody, pants, setPants, phrase, setPhrase }} />
          <Counter />
          <Catchphrases {...{ phrase }} />
        </div>
        <div className="right">
          <Character {...{ head, body, pants }} />
        </div>
      </section>
    </main>
  );
}
