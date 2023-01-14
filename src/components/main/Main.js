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
  const [phrases, setPhrases] = useState([]);
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
              phrases,
              setPhrases,
              setHeadCount,
              setBodyCount,
              setPantsCount,
            }}
          />
          <Counter {...{ headCount, bodyCount, pantsCount }} />
          <Catchphrases {...{ phrases }} />
        </div>
        <div className="right">
          <Character {...{ head, body, pants }} />
        </div>
      </section>
    </main>
  );
}
