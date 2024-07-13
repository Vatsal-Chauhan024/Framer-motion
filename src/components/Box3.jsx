import React from 'react'
import { motion } from 'framer-motion'

const Box3 = () => {

    const boxVariant = {
        hidden: {
            x: "-100vw",
            
        },
        visible: {
            x:"0px",
            transition:{
                when: "beforeChildren",
                staggerChildren: 0.5
            }
        }
    }

    const listVariant = {
        hidden: {
            x: -10,
            opacity: 0,
            
        },
        visible: {
            x:0,
            opacity:1,         
        }
    }
   

  return (
    <motion.div className='w-64 aspect-square bg-green-300 flex flex-col gap-4 justify-center items-center'
    variants={boxVariant}
    initial= "hidden"
    animate = "visible"
   >

    {Array.from({length: 3}).map((_, key) => (
        <motion.div className='w-16 aspect-square bg-white' key={key} variants={listVariant}>
        </motion.div>
    ))}
    </motion.div>
  )
}

export default Box3
