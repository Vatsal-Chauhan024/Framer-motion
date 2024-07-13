import React from 'react'
import { motion } from 'framer-motion'

const Box2 = () => {



  return (
    <motion.div className='w-64 aspect-square bg-green-300'
    whileHover={{
        scale: 1.1
    }}
    whileTap={{
        scale: 0.9
    }}
    drag
    dragConstraints= {{
        left: 5,
        top: 5,
        right: 20,
        bottom: 20
    }}

    >
    </motion.div>
  )
}

export default Box2
