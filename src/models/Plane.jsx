import React from 'react'
import { Gltf, useGLTF } from '@react-three/drei'
import planeObject from '../assets/3d/plane.glb'

const Plane = ({ isRotating, ...props }) => {
    const { scene, animations } = useGLTF(planeObject);
    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane