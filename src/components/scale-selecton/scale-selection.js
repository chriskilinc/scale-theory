import "./scale-selection.css"
import { modes } from '../../scales/modes';
import { chromaticScaleExtended } from '../../scales/chromaticScales';

export const ScaleSelection = (props) => (
  <section className={`scale-selection ${props.visible ? 'visible' : 'hidden'}`}>
    <h3>Select key</h3>
    <div className="keys">
      {chromaticScaleExtended.map(key => <a href="#" className={`key ${key == props.selectedKey ? 'current' : ''}`} onClick={() => props.setSelectedKey(key)} key={key}>{key}</a>)}
    </div>
    <h3>Select mode</h3>
    <div className="modes">
      {modes.map(mode => <a href="#" className={`mode ${mode.name == props.selectedMode ? 'current' : ''}`} onClick={() => props.setSelectedMode(mode.name)} key={mode.name}>{mode.name}</a>)}
    </div>
  </section>
)
