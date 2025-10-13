import { useState } from "react";
import "./checkbox.css";
const Checkbox = ({ label, isChecked, setIsChecked, ...props }) => {
  // const defaultChecked = checked ? checked : false;
  // const [isChecked, setIsChecked] = useState(checked);
  return (
    <div className="keys-checkbox">
      <input type="checkbox" checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)} />
      <span>{label}</span>
    </div>
  );
};
export default Checkbox;