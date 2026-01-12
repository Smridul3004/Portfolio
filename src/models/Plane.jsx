import { React, useRef, useEffect } from 'react'
import { Gltf, useAnimations, useGLTF } from '@react-three/drei'
import planeObject from '../assets/3d/plane.glb'

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeObject);
    const { actions } = useAnimations(animations, ref);
    useEffect(() => {
        if (isRotating) {
            actions['Take 001'].play();
        } else {
            actions['Take 001'].stop();
        }
    }, [isRotating, actions]);

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane