import "./tooltip.css";

export const Tooltip = (props) => (
  <span className="tooltip tooltip-bottom" data-tooltip={props.text}>?</span>
)
