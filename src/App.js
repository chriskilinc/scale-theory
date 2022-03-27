import { useEffect, useState, useRef } from 'react';
import './App.css';
import { scales } from './scales';

function App() {
  const [scale, setScale] = useState(scales[0]);
  const [notes, setNotes] = useState({
    e: ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
    a: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', "A"],
    d: ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'],
    g: ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'],
    b: ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  });
  const [piano, setPiano] = useState(['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']);

  const innerSeparate = (arr, separator) => arr.map((v, i, a) => v + (i < a.length - 1 ? ` ${separator} ` : ''))

  return (
    <div className="App">
      <header className="container">
        <p>{scale.name} ({scale.altName})</p>
        <p>Intervals: {innerSeparate(scale.intervals, '-')}</p>
        <h2>{innerSeparate(scale.notes, '-')}</h2>
      </header>

      <main className="container">

        <section className="piano">
          <div className="piano-container">
            {piano.map((note, i, arr) => {
              const reactKey = `${note}-${i}`;
              const active = scale.notes.includes(note).toString();
              const pianoKey = note.includes("#") ? "black" : "white";
              const classes = `key ${pianoKey} ${note}`;
              return <div key={reactKey} note={note} active={active} className={classes}><p>{note}</p></div>
            })}
          </div>
        </section>

        {/* TODO: Remake all this into flex */}
        <div className="guitar-neck">

          <div className="fret first"></div>
          <div className="fret"></div>
          <div className="fret"></div>
          <div className="fret"></div>
          <div className="fret"></div>
          <div className="fret"></div>
          <div className="fret"></div>
          <div className="fret"></div>
          <div className="fret"></div>
          <div className="fret"></div>
          <div className="fret"></div>
          <div className="fret"></div>
          <div className="fret"></div>

          <ul className="dots">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="strings">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <ul className="open-notes">
            <li className="low-e">E</li>
            <li className="b">B</li>
            <li className="g">G</li>
            <li className="d">D</li>
            <li className="a">A</li>
            <li className="high-e">E</li>
          </ul>
          <div className="notes">
            <div className="mask low-e">
              <ul>{notes.e.map((note, i) => <li key={`E-${note}-${i}`} className={scale.notes.includes(note) ? "visible" : "hidden"}>{note}</li>)}</ul>
            </div>
            <div className="mask a">
              <ul>{notes.a.map((note, i) => <li key={`A-${note}-${i}`} className={scale.notes.includes(note) ? "visible" : "hidden"}>{note}</li>)}</ul>
            </div>
            <div className="mask d">
              <ul>{notes.d.map((note, i) => <li key={`D-${note}-${i}`} className={scale.notes.includes(note) ? "visible" : "hidden"}>{note}</li>)}</ul>
            </div>
            <div className="mask g">
              <ul>{notes.g.map((note, i) => <li key={`G-${note}-${i}`} className={scale.notes.includes(note) ? "visible" : "hidden"}>{note}</li>)}</ul>
            </div>
            <div className="mask b">
              <ul>{notes.b.map((note, i) => <li key={`B-${note}-${i}`} className={scale.notes.includes(note) ? "visible" : "hidden"}>{note}</li>)}</ul>
            </div>
            <div className="mask high-e">
              <ul>{notes.e.map((note, i) => <li key={`e-${note}-${i}`} className={scale.notes.includes(note) ? "visible" : "hidden"}>{note}</li>)}</ul>
            </div>
          </div>
          <div className="numbers">
            {Array.from({ length: 12 }, (v, i) => i + 1).map(num => <p>{num}</p>)}
          </div>
        </div>

        {/* <div className="controls">
          <a className="up" href="#">Tune 1/2 Step Up</a>
          <a className="down" href="#">Tune 1/2 Step Down</a>

          <h2>Choose note to show:</h2>
          <ul>
            <li>All</li>
            <li>A</li>
            <li>A#</li>
            <li>B</li>
            <li>C</li>
            <li>C#</li>
            <li>D</li>
            <li>D#</li>
            <li>E</li>
            <li>F</li>
            <li>F#</li>
            <li>G</li>
            <li>G#</li>
          </ul>
        </div> */}
        <footer>
          <a href="https://www.chriskilinc.com" target="_blank" rel="dofollow">chriskilinc</a>
          <span className="padding-around-s">•</span>
          <a href="https://github.com/chriskilinc/" target="_blank" rel="noopener nofollow">github</a>
        </footer>
      </main>
    </div>
  );
}

export default App;
