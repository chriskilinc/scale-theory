import { useEffect, useState, useRef } from 'react';
import './App.css';
import { scales, chromaticScale } from './scales';
import svgGuitar from "./assets/guitar.svg";
import { Footer } from './Footer';


function App() {
  const [scale, setScale] = useState(scales[2]);
  const [notes, setNotes] = useState({
    e: ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
    a: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', "A"],
    d: ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'],
    g: ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'],
    b: ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  });
  const [piano, setPiano] = useState(['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']);
  const [pianoVisible, setPianoVisible] = useState(true);
  const [guitarVisible, setGuitarVisible] = useState(false);
  const [pianoArranged, setpianoArranged] = useState(false);

  const arrangedScaleBykey = (key) => {
    const noteIndex = chromaticScale.findIndex((note) => note == key);
    const newScale = chromaticScale.slice(noteIndex, chromaticScale.length);
    newScale.push(...chromaticScale.slice(0, noteIndex));
    return newScale;
  }

  useEffect(() => {
    setPiano(arrangedScaleBykey(scale.notes[0]));
  },[])

  useEffect(() => {
    if(piano[piano.length-1].includes("#")) {
      // last is flat
      piano.push(piano[0]);
      setpianoArranged(true);
    } else if (piano[0].includes("#")) {
      // first is flat
      piano.unshift(piano[piano.length -1]);
      setpianoArranged(true);
    }

  }, [piano])

  useEffect(() => {
    pianoArranged && setPiano(piano);
  },[pianoArranged])

  return (
    <div className="App">
      <header className="container">
        <nav className="navigation">
          <div className="navigation-container">
            <div><h1>Scale Theory</h1></div>
            <div>
              <a href="#">Scales</a>
              <input className="search" placeholder="search scales" />
            </div>
          </div>
        </nav>

        <section className="header-content">
          <p>{scale.name} ({scale.altName})</p>
          <p>Intervals: {scale.intervals.join(" - ")}</p>
          <h2>{scale.notes.join(" - ")}</h2>
        </section>

        <div className="instruments-options">
          <a className="icon" href="#" onClick={() => setGuitarVisible(!guitarVisible)}>
            {/* <img src={svgGuitar} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
              <title>GUITAR</title>
              <g>
                <path d="M123.415,17.059A16.828,16.828,0,0,0,110.941,4.585a1.744,1.744,0,0,0-1.632.57l-10.142,11.6a1.754,1.754,0,0,0-.293.468L96.9,21.879,67.754,50.707C65.416,48.57,60.2,44.5,54.3,44.369a12.852,12.852,0,0,0-9.648,4.1,27.68,27.68,0,0,0-5.529,8.455c-2.307,4.866-3.831,8.081-14.084,8.346-8.359.216-16.236,5.475-19.156,12.789C3.718,83.5,2.372,94.907,17.733,110.267c10.425,10.426,19.03,13.155,25.183,13.155a18.878,18.878,0,0,0,7.023-1.309c7.314-2.92,12.573-10.8,12.789-19.156.265-10.253,3.48-11.777,8.346-14.084a27.669,27.669,0,0,0,8.455-5.529,12.913,12.913,0,0,0,4.1-9.648c-.129-5.9-4.2-11.112-6.339-13.45L106.121,31.1l4.659-1.978a1.744,1.744,0,0,0,.469-.293l11.6-10.141A1.753,1.753,0,0,0,123.415,17.059ZM84.173,48.315l-4.488-4.488,8.8-8.71,4.393,4.394ZM60.249,77.447a6.611,6.611,0,1,1,1.821-5.822c.007.05.011.1.022.15A6.583,6.583,0,0,1,60.249,77.447Zm2.474-11.8a10.1,10.1,0,0,0-3.006-2.067l4.77-4.719,4.651,4.651L64.55,68.151A10.052,10.052,0,0,0,62.723,65.648ZM71.6,61.025,66.975,56.4,77.2,46.288,81.712,50.8Zm8.533,12.76a9.423,9.423,0,0,1-3.078,7.084,24.418,24.418,0,0,1-7.48,4.841c-5.156,2.444-10.025,4.753-10.346,17.156-.148,5.728-3.524,13.177-10.587,16-8,3.2-18.1-.737-28.434-11.07S5.943,87.361,9.138,79.358c2.819-7.063,10.268-10.439,16-10.587,12.4-.321,14.712-5.19,17.156-10.346a24.414,24.414,0,0,1,4.841-7.479,9.365,9.365,0,0,1,7.084-3.078c4.632.095,9,3.471,11.042,5.309l-9.621,9.517-.05,0a10.1,10.1,0,1,0,10.052,9.336l9.185-9.285C76.661,64.787,80.037,69.153,80.133,73.785ZM95.344,37.023l-4.366-4.367,7.386-7.307,4.287,4.287Zm13.811-11.009-3.633,1.543-5.079-5.079,1.543-3.633,9.235-10.559a13.443,13.443,0,0,1,8.494,8.494Z" strokeMiterlimit="10" />
                <path d="M32.583,80.731a1.749,1.749,0,0,0-2.475,0l-4.754,4.753a1.75,1.75,0,0,0,0,2.474l14.688,14.688a1.75,1.75,0,0,0,2.474,0l4.753-4.754a1.749,1.749,0,0,0,0-2.475Zm8.7,18.2L29.067,86.721l2.278-2.278L43.557,96.655Z" strokeMiterlimit="10" />
                <path d="M112.067,13.458l-7.311,7.311a1.749,1.749,0,1,0,2.474,2.474l7.312-7.311a1.75,1.75,0,0,0-2.475-2.474Z" strokeMiterlimit="10" />
              </g>
            </svg>
          </a>
          <a className="icon" href="#" onClick={() => setPianoVisible(!pianoVisible)}>
            {/* <img src={svgGuitar} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><g strokeMiterlimit="10"><path d="M116.687 53.582H86.31a40.887 40.887 0 0 0-81.748 1.453V112.1a1.751 1.751 0 0 0 1.75 1.75h115.375a1.75 1.75 0 0 0 1.75-1.75V60.332a6.757 6.757 0 0 0-6.75-6.75zm-5.832 56.769h-93.7V85.466h7.226v12.443a1.75 1.75 0 0 0 1.75 1.75H32.7a1.75 1.75 0 0 0 1.75-1.75V85.466h7.226v12.443a1.75 1.75 0 0 0 1.75 1.75H50a1.75 1.75 0 0 0 1.75-1.75V85.466h7.226v12.443a1.75 1.75 0 0 0 1.75 1.75h6.564a1.75 1.75 0 0 0 1.75-1.75V85.466h7.226v12.443a1.75 1.75 0 0 0 1.75 1.75h6.569a1.75 1.75 0 0 0 1.75-1.75V85.466h7.226v12.443a1.75 1.75 0 0 0 1.75 1.75h6.568a1.75 1.75 0 0 0 1.75-1.75V85.466h7.226zM27.883 96.159V85.466h3.068v10.693zm17.294 0V85.466h3.069v10.693zm17.3 0V85.466h3.063v10.693zm17.294 0V85.466h3.069v10.693zm17.3 0V85.466h3.068v10.693zm22.876 14.192h-5.582V83.716a1.75 1.75 0 0 0-1.75-1.75h-97.2a1.75 1.75 0 0 0-1.75 1.75v26.635h-5.6V55.035a37.387 37.387 0 0 1 74.773 0v.3a1.75 1.75 0 0 0 1.75 1.75h32.1a3.254 3.254 0 0 1 3.25 3.25z" /><path d="M41.538 25.451A29.734 29.734 0 0 0 15.8 51.7a1.749 1.749 0 0 0 1.546 1.933 1.835 1.835 0 0 0 .2.011 1.75 1.75 0 0 0 1.737-1.557 26.244 26.244 0 0 1 22.72-23.164 1.75 1.75 0 1 0-.455-3.47z" /></g></svg>
          </a>
        </div>
      </header>

      <main className="main container">

        <section className={`piano ${pianoVisible ? 'visible' : 'hidden'}`}>
          <div className="piano-container">
            {piano.map((note, i, arr) => {
              const reactKey = `${note}-${i}`;
              const active = scale.notes.includes(note).toString();
              const pianoKey = note.includes("#") ? "black" : "white";
              const isKey = (note == scale.notes[0]).toString();
              const classes = `key ${pianoKey} ${note}`;
              return <div key={reactKey} note={note} active={active} isKey={isKey} className={classes}><p>{note}</p></div>
            })}
          </div>
        </section>

        {/* TODO: Remake all this into flex */}
        <div className={`guitar-neck ${guitarVisible ? 'visible' : 'hidden'}`}>

          < div className="fret first"></div>
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
        {Footer}
      </main>
    </div >
  );
}

export default App;
