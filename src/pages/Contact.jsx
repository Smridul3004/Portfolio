import { React, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import { Fox } from '../models/fox.jsx';
import Loader from '../components/Loader.jsx';

const Contact = () => {

    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState('Idle');

    const handleChange = (e) => {
        // Handle form input changes
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleFocus = () => {
        setCurrentAnimation('walk');

    }
    const handleBlur = () => {
        // Handle input blur
        setCurrentAnimation('Idle');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit');
        // Handle form submission
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                time: new Date().toLocaleString()
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            alert('Message sent successfully!');

            setTimeout(() => {
                setCurrentAnimation('Idle');
                setFormData({ name: '', email: '', message: '' });
            }, [3000]);

        }).catch((error) => {
            setIsLoading(false);
            setCurrentAnimation('Idle');
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
        });
    }

    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            <div className='flex-1 min-w-[50%] flex flex-col'>

                <h1 className='head-text'>Get In Touch</h1>

                <form
                    className='w-full flex flex-col gap-7 mt-14'
                    onSubmit={handleSubmit}
                >

                    <label className='text-black-500 font-semibold'>
                        Name
                        <input
                            type="text"
                            name='name'
                            className='input'
                            placeholder='Your Name'
                            required
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>

                    <label className='text-black-500 font-semibold'>
                        Email
                        <input
                            type="text"
                            name='email'
                            className='input'
                            placeholder='Your Email'
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>

                    <label className='text-black-500 font-semibold'>
                        Your Message
                        <textarea
                            name='message'
                            rows={4}
                            className='input'
                            placeholder='Type Your Message Here'
                            required
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <button
                        type='submit'
                        className='btn mt-6'
                        disabled={isLoading}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>

                </form>
            </div>

            <div className='lg:w-1/2 w-full h-[350px] md:h-[550px] lg:h-auto'>
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000
                    }}
                >
                    <directionalLight intensity={2.5} position={[0, 0, 1]} />
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={<Loader />}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0.5, 0.35, 0]}
                            rotation={[12.6, -0.6, 0]}
                            scale={[0.5, 0.5, 0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section >
    )
}

export default Contact