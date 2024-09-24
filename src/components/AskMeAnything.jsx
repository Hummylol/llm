import React from 'react'
import { motion } from 'framer-motion'

const AskMeAnything = () => {
  return (
    <div className='flex'>
    <motion.div
      initial={{ x: -200 }} 
      animate={{ x: 0 }} 
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='text-white text-6xl'
    >
      Ask Me Anything
    </motion.div>
    <motion.div 
    initial={{y:-30}}
    animate={{y:0}}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="text-black text-center w-[6.5rem] text-sm bg-white ">I am an LLM trained with the help of gemini</motion.div>
    </div>
)
}

export default AskMeAnything