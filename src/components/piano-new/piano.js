import Checkbox from '../checkbox/checkbox';
import "./piano.css";

export const Piano = (props) => (
  <section className={`piano wrapper ${props.toggleInstrument ? 'visible' : 'hidden'}`}>
    <header>
      {/* <h2>SYNTH</h2> */}
      <div class="column volume-slider">
        <span>Volume</span><input type="range" min="0" max="1" value="0.5" step="any" />
      </div>
      <div class="column">
        {/* <span>playable</span><input type="checkbox" checked /> */}
        <Checkbox label="playable" checked={props.isPlayable} setIsChecked={props.setIsPlayable} />
      </div>
    </header>
    <ul className="piano-keys">
      {props.piano.map((note, i, arr) => {
        const reactKey = `${note}-${i}`;
        const active = props.scale.notes.includes(note);
        const isBlack = note.includes("#");
        const pianoKey = isBlack ? "black" : "white";
        const isKey = (note == props.scale.notes[0]);
        const classes = `key ${pianoKey} ${note}`;
        // const notes = note.split("/");  // Only aplicable for black notes, ex: C#/Db
        return <li key={reactKey} note={note} active={active.toString()} iskey={isKey.toString()} className={classes}><span>{note}</span></li>
      })}
    </ul>

    {/* <div className="piano-container">
      {props.piano.map((note, i, arr) => {
        const reactKey = `${note}-${i}`;
        const active = props.scale.notes.includes(note);
        const isBlack = note.includes("#");
        const pianoKey = isBlack ? "black" : "white";
        const isKey = (note == props.scale.notes[0]);
        const classes = `key ${pianoKey} ${note}`;
        const notes = note.split("/");  // Only aplicable for black notes, ex: C#/Db
        const innerKey = isBlack ? <span><p>{notes[0]}</p><p></p><p>{notes[1]}</p></span> : <p>{note}</p>;
        return <div key={reactKey} note={note} active={active.toString()} iskey={isKey.toString()} className={classes}>{innerKey}</div>
      })}
    </div> */}
  </section>
)
