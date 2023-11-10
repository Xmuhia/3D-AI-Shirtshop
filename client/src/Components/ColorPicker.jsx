import React from 'react';
import { SketchPicker} from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';


const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
          color={snap.color}
          disableAlpha
          presetColors={[ 
            '#00FF00', 
            '#0000FF', 
            '#FFFF00', 
            '#00FFFF', 
            '#FF00FF', 
            '#FFFFFF', 
            '#000000', 
            '#FFC0CB', 
            '#8B4513', 
            '#FFFFE0', 
            '#008000', 
            '#DAA520'
          ]}
          onChange={(color => state.color = color.hex)}
      />

    </div>
  )
}

export default ColorPicker;
