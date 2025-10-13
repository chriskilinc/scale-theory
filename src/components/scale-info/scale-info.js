import "./scale-info.css"
import { Tooltip } from "../tooltip/tooltip";

// TODO: minimize design, popup window to change note and mode?
export const ScaleInfo = (props) => (
  <section className="scale-info" playable={props.synthIsOn.toString()}>
    {props.synthIsOn && <h2 className>{props.selectedKey}</h2>}
    {/* <div> */}
    <h2>{props.scale.notes.join(" ")}</h2>
    {/* <p>({props.scale.intervals.join(" - ")})</p> */}
    {/* </div> */}
    {/* <div> */}
    {/* <p className="scale-name">{props.scale.name} <Tooltip text={props.scale.altNames} /></p> */}
    <p className="scale-name">{props.scale.name}</p>
    {/* </div> */}

  </section>
)
