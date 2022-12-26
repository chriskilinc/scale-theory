import "./guitar.css";

export const Guitar = (props) => (
  <section className={`guitar ${!props.toggleInstrument ? 'visible' : 'hidden'}`}>
    <div className="guitar-container">
      {
        props.guitar.strings.map((string, i, arr) => {
          const id = `${string}-${i}`;
          const classes = `string ${++i}`;

          const notes = props.getArrangedChromaticScaleByKey(string);
          notes.push(notes[0]);

          return <div id={id} key={id} string={string} className={classes}>
            {
              [...Array(props.guitar.frets + 1)].map((fret, i) => {
                const note = notes[i];
                const active = props.scale.notes.includes(note);
                const isKey = (note == props.scale.notes[0]);

                return <div className="note" fret={i} active={active.toString()} iskey={isKey.toString()}><p><span>{note}</span></p></div>
              })
            }
          </div>
        })
      }
    </div>
    <div className="fret-helper">
      {
        [...Array(props.guitar.frets + 1)].map((fret, i) => {
          return <div className="fret-numbers"><p>{i}</p></div>
        })
      }
    </div>
  </section>
)
