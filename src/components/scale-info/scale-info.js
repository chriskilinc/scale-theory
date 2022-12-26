import "./scale-info.css"
import { Tooltip } from "../tooltip/tooltip";

export const ScaleInfo = (props) => (
  <section className="scale-info">
    <h2>{props.scale.notes.join(" ")}</h2>
    <p className="scale-name">{props.scale.name} <Tooltip text={props.scale.altNames} /></p>
    <p>({props.scale.intervals.join(" - ")})</p>
  </section>
)
