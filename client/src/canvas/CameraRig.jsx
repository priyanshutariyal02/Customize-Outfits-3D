import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";


const CameraRig = ({ children }) => {

    //for move camera closer

    const group = useRef();
    const snap = useSnapshot(state);
    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidthd <= 1260;
        const isMobile = window.innerWidthd <= 600;

        let targetPosition = [-0.4, 0, 2];
        if (snap.intro) {
            if (isBreakpoint) {
                targetPosition = [0, 0, 2];
            }
            if (isMobile) {
                targetPosition = [0, 0.2, 0.5];
            }
        }
        else {
            if (isMobile) {
                targetPosition = [0, 0.2, 0.5]
            }
            else {
                targetPosition = [0, 0, 2];
            }
        }

        //set camera model position
        easing.damp3(state.camera.position, targetPosition, 0.25, delta)

        easing.dampE(
            //passes some properties
            group.current.rotation,
            [state.pointer.y /10, -state.pointer.x /3, 0],
            0.25,
            delta //meaning difference from the last frame that happened
        )
    })//allow you to execute code on every rendered frame


    //for set the model rotation smoothly


    return (
        <group ref={group}>
            {children}
        </group>
    )
}

export default CameraRig