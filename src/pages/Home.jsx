import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from "../components/Loader.jsx";
import Island from '../models/island';

// It is the popup element which we will use later on
{/* <div className='absolute top-28 left-0 right-0 z-10 flex 
items-center justify-center'>
    Popup
</div> */}

const Home = () => {

    // will help website to work on different devices
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

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

    return (
        <section className='w-full h-screen relative'>
            <Canvas
                className='w-full h-screen bg-transparent'
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
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotatoin={islandRotation}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home