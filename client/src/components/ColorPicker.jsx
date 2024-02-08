import React from 'react'
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from '../store';
import { color } from 'framer-motion';



const ColorPicker = () => {
    const snap = useSnapshot(state);

    return (
        <div className="absolute left-full ml-3">
            <SketchPicker
                color={snap.color}
                disableAlpha //that's the kind of opacity
                presetColors={[
                    '#FF5733', // Red
                    '#33FF57', // Green
                    '#3357FF', // Blue
                    '#FF33A8', // Pink
                    '#33A8FF', // Cyan
                    '#A833FF', // Purple
                    '#FFA833', // Orange
                    '#A8FF33', // Lime
                    '#FF3333', // Dark Red
                    '#3333FF', // Dark Blue
                ]}
                onChange={(color) => state.color = color.hex} // that's going to allow you to modify the color 
            />
        </div>
    )
}

export default ColorPicker