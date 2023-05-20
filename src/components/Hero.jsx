import React from 'react'
import { logo } from '../assets'

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className="flex justify-between items-center w-full mb-10 pt-4">
                <img src={logo} alt="LearnX_logo" className='w-28 object-contain' />
                <button
                    type='button'
                    className='black_btn'
                    onClick={() => window.open('https://github.com/Sameersawant77')}
                >
                    Github
                </button>
            </nav>

            <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden' />
                <span className='blue_gradient'>OpenAI GPT-4</span>
            </h1>

            <h2 className='desc'>Unlock Knowledge with LearnX: Summarizing Articles Made Easy!</h2>
        </header>
    )
}

export default Hero