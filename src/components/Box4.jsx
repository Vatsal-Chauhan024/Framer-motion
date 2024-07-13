import React from 'react'
import { motion } from 'framer-motion'

const Box4 = () => {

 

  return (
    <motion.div className='w-64 aspect-square bg-green-300'
    animate = {{
        scale: [1, 1.3, 1.3, 1, 1],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 0, 270, 270, 0]
    }}
    transition={{
        duration: 2
    }}
    >
    </motion.div>
  )
}

export default Box4
