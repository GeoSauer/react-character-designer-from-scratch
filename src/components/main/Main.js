import { React, useState } from 'react';

import Character from '../character/Character';
import Controls from '../controls/Controls';
import Counter from '../counter/Counter';

import './Main.css';
import background from '../../background.jpeg';

export default function Main() {
  const [head, setHead] = useState('chewbacca');
  const [body, setBody] = useState('hawaiian-shirt');
  const [pants, setPants] = useState('bottom');
  const [phrases, setPhrases] = useState([]);
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <section className="container">
        <div className="left">
          <div className="editor">
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
            <Counter {...{ headCount, bodyCount, pantsCount, phrases }} />
          </div>
        </div>
        <div className="right">
          <Character {...{ head, body, pants }} />
        </div>
      </section>
    </main>
  );
}
