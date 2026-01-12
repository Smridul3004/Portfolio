import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from "../components/Loader.jsx";
import Island from '../models/Island.jsx';
import Sky from '../models/Sky.jsx';
import Bird from '../models/Bird.jsx';
import Plane from '../models/Plane.jsx';

// It is the popup element which we will use later on
{/* <div className='absolute top-28 left-0 right-0 z-10 flex 
items-center justify-center'>
    Popup
</div> */}

const Home = () => {

    // creating state for rotation feature
    // for it we will first change the class in canvas to dynamic class and use useEffect feature
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1); // New state for current stage


    // will help island model to work on different devices
    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let screenRotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        }
        else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, screenRotation];
    }

    // adjusting plane model:
    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;
        // let screenRotation = [0.1, 4.7, 0]; // No need in plane model

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        }
        else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    }


    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();


    return (
        <section className='w-full h-screen relative'>
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? `cursor-grabbing` : `cursor-grab`}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    {/* directionalLight simulates the light coming from the distant source like Sun */}
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    {/* ambientLight illuminates all objects in the scene equally without casating shadows so we do not have coordinates here */}
                    <ambientLight intensity={0.5} />
                    {/* pointLight emits light in all directions from a single source. Here we do not need it !! */}
                    {/* <pointLight /> */}

                    {/* Similar to pointLight but in this case it emits light from a source in the shape of a cone so you can provide angle i.e. solid angle here. Wont be needed here*/}
                    {/* <spotLight /> */}

                    {/* hemisphereLight illuminates the scene with a gradient */}
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

                    <Bird />
                    <Sky isRotating={isRotating} />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        isRotating={isRotating}
                        planeScale={planeScale}
                        planePosition={planePosition}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home