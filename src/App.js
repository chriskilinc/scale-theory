import { useEffect, useState, useRef } from 'react';
import './App.css';
import { modes } from './scales/modes';
import { chromaticScale, chromaticScaleExtended } from './scales/chromaticScales';
import { Contact } from './components/contact/contact';
import { InstrumentToggle } from './components/instrument-toggle/instrument-toggle';
import { ScaleSelection } from './components/scale-selecton/scale-selection';
import { ScaleInfo } from './components/scale-info/scale-info';
import { Piano } from './components/piano/piano';
import { Guitar } from './components/guitar/guitar';

function App() {
  const [selectedKey, setSelectedKey] = useState("C");
  const [selectedMode, setSelectedMode] = useState(modes[0].name);
  const [scale, setScale] = useState();
  const [piano, setPiano] = useState([]);
  const [guitar, setGuitar] = useState({ strings: ["E", "A", "D", "G", "B", "E"], frets: 12 });

  const [scalesVisible, setScalesVisible] = useState(true);
  const [toggleInstrument, setToggleInstrument] = useState(true);  // true = piano / false = guitar
  const [instrumentsVisible, setInstrumentsVisible] = useState(true);

  const getArrangedChromaticScaleByKey = (key) => {
    const noteIndex = chromaticScaleExtended.findIndex((note) => note == key);
    const newScale = chromaticScaleExtended.slice(noteIndex, chromaticScale.length);
    newScale.push(...chromaticScaleExtended.slice(0, noteIndex));
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
      <div className="App">
        <div className="wrapper">
          <header className="container">
            <InstrumentToggle toggleInstrument={toggleInstrument} setToggleInstrument={setToggleInstrument} />
          </header>
          <main className="main container">
            <ScaleSelection visible={scalesVisible} selectedKey={selectedKey} selectedMode={selectedMode} 
              setSelectedKey={setSelectedKey} setSelectedMode={setSelectedMode} />
            <div className={`instruments ${instrumentsVisible ? 'visible' : 'hidden'}`}>
              <Piano piano={piano} scale={scale} toggleInstrument={toggleInstrument} />
              <Guitar guitar={guitar} scale={scale} getArrangedChromaticScaleByKey={getArrangedChromaticScaleByKey} 
                 toggleInstrument={toggleInstrument}  />
            </div>
            <ScaleInfo scale={scale}/>
            <Contact />
          </main>
        </div>
      </div >
      :
      <p>loading...</p>
  );
}

export default App;
