import "./piano.css";

export const Piano = (props) => (
  <section className={`piano ${props.toggleInstrument ? 'visible' : 'hidden'}`}>
    <div className="piano-container">
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
    </div>
  </section>
)
