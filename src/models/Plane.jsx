import React from 'react'
import { Gltf, useGLTF } from '@react-three/drei'
import planeObject from '../assets/3d/plane.glb'

const Plane = () => {
    const { scene, animations } = useGLTF(planeObject);
    return (
        <mesh>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane