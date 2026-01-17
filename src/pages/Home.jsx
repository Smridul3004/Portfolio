import React, { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from "../components/Loader.jsx";
import Island from '../models/Island.jsx';
import Sky from '../models/Sky.jsx';
import Bird from '../models/Bird.jsx';
import Plane from '../models/Plane.jsx';
import HomeInfo from '../components/HomeInfo.jsx';
import sakura from '../assets/sakura.mp3';
import soundon from '../assets/icons/soundon.png';
import soundoff from '../assets/icons/soundoff.png';

const Home = () => {

    // sakura background music setup
    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.1; // Set volume to 10%
    audioRef.current.loop = true; // Enable looping
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    useEffect(() => {
        if (isAudioPlaying) {
            audioRef.current.play();
        }
        return () => {
            audioRef.current.pause();
        }
    }, [isAudioPlaying]);

    // A button or toggle to start/stop the music:
    const toggleAudio = () => {
        setIsAudioPlaying(!isAudioPlaying);
    }


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

            {<div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>}
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? `cursor-grabbing` : `cursor-grab`}`}
                camera={{ near: 0.1, far: 1000 }}
                style={{ touchAction: 'none' }}
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
                        scale={planeScale}
                        position={planePosition}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>

            {/* button to toggle audio */}
            <div className='absolute bottom-2 left-2'>
                <img
                    src={isAudioPlaying ? soundon : soundoff}
                    alt="sound"
                    onClick={toggleAudio}
                    className="w-10 h-10 cursor-pointer object-contain" />
            </div>
        </section>
    )
}

export default Home