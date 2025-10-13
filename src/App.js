import { useEffect, useState, useRef } from 'react';
import './App.css';
import { modes } from './scales/modes';
import { chromaticScale, chromaticScaleExtended } from './scales/chromaticScales';
import { Contact } from './components/contact/contact';
import { InstrumentToggle } from './components/instrument-toggle/instrument-toggle';
import { ScaleSelection } from './components/scale-selecton/scale-selection';
import { ScaleInfo } from './components/scale-info/scale-info';
import { Piano } from './components/piano-new/piano';
import { Guitar } from './components/guitar/guitar';
import caretUp from './assets/caret-up.svg';
import caretDown from './assets/caret-down.svg';

//  TODO: https://github.com/Tonejs/Tone.js

function App() {
  const [selectedKey, setSelectedKey] = useState("D");
  const [selectedMode, setSelectedMode] = useState(modes[0].name);
  const [scale, setScale] = useState();
  const [piano, setPiano] = useState([]);
  const [guitar, setGuitar] = useState({ strings: ["E", "A", "D", "G", "B", "E"], frets: 12 });

  const [scalesVisible, setScalesVisible] = useState(true);
  const [toggleInstrument, setToggleInstrument] = useState(true);  // true = piano / false = guitar
  const [instrumentsVisible, setInstrumentsVisible] = useState(true);
  const [footerExpanded, setFooterExpanded] = useState(false);
  const [synthIsOn, setSynthIsOn] = useState(false);

  const getArrangedChromaticScaleByKey = (key) => {
    const noteIndex = chromaticScale.findIndex((note) => note == key);
    const newScale = chromaticScale.slice(noteIndex, chromaticScale.length);
    newScale.push(...chromaticScale.slice(0, noteIndex));
    return newScale;
  }

  useEffect(() => {
    const scale = calculateScale(selectedKey, selectedMode);
    const piano = getArrangedChromaticScaleByKey(selectedKey);

    if (piano[piano.length - 1].includes("#")) {
      // last is shart or flat
      piano.push(piano[0]);
    } else if (piano[0].includes("#")) {
      // first is sharp or flat
      piano.unshift(piano[piano.length - 1]);
    }

    setScale(scale);
    setPiano(piano);
  }, [selectedKey, selectedMode]);

  const calculateScale = (key, mode) => {
    const modeInfo = modes.find(m => m.name == mode);
    const accumilatedIntervals = modeInfo.intervals.reduce((acc, current, i, array) => {
      i != array.length - 1 && acc.push(acc[i] + parseInt(current));
      return acc;
    }, [0]);
    const sortedChromaticScale = getArrangedChromaticScaleByKey(key);
    const notes = accumilatedIntervals.map(i => sortedChromaticScale[i]);

    return {
      name: `${key} ${mode}`,
      altNames: modeInfo.altNames || "todo",
      notes,
      intervals: modeInfo.intervals,
      mode,
    }
  }

  return (
    scale ?
      <div className={`App ${synthIsOn ? "playable" : ""}`}>
        {/* <div className="wrapper"> */}
        {/* <header className="container">
            <InstrumentToggle visible={!synthIsOn} toggleInstrument={toggleInstrument} setToggleInstrument={setToggleInstrument} />
          </header> */}
        <main className="main container">
          {/* <ScaleSelection visible={scalesVisible && !synthIsOn} selectedKey={selectedKey} selectedMode={selectedMode}
              setSelectedKey={setSelectedKey} setSelectedMode={setSelectedMode} /> */}
          <header className="header">
            {/* <p>hey</p> */}
            {!synthIsOn && <ScaleInfo scale={scale} selectedKey={selectedKey} synthIsOn={synthIsOn} />}

          </header>
          <section className={`instruments ${instrumentsVisible ? 'visible' : 'hidden'}`}>
            <Piano piano={piano} scale={scale} toggleInstrument={toggleInstrument} isPlayable={synthIsOn} setIsPlayable={setSynthIsOn} />
            <Guitar guitar={guitar} scale={scale} getArrangedChromaticScaleByKey={getArrangedChromaticScaleByKey}
              toggleInstrument={toggleInstrument} />
            {/* <ScaleInfo scale={scale} /> */}
            {synthIsOn && <ScaleInfo scale={scale} selectedKey={selectedKey} synthIsOn={synthIsOn} />}

          </section>
          {/* <Contact /> */}
        </main>

        {/* </div> */}
        {/* <footer className={`footer ${footerExpanded ? 'expanded' : 'closed'}`}>
          <div className="content">
            <p>content</p>
          </div>
          <div className="expand-wrapper">
            <button onClick={() => setFooterExpanded(!footerExpanded)}>{footerExpanded ?
              <span><img src={caretDown} /></span>
              :
              <span><img src={caretUp} /></span>
            }
            </button>
          </div>
        </footer> */}
      </div>
      :
      <p>loading...</p>
  );
}

export default App;
