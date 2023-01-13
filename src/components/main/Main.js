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
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);

  return (
    <main>
      <section className="container">
        <div className="left">
          <Controls
            {...{
              head,
              setHead,
              body,
              setBody,
              pants,
              setPants,
              phrase,
              setPhrase,
              setHeadCount,
              setBodyCount,
              setPantsCount,
            }}
          />
          <Counter {...{ headCount, bodyCount, pantsCount }} />
          <Catchphrases {...{ phrase }} />
        </div>
        <div className="right">
          <Character {...{ head, body, pants }} />
        </div>
      </section>
    </main>
  );
}
